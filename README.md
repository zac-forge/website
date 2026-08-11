# zacforge-site

The one-page marketing site for ZAC (`zacforge.com`), an AI-native technology consulting and
development studio. This repo is currently a bare scaffold: no design or copy yet, just a
deployable project structure.

## Stack

- React + TypeScript, built with Vite.
- React Router, so more pages can be added later without a restructure.
- Motion (the current package name for what used to be called Framer Motion) for animation,
  installed and ready, not used yet since there is no design to animate.
- CSS Modules for component styles, with shared design tokens as CSS variables in
  `src/styles/tokens.css`.
- Cloudflare Pages for hosting, Cloudflare Pages Functions (`functions/`) for server-side logic.
  No persistent Node server, the Functions run on the Workers runtime.

## Structure

- `src/`: the app. `App.tsx` sets up routing, `pages/Home.tsx` is the one real page for now.
- `src/styles/tokens.css`: design tokens (color, spacing, radius) as CSS variables. Swap the
  palette here once the real design lands.
- `functions/api/chat.ts`: a Cloudflare Pages Function stub for a future AI assistant. Not
  implemented yet, returns 501. See the comments in that file for what it will do.
- `public/`: static files served as-is (favicon, OG image, once those exist).

## Running locally

Install dependencies once:

```bash
npm install
```

Start the Vite dev server (the app only, no Functions):

```bash
npm run dev
```

To test the Cloudflare Pages Function locally too, build first and run it through Wrangler:

```bash
npm run pages:dev
```

This runs `npm run build` and then `wrangler pages dev dist`, so `/api/chat` is actually served.
If you want to test it with a real key, copy `.dev.vars.example` to `.dev.vars` and fill one in.
`.dev.vars` is gitignored and never committed.

```bash
cp .dev.vars.example .dev.vars
```

## Deploying to Cloudflare Pages

Connect this repo to Cloudflare Pages via Git integration so pushes to `main` auto-deploy. In
the Cloudflare dashboard: Pages, create a project, connect this repo, set the build command to
`npm run build` and the output directory to `dist`.

### Setting the Anthropic API key in production

Once the assistant is implemented, set `ANTHROPIC_API_KEY` as an encrypted environment variable
in the Cloudflare Pages project settings (Settings, Environment variables). Never put it in the
repo or in client-side code.

## TODO before this is a real site

- [ ] Confirm `hello@zacforge.com` actually receives mail. It is live in the footer and the
      "Send a message" button, set in `src/lib/links.ts`.
- [ ] OG image for social sharing (1200x630 PNG or JPG). The meta tag is stubbed out in
      `index.html` and commented, uncomment it once the image exists.
- [ ] Swap the placeholder role cards in `src/components/TrackRecord.tsx` for real names if and
      when you want the team public.
- [ ] Implement `functions/api/chat.ts` for the v1.1 AI assistant. Note that the current
      `wrangler.toml` deploys static assets only, so the `functions/` directory is not wired up
      on the deployed site yet.

Done: page design and copy, brand assets, logo, favicon, booking link
(`https://cal.com/zacforge/20-min-chat`).
