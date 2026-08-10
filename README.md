# zacforge-site

The one-page marketing site for ZAC (zacforge.com), an AI-native technology and consulting
studio. This repo is currently a bare scaffold: no design or copy yet, just a deployable
project structure.

## Structure

- `index.html`: the page. Placeholder content for now.
- `assets/`: css, js, and images go here.
- `functions/api/chat.js`: a Cloudflare Pages Function stub for a future AI assistant. Not
  implemented yet, returns 501. See the comments in that file for what it will do.

## Running locally

Install dependencies once:

```
npm install
```

Start the local Cloudflare Pages dev server (serves the static files and the `/functions`
routes together):

```
npm run dev
```

If you want to test the `/api/chat` function locally once it is implemented, copy
`.dev.vars.example` to `.dev.vars` and fill in a real key. `.dev.vars` is gitignored and never
committed.

```
cp .dev.vars.example .dev.vars
```

## Deploying to Cloudflare Pages

This project is meant to connect to Cloudflare Pages via Git integration, so pushes to `main`
auto-deploy. In the Cloudflare dashboard: Pages, create a project, connect this repo, leave the
build command empty (static site, no build step), and set the output directory to `.`.

You can also deploy manually from the command line:

```
npm run deploy
```

### Setting the Anthropic API key in production

Once the assistant is implemented, set `ANTHROPIC_API_KEY` as an encrypted environment variable
in the Cloudflare Pages project settings (Settings, Environment variables). Never put it in the
repo or in client-side code.

## TODO before this is a real site

- [ ] Design and copy for the actual page (not started, this scaffold is intentionally blank).
- [ ] Real calendar link (cal.com or Calendly) to replace the placeholder booking URL.
- [ ] Confirm the contact email (currently andrew@mahalomediagroup.com, may move to a
      zacforge.com address).
- [ ] OG image for social sharing.
- [ ] Logo.
- [ ] Favicon.
- [ ] Implement `functions/api/chat.js` for the v1.1 AI assistant.
