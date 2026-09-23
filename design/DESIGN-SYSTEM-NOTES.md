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
| 04 How we work | Board "How it works": heading, intro, illustration `8:69` and `8:86`, three zigzag steps with 185px circles. The signal-flow sequence from v1 sits between intro and steps |
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
    row-draw and the signal-flow sequence survive. The retired files sit in
    `.superseded/` at the repo root until Drew says to delete them.

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
- `space.*` as a scale. The board's gaps are snapped to it, sources in the
  JSON say which measurement each step came from.
- `layout.gutter` curve between the 24px mobile margin and the 160px desktop
  margin.
- `motion.*` durations and easing, carried from v3.
- The secondary (outlined) button, the text link, and the footer.

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
