# CLAUDE.md: zacforge-site

Repo memory for the ZAC marketing site. Read this before touching copy.

## What ZAC is

A senior technology studio. Successor practice to Mahalo Media Group, which founder Andrew Johnston ran for 15+ years across 100+ engagements. Not a startup. An established practice operating under new economics.

**Positioning (v5, adopted 2026-11-03):** one problem, one front door. The problem: AI made everyone an IT expert, it didn't make it work. The front door: a free Reality Check (five questions on anything built with AI tools or inherited). The paid step: the Fix Week (called the Handoff from 2026-11-05 to 2026-11-06, `/handoff` 301s to `/fix-week`). AI Visibility, Rescue, Accessibility, Brand System, Platform Escape, and Web Partner are fixes behind that door. Experience and durability are the proof, not the pitch. Supersedes the v4 positioning below.

## This site is a working copy

**Misha is redesigning the brand and the site. Branch v4 implemented his board as it stood on 2026-09-23, branch v5 pulled the layout toward his comp 7 (`MacBook Air - 7`, node `198:427`), and branch v6-mb11 (2026-11-12) builds the home page from his `MacBook Air - 11` (node `357:763`), cached in `design/mb11/`. MB11 is now the design authority for the home page and for the shared primitives (bands, type, buttons, eyebrows); comp 7 and board `6:2` only where MB11 is silent.** zacforge.com serves v5 until v6 is approved and merged. Treat all of it as a working copy:

- The v4 build follows Misha's Figma board (`MacBook Air - 1`, node `6:2`) read in full through the Figma REST API. The board is a **draft**: lorem ipsum throughout, no mobile version, case study imagery undecided. Expect his values to move, and expect them to arrive as token edits, not rebuilds.
- **Do not introduce a visual direction of your own.** Where the board does not cover a case, extend its nearest scale and record the extension in `design/DESIGN-SYSTEM-NOTES.md`. Where it conflicts with the copy deck or the guardrails, the copy and the guardrails win and the conflict goes in the questions for Misha.
- Copy, structure, positioning, accessibility, performance, and correctness are all live and worth doing properly.
- The old brand red mismatch is moot: the board's accent is purple `#9D4DFF`.

Positioning work is handed to Misha as **input** to the redesign.

## The copy source of truth

`docs/site-copy-v5.md` carries the complete section-by-section copy, amended by `docs/copy-pass-2026-11-05.md` and then by Drew's copy pass of 2026-11-06 (branch `copy-nov6`), which wins where they differ. Together they carry the offer pages, metadata, schema, the contact form spec, and the `llms.txt` replacement. v5 supersedes v4, which stays in `docs/` for history only (the `/ai-visibility`, `/accessibility`, and `/brand-system` body copy still comes from v4, as v5 says). The build steps for v5 are in `docs/site-v5-build-plan.md`.

Do not invent marketing copy. If something is missing, ask rather than filling the gap.

---

## Positioning: visibility leads, durability proves

**Adopted 2026-09-23 (v4), superseded by v5 on 2026-11-03 except where v5 says v4 copy stands.** The site sold the bridge-income offer set: AI Visibility (lead), Web Partner (the retainer), Accessibility and Performance, AI-Ready Brand System (pending Misha, behind a flag), and Fractional Digital Lead. The v3 durability claim, systems built in 2010 still in production and run without ZAC, stays as proof in the hero proof line and in Track record. See `docs/positioning-durability.md` for the reasoning behind that proof.

- **No prices anywhere.** Not on any page, not in `llms.txt`, not in schema. The Backlog Review and Two-Week Proof offers are retired, and so are the Snapshots. The only "$" on the site is the $1 billion Heritage Global Partners figure, written "$1B+" on its v5 case study card.
- **Handover is a practice, not an anecdote.** Numerous projects have been handed over. Say so.
- Do not reintroduce "shelved", "backlog", "affordable", or "cheap" into the promise, and do not bring back the "14 hours" build-speed line.

## Geography: state the region, say nothing else

Other team members are outside the US. **No US state is public since 2026-11-17** (Drew): the Organization schema's `PostalAddress` carries `addressCountry` "US" only, and `areaServed` is "US". No region, street, or city. Before that the region was HI (2026-11-13) and CA (from Andrew in Ventura, California). Drew took "Ventura, California." out of the footer and the locality out of the schema on 2026-11-05, and may add a location back later. Do not add copy that says US only.

This is deliberate, not an oversight. The US anchor is a trust signal for a mid-market US buyer. Advertising a team spread across three continents reads as offshore to that same buyer, which undercuts the seniority and continuity the whole positioning rests on. It is not hidden, it simply is not marketing copy. Do not add other locations without asking.

No geo-targeting or geo-restriction is in place, and none is recommended. The pipeline is US-weighted through Andrew's network, and the buyer does not search locally for this service.

## Hard voice rules

These are not stylistic preferences. They are binding.

| Rule | Detail |
|---|---|
| **"AI" names the problem, the offers, and the mechanism, never ZAC's identity** | Decided 2026-09-23, revised 2026-11-04 to match the v5 copy. "AI" is allowed in offer names, offer page headlines, plain descriptions of assistants (ChatGPT, Perplexity, Claude), the problem ZAC fixes, and as the mechanism in how the work gets done ("AI does the volume. We do the judgment."). It is never ZAC's identity: no "AI-native", "AI-first", "AI-powered", "AI-driven", and nothing that says ZAC is an AI company or is made of AI. `package.json` and `README.md` describe the studio without it. Approved exception (Drew, 2026-11-18): the team intro "We were already the guys. Now we're the guys with AI." describes the people using AI as a tool, not ZAC's identity, and stays. The voice gate fails on the compounds and flags every bare use for review. |
| **Contractions are fine** | Changed 2026-11-03 (decision 41). Use them where a person would; do not force them. The earlier "no contractions" rule was inferred from v1 copy, never decided. |
| **No em dashes** | Use a full stop or a comma. |
| **No semicolons** | Split the sentence. |
| **No exclamation points** | None. Anywhere. |
| **No emoji** | |
| **Oxford comma** | Yes. |
| **Headings** | Sentence case, 10 words or fewer (Drew, 2026-11-06). Exception (Drew, 2026-11-12): on the home page Misha's MB11 wording and casing win, e.g. "When the Check calls for more", "AI Visibility", and "FREE Reality Check" on buttons. Eyebrows follow MB11: the arrow, then the label in capitals (written in sentence case in the markup, capitalised by CSS), Helvetica bold 16px, unnumbered. |
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
| **Team names** (Drew, 2026-11-18): the cards carry full names, **Andrew Johnston**, **Misha Gervits**, and **Luciano Monegatto**, and the same names are used on `/about`, in the Person schema, and in `llms.txt`. Luciano goes by Luke, so his bio text says "Luke". Since 2026-11-22 his card shows `cardName` Luke Monegatto (briefly Luciano "Luke" Monegatto the same day), while the schema and `llms.txt` keep "Luciano Monegatto". Names live in `src/pages/team.ts`. | Approved |
| **Team titles** (Drew, 2026-11-04): Andrew is **Founder, Principal**, Misha is **Design Principal**, Luke is **Principal Engineer**. These are the role labels in Who we are. "Creative Director" stays off the site, because it is agency vocabulary on a site that sells against agencies. | Positioning |
| **Misha's bio says Ogilvy only.** | Accuracy |
| **IBM in the team copy.** Drew's approved team copy of 2026-11-18 stands: the intro "Three people who've worked together since IBM" and Luke's "building alongside Andrew since IBM". New copy still should not make Andrew the centre with the others as satellites. | Positioning |

---

## Design system

**Adopted 2026-09-23.** Misha's Figma board is the design authority
(`MacBook Air - 1`, node `6:2`). The board was read in full the same day
through the Figma REST API (the MCP quota on Andrew's seat is 20 calls a
month), and every token cites the node it came from. The board has no
variables and no styles, so values are literals. `design/DESIGN-SYSTEM-NOTES.md`
records the reading, every deviation, and the questions for Misha.

MB11 in one line: `#EBEBEB` ground, blue bands (`#227CBA`, the comp's
`#2483C5` darkened for AA) and grey bands (`#D6D6D6`), each with one angular
cut and one curved corner, Helvetica headings mixing light and bold runs,
Avenir and Helvetica Light 14px body, purple `#56246F` pill buttons, yellow
fix titles, white dotted line art, and the gradient Z set. Avenir and
Helvetica ship with Apple devices only, so Figtree (300, 400, 900) is
self-hosted for Avenir and Helvetica falls back to Arial.

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
| Section label | `.eyebrow`: the arrow (a mask, `--eyebrow-arrow`) and the label, capitalised by CSS |
| Copy beside an illustration | `.art-split` with `.art-split-art`, art from `public/art/mb11/` |
| Headings | `.h1` (64px hero), `.h2` (48px), `.h3`; bold by default, `.h-light` for the light run, `.h-aside` light italic, `.h-alert` the red word |
| Body copy at the comp's size | `.copy` (Avenir Light 14px, 16px on phones and at 1024px and wider), `.case-text` (Helvetica Light 14px, 16px at 1024px and wider). Body and caption text is never under 16px at desktop widths (Drew, 2026-11-13); labels stay at 14 |
| Intro under a heading | `.section-intro` |
| Offer page hero | `SubpageHero` (`src/components/SubpageHero.tsx`), art from `public/art/subpage/`, recolour a page with its offer's `heroAccent` (a `--color-hero-*` token) |
| Primary action | `.btn.btn-primary`, the pill, with the trailing arrow span, wrapped in `<Magnetic>` in the body |
| Secondary action | `.btn.btn-secondary`, the outlined pill |
| Inline text action | `.text-link` |
| Card surface | `.surface`, white, 12px radius, no border |
| Undecided imagery | `.placeholder`, the board's grey |
| Colour band (MB11) | `.band` with `.band--blue` or `.band--grey`; the cut and curve come from the `band.*` tokens (`--band-clip-*`, `--band-curve-*`), set per section in `layout.css` and scaled by `--band-k` |
| Dotted line art on a band | `<img class="band-lines">` from `public/art/mb11/lines-*.svg`, laid on the 1280 frame, hidden below 900px |
| Step row with arrows | `FlowRow` (`src/components/FlowRow.tsx`), ring icon, title, arrows that draw once, paragraphs under each |
| Heading left, intro right | `.split-head` with `.split-head-copy` |
| Offer page cross-links | `RelatedOffers` (`src/components/RelatedOffers.tsx`), above the closing CTA: an `.eyebrow` label, an offer card per other live offer (Misha's 423:2428 set), icon from `public/art/offer-cards/`, title and "More" in the site blue, link stretched over the card with `aria-label` "More about …" |
| Header offers menu | `WhatWeDoMenu` in `Header.tsx`, plain link below 860px |
| Case study | `.case.case-grid` from `TrackRecord.tsx`: name across, screenshot left (`public/work/<base>-360.webp` and `-720.webp`, placeholder without one), meta, body, and `figure` right |
| Team photo | Drop `andrew-johnston`, `design-principal`, or `principal-engineer` (.webp, .jpg, .png) in `src/assets/team/` and rebuild; initials or a plain circle until then. The set is grayscale cutouts on `#EBEBEB` (`--color-bg`), cropped so the face box is half the frame and the eyes sit 45% down; a new photo should match |
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

Hero → LogoBand → Problem → RealityCheck → FixWeek → WhatWeFix → TrackRecord (Case studies) → HowWeWork → ExperienceStrip → WhoWeAre → Closing (Drew, 2026-11-13; the FAQ moved to `/faq` on 2026-11-17)

Seven offer pages share one template: `/reality-check`, `/fix-week` (`/handoff` 301s there from `functions/worker.ts`; labelled "The Fix" in nav, footer, eyebrows, buttons, and its title, while body copy and the schema `name` keep "the Fix Week"), `/ai-visibility`, `/accessibility`, `/web-partner`, `/platform-escape` (2026-11-18: no FAQ, so the template drops its Questions section and FAQPage schema, and no hero or card icon yet), and `/brand-system`. The last is behind the `BRAND_SYSTEM` flag in `src/lib/flags.ts`, off by default, which keeps the page out of the routes, menus, sitemap, and schema and leaves the What we fix row as plain text. v5's `llms.txt` lists the brand system without a link, as the copy deck has it. The hawaii.surf case study card is behind `HAWAII_CARD`, off until real before and after numbers exist.

Every page is prerendered by `scripts/prerender.mjs` into `dist/<route>.html` with its own title, description, canonical, OG tags, and JSON-LD. Assistants do not run JavaScript, so nothing may depend on client rendering.

## Components

| File | v5 status |
|---|---|
| `Header.tsx` | Blue on every page (clear over an offer page hero until the page scrolls), nav What we do (menu from the `MENU` list in `Header.tsx`, labels, lines, and order from the copy handoff of 2026-11-18, including Platform Escape), Case studies, How we work, About (to `/about`, was Team, 2026-11-18), CTA "Let's talk" to `BOOKING_URL` (Drew, 2026-11-12) |
| `ContactFocus.tsx` | Every `#contact` link scrolls the Name field into view below the sticky header and focuses it, on click and on arrival with the hash |
| `Hero.tsx` | Misha's home banner (412:1907, 2026-11-13) through `SubpageHero variant="home"`: the offer heroes' swoosh band, header clear at the top, MB11's Z on the right (hidden at 760px and narrower since 2026-11-17), no line art, "AI made everyone an IT expert. It didn't make IT work." (copy handoff of 2026-11-18; the two "IT"s get no special styling until Misha decides), button "Get a free Reality Check", no proof line (removed 2026-11-13), outlined "Book a 20-minute call" pill to `BOOKING_URL` beside the primary CTA. each page's OG card in `public/og/` (and `public/og-image.jpg`, the home card) is drawn from its hero by `npm run og` (`tools/og-images.mjs`), so rerun it after any hero, page name, or headline change |
| `LogoBand.tsx` | "Where our team has worked", names as muted text, never labelled as clients |
| `TrackRecord.tsx` | Case studies (Drew, 2026-11-13, batch 2 copy), grey band, eyebrow "Case studies", heading "Built to last" (Drew, 2026-11-13), client name over the screenshot column only, anchor `#track-record`. Four cards: client, industry, status, then labelled Problem / What we built / Proof lines (a missing line drops its label), the number, and the product name as the link (the URL is never shown). CCCV (in llms.txt since 2026-11-13 at Drew's request, still out of the schema until ccconejovalley.com is live), Heritage Global Partners, Legacy Studios (Teddy Bear Portraits) with both screenshots and USNA and USMA portal links (academy shot cropped clear of all insignia), Legal Access Alameda (no link, label as text). Hidden hawaii.surf card first behind `HAWAII_CARD` |
| `Problem.tsx` | "Problem", on the ground, one column, no art (the Z set was removed 2026-11-17), "wrong" in red and "without telling you." light italic |
| `FixWeek.tsx` | "The Fix Week", heading, the intro and the "Things we've fixed" block read from `fixWeek.ts` (one source with `/fix-week`, 2026-11-18), link to `/fix-week`, MB11's four-piece Z |
| `RealityCheck.tsx` | Blue band: heading, the intro read from `realityCheck.ts` (one source with `/reality-check`, 2026-11-18), the 5 questions numbered 1 to 5, CTA to `#contact`, booking pill, link to `/reality-check`. The icon points and dotted rule were removed 2026-11-13 |
| `WhatWeFix.tsx` | "Bigger fixes", anchor `#what-we-do`, eyebrow and heading inside the blue band since 2026-11-17, directly after The Fix, six fixes in a 3 x 2 grid on a blue band with outlined pills whose labels name the destination ("See AI Visibility", "Ask about a rescue"); Brand system's pill goes to `#contact` while `BRAND_SYSTEM` is off. Card copy may run to a few paragraphs (`lines`); the AI Visibility and Platform Escape cards were cut from the end to fit on 2026-11-18, and the offers' `summary` (the "Other services" card line) repeats each card's words |
| `HowWeWork.tsx` | Check, Fix, Partner `FlowRow` with ring icons, each step carrying its principle lines |
| `LogoBand.tsx` `ExperienceStrip` | The credibility strip: four lines in blue Helvetica Light, label screen-reader only |
| `WhoWeAre.tsx` | "Team", heading "Principals", the team intro, white band (`.band--white`, Drew, 2026-11-22, over MB11's grey), three 176px circles in the ground grey holding black and white cutouts on that same grey, faces matched in size and eye height (initials without a photo) then full name, role, bio paragraphs, all from `src/pages/team.ts`. On home and on `/about` |
| `pages/AboutPage.tsx` | `/about` (Drew, 2026-11-18): `SubpageHero` named "About", h1 "About ZAC", the four "What is ZAC" paragraphs, then `WhoWeAre`. AboutPage schema with BreadcrumbList Home > About and the three Person entries, OG card `public/og/about.jpg`, in the sitemap and `llms.txt`, linked from the top bar and the footer |
| `pages/FaqPage.tsx` | `/faq` (Drew, 2026-11-17), moved off the home page (`HomeFaq.tsx` parked in `.superseded/`): `SubpageHero` with the name "FAQ" and no icon, h1 "Questions", the 7 questions from `src/pages/faq.ts` (which also feeds its FAQPage schema), `RelatedOffers` labelled "What we do", the offers' closing CTA. BreadcrumbList Home > FAQ, OG card `public/og/faq.jpg`, in the sitemap and `llms.txt`, linked from the footer, not in the main nav |
| `RelatedOffers.tsx` | The offer cards block on offer pages ("Other services") and `/faq`: label as an `.eyebrow` h2, card titles and "More" all in the site blue (Drew, 2026-11-17, over Misha's per-offer colours, which stay on `Offer.accent` unused) |
| `Closing.tsx`, `ContactForm.tsx` | "Connect", the form and the mark in its circle, also rendered on `/reality-check` |
| `pages/ContactResult.tsx` | The pages after the form at `/contact/thanks`, `/contact/not-sent`, `/contact/error`: blue band, Z, noindex, out of the sitemap. The handler fills `[data-slot]` elements and `#contact-data` so hydration matches. The thank-you page hides the header CTA |
| `pages/NotFound.tsx` | The 404, in the result pages' layout: "Page not found", one line, links to Home and the five offers. Catch-all route, prerendered to `dist/404.html`, which `functions/worker.ts` serves with status 404 for any path the assets lack. noindex, out of the sitemap |
| `Footer.tsx` | Links absolute so they work from offer pages. The Site group ends with About (`/about`, was Team, 2026-11-18) and FAQ (`/faq`) |
| `Brand.tsx` | Serves the board's wordmark SVG and the closing mark |
| `SubpageHero.tsx` | The offer page hero from Misha's 417:2047 and siblings: band with swoosh art, icon, page name (a `p` at h1 size), `accent` prop for the colour the band fades to: each offer's `heroAccent` (`--color-hero-*`, Misha's question 40 colours, The Fix and Web Partner darkened for AA). Unset on the home banner, which stays flat blue. `variant="home"` is the home banner (412:1907), with the home hero's content as children |
| `pages/OfferPage.tsx` | Shared offer page template: `SubpageHero` (`heroTitle`, `heroIcon`, `accent`), then the headline (the offer's `h1` field, set as an h2), v5 subline, intro, then lists, steps, proof, FAQ, related offers, CTA, optional form. FAQ data also renders the FAQPage schema so the two cannot diverge |
| `pages/offers/*.ts` | Copy for each offer page, straight from `docs/site-copy-v5.md` (v4 body copy where v5 says it stands) |
| `lib/meta.ts`, `lib/schema.ts` | Per-route head and JSON-LD, consumed by the prerender |
| `functions/worker.ts`, `functions/api/contact.ts` | The Worker: static assets, `POST /api/contact`, noindex on every non-production host |
| `public/llms.txt` | Replaced with the v5 text |
| `sitemap.xml` | Written by the prerender from the live routes: home, six offer pages, `/faq`, and `/about` |

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

- **Team bios:** all three replaced by Drew on 2026-11-22 ("25 years building for the web...", "A classically trained designer...", "Luke has built alongside Andrew..."), in `src/pages/team.ts`, and carried into each Person schema entry as `description`. Andrew's "25 years" is Drew's approved exception to the earlier rule of no year counts for people. Add no others.
- **IBM/MMG timeline framing:** "It started while he was still at IBM and has outlasted that tenure." v5 words it "and outlasted that tenure" in Track record.

The v5 deck fills the Web Partner platforms answer, and it ships.

Still open in v5. Slots with working text ship that text; slots without it are left out rather than filled:

- **Legal Access Alameda** URL, years, and its number. The card ships with the 2026-11-05 body and a TODO in `TrackRecord.tsx`.
- **hawaii.surf before and after numbers.** The card and the `/ai-visibility` proof block ship hidden.
- **zacforge.com check result** for the `/ai-visibility` proof block.
- **LinkedIn URL** for the `sameAs` schema property.
- **Misha's review** of Services row 04 and `/brand-system`, and how he is described there. That page also ships with the "Who does the work" paragraph omitted.
- **Design questions for Misha**, 44 of them (20 new since MB11), in `design/DESIGN-SYSTEM-NOTES.md`. The v4 stats row is not built until he answers.

If new copy is ever missing, the rule still stands: ask rather than filling the gap.
