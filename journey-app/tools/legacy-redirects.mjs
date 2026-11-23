// Writes small redirect pages for addresses the site used to have, so links
// that were already shared keep working. Run after `ng build`.
//
// The journey pages used to be a separate app under /journey/ with German
// under /journey/de/…; the whole site is one app now, German under /de/.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..', 'dist', 'journey-app', 'browser');

/** old path → new path, both relative to the base href. */
const REDIRECTS = {
  'journey/de': 'de/weg',
  'journey/de/quikstep': 'de/weg/quikstep',
  'journey/de/ausbildung': 'de/weg/ausbildung',
  'journey/de/dkfz': 'de/weg/dkfz',
  'journey/de/suche': 'de/suche',
  'journey/search': 'search',
};

const html = await readFile(join(ROOT, 'index.html'), 'utf8');
const base = html.match(/<base href="([^"]*)"/)?.[1] ?? '/';

for (const [from, to] of Object.entries(REDIRECTS)) {
  const target = `${base}${to}/`;
  const lang = to.startsWith('de') ? 'de' : 'en';
  const text = lang === 'de' ? 'Diese Seite ist umgezogen:' : 'This page has moved:';
  const page = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${lang === 'de' ? 'Weiterleitung' : 'Redirect'} – Martin Jurk</title>
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
</head>
<body>
<p>${text} <a href="${target}">${target}</a></p>
</body>
</html>
`;
  const dir = join(ROOT, from);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), page);
  console.log(`/${from}/ → ${target}`);
}
