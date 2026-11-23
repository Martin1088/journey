# Martin Jurk – website

Live: https://martin1088.github.io/journey/

One Angular 22 app for the whole site, prerendered to static HTML and
published to GitHub Pages by `.github/workflows/pages.yml`.

| Page            | English                   | Deutsch                 |
|-----------------|---------------------------|-------------------------|
| Work (start)    | `/`                       | `/de/`                  |
| Coaching        | `/coaching/`              | `/de/coaching/`         |
| Journey         | `/journey/`               | `/de/weg/`              |
| Journey chapters| `/journey/quikstep/` …    | `/de/weg/quikstep/` …   |
| Search          | `/search/`                | `/de/suche/`            |

The old German journey addresses (`/journey/de/…`) and `/journey/search/`
get static redirect pages (`npm run redirects`), fragments included.

## Structure

```
journey-app/src/app/
  content/pages.de.ts, pages.en.ts       work and coaching pages
  content/content.de.ts, content.en.ts   journey chapters and tips (same ids in both)
  content/paths.ts                       URLs per language
  i18n/de.json, en.json                  UI strings (ngx-translate, bundled)
  pages/                                 work, coaching, journey, chapter, search
  demos/                                 interactive demos, loaded with @defer
  shared/                                tip card, search, language, SEO, announcer
```

Every route is prerendered (`outputMode: "static"`): all text is in the HTML
without JavaScript, each language has its own URL with `hreflang`, and
`<html lang>` is set per page. The search index is built from the same content
files the pages render and covers projects, coaching offers, journey sections
and tips.

## Develop

```bash
cd journey-app
npm ci
npm start                 # dev server on http://localhost:4200/  (German: /de)
npx ng build              # prerendered output in dist/journey-app/browser
npm run lint:a11y         # angular-eslint incl. template accessibility rules
npm run check:a11y        # axe (WCAG 2.2 A/AA) on every built page, light and dark,
                          # plus interactive states; also fails on console errors
npm run redirects         # write the redirect pages for old addresses into dist
```

Both checks run in the workflow on every push and pull request; a failing
check stops the deployment. The workflow passes the Pages base path to
`--base-href` and the public URL to `--define SITE_URL=…` (canonical and
`hreflang` links), so the site works under `/<repo>/` and on a custom domain.

Adding a tip: add an entry with the same `id` to a section in both
`content.de.ts` and `content.en.ts`. Adding a project or coaching offer: the
same in `pages.de.ts` and `pages.en.ts`. Either shows up in the search
automatically.
