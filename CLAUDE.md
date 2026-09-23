# CLAUDE.md: zacforge-site

Repo memory for the ZAC marketing site. Read this before touching copy.

## What ZAC is

A senior technology studio. Successor practice to Mahalo Media Group, which founder Andrew Johnston ran for 15+ years across 100+ engagements. Not a startup. An established practice operating under new economics.

**Positioning (v4, adopted 2026-09-23):** AI visibility leads, Web Partner is the retainer. The hero sells the fear of not being in the answer when a customer asks an assistant for a recommendation. Experience and durability are the proof, not the pitch.

## This site is a working copy

**Misha is redesigning the brand and the site, and branch v4 implements his board as it stood on 2026-09-23.** What is deployed at zacforge.com is still the v3 working copy. Treat both that way:

- The v4 build follows Misha's Figma board (`MacBook Air - 1`, node `6:2`) read in full through the Figma REST API. The board is a **draft**: lorem ipsum throughout, no mobile version, case study imagery undecided. Expect his values to move, and expect them to arrive as token edits, not rebuilds.
- **Do not introduce a visual direction of your own.** Where the board does not cover a case, extend its nearest scale and record the extension in `design/DESIGN-SYSTEM-NOTES.md`. Where it conflicts with the copy deck or the guardrails, the copy and the guardrails win and the conflict goes in the questions for Misha.
- Copy, structure, positioning, accessibility, performance, and correctness are all live and worth doing properly.
- The old brand red mismatch is moot: the board's accent is purple `#9D4DFF`.

Positioning work is handed to Misha as **input** to the redesign.

## The copy source of truth

`docs/site-copy-v4.md` carries the complete section-by-section copy, the four offer pages, metadata, schema, and the `llms.txt` replacement. It supersedes v3, which stays in `docs/` for history only.

Do not invent marketing copy. If something is missing, ask rather than filling the gap.

---

## Positioning: visibility leads, durability proves

**Adopted 2026-09-23 (v4).** The site sells the bridge-income offer set: AI Visibility (lead), Web Partner (the retainer), Accessibility and Performance, AI-Ready Brand System (pending Misha, behind a flag), and Fractional Digital Lead. The v3 durability claim, systems built in 2010 still in production and run without ZAC, stays as proof in the hero proof line and in Track record. See `docs/positioning-durability.md` for the reasoning behind that proof.

- **No prices anywhere.** Not on any page, not in `llms.txt`, not in schema. The Backlog Review and Two-Week Proof offers are retired. The only "$" on the site is the $1 billion Heritage Global Partners figure.
- **Handover is a practice, not an anecdote.** Numerous projects have been handed over. Say so.
- Do not reintroduce "shelved", "backlog", "affordable", or "cheap" into the promise, and do not bring back the "14 hours" build-speed line.

## Geography: state California, say nothing else

Andrew is in Ventura, California. Other team members are outside the US. **Only the California location is public**, in the footer and in the Organization schema.

This is deliberate, not an oversight. A US anchor is a trust signal for a mid-market US buyer. Advertising a team spread across three continents reads as offshore to that same buyer, which undercuts the seniority and continuity the whole positioning rests on. It is not hidden, it simply is not marketing copy. Do not add other locations without asking.

No geo-targeting or geo-restriction is in place, and none is recommended. The pipeline is US-weighted through Andrew's network, and the buyer does not search locally for this service.

## Hard voice rules

These are not stylistic preferences. They are binding.

| Rule | Detail |
|---|---|
| **"AI" is a thing we audit, never a thing we are** | Decided 2026-09-23. "AI" is allowed in offer names, offer page headlines, and plain descriptions of assistants (ChatGPT, Perplexity, Claude). It is never an identity claim about ZAC: no "AI-native", "AI-first", "AI-powered", "AI-driven", and nothing that says ZAC builds with or is made of AI. `package.json` and `README.md` describe the studio without it. The voice gate fails on the compounds and flags every bare use for review. |
| **No contractions** | "does not," not "doesn't." "That is enough to start," not "That's." |
| **No em dashes** | Use a full stop or a comma. |
| **No semicolons** | Split the sentence. |
| **No exclamation points** | None. Anywhere. |
| **No emoji** | |
| **Oxford comma** | Yes. |
| **Headings** | Sentence case. Eyebrows are ALL CAPS, numbered, in the nav's 14px black weight (the board has no mono face). |
| **Numbers** | Numerals for anything measurable. "41 states," "20 years." |

**Banned vocabulary:** solutions · synergy · cutting-edge · best-in-class · world-class · seamless · robust · empower · unlock · elevate · passionate about · leverage (as a verb) · AI-native · AI-first · AI-powered · ship fast · 10x · force multiplier

**The test for any new line:** could a firm founded last year write this exact sentence? If yes, it is not doing work. Make it specific or cut it.

---

## Compliance guardrails, do not violate

| Rule | Why |
|---|---|
| **No DoD seals or insignia.** Text describing the Navy/Marines work is fine; anything implying government endorsement is not. | DoD restriction |
| **No IBM logo in a client wall.** IBM is where the team worked, not a client. Write "our team built systems at IBM," never "ZAC built X for IBM." | Accuracy |
| **The $1B is the client's transaction volume, not ZAC's revenue.** Write "over $1 billion in assets sold through the platform." Never "we sold $1 billion in assets." | Accuracy |
| **The 90% figure is client-reported.** Always attribute: "the client reported support calls dropped by over 90%." | Substantiation |
| **Never characterize a named client's leadership or internal problems.** | Professional |
| **Do not name Misha or Luke** until they confirm. Still pending as of 2026-08-20, and the site ships nameless. Full names are known and ready: **Misha Gervits**, Design Director, and **Luke Monegatto**, Senior Engineer (Luciano goes by Luke). Do not add them to `TrackRecord.tsx` until Drew says consent is given. Name and photo are already optional props, so it is a two-line change. | Consent pending |
| **Misha was an associate creative director at Ogilvy. Not Havas.** His title on the site is **Design Director**, because "Creative Director" is agency vocabulary on a site that sells against agencies. | Accuracy |
| **Do not introduce team members as Andrew's former colleagues.** It makes him the centre and them satellites, which contradicts "One team. No layers." IBM appears in each bio as a credential instead. | Positioning |

---

## Design system

**Adopted 2026-09-23.** Misha's Figma board is the design authority
(`MacBook Air - 1`, node `6:2`). The board was read in full the same day
through the Figma REST API (the MCP quota on Andrew's seat is 20 calls a
month), and every token cites the node it came from. The board has no
variables and no styles, so values are literals. `design/DESIGN-SYSTEM-NOTES.md`
records the reading, every deviation, and the questions for Misha.

The board in one line: `#EBEBEB` ground, white 12px cards, black Avenir
(900 headings, 400 body), purple `#9D4DFF` accent with blue and red on the
second and third cards, a yellow-orange-blue Z illustration set, no borders,
no shadows, no effects. Avenir ships with Apple devices only, so Figtree is
self-hosted as the open fallback until licensing is settled.

### Tokens only

- **Source of truth is `design/tokens.json`.** `src/styles/tokens.css` is
  generated from it by `npm run tokens` and must never be edited by hand. The
  build fails if the two are out of sync.
- **Never write a raw colour.** No hex, no `rgb()`, `rgba()`, `hsl()` with
  numeric channels, anywhere in `src/`. Use `var(--color-*)`. For translucent
  colour use the channel tokens: `rgb(var(--forge-rgb) / .3)`.
  `scripts/lint-tokens.mjs` fails the build on any raw colour outside the
  generated tokens file. Two exceptions, documented in the script: the
  `theme-color` meta in `index.html`, and `tools/`, which never ships.
- **Never write a raw pixel value for a design decision.** Spacing comes from
  `--space-*`, type sizes from `--text-*`, radii from `--radius-*`, shadows
  from `--shadow-*`, durations and easing from `--duration-*` and
  `--ease-out`. Structural CSS (a 1px hairline, a percentage, a grid track)
  is fine. A padding, gap, margin, or font size that is a design choice is not.
- **Adding a token:** add it to `design/tokens.json` with a `$type`, a
  `$value`, and `$extensions.zac.source` saying where the value came from
  (Figma variable, Figma style, read off a frame with the node id, or
  provisional). Run `npm run tokens`. Commit both files.
- **Do not add a value that has no source.** If the board does not cover a
  case, extend the nearest existing scale and record the extension in
  `design/DESIGN-SYSTEM-NOTES.md` under "Extensions made without Figma
  coverage". Do not invent a new style.

### Components to use

Build pages from these. Do not create a second button, card, or eyebrow.

| Need | Use |
|---|---|
| Page column | `.container`, width from `--content-width` and `--gutter` |
| Section frame and rhythm | `.section`, override `--pad-top` and `--pad-bottom` per section |
| Section label | `.eyebrow`, ALL CAPS, numbered (`01 / Track record`) |
| Section heading with illustration | `.section-head` with a `.section-art--*` block, art from `public/art/` |
| Headings | `.h1` and `.h2` (62px display), `.h3` (48px title), `.h2--split` with `.h2-secondary` for a two-tone line |
| Intro under a heading | `.section-intro` |
| Primary action | `.btn.btn-primary`, the pill, with the trailing arrow span, wrapped in `<Magnetic>` in the body |
| Secondary action | `.btn.btn-secondary`, the outlined pill |
| Inline text action | `.text-link` |
| Card surface | `.surface`, white, 12px radius, no border |
| Undecided imagery | `.placeholder`, the board's grey |
| Service entry | `ServiceCard` (`src/components/ServiceCard.tsx`) in `.service-grid`. The whole card is the link, underlined at rest |
| Offer page cross-links | `.offer-related` block in `OfferPage.tsx`, above the closing CTA |
| Header offers menu | `WhatWeDoMenu` in `Header.tsx`, plain link below 860px |
| Offer card | `.offer.surface` from `StartHere.tsx` |
| Case study | `.case` block from `TrackRecord.tsx`, alternating, `images` prop for when imagery lands |
| Numbered step | `.step` from `HowItWorks.tsx`, zigzag with a `.step-figure` circle |
| Entrance reveal | `<Reveal>` with variants from `src/lib/motion.ts`, never ad hoc Motion props |
| Brand | `<Wordmark>` and `<ZacMark>` from `Brand.tsx`, which serve the board's SVG exports, never an SVG or raster of your own |
| Booking and email | `BOOKING_URL` and `CONTACT_EMAIL` from `src/lib/links.ts` |

Motion stays reactive, not ambient, and respects `prefers-reduced-motion`.
Any new component gets its styles in the matching global stylesheet
(`layout.css` for composition, `interactive.css` for behaviour) using tokens
only, and a row in this table.

---

## Section order (v4)

Hero → TrackRecord → ShiftComparison (What changed) → Services → HowItWorks → StartHere → FinalCTA

Same order as v3. Four offer pages share one template: `/ai-visibility`, `/web-partner`, `/accessibility`, and `/brand-system`. The last is behind the `BRAND_SYSTEM` flag in `src/lib/flags.ts`, off by default, which also hides Services row 04 and keeps it out of the sitemap, schema, and `llms.txt`. The hawaii.surf case study card is behind `HAWAII_CARD`, off until real before and after numbers exist.

Every page is prerendered by `scripts/prerender.mjs` into `dist/<route>/index.html` with its own title, description, canonical, OG tags, and JSON-LD. Assistants do not run JavaScript, so nothing may depend on client rendering.

## Components

| File | v4 status |
|---|---|
| `Hero.tsx` | Visibility headline in the board's two-tone hero, Z illustration right, proof line carries IBM and 2010 |
| `TrackRecord.tsx` | Board case study layout, alternating, grey image placeholders; team as three cards; hidden hawaii.surf card first behind `HAWAII_CARD` |
| `ShiftComparison.tsx` | Five-row THEN/NOW table, animation kept, drawn in the accent |
| `Services.tsx` | Board cards via `ServiceCard`, wrapping grid, accents cycling, row 04 hidden while `BRAND_SYSTEM` is off, footnote paragraph below |
| `HowItWorks.tsx` | Board zigzag: heading, intro, illustration, three principles as numbered steps with circles |
| `StartHere.tsx` | Two snapshot cards, no prices, no "two numbers" line |
| `FinalCTA.tsx` | Board closing block: accent headline, mark over a white circle. Copy unchanged |
| `Footer.tsx` | Copy unchanged, links absolute so they work from offer pages |
| `Brand.tsx` | Serves the board's wordmark SVG and the closing mark |
| `pages/OfferPage.tsx` | Shared offer page template: eyebrow, H1, intro, lists, steps, proof, FAQ, CTA. FAQ data also renders the FAQPage schema so the two cannot diverge |
| `pages/offers/*.ts` | Copy for each offer page, straight from `docs/site-copy-v4.md` |
| `lib/meta.ts`, `lib/schema.ts` | Per-route head and JSON-LD, consumed by the prerender |
| `public/llms.txt` | Replaced with the v4 text |
| `public/sitemap.xml` | Home plus the three live offer pages |

## Keep these

One v1 interaction survived the move to Misha's light, flat design and should stay:
- THEN/NOW row-draw animation in `ShiftComparison`

Retired with the redesign, files parked in `.superseded/` until Drew says to delete them: the hero forge artwork, mote and ember fields, the horizon arc, and the service row ignition (cards lift on hover instead). The signal-flow sequence in `HowItWorks` was removed on 2026-09-23 at Drew's request; do not bring it back.
- Motion is **reactive, not ambient**. Nothing animates until a pointer or keyboard arrives. Respect `prefers-reduced-motion` everywhere.

## Stack notes

React 19 + TypeScript + Vite · Motion · global CSS · Cloudflare Workers static assets
Styling is **global CSS, not CSS Modules**. `src/styles/layout.css` carries section composition, `globals.css` the primitives, `interactive.css` and `motion.css` the behaviour. Fonts: Avenir from the system where it exists, Figtree self-hosted (`@fontsource/figtree`, 400 and 900) as the fallback.
Previews: build locally, then `npx wrangler deploy --name website-<branch>-preview`. Production `website` deploys from main only.
Design tokens live in `design/tokens.json` and are generated into `src/styles/tokens.css` by `scripts/build-tokens.mjs`. See the Design system section below.
There is **no test framework** in this repo. Verification is `npm run build` (runs the token gate, then `tsc -b`), the voice gate at `scripts/voice-check.sh`, and measuring the running page.
`functions/api/chat.ts` is a stub returning 501 and is **not** wired into the deploy (`wrangler.toml` ships static assets only). Leave it alone unless asked.

## Open slots

Two slots were picked on 2026-08-20 and stand for v4. Ship them exactly as written and do not re-offer either choice.

- **Andrew's bio line:** "Twenty years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things."
- **IBM/MMG timeline framing:** "It started while he was still at IBM and has outlasted that tenure."

Still open in v4, and left out of the build rather than filled:

- **Web Partner platforms list.** The "What platforms do you work on?" question is omitted from `/web-partner` until Drew confirms the list.
- **hawaii.surf before and after numbers.** The card and the `/ai-visibility` proof block ship hidden.
- **zacforge.com audit result** for the `/ai-visibility` proof block.
- **LinkedIn URL** for the `sameAs` schema property.
- **Misha's review** of Services row 04 and `/brand-system`, and how he is described there. That page also ships with the "Who does the work" paragraph omitted.
- **Design questions for Misha**, 14 of them, in `design/DESIGN-SYSTEM-NOTES.md`. The stats row and logo band on his board are not built until he answers.

If new copy is ever missing, the rule still stands: ask rather than filling the gap.
