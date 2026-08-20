# CLAUDE.md: zacforge-site

Repo memory for the ZAC marketing site. Read this before touching copy.

## What ZAC is

A senior technology studio. Successor practice to Mahalo Media Group, which founder Andrew Johnston ran for 15+ years across 100+ engagements. Not a startup. An established practice operating under new economics.

**Positioning:** experience and proof lead. The economics of building changed, so shelved projects are affordable again.

## The copy source of truth

`docs/site-copy-v3.md` carries the complete section-by-section copy, structural changes, and design notes.

Do not invent marketing copy. If something is missing, ask rather than filling the gap.

---

## Hard voice rules

These are not stylistic preferences. They are binding.

| Rule | Detail |
|---|---|
| **Never use the word "AI"** | Zero occurrences anywhere on the site: copy, alt text, meta tags, `llms.txt`, `package.json`, and `README.md`. The category label is saturated and buyers discount it. Describe the economics directly instead. |
| **No contractions** | "does not," not "doesn't." "That is enough to start," not "That's." |
| **No em dashes** | Use a full stop or a comma. |
| **No semicolons** | Split the sentence. |
| **No exclamation points** | None. Anywhere. |
| **No emoji** | |
| **Oxford comma** | Yes. |
| **Headings** | Sentence case. Eyebrows are ALL CAPS mono, numbered. |
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
| **Do not name Misha or Luciano** until confirmed. Ship the team block with roles and backgrounds only. Build name and photo as optional fields. | Consent pending |

---

## Section order (v3)

Hero → **TrackRecord** → ShiftComparison (Why now) → Services → HowItWorks → **StartHere** → FinalCTA

Two changes from what is currently deployed: TrackRecord moves from fifth to second, and `StartHere` is a new component.

## Components

| File | Status |
|---|---|
| `Hero.tsx` | New copy + proof line |
| `TrackRecord.tsx` | **Full rebuild.** Case studies and team replace the six abstract category chips. |
| `ShiftComparison.tsx` | New copy, keep the THEN/NOW animation |
| `Services.tsx` | Minor copy edits |
| `HowItWorks.tsx` | "AI-NATIVE" principle replaced with "BUILT TO KEEP" |
| `StartHere.tsx` | **New.** Two offer cards with pricing. |
| `FinalCTA.tsx` | Copy unchanged. The closing copy is the best on the site. |
| `Footer.tsx` | Copy unchanged, but its `#about` link and "About" label follow the nav rename to Track record. |
| `index.html` | Title, meta, OG, add Person schema for Andrew only |
| `public/llms.txt` | Full rewrite, currently leads with "AI-native" |

## Keep these

The v1 interactions are good and should survive the copy change:
- THEN/NOW row-draw animation in `ShiftComparison`
- Service row ignition in `ServiceRow`
- Signal-flow sequence in `HowItWorks`
- Horizon arc and ember field in `FinalCTA`
- Motion is **reactive, not ambient**. Nothing animates until a pointer or keyboard arrives. Respect `prefers-reduced-motion` everywhere.

## Stack notes

React 19 + TypeScript + Vite · Motion · global CSS · Cloudflare Pages
Styling is **global CSS, not CSS Modules**. `src/styles/layout.css` (1400 lines) carries section composition, `globals.css` the primitives, `interactive.css` and `motion.css` the behaviour.
Design tokens in `src/styles/tokens.css`. A brand redesign is in progress, so avoid hardcoding colors. Use the token variables.
There is **no test framework** in this repo. Verification is `npm run build` (runs `tsc -b`), the voice gate at `scripts/voice-check.sh`, and measuring the running page.
`functions/api/chat.ts` is a stub returning 501 and is **not** wired into the deploy (`wrangler.toml` ships static assets only). Leave it alone unless asked.

## Open slots

**None.** Both `[[like this]]` placeholders were picked on 2026-08-20 and are written into `docs/site-copy-v3.md` inline. Ship them exactly as written and do not re-offer either choice.

- **Andrew's bio line:** "Twenty years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things."
- **IBM/MMG timeline framing:** "It started while he was still at IBM and has outlasted that tenure."

If new copy is ever missing, the rule still stands: ask rather than filling the gap.
