# Sprint Transitions — pilot site

Single-page marketing/intake site for the pilot program. Static site: Vite + React + Tailwind, no backend.

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Where to edit things

- **All copy (including the program name)**: `src/copy.js`. The name is `copy.siteName` — change it once there and it updates everywhere, including the browser tab title.
- **Tally form URLs**: the `TALLY_ORG_FORM_URL` and `TALLY_CANDIDATE_FORM_URL` constants at the top of `src/App.jsx`. Currently placeholders.
- **Contact email**: `footer.contactEmail` in `src/copy.js`. Currently a placeholder.
- **Accent color**: the three `--color-accent*` values in `src/index.css`.

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on
every push to the default branch (and to `main`, if one is created later), or
manually via the Actions tab (workflow_dispatch). The workflow enables Pages
(source: GitHub Actions) on its first run and sets Vite's `--base` to the repo
name so assets resolve at `https://<owner>.github.io/<repo>/`. If you later add
a custom domain, remove the `--base` flag from the build step.
