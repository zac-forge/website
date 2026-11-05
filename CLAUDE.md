# CLAUDE.md: zacforge-site

Repo memory for the ZAC marketing site. Read this before touching copy.

## What ZAC is

A senior technology studio. Successor practice to Mahalo Media Group, which founder Andrew Johnston ran for 15+ years across 100+ engagements. Not a startup. An established practice operating under new economics.

**Positioning (v5, adopted 2026-11-03):** one problem, one front door. The problem: AI made everyone an IT expert, it didn't make it work. The front door: a free Reality Check (five questions on anything built with AI tools or inherited). The paid step: the Fix Week. AI Visibility, Rescue, Accessibility, Brand System, Platform Escape, and Web Partner are fixes behind that door. Experience and durability are the proof, not the pitch. Supersedes the v4 positioning below.

## This site is a working copy

**Misha is redesigning the brand and the site. Branch v4 implemented his board as it stood on 2026-09-23, and branch v5 pulls the layout toward his comp 7 (`MacBook Air - 7`, node `198:427`, read 2026-11-04, its colour bands taken as provisional tokens).** What is deployed at zacforge.com is still the v3 working copy until v5 merges. Treat all of it that way:

- The v4 build follows Misha's Figma board (`MacBook Air - 1`, node `6:2`) read in full through the Figma REST API. The board is a **draft**: lorem ipsum throughout, no mobile version, case study imagery undecided. Expect his values to move, and expect them to arrive as token edits, not rebuilds.
- **Do not introduce a visual direction of your own.** Where the board does not cover a case, extend its nearest scale and record the extension in `design/DESIGN-SYSTEM-NOTES.md`. Where it conflicts with the copy deck or the guardrails, the copy and the guardrails win and the conflict goes in the questions for Misha.
- Copy, structure, positioning, accessibility, performance, and correctness are all live and worth doing properly.
- The old brand red mismatch is moot: the board's accent is purple `#9D4DFF`.

Positioning work is handed to Misha as **input** to the redesign.

## The copy source of truth

`docs/site-copy-v5.md` carries the complete section-by-section copy, the offer pages, metadata, schema, the contact form spec, and the `llms.txt` replacement. It supersedes v4, which stays in `docs/` for history only (the `/ai-visibility`, `/accessibility`, and `/brand-system` body copy still comes from v4, as v5 says). The build steps for v5 are in `docs/site-v5-build-plan.md`.

Do not invent marketing copy. If something is missing, ask rather than filling the gap.

---

## Positioning: visibility leads, durability proves

**Adopted 2026-09-23 (v4), superseded by v5 on 2026-11-03 except where v5 says v4 copy stands.** The site sold the bridge-income offer set: AI Visibility (lead), Web Partner (the retainer), Accessibility and Performance, AI-Ready Brand System (pending Misha, behind a flag), and Fractional Digital Lead. The v3 durability claim, systems built in 2010 still in production and run without ZAC, stays as proof in the hero proof line and in Track record. See `docs/positioning-durability.md` for the reasoning behind that proof.

- **No prices anywhere.** Not on any page, not in `llms.txt`, not in schema. The Backlog Review and Two-Week Proof offers are retired, and so are the Snapshots. The only "$" on the site is the $1 billion Heritage Global Partners figure, written "$1B+" on its v5 case study card.
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
| **"AI" names the problem, the offers, and the mechanism, never ZAC's identity** | Decided 2026-09-23, revised 2026-11-04 to match the v5 copy. "AI" is allowed in offer names, offer page headlines, plain descriptions of assistants (ChatGPT, Perplexity, Claude), the problem ZAC fixes, and as the mechanism in how the work gets done ("AI does the volume. We do the judgment."). It is never ZAC's identity: no "AI-native", "AI-first", "AI-powered", "AI-driven", and nothing that says ZAC is an AI company or is made of AI. `package.json` and `README.md` describe the studio without it. The voice gate fails on the compounds and flags every bare use for review. |
| **Contractions are fine** | Changed 2026-11-03 (decision 41). Use them where a person would; do not force them. The earlier "no contractions" rule was inferred from v1 copy, never decided. |
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
| **Do not name Misha or Luke** until they confirm. Still pending as of 2026-11-04, and the site ships them by role. Full names are known and ready: **Misha Gervits**, Design Principal, and **Luke Monegatto**, Principal Engineer (Luciano goes by Luke). Do not add them to `WhoWeAre.tsx` until Drew says consent is given. Name and photo are already optional props, so it is a two-line change. | Consent pending |
| **Team titles** (Drew, 2026-11-04): Andrew is **Founder, Principal**, Misha is **Design Principal**, Luke is **Principal Engineer**. These are the role labels in Who we are. "Creative Director" stays off the site, because it is agency vocabulary on a site that sells against agencies. | Positioning |
| **Misha was an associate creative director at Ogilvy. Not Havas.** | Accuracy |
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
| Colour band (comp 7) | `.band` with `.band--navy`, `.band--maroon`, or `.band--sky`; sweep corners from `--radius-sweep` and `--radius-sweep-lg`, set per section in `layout.css` |
| Step row with arrows | `FlowRow` (`src/components/FlowRow.tsx`), circles, arrows that draw once, title and line under each |
| Heading left, intro right | `.split-head` with `.split-head-copy` |
| Offer page cross-links | `.offer-related` block in `OfferPage.tsx`, above the closing CTA |
| Header offers menu | `WhatWeDoMenu` in `Header.tsx`, plain link below 860px |
| Case study | `.case.surface` card from `TrackRecord.tsx`, text first, `figure` set large, optional single `image` |
| Contact form | `ContactForm` (`src/components/ContactForm.tsx`) inside `Closing`, fields `.field` / `.field-label` / `.field-input`, posts to `/api/contact` |
| Screen-reader-only text | `.sr-only` |
| Entrance reveal | `<Reveal>` with variants from `src/lib/motion.ts`, never ad hoc Motion props |
| Brand | `<Wordmark>` and `<ZacMark>` from `Brand.tsx`, which serve the board's SVG exports, never an SVG or raster of your own |
| Favicon | `public/favicon.svg` (the wordmark's Z, black on `#EBEBEB`), `public/favicon.ico` (16, 32, 48), `public/brand/favicon-64.png`, and the 180px apple-touch icon on a solid ground, all rendered from that SVG |
| Booking and email | `BOOKING_URL`, `CONTACT_EMAIL`, and `CONTACT_ENDPOINT` from `src/lib/links.ts` |

Motion stays reactive, not ambient, and respects `prefers-reduced-motion`.
Any new component gets its styles in the matching global stylesheet
(`layout.css` for composition, `interactive.css` for behaviour) using tokens
only, and a row in this table.

---

## Section order (v5)

Hero → LogoBand → TrackRecord → WhatChanged → RealityCheck → WhatWeFix → HowWeWork → WhoWeAre → Closing

Six offer pages share one template: `/reality-check`, `/fix-week`, `/ai-visibility`, `/accessibility`, `/web-partner`, and `/brand-system`. The last is behind the `BRAND_SYSTEM` flag in `src/lib/flags.ts`, off by default, which keeps the page out of the routes, menus, sitemap, and schema and leaves the What we fix row as plain text. v5's `llms.txt` lists the brand system without a link, as the copy deck has it. The hawaii.surf case study card is behind `HAWAII_CARD`, off until real before and after numbers exist.

Every page is prerendered by `scripts/prerender.mjs` into `dist/<route>.html` with its own title, description, canonical, OG tags, and JSON-LD. Assistants do not run JavaScript, so nothing may depend on client rendering.

## Components

| File | v5 status |
|---|---|
| `Header.tsx` | Navy on every page, nav What we do (menu), Track record, How we work, Who we are, CTA "Get a Reality Check" to `/#contact` |
| `ContactFocus.tsx` | Every `#contact` link scrolls the Name field into view below the sticky header and focuses it, on click and on arrival with the hash |
| `Hero.tsx` | Navy band, "Built it with AI? Find out if it actually works.", proof line carries Fortune 50 and 2010. `public/og-image.jpg` is rendered from it by `tools/og-card.html` |
| `LogoBand.tsx` | "Where our team has worked", names as muted text, never labelled as clients |
| `TrackRecord.tsx` | Split head, four stacked case study cards; Legal Access ships with only its filled sentence; hidden hawaii.surf card first behind `HAWAII_CARD` |
| `WhatChanged.tsx` | On the ground, the v4 Z set beside the copy, then the three-step `FlowRow` |
| `RealityCheck.tsx` | The visual stop: maroon band, the five questions as white cards, CTA to `#contact`, link to `/reality-check`, the Fix Week line |
| `WhatWeFix.tsx` | Six one-line rows; Brand system plain text while `BRAND_SYSTEM` is off |
| `HowWeWork.tsx` | Check, Fix, Partner `FlowRow`, three principles |
| `WhoWeAre.tsx` | Sky band, three text-only white cards (role and bio), Andrew named; the other two names wait for consent; a photo, when given, is cropped to a 190px circle on its card |
| `Closing.tsx`, `ContactForm.tsx` | The form, also rendered on `/reality-check` |
| `pages/ContactResult.tsx` | The pages after the form at `/contact/thanks`, `/contact/not-sent`, `/contact/error`: navy band, Z, noindex, out of the sitemap. The handler fills `[data-slot]` elements and `#contact-data` so hydration matches. The thank-you page hides the header CTA |
| `Footer.tsx` | Links absolute so they work from offer pages |
| `Brand.tsx` | Serves the board's wordmark SVG and the closing mark |
| `pages/OfferPage.tsx` | Shared offer page template: navy band hero with eyebrow, H1, v5 subline, intro, then lists, steps, proof, FAQ, related offers, CTA, optional form. FAQ data also renders the FAQPage schema so the two cannot diverge |
| `pages/offers/*.ts` | Copy for each offer page, straight from `docs/site-copy-v5.md` (v4 body copy where v5 says it stands) |
| `lib/meta.ts`, `lib/schema.ts` | Per-route head and JSON-LD, consumed by the prerender |
| `functions/worker.ts`, `functions/api/contact.ts` | The Worker: static assets, `POST /api/contact`, noindex on every non-production host |
| `public/llms.txt` | Replaced with the v5 text |
| `sitemap.xml` | Written by the prerender from the live routes: home plus five offer pages |

## Keep these

One v1 interaction survived the move to Misha's light, flat design and should stay:
- The THEN/NOW row-draw. v5 has no comparison table, so it lives on as the arrows in `FlowRow`, which draw once, in order. `ShiftComparison.tsx` is parked in `.superseded/`.

Retired with the redesign, files parked in `.superseded/` until Drew says to delete them: the hero forge artwork, mote and ember fields, the horizon arc, the service row ignition, and, with v5, `Services`, `ServiceCard`, `HowItWorks`, `StartHere`, `FinalCTA`, and `ShiftComparison`. The signal-flow sequence in `HowItWorks` was removed on 2026-09-23 at Drew's request; do not bring it back.
- Motion is **reactive, not ambient**. Nothing animates until a pointer or keyboard arrives. Respect `prefers-reduced-motion` everywhere.

## Stack notes

React 19 + TypeScript + Vite · Motion · global CSS · Cloudflare Workers static assets
Styling is **global CSS, not CSS Modules**. `src/styles/layout.css` carries section composition, `globals.css` the primitives, `interactive.css` and `motion.css` the behaviour. Fonts: Avenir from the system where it exists, Figtree self-hosted (`@fontsource/figtree`, 400 and 900) as the fallback.
Previews: build locally, then `npx wrangler deploy --name website-<branch>-preview`. Production `website` deploys from main only.
Design tokens live in `design/tokens.json` and are generated into `src/styles/tokens.css` by `scripts/build-tokens.mjs`. See the Design system section below.
There is **no test framework** in this repo. Verification is `npm run build` (runs the token gate, then `tsc -b` and `tsc -p functions`), the voice gate at `scripts/voice-check.sh`, and measuring the running page (`npx wrangler dev` serves the Worker locally).
`wrangler.toml` runs `functions/worker.ts` in front of the static assets (`run_worker_first`). It decides production by hostname: anything not `zacforge.com` gets `X-Robots-Tag: noindex` and a `Disallow` robots.txt. The contact form keys (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `VITE_TURNSTILE_SITE_KEY`) are optional, see README.md.
`functions/api/chat.ts` is a stub returning 501 and is **not** routed by the Worker. Leave it alone unless asked.

## Open slots

Two slots were picked on 2026-08-20 and stand for v4. Ship them exactly as written and do not re-offer either choice.

- **Andrew's bio line:** "Nineteen years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things." Changed from "Twenty" by Drew on 2026-11-04 so the bio matches the hero's 19 years.
- **IBM/MMG timeline framing:** "It started while he was still at IBM and has outlasted that tenure." v5 words it "and outlasted that tenure" in Track record.

The v5 deck fills the Web Partner platforms answer, and it ships.

Still open in v5. Slots with working text ship that text; slots without it are left out rather than filled:

- **Legal Access Alameda** URL, years, what was built, and its number. The card ships with its one filled sentence.
- **Design director and senior engineer** bio lines, pending each person's confirmation. The deck's working versions ship, by role.
- **hawaii.surf before and after numbers.** The card and the `/ai-visibility` proof block ship hidden.
- **zacforge.com audit result** for the `/ai-visibility` proof block.
- **LinkedIn URL** for the `sameAs` schema property.
- **Misha's review** of Services row 04 and `/brand-system`, and how he is described there. That page also ships with the "Who does the work" paragraph omitted.
- **Design questions for Misha**, 24 of them (10 new from comp 7), in `design/DESIGN-SYSTEM-NOTES.md`. The v4 stats row is not built until he answers.

If new copy is ever missing, the rule still stands: ask rather than filling the gap.
