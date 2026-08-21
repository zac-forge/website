# zacforge-site

The one-page marketing site for ZAC (`zacforge.com`), a senior technology studio. The site is
live. Copy is governed by `CLAUDE.md` at the repo root and the copy deck in
`docs/site-copy-v3.md`, and the voice rules there are binding.

## Stack

- React + TypeScript, built with Vite.
- React Router, so more pages can be added later without a restructure.
- Motion (the current package name for what used to be called Framer Motion) for animation,
  used throughout. Shared easings and variants live in `src/lib/motion.ts`.
- Global CSS, not CSS Modules. `src/styles/layout.css` carries section composition,
  `globals.css` the primitives, `interactive.css` and `motion.css` the behaviour, and
  `tokens.css` the design tokens as CSS variables. Use the tokens, never hardcode a colour.
- Cloudflare Pages for hosting, Cloudflare Pages Functions (`functions/`) for server-side logic.
  No persistent Node server, the Functions run on the Workers runtime.

## Structure

- `src/`: the app. `App.tsx` sets up routing, `pages/Home.tsx` composes the one real page,
  `components/` holds the sections in page order.
- `src/styles/tokens.css`: design tokens (color, spacing, radius) as CSS variables. A brand
  redesign is in progress, so change the palette here rather than hardcoding a colour anywhere.
- `functions/api/chat.ts`: a Cloudflare Pages Function stub for a future chat assistant. Not
  implemented yet, returns 501. See the comments in that file for what it will do.
- `public/`: static files served as-is (favicon, OG image, `llms.txt`, `robots.txt`, sitemap).

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

## Open TODOs

- [x] `hello@zacforge.com` confirmed receiving mail (2026-08-20).
- [ ] Add the two team names in `src/components/TrackRecord.tsx` **once Misha and Luke consent**.
      Names are known and ready: Misha Gervits (Design Director), Luke Monegatto (Senior
      Engineer). The block ships nameless by design and takes name and photo as optional props,
      so this is a two-line content change. Consent was still outstanding on 2026-08-20.
- [ ] Implement `functions/api/chat.ts` for the v1.1 chat assistant. Note that the current
      `wrangler.toml` deploys static assets only, so the `functions/` directory is not wired up
      on the deployed site yet.

Done: page design and copy, brand assets, logo, favicon, booking link
(`https://cal.com/zacforge/20-min-chat`), OG image, prerendering to static HTML, durability
positioning.

## Future updates

Not defects, and not urgent. Parked deliberately.

- [ ] **Analytics.** Nothing on the site is measured, so there is no way to tell whether a copy
      or positioning change did anything. Deprioritised on 2026-08-20 because organic traffic is
      not expected in the near term. Worth revisiting once there is traffic to measure.
- [ ] **Customer language.** The positioning in `.agents/product-marketing.md` is derived from
      our own case studies rather than from buyers, which makes it circular. Drew is scraping old
      email for verbatim customer input. The Customer Language section is marked GAP until then.
- [ ] **Brand red.** The logo sheet declares `#FF2D55` and the palette uses `#E83445`. Resolves
      in Misha's redesign. Do not chase it separately.

## Regenerating the OG image

`public/og-image.jpg` is rendered from `tools/og-card.html`, which pulls the real font files and
the real design tokens so the card cannot drift away from the live site. It is deliberately kept
out of `public/` so it never ships. To regenerate after a copy or brand change:

```bash
python3 -m http.server 4599    # from the repo root
```

Open `http://localhost:4599/tools/og-card.html` at a 1200x630 viewport, screenshot it at 2x, then
downscale to exactly 1200x630 and save as `public/og-image.jpg`. On macOS the downscale is:

```bash
sips -z 630 1200 shot@2x.png -s format jpeg -s formatOptions 88 --out public/og-image.jpg
```

The card must stay in sync with the hero. Its eyebrow, headline, and proof line are the hero's,
so any copy change to the hero means regenerating this image.
