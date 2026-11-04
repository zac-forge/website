# zacforge-site

The one-page marketing site for ZAC (`zacforge.com`), a senior technology studio. The site is
live. Copy is governed by `CLAUDE.md` at the repo root and the copy deck in
`docs/site-copy-v5.md`, and the voice rules there are binding.

## Stack

- React + TypeScript, built with Vite.
- React Router. The home page plus one offer page per live offer (`src/pages/offers/`),
  all prerendered to static HTML with their own head and JSON-LD by `scripts/prerender.mjs`.
- Motion (the current package name for what used to be called Framer Motion) for animation,
  used throughout. Shared easings and variants live in `src/lib/motion.ts`.
- Global CSS, not CSS Modules. `src/styles/layout.css` carries section composition,
  `globals.css` the primitives, `interactive.css` and `motion.css` the behaviour, and
  `tokens.css` the design tokens as CSS variables. Use the tokens, never hardcode a colour.
- Cloudflare Workers with static assets for hosting. `wrangler.toml` points `main` at
  `functions/worker.ts`, which serves the prerendered `dist/` through the `ASSETS` binding,
  handles `POST /api/contact`, and adds `X-Robots-Tag: noindex` (plus a `Disallow` robots.txt)
  on every host that is not `zacforge.com`, so previews are never indexed.

## Structure

- `src/`: the app. `App.tsx` sets up routing, `pages/Home.tsx` composes the home page,
  `pages/OfferPage.tsx` is the shared offer template, `components/` holds the sections in page order.
- `design/tokens.json`: the design tokens, with provenance for every value. `npm run tokens`
  generates `src/styles/tokens.css` from it, and the build fails if the two disagree or if any
  raw colour appears outside the generated file (`scripts/lint-tokens.mjs`). Never hardcode a
  colour. See `design/DESIGN-SYSTEM-NOTES.md` and the Design system section of `CLAUDE.md`.
- `functions/worker.ts`: the Worker entry. `functions/api/contact.ts`: the contact form handler.
- `functions/api/chat.ts`: a Pages-style stub for a future chat assistant. Not routed by the
  Worker, returns 501. See the comments in that file for what it will do.
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

To run the Worker locally too (the contact form, the preview noindex), build first:

```bash
npm run build && npx wrangler dev
```

Local secrets go in `.dev.vars`, which is gitignored and never committed:

```bash
cp .dev.vars.example .dev.vars
```

## Environment

The contact form works with none of these set. With the keys out, the handler logs each
submission to the Worker console (observability is on in `wrangler.toml`) and its thank-you page
offers a prefilled mailto, so nothing is lost.

| Name | Where | What it does |
|---|---|---|
| `RESEND_API_KEY` | Worker secret | Sends each submission to drew@zacforge.com through Resend. The sending domain must be verified in Resend first. |
| `TURNSTILE_SECRET_KEY` | Worker secret | Verifies the Turnstile token on submit. Set it together with the site key below, or every submission fails the check. |
| `VITE_TURNSTILE_SITE_KEY` | Build environment | Public Turnstile site key, baked into the form at build time. Without it the widget is not rendered. |
| `CONTACT_TO`, `CONTACT_FROM` | Worker vars, optional | Override the recipient (default drew@zacforge.com) and the sender (default `ZAC Forge <site@zacforge.com>`). |
| `ANTHROPIC_API_KEY` | Unused | For the future chat assistant only. |

Set a secret with `npx wrangler secret put RESEND_API_KEY` (add `--name website-v5-preview` for
a preview Worker). Never put a key in the repo or in client-side code.

## Deploying

Previews: build locally, then `npx wrangler deploy --name website-<branch>-preview`. Production
(`website`) deploys from `main` only.

## Open TODOs

- [x] `hello@zacforge.com` confirmed receiving mail (2026-08-20). v5 uses `drew@zacforge.com`
      on the site, in schema, and in `llms.txt`, per the copy deck.
- [ ] Add the two team names in `src/components/WhoWeAre.tsx` **once Misha and Luke consent**.
      Names are known and ready: Misha Gervits (Design Principal), Luke Monegatto (Principal
      Engineer). The block ships nameless by design and takes name and photo as optional props,
      so this is a two-line content change. Consent was still outstanding on 2026-08-20.
- [ ] Implement `functions/api/chat.ts` for the v1.1 chat assistant, and route it from
      `functions/worker.ts`. It is not served today.

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

`public/og-image.jpg` is rendered from `tools/og-card.html`, which mirrors the hero in
`src/components/Hero.tsx` (navy band, eyebrow, headline, proof line, the board's Z) with the
real font files and token values. It is kept out of `public/` so it never ships. The card must
stay in sync with the hero, so any hero copy change means editing the card and regenerating.

Render the 1200x630 `.og-card` element at 2x in Chrome (open the file directly, or serve the
repo root with `python3 -m http.server 4599`), crop to the card, and downscale to exactly
1200x630. On macOS the downscale is:

```bash
sips -z 630 1200 card@2x.png -s format jpeg -s formatOptions 88 --out public/og-image.jpg
```

The OG title is not on the card. It lives in `src/lib/meta.ts`.
