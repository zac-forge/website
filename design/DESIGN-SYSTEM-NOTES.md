# Design system notes

Written 2026-09-23 for the v4 rebuild, rewritten the same day once Misha's
board could be read in full. This file records where every design value came
from, what the board does not cover, every deviation the build made, and what
to ask Misha. The tokens themselves live in `design/tokens.json`, and
`src/styles/tokens.css` is generated from it by `scripts/build-tokens.mjs`.

Reference board: **MacBook Air - 1**, node `6:2`, in
https://www.figma.com/design/gLk6osGozuEch8I8bPv616/Zacforge?node-id=0-1.
Drew confirmed on 2026-09-23 that board 1 is the reference and board 2
(`42:230`, MacBook Air - 2) is not to be used.

## Status: the board has been read in full

The Figma MCP allows 20 calls a month on Andrew's seat and was exhausted on
the first day. The board was read instead through the Figma REST API with a
personal access token (stored outside the repo), which has no such cap:

| Read | Result |
|---|---|
| Node tree of `6:2` with fills, strokes, radii, effects, and text styles | Read in full, 238 nodes. |
| Rendered PNG of the board at 2x | Read. Every section was checked against it. |
| Illustrations, wordmark, and button as SVG | Exported. Now in `public/art/` and `public/brand/`. |
| Variables and published styles | **None exist.** The board is built from literal values. |

Every value in `tokens.json` now carries the node it was read from as
`figma:<node>`. Values the board does not cover are labelled `extension` and
listed below.

## What the board is

A light page: `#EBEBEB` ground, white cards, black type, one accent purple
`#9D4DFF` with blue `#2483C5` and red `#E83E39` on the second and third
service cards. Type is Avenir throughout: 900 for headings, nav, button, and
labels, 400 for body. Two display sizes, 62px and 48px, body 16px, nav and
header button 14px, body button 18px. Cards are 12px radius with no border
and no shadow. There are no effects anywhere. The illustration set is a
yellow, orange, and blue Z in several arrangements.

Section order on the board: header, hero, three stats, logo band, three
service cards, how it works (three zigzag steps with circles), case studies
(four, alternating), closing block. No footer. No mobile board.

## How the v4 copy maps onto it

The copy deck (`docs/site-copy-v4.md`) is the source of truth for content and
section order, and the board is the source of truth for how things look. Where
the two disagree, the copy order stands and the board's components are applied
to it:

| Copy section | Board component used |
|---|---|
| Header | Board header: wordmark at 48px inset, 14px nav, pill button |
| Hero | Board hero: two-tone 62px headline, 16px body, pill button, Z illustration `4:89` |
| 01 Track record | Board case studies: alternating two-column, 48px accent client name, bold discipline line (the domain), body, bold figure row (the metric). Team as three white cards. Illustration `44:437` and siblings beside the heading |
| 02 What changed | Not on the board. Two columns in the board's proportions, THEN and NOW table drawn with the accent |
| 03 What we do | Board cards `8:105` to `8:107`, wrapping, accents cycling |
| 04 How we work | Board "How it works": heading, intro, illustration `8:69` and `8:86`, three zigzag steps with 185px circles |
| 05 Start here | Two board cards |
| Closing | Board closing: accent headline, body, pill button, mark `42:346` over a 289px white circle `8:116` |
| Footer | Not on the board. Hairline and three quiet columns |

**Not built, by decision, because no copy exists for them:**

- The three stats (`8:43` to `8:45`, "100 lorem"). Question 4.
- The logo band (`8:60`: Nike, Walmart, IBM, Viacom, Unilever). The names
  conflict with the client guardrails in `CLAUDE.md` and none are in the track
  record. Question 5.

## Deviations from the board, each deliberate

1. **Font fallback.** Avenir ships with Apple devices only and is a licensed
   face for the web. `--font-sans` names Avenir first, so the board's face
   renders wherever it exists, and self-hosts Figtree (400 and 900) as the open
   fallback everywhere else. Question 1.
2. **Hero button position.** The board's hero button sits at x=319, 158px right
   of the copy. The closing button sits flush left. The build takes flush left
   for both and reads the hero placement as a draft artefact.
3. **The two purple vertical lines** (`8:35`, `8:36`, `#7B00FF`) run from the
   stat row to the middle of the IBM case study and end past the frame. They
   are read as column guides and not drawn. Question 3.
4. **Freehand placement snapped to a 4px scale.** The board places text at
   x=160, 161, 166, 170, 171, 174. Card padding and gap (11px) became 12px, and
   every other gap was snapped to the nearest step. Question 10.
5. **Card grid wraps.** The board draws three cards. The copy has four live
   entries and five with the brand system flag on. The grid keeps the board's
   three columns and wraps, so the fourth card sits alone on a second row.
   Question 6.
6. **Case study imagery.** Still open with Misha (count, size, ratio). The
   image column carries the board's own grey placeholder at the one full-size
   ratio the board shows (374 x 262, `46:521`). `images` is a prop on the case
   study, so the real assets drop in without a layout change.
7. **Case study figure row.** The board's "Stats" row of chips ("5 websites",
   "3 Campaigns") is carried by the metric sentence from the copy deck, set in
   the same 16px black weight. No chips, no "CV/AI tools".
8. **Step circles** stay grey placeholders, as on the board.
9. **Case studies illustration** is four separate exports whose clip groups
   trim differently from their bounding boxes, so they are composed by eye from
   the render rather than from node coordinates.
10. **Button hit area.** The body button is 31px tall on the board and the
    header button 24px. Both keep their drawn height; a pseudo-element widens
    the pointer target to 44px. Question 7.
11. **Eyebrows.** The board has none. The copy deck numbers every section, so
    the labels stay, in the nav's 14px black weight and the muted grey, no
    longer in a mono face (the board has no mono).
12. **Row titles** in the Services data were uppercase for the v3 row design
    and are now sentence case, as the board's card titles are.
13. **Mobile.** No mobile board exists. Everything collapses to one column at
    24px margins, the margin on the file's 390 podcast frames. Question 8.
14. **Hover, focus, and motion** are extensions: a small lift with one shadow,
    a nav underline that grows, an arrow that nudges, and the Reveal entrances
    from v3. Nothing animates continuously.
15. **The v1 dark-theme interactions** that had no counterpart in a light,
    flat design were retired: the hero forge artwork, the ember and mote
    fields, the horizon arc, and the service row ignition. The THEN and NOW
    row-draw survives. The signal-flow sequence was kept at first and then
    removed at Drew's request the same day. The retired files sit in
    `.superseded/` at the repo root until Drew says to delete them.
16. **Finding the offer pages.** Added at Drew's request on 2026-09-23, none
    of it on the board: the whole service card is the link with the label
    underlined at rest, "What we do" in the header opens a small menu of the
    offer pages on desktop (plain link on mobile), the footer lists the offers
    as their own group, and each offer page links to the other offers and back
    to the home page above its closing call to action.

## Extensions made without Figma coverage

- `color.line` (hairlines) reuses the placeholder grey. The board has no
  neutral between ground and text.
- `channel.*` RGB triples for translucent colour, used for selection and
  focus only.
- `leading.title` 1.2. The board's 48px titles sit in 70px boxes, which is a
  box height, not a leading.
- `text.lead` 18px, from the body button label, extended to offer page step
  titles and questions.
- `shadow.lift`, the only shadow, on hover only.
- `.btn-secondary` on the navy and maroon bands takes the band's white
  foreground for its text and outline, and fills white with black text on
  hover. Added 2026-11-05 for the "Book a 20-minute call" pill beside the
  hero, Reality Check, and form CTAs.
- `space.*` as a scale. The board's gaps are snapped to it, sources in the
  JSON say which measurement each step came from.
- `layout.gutter` curve between the 24px mobile margin and the 160px desktop
  margin.
- `motion.*` durations and easing, carried from v3.
- The secondary (outlined) button, the text link, and the footer.

### 2026-11-13 extensions

- **Desktop type floor.** At 1024px and wider, body and caption text
  (`.copy`, `.case-text`, case meta, status, and figure captions, the
  contact line, the footer email and legal line, the offer footnote, and
  the menu lines) is 16px, not MB11's 14. Labels stay at 14 (Drew).
- **Offer page hero** (`SubpageHero.tsx`) from Misha's 417:2047, 417:2079,
  417:2020, 417:1972, and 417:2111, read through the REST API and cached in
  `design/subpage-heroes/`. The swoosh art and the five icons in
  `public/art/subpage/` were generated from the nodes' vector geometry
  (the image endpoint was rate limited) and checked against Figma's render.
  The band cut is the home hero's (`--band-clip-hero`), identical on the
  comps. The band runs up under the header, which is clear at the top of an
  offer page and blue once it scrolls. Height from the new
  `--subpage-hero-height` token.
- **Home banner** (2026-11-13), Misha's 412:1907 and siblings, cached in
  `design/home-hero/`: `SubpageHero`'s home variant, so the same swoosh band
  and clear header as the offer pages. The Z (412:1934) is the existing
  `hero-z.svg`. The subline sets in 3 lines at the 16px desktop floor, so
  the bottom padding is trimmed to keep the band at 568. On phones the Z
  sits below the buttons. The hero's dotted line art is retired.
- **Reality Check line art.** With the icon points gone (Drew), the first
  dotted line of `lines-reality-check.svg` crossed question 1. It now stops
  left of the content column.

## v5: comp 7 (2026-11-04)

The v5 build (`docs/site-copy-v5.md`, `docs/site-v5-build-plan.md`) pulls the
layout toward Misha's **comp 7**, node `198:427` "MacBook Air - 7" in the same
file. Drew approved on 2026-11-04 reading it once, through the REST API, and
treating its new values as **provisional tokens**. Board `6:2` remains the
source for everything comp 7 does not change.

**The read:** one `GET /v1/files/{key}/nodes?ids=198:427` (fills and text
styles, no geometry paths) and one PNG render. Nothing else was requested.

**Tokens added, all `figma-comp7:<node>` in `tokens.json`, all provisional:**

| Token | Value | Node |
|---|---|---|
| `color.band-navy` | `#3B5480` | `198:428`, hero band |
| `color.band-maroon` | `#682738` | `198:429`, What changed band |
| `color.band-sky` | `#6EBFDC` | `198:551`, Who we are band |
| `color.accent-deep` | `#56246F` | `211:1408`, body button fill |
| `color.on-band` | `#FFFFFF` | `198:457`, hero headline |
| `text.subtitle` | 32px at 1280 | `211:1257` and the other 32px titles |
| `radius.sweep` | 240px at 1280 | measured off the render, see below |
| `radius.sweep-lg` | 380px at 1280 | measured off the render, `198:429` top right |
| `layout.flow-circle` | 133px | `211:1260` |
| `layout.team-circle` | 190px | `211:1380` |

**Sweep radii are measured, not read.** The response did not include
geometry, so the corner radii of the three band vectors were measured off the
render (about 240px on every sweep except the maroon band's top right, about
380px) and scale down with the viewport. Replace them with the path values
when the comp is next read with `geometry=paths`.

**How v5 maps onto comp 7:**

| Copy section | Built as |
|---|---|
| Header | Board header, now on navy on every page. Wordmark drawn white with a CSS filter on the board's SVG export, header button in the light accent as `198:430` |
| Hero | Navy band with the bottom-left sweep, the board's Z (`4:89`) |
| Logo band | Comp 7's row of five circles (`198:528`), set as muted text names per the deck |
| 01 Track record | Comp 7's split head (heading left, intro right). Four stacked white cards, text first, the number set large, per the deck. The comp's screenshot collage is not used |
| 02 What changed | On the ground. The three-step row below the copy, arrows drawing once (the kept THEN and NOW interaction) |
| 03 Reality Check | Not on comp 7. Comp 7's maroon band, sweeps top right and bottom left, five white cards on it |
| 04 What we fix | Six hairline rows, not the comp's three columns |
| 05 How we work | Heading with the v4 `8:69` and `8:86` art, a Check, Fix, Partner flow row, three principle columns |
| 06 Who we are | Sky band, sweeps top left and bottom right, three 190px circles |
| Closing | The contact form beside the v4 closing circle and mark |

**Deviations from comp 7, each deliberate:**

1. **Headings stay sentence case.** Comp 7 sets every heading in caps, and the
   hero in Avenir 300 with "still running" in 800 italic. CLAUDE.md requires
   sentence case. The hero keeps the emphasis with the two loaded weights,
   400 for the lead-in and 900 for "still running." Question 20.
2. **The maroon band is on the Reality Check, not What changed.** Comp 7
   draws it on What changed. The copy deck asks for the Reality Check to be
   the visual stop "in Misha's maroon band", and Drew moved it there on
   2026-11-04. On the band the body button takes the light accent, since the
   deep purple sinks into the maroon. Question 15.
   The same applies on the navy band (Drew, 2026-11-04): any primary button on
   a dark band uses the light accent.
3. **Body buttons in the deep purple, except on dark bands.** Comp 7 fills
   the hero and closing buttons with `#56246F` and keeps `#9D4DFF` for the
   header button only. Body `.btn-primary` uses `color.accent-deep` on the
   ground. On the navy and maroon bands it uses `color.accent`, because the
   deep purple nearly disappears there (Drew, 2026-11-04). Question 22.
4. **Comp 7's new illustrations are not exported.** The paper-plane set
   (`198:460` to `198:511`), the three What we do marks (`211:1272` to
   `211:1323`), and the big closing Z (`211:1384`) would need further reads.
   The v4 case-study Z set stands in on the maroon band. Question 16.

**Extensions without coverage in either board:**

- Offer page heroes on the navy band with the hero's sweep, so the navy
  header always sits on navy.
- Band foregrounds: white on navy and maroon, black on sky, eyebrows at 82%
  white on the dark bands, and the focus ring in the band's foreground.
- Nav hover on navy in the sky band colour. The accent on navy is about 2:1.
- Form fields: white, 1px border in `color.text-muted` for 3:1 boundary
  contrast, 4px radius.
- The flow row's arrows, drawn as a line and a chevron in `currentColor`.

## v6: MacBook Air - 11 (2026-11-12)

The home page now follows Misha's **MacBook Air - 11**, node `357:763`
(1280 x 8027, desktop only), on branch `v6-mb11`. It supersedes comp 7 and
board `6:2` wherever it speaks. Everything read from it is cached in
`design/mb11/` (see the README there), and the build works from that cache.
Tokens read off it are sourced `figma-mb11:<node>` in `tokens.json`.

**The read:** REST API node tree with geometry, 1x and 2x renders, SVG
exports, image fills. MCP: one `get_variable_defs` (`{}`, still no
variables) and one `get_design_context`.

**What MB11 changes, as tokens:** the blue band and the grey band replace
navy, maroon, and sky. The accent role moves to the button purple `#56246F`
(the light `#9D4DFF` is gone from the comp). Headings move to Helvetica,
light and bold runs mixed in one line, 64px hero and 48px sections. Body copy
is 14px Avenir Light or Helvetica Light. Eyebrows are an arrow and a capital
label, unnumbered. Bands carry one angular cut and one curved corner each,
read off their vector paths into `band.*` tokens.

### Deviations from MB11, each deliberate

| Where | Comp | Build | Why |
|---|---|---|---|
| Every blue band | `#2483C5` | `#227CBA` | `#2483C5` gives white 4.10:1 and the yellow fix titles 2.85:1, both failing WCAG AA. `#227CBA` is the same hue 5% darker: white 4.51:1, yellow 3.13:1 (24px bold, large text), cream 3.99:1. `#2483C5` stays as drawn where it is decoration or large text on the ground (eyebrow arrows, step rings, the strip at 3.44:1). |
| Hero | No eyebrow, booking pill, or proof line | Booking pill and proof line kept, eyebrow and "See what we've built" dropped | Drew kept the booking pills on 2026-11-05. CLAUDE.md has the proof line carry Fortune 50 and 2010. The proof line wraps before x=561 so it clears the dotted line 359:1256, and the band is 630 tall instead of 557. |
| Reality Check | Button only | Booking pill and the "How it works" link to /reality-check kept | As above, and the link is the page's internal path to /reality-check. |
| Fix Week | No link | "What a Fix Week covers" link kept | The only link from home to /fix-week. |
| Case study names | Above the image column, the Naval one overflowing into the image | Span both columns | One line each, no overlap. |
| Case screenshots | Three flipped by a node transform | Upright | Read as accidental. |
| Naval/Military Academy screenshot | usna.edu home page with the Academy crest | Placeholder slot | DoD guardrail, and it is not the Legacy Studios portal the card describes. |
| Logo band | Flat image (358:1079) | Live text in the same arrangement | Text is crisper, accessible, and indexable. |
| Problem heading leading | 41 on 48 | 50 on 48, as every other heading | One heading leading. Question for Misha. |
| Team | Lorem names and copied bios, no role line | Live names, roles, and bios; initials in Andrew's circle; plain circles for the two unnamed roles | Placeholders in the comp. Consent rule for names. A photo dropped in `src/assets/team/` replaces the circle. |
| Nav hover | Not drawn | 2px yellow underline, text stays white | A colour change alone cannot reach 4.5:1 on the blue. |
| Footer | None | The live footer, restyled by tokens | Nothing to replace it with. |
| CONNECT "Principals" (390:1884) | Stray text | Not built | Leftover, per Drew. |

### Extensions made without MB11 coverage (the comp is desktop only)

- **≤ 900px:** hero single column with the Z above the headline at half size;
  the Problem, Fix Week, and How we work art drops below the copy at 60%; the
  dotted line art is hidden; Reality Check points 2 x 2 and questions in two
  columns; cases keep two columns at 2:3; fixes 2-up; the strip 2 x 2; the
  closing circle hidden, as in v5.
- **≤ 760px:** band corners scale to 45% (`layout.band-k-compact`); body copy
  goes from 14px to 16px; cases stack name, image, copy; the step row turns
  vertical with the ring left and the arrows hidden; team cards put a 97px
  circle left of the text; the strip drops to 24px.
- **≤ 620px:** Reality Check points set the icon left of its line; questions
  and fixes go to one column, fixes left aligned.
- The header keeps its menu button below 860px.

## Questions for Misha

1. **Avenir.** The board is set in Avenir and Avenir Next. Is there a web
   licence, or should the site standardise on an open face? The build renders
   Avenir on Apple devices and Figtree elsewhere until this is settled.
2. **Board status.** Lorem ipsum throughout, "100 lorem" stats, "1 Lorem"
   steps. Which parts are final direction and which are still moving?
3. **The two purple vertical lines** at x=161 and x=1117. Guides, or a drawn
   element?
4. **Stats row.** Three figures under the hero. Which three, if any? Nothing
   in the copy deck defines them, so the row is not built.
5. **Logo band.** Nike, Walmart, IBM, Viacom, and Unilever. IBM cannot appear
   as a client, and none of the five is in the track record. Is this "where
   the team has worked"? If so it needs that framing and clearance for each
   mark. The band is not built until this is answered.
6. **Service cards.** Three on the board, four live in the copy (five with the
   brand system). Wrap to a second row, or does the section change shape?
7. **Button.** 31px tall in the body and 24px in the header. Are those final
   heights? Hover, focus, and pressed states are not on the board.
8. **Mobile.** No 390px board. One column at 24px margins is the assumption.
9. **Case study imagery.** Count, size, and ratio, still open. The build shows
   one grey placeholder per study at 374 x 262.
10. **Grid.** Elements sit at x=160, 161, 166, 171, 174. The build snapped to a
    4px scale. Is there an intended grid?
11. **Illustrations.** The hero Z, the two "How it works" pieces, the four
    "Case studies" pieces, and the closing mark are exported as SVG. Are these
    final, and do any of them animate?
12. **Wordmark.** The header wordmark (`4:106`) is lowercase "zacforge" in
    Avenir Next with the small Z glyph. Is this the brand lockup going forward,
    replacing the ZACFORGE raster set?
13. **Team.** The nav on the board has "Senior team" but no team section is
    drawn. The build uses three cards. Is that the intent?
14. **Footer.** None on the board. The build has a hairline and three columns.
15. **Maroon band moved.** Comp 7 has the maroon band on What changed and no
    Reality Check section. Drew moved the band to the Reality Check on
    2026-11-04 so the check is the visual stop, as the copy deck asks, with
    the five questions as white cards on it and the light accent button. Does
    that hold up in your direction, and what should What changed carry now?
16. **Comp 7 illustrations.** The paper-plane set on the maroon band, the three
    What we do marks, and the big closing Z are not exported yet. Final enough
    to export?
17. **Closing.** Comp 7 shows an email link and Book a call over the big Z. v5
    replaces both with a contact form. The build keeps the v4 circle and mark
    beside the form. Big Z, circle, or neither?
18. **What we fix.** Comp 7 draws three columns with marks. v5 has six short
    rows. The build uses hairline rows. Should the first three carry the marks,
    as the deck suggests?
19. **How we work.** Comp 7 has a five-step process (Intro, Deep dive, Design,
    Production, Reassess) and a Tools, Zacforge, Client diagram. v5 has three
    steps and no diagram copy. The build shows the three steps and leaves the
    diagram out.
20. **Caps.** Comp 7 sets headings in caps, and the hero in a light weight with
    a heavy italic. The site's voice rules require sentence case, and only 400
    and 900 are loaded. Is caps the direction, and is a light weight coming?
21. **Navy header everywhere.** The header sits on navy on every page and each
    offer page opens on a navy band. Intended?
22. **Two purples.** Deep `#56246F` for body buttons, light `#9D4DFF` for the
    header button, as the comp draws them. Confirm both, and which one carries
    links and numbers.
23. **Sweep radii.** Measured off the render at about 240px and 380px. What
    are the drawn values, and how should they behave on a phone?
24. **Case study imagery.** Comp 7 shows a collage of full screenshots. The v5
    deck asks for text-first cards with one tight crop at most. The build ships
    the cards with no image until a crop is chosen.


### Decided by Drew, 2026-11-12

- 25: the darker blue `#227CBA` is accepted.
- 27, 28: replaced by Drew's own screenshots. Heritage shows hgpauction.com.
  The academies card shows usna.legacystudios.com, cropped to the headline
  and buttons so no insignia shows. The USMA shot has cap badges on every
  cadet and is not used.
- 31, 32: nav is What we do, Case studies, How we work, Team, and "Let's
  talk" books the 20-minute call. Connect stays the form section.
- Copy: live wording kept for the buttons, the Reality Check points, and the
  client names. "When the Check calls for more." The HIPAA line is
  "HIPAA-regulated healthcare systems".

Still open for Misha: 26, 29, 30, and 33 to 38.

### Copy to the comp, and "The Fix" (Drew, 2026-11-12, second round)

This reverses the first round's copy calls. MB11's own wording now wins
wherever it differs from the shipped copy:

- Buttons "FREE Reality Check" (hero, Reality Check section, /reality-check).
- Reality Check points "Completely FREE assessment" and "Short list of 5
  questions".
- Client names "Heritage Global" and "Teddy Bear Portraits".
- The comp's casing and punctuation: "Still Running", "When the Check calls
  for more", "AI Visibility", "Check. Fix. Partner", "Send us what you built"
  (no closing periods where the comp has none). This overrides the sentence
  case rule for these headings.

Kept: "HIPAA-regulated healthcare systems", the nav and Team / Principals
naming, "Let's talk" to the booking page, the questions numbered 1 to 5, and
the quiet typo fixes ("Let's", "$1B+", no trailing periods on fix titles).

**The Fix.** The offer is still the Fix Week. Its short label is "The Fix" in
the nav menu, footer, eyebrows (THE FIX), the home link ("What the Fix
covers"), the related-offer cards, the page title ("The Fix: one week, fixed
price | ZAC Forge"), and llms.txt's link. Body copy keeps "Fix Week" where it
names the offer. The schema Service keeps "The Fix Week" and adds
`alternateName: "The Fix"`. The headline stays "One week. Start with what
matters most." In How we work, "One week" in the Fix step links to
/fix-week, so the step and the section read as one offer.

Follow-up (Drew, 2026-11-12): titles keep "| ZAC Forge". llms.txt (and the
schema, should client names ever go in it) uses the full names "Heritage
Global Partners" and "Teddy Bear Portraits (Legacy Studios)"; the page shows
the comp's short names. "AI Visibility" is capitalised wherever it names the
offer, including the /ai-visibility headline.

### Added with MB11 (2026-11-12)

25. **Blue contrast.** `#2483C5` fails AA for white body text (4.10:1) and the
    yellow fix titles (2.85:1). The build uses `#227CBA`. Keep that, or pick
    another blue?
26. **Helvetica.** Headings are Helvetica Light and Bold. Windows has Arial,
    which has no light weight, so the light runs render regular there. A
    licensed webfont, an open alternative, or accept it?
27. **Naval and Military Academy image.** The comp's screenshot is the
    official usna.edu home page with the Academy crest, which the DoD
    guardrail rules out, and the card describes the Legacy Studios portal.
    Can we have a screenshot of usna.legacystudios.com without insignia?
28. **Heritage image.** The screenshot is Heritage Global Inc.'s corporate
    site, and the card is about hgpauction.com. Intended?
29. **Flipped screenshots.** Three of the four are flipped vertically in the
    comp. The build shows them upright. Accidental?
30. **Problem heading leading.** 41 on 48, tighter than every other heading
    (50 on 48). Intended, or one leading for all?
31. **Nav.** "Case studies", "Senior team", "Connect", and "How we work" left
    out of the nav. The team section is "Team" (eyebrow) and "Principals"
    (heading) while the nav says "Senior team". One name?
32. **"Let's talk".** It goes to the form, like "Connect". Should it go to
    the 20-minute call booking instead?
33. **Hero and Reality Check extras.** The build keeps the booking pill and
    the proof line in the hero, and the booking pill and "How it works" link
    in the Reality Check, which the comp leaves out. Where do you want them?
34. **Nav hover.** A yellow 2px underline. A colour change alone cannot
    reach 4.5:1 on the blue. OK?
35. **Footer.** None in the comp. The live footer is kept, restyled.
36. **Rescue's yellow.** `#FDC90E`, the other titles `#FDD41A`. Treated as one
    yellow.
37. **Team circles.** Initials for Andrew until a photo arrives, plain white
    for the two unnamed roles. OK, or something else in the circles?
38. **Tablet and phone.** The comp is desktop only. The calls made are in the
    v6 section above. Anything you would set differently?

39. **Recent work block.** A fifth project (Calvary Chapel Conejo Valley)
    sits in its own "Recent work" block, on the ground directly before the
    Still Running band, in the same case card style and indent, with the
    sunburst artwork from the CCCV site. It is kept apart from Still Running,
    which is systems that have run for years without us. Not on MB11. Where
    and how should it sit? (Drew, 2026-11-12)

### Added with the home batch and offer page heroes (2026-11-13)

40. **Offer page hero accents.** Your five heroes run the band from blue at
    the top to a colour per page at the bottom: Reality Check `#9D4DFF`,
    The Fix `#00BC13`, AI Visibility `#E83E39`, Web Partner `#FDD41A`,
    Accessibility and Performance `#973B19`. The build has the hook
    (`accent` on each offer, `--hero-accent` on the section) but every page
    ships flat blue until the colours are approved. White title contrast
    over the bottom of the yellow and green bands needs checking when they
    land.

41. **Accessibility hero title weight.** "Accessibility & Performance" is
    Helvetica Light (300) on 417:2128, the other four titles Bold. The build
    sets all five Bold. Intended?

42. **Offer page structure under the hero.** The comps show the hero only.
    The page's headline, the line placing it behind the Reality Check, and
    the intro now sit on the ground under the band, then the existing body.
    The eyebrow is gone from these pages. Anything you would set differently?

43. **Case studies.** Recent work and Still Running are merged (Drew), CCCV
    first, four cards (Teddy Bear Portraits and the academy portals are one
    card, with both screenshots stacked). Each card: client, industry,
    status in bold, Problem / What we built / Proof with bold labels, the
    number, then the product name as the link. Question 39 is superseded.

## Structure of MacBook Air - 1 (node 6:2), for reference

1280 wide, 6924 tall. Positions from the board's top left.

1. **Header**, 57px. Wordmark `4:106` at (48, 20), 103 x 19.5. Nav items
   `7:17` at x=169, 277, 393, 501, 14px 900. Button `7:32` at (1117, 17),
   127 x 24, pill, `#9D4DFF`, white 14px 900 label and a drawn arrow.
2. **Hero**. Headline `7:8` "Same partner, new capabilities" at (161, 123),
   62px 900, line height 70, second line in the accent. Body `7:28` 464 wide,
   16px, line height 21.86. Button `8:46` at (319, 441), 164 x 31, 18px label.
   Illustration `4:89` at (754, 142), 358 x 311.
3. **Three stats** `8:43` to `8:45` at y=581, x=161, 582, 1003, 62px 900 in
   `#646977`.
4. **Logo band** `8:60`, white, full bleed 1280 x 237 at y=779.
5. **What We Do** `8:53` at y=1149. Cards `8:105` to `8:107` at y=1262,
   312 x 365, radius 12, 11 apart. Titles 48px at +11, +28 in purple, blue,
   red. Body 16px at +11, +104, 284 wide.
6. **How it works** `8:104` at y=1805, intro 505 wide, illustration `8:69`
   (782, 1819) 317 x 155 and `8:86` (891, 1964) 204 x 95. Steps "1 Lorem"
   (171, 2083), "2 Lorem" (543, 2366), "3 Lorem" (170, 2637), 48px accent,
   bodies 514 to 527 wide about 100 below. Circles `8:117` to `8:119`, 185px,
   `#D9D9D9`, at (808, 2109), (260, 2377), (808, 2651).
7. **Case Studies** `44:400` at y=3125, illustration `44:437` and siblings to
   the right, intro 568 wide. Four alternating studies: Walmart left, Nike
   right, IBM left, Viacom right. Each: name 48px accent, discipline line 16px
   900, body 16px 482 to 514 wide, "Stats" row 16px 900 with chips 143 apart,
   images opposite. Pitch about 420 to 460.
8. **Closing** `8:108` "Bring Us Your Problem" at (161, 6359), 665 wide, 62px
   accent. Body `43:369` 505 wide. Button `43:364` at (161, 6527). White circle
   `8:116` 289 at (873, 6316), mark `42:346` 319 x 332 at (866, 6304).

The 390px frames on the page (`2:1696`, `2:1605`, `2:1508`) are podcast
episode layouts, not this site. `MacBook Pro 16" - 1` (`6:3`) is empty.
