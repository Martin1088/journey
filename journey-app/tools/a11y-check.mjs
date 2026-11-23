// Accessibility check of the prerendered site with axe-core.
//
// Serves dist/journey-app/browser under the <base href> it was built with,
// opens every prerendered page in Chromium (light and dark colour scheme),
// runs axe against WCAG 2.0/2.1/2.2 A and AA, then repeats the check on the
// interactive states: all tips expanded, demos loaded, form error shown,
// search results listed. Also fails on console errors such as hydration
// mismatches (NG0500).
//
// Usage: npm run build && npm run check:a11y
// Env:   CHROMIUM_PATH  optional path to a Chromium binary

import { createServer } from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join, relative, resolve, sep } from 'node:path';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const ROOT = resolve(import.meta.dirname, '..', 'dist', 'journey-app', 'browser');
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
};

async function findPages(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await findPages(full)));
    else if (entry.name === 'index.html') out.push(relative(ROOT, dir).split(sep).join('/'));
  }
  return out.sort();
}

async function baseHref() {
  const html = await readFile(join(ROOT, 'index.html'), 'utf8');
  return html.match(/<base href="([^"]*)"/)?.[1] ?? '/';
}

function serve(base) {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (!url.startsWith(base)) return res.writeHead(404).end();
    let file = join(ROOT, url.slice(base.length));
    if (!file.startsWith(ROOT)) return res.writeHead(403).end();
    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' }).end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)));
}

/** Bring the page into its interactive states before the second axe run. */
async function interact(page, path) {
  const toggle = page.locator('.tip-toolbar .tool-btn');
  if (await toggle.count()) await toggle.click();
  for (const demo of await page.locator('aside.demo').all()) {
    await demo.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  }
  const submit = page.locator('.demo-form button[type=submit]');
  if (await submit.count()) {
    await submit.click();
    const good = page.locator('label[for=fv-good]');
    if (await good.count()) {
      await good.click();
      await page.locator('.demo-form button[type=submit]').click();
    }
  }
  if (path.endsWith('suche') || path.endsWith('search')) {
    await page.fill('#q', 'git');
    await page.waitForTimeout(400);
  }
}

function report(label, violations) {
  for (const v of violations) {
    console.log(`  ✗ [${v.impact}] ${v.id}: ${v.help} (${label})`);
    for (const n of v.nodes.slice(0, 3)) console.log(`      ${n.target.join(' ')}`);
    if (v.nodes.length > 3) console.log(`      … ${v.nodes.length - 3} more`);
  }
}

const base = await baseHref();
const pages = await findPages(ROOT);
const server = await serve(base);
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});

let failures = 0;
for (const scheme of ['light', 'dark']) {
  const context = await browser.newContext({ colorScheme: scheme });
  for (const path of pages) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text().split('\n')[0]));

    const url = `${origin}${base}${path ? path + '/' : ''}`;
    await page.goto(url, { waitUntil: 'networkidle' });
    const initial = await new AxeBuilder({ page }).withTags(TAGS).analyze();
    await interact(page, path);
    const active = await new AxeBuilder({ page }).withTags(TAGS).analyze();

    const name = `/${path} (${scheme})`;
    const count = initial.violations.length + active.violations.length + errors.length;
    console.log(`${count ? '✗' : '✓'} ${name}`);
    report('initial', initial.violations);
    report('interactive', active.violations);
    for (const e of errors) console.log(`  ✗ console: ${e}`);
    failures += count;
    await page.close();
  }
  await context.close();
}

await browser.close();
server.close();

if (failures) {
  console.log(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log(`\nAll ${pages.length} pages pass axe (WCAG 2.2 A/AA) in light and dark mode.`);
