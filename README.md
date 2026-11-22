# Martin Jurk – website (experiment copy)

A copy of the site from Martin1088/martin1088, for trying out new ideas.

Live: https://martin1088.github.io/journey-/

- `index.html`: main page (work and projects)
- `coaching/index.html`: coaching
- `styles.css`: shared styles (light and dark mode)
- `journey-app/`: the journey pages as an Angular 22 app, prerendered to static HTML
- `.github/workflows/pages.yml`: builds the app and publishes everything to GitHub Pages

## Journey app

Three chapters (QuikStep, apprenticeship, DKFZ) in German and English, with
expandable tip cards, a platform filter, copy buttons, interactive demos and a
client-side full-text search.

```
journey-app/src/app/
  content/content.de.ts, content.en.ts   story and tips (same structure, same ids)
  content/paths.ts                       URLs per language
  i18n/de.json, en.json                  UI strings (ngx-translate, bundled)
  pages/                                 home, chapter, search
  demos/                                 interactive demos, loaded with @defer
  shared/                                tip card, search, language, SEO, announcer
```

Every route is prerendered (`outputMode: "static"`), so all text is in the
HTML without JavaScript, each language has its own URL with `hreflang`, and
`<html lang>` is set per page. The search index is built from the same content
files the pages render.

```bash
cd journey-app
npm ci
npm start                 # dev server on http://localhost:4200/  (German: /de)
npx ng build              # prerendered output in dist/journey-app/browser
```

Adding a tip: add an entry with the same `id` to a section in both
`content.de.ts` and `content.en.ts`. It shows up on the chapter page and in the
search automatically.

Deployment: GitHub Pages must use **Settings → Pages → Source: GitHub Actions**.
The workflow passes the Pages base path to `--base-href`, so the app works under
`/<repo>/journey/` and on a custom domain.
