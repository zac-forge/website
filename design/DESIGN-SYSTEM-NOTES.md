# Design system notes

Written 2026-09-23 while preparing the v4 rebuild. This file records where every
design value came from, what could not be read, and what to ask Misha. The
tokens themselves live in `design/tokens.json`, and `src/styles/tokens.css` is
generated from it by `scripts/build-tokens.mjs`.

Reference board: **MacBook Air - 1**, node `6:2`, in
https://www.figma.com/design/gLk6osGozuEch8I8bPv616/Zacforge?node-id=0-1.
Drew confirmed on 2026-09-23 that board 1 is the reference and board 2
(`42:230`, MacBook Air - 2) is not to be used.

## Status: what was and was not readable

| Read | Result |
|---|---|
| File structure (`get_metadata`, page `0:1`) | Read in full. 772 lines of node ids, names, positions, and sizes. |
| Variables (`get_variable_defs`) | **Zero variables in the file.** The call on `42:230` returned an empty set. The call on `6:2` was refused by the rate limit, but variables are file-wide, so the empty result stands. |
| Colour, type, effect styles | **Not readable.** `get_design_context` and `get_screenshot` were refused: the Figma plan (Starter, View seat) allows 20 MCP tool calls a month and the quota was exhausted after the structure read. |
| Screenshots of the board | Not readable, same reason. |

Consequence: every colour, font family, weight, type size, radius, and shadow
in `tokens.json` is the **v3 working-copy value, carried over as provisional**
and labelled `site:v3 provisional`. None of it has been checked against Misha's
board. What was read from Figma is geometry only, labelled
`figma:frame-geometry` with the node id.

To unblock: a Full or Dev seat on a Professional plan raises the limit to 200
calls a day. Alternatively Misha can publish colour and text variables (or
styles) and export one PNG of the board, and both can be read in a handful of
calls.

## Where each value came from

### Colour, `color.*` and `channel.*`

All `site:v3 provisional`. The palette is the one Drew held steady for the copy
work and is expected to change. Eleven values that were raw hex in the
stylesheets were promoted to named tokens so the lint could pass without
changing a single rendered pixel:

| Token | Was | Used for |
|---|---|---|
| `color.surface-forge` | `#120a0c` | unlit brand mark ground |
| `color.forge-shade` | `#cf2c3d` | primary button gradient bottom |
| `color.forge-tint` | `#f4596a` | primary button hover gradient top |
| `color.on-forge` | `#0B0B0D` | text on red |
| `color.white` | `#fff` | glow cores, focus ring, selection |
| `color.black-pure` | `#000` | mask gradients only |
| `color.text-secondary` | `#d8d7da` | second line of split headings |
| `color.text-body-strong` | `#cfcdd1` | proof line |
| `color.text-ghost-1/2/3` | `#55555f` `#3a3a45` `#212129` | ghosted structural numerals and arrows |
| `color.border-strong` | `#66666F` | secondary button hover border |

`channel.*` holds RGB triples (`232 52 69` and so on) so that the 79
translucent glows, sheens, and masks in the stylesheets are written as
`rgb(var(--forge-rgb) / .3)` instead of `rgba(232, 52, 69, .3)`. A brand red
change now re-tints every glow. The brand red itself (`#E83445` against the
logo sheet's `#FF2D55`) is a known mismatch that resolves in the redesign, per
`CLAUDE.md`.

### Type, `font.*`, `weight.*`, `text.*`

All `site:v3 provisional`: Space Grotesk 500 to 700 for display, Inter 400 to
600 for body, IBM Plex Mono 400 and 500 for eyebrows and metadata. Figma text
styles were not readable, so the families on Misha's board are unknown. Two
sizes that were inline in `globals.css` (`h2`, `h3` clamps) were promoted to
`text.h2` and `text.h3`.

What the board does show about type is geometry: every section heading text
node is 70px tall (`8:53`, `8:104`, `44:400`, `8:108`), the hero headline block
is 493 x 176 for two lines, the three stat figures are 111 x 129, and body
paragraphs run 505 wide. That is consistent with a display size around 56 to
60px for section headings and a hero around 80px, but it is an inference, not
a reading.

### Spacing, `space.*`

`site:v3 provisional`, a 4px scale. Three steps agree with the board: the 24px
mobile margin on the 390 frames, the 48px logo inset in the header (`4:106` at
x=48), and the 160px desktop margin. Positions inside the board are frequently
off-grid (x=161, 166, 171, 174, y=1290), which reads as freehand placement
rather than an applied grid.

### Radius, `radius.*` and shadow, `shadow.*`

`site:v3 provisional`. The board uses `rounded-rectangle` nodes for the
service cards, logo band, and case study images, but metadata does not carry
the radius value. No effect styles were readable. `shadow.*` names the four
shadow stacks the v3 button and surface use, extracted so components stop
composing their own.

### Layout, `layout.*`

`content-width` is the one **known conflict**: the live site runs a 1280px
content column, the board uses 1280 with 160px margins, so 960. The live value
is held until Misha confirms (question 4 below).

### Figma geometry, `figma-geometry.*` (not emitted to CSS)

Read off board `6:2`. Kept in the JSON with `"$emit": false` as evidence for
the rebuild, and so the eventual real tokens can be checked against them.

## Structure of MacBook Air - 1 (node 6:2), top to bottom

1280 wide, 6924 tall. Section order as drawn:

1. **Header**, 57px. Wordmark `4:106` at (48, 20), 103 x 19.5. Four nav items
   from component `7:17` starting x=169, 93 wide, roughly 108px step. Button
   component `7:32` at (1117, 17), 127 x 24.
2. **Hero**. Headline `7:8` "Same partner, new capabilities" at (161, 123),
   493 x 176. Body `7:28` 505 wide. Button instance `8:46` at (319, 441),
   164 x 31. Vector illustration `4:89` at (754, 142), 358 x 311.
3. **Three stats** `8:43` to `8:45` at y=581, x=161, 582, 1003, each 111 x 129.
4. **Logo band** `8:60`, full bleed 1280 x 237 at y=779, five logo images of
   mixed size between x=161 and 1118.
5. **What We Do** `8:53` at y=1149, then three cards `8:105` to `8:107` at
   y=1262, 312 x 365 each with an 11px gap, titled Advise, Build, Partner.
6. **How it works** `8:104` at y=1805, intro 505 wide, then three numbered
   steps in a zigzag with 185px circles `8:117` to `8:119` and two vector
   illustrations `8:69`, `8:86`.
7. **Case Studies** `44:400` at y=3125 with an illustration `44:437` to the
   right, intro 568 wide. Four alternating two-column studies between vertical
   rules at x=161 and x=1117: Walmart (left), Nike (right), IBM (left), Viacom
   (right), each with a discipline line, a "Stats" row of chips, and 2 to 3
   images.
8. **Closing** `8:108` "Bring Us Your Problem" at y=6359, 665 wide, body 505,
   button `43:364` at y=6527, large mark `42:346` 319 x 332 at right over a
   289px square `8:116`.

No footer beyond the closing block. No mobile version of this board.

## Open by design: case study images

Drew confirmed on 2026-09-23 that Misha is still deciding how the case
studies carry images (how many, what size, what ratio). The
`figma-geometry.case-study-block` measurements above are a snapshot of a
draft, not a spec. Build the case study component so that image count and
ratio are props and tokens, and expect to revise it once the board is final.
Nothing else on the page depends on that decision.

## Missing or inconsistent

- **No variables, and styles unreadable.** The board is built from literal
  values. Nothing can be pulled as a token until Misha adds variables or a
  seat upgrade allows reading the styles off the frames.
- **Placeholder content throughout.** Every paragraph is lorem ipsum, stats are
  "100 lorem", steps are "1 Lorem". The only real copy is the hero line, the
  section titles, the service names, and the client names.
- **Client names conflict with the guardrails.** The case studies are Walmart,
  Nike, IBM, and Viacom. `CLAUDE.md` forbids IBM in a client wall (the team
  worked at IBM, IBM was not a client), and none of the four appear in the
  v3 track record (Heritage Global Partners, Legacy Studios, US Naval Academy
  and US Marines, Legal Access Alameda). The logo band presumably carries the
  same set.
- **"CV/AI tools" chips** (`46:535`, `46:536`) use the word "AI", which has zero
  permitted occurrences on the site.
- **Two component symbols only**: `Button` (`7:32`) and a nav item (`7:17`).
  The button appears at two sizes, 127 x 24 in the header and 164 x 31 in the
  body, with no variant structure visible in metadata. Cards, chips, stat
  tiles, and case study blocks are drawn as loose rectangles and text, not
  components.
- **Off-grid placement.** Text and cards start at x=160, 161, 166, 170, 171,
  174 within the same board.
- **Content width** 960 on the board against 1280 live.
- **Vertical rules run past the frame.** `8:35` and `8:36` start at y=4486 and
  are 3930 tall, ending at 8416 on a 6924-tall frame.
- **The 390px frames on the page are not this site.** `2:1696`, `2:1605`,
  `2:1508` are "podcast episode" layouts. There is no mobile ZAC board, so the
  responsive behaviour below 1280 is undesigned.
- **Board 2 exists and diverges** (stacked service rows instead of cards,
  simpler case study cards, a full-bleed closing band). Drew has said to
  ignore it, so it is documented here only so nobody picks it up by mistake.
- **`MacBook Pro 16" - 1`** (`6:3`, 1728 x 1117) is an empty frame.

## Extensions made without Figma coverage

Where the board does not cover a layout, the system was extended rather than a
new style invented. Each extension is provisional and should be replaced when
the real values land.

- `channel.*` RGB triples for translucent colour. Not a Figma concept, but the
  only way to keep 79 alpha colours on tokens.
- `color.text-ghost-1/2/3`, `color.text-secondary`, `color.text-body-strong`:
  intermediate greys that existed as raw hex in v3.
- `shadow.*`: four named stacks extracted from the v3 button and surface.
- `text.h2`, `text.h3`: promoted from inline clamps.
- The 390px layout of the v4 site will have to be derived from the desktop
  board (single column, 24px margins as on the podcast frames), since no
  mobile ZAC board exists.

## Questions for Misha

1. **Colour and type.** The file has no variables and the MCP could not read
   styles. Can you add colour, type, and spacing variables to the file, or send
   the palette (hex), families, weights, and size scale? Even a single exported
   PNG of board 1 would let the values be read.
2. **Dark or light?** The current site is near-black with a red accent. Is
   board 1 on a dark ground or a light one?
3. **Clients.** The case studies and logo band name Walmart, Nike, IBM, and
   Viacom. IBM cannot appear as a client, and the other three are not in the
   track record. Are these placeholders for the four real case studies, or is
   this meant to read as "where the team has worked"? The two need different
   framing and the site rules treat them differently.
4. **Content width.** Board 1 uses 160px margins on 1280, so a 960px column.
   The live site uses 1280. Is 960 the intent at 1280, and how should it scale
   at 1440 and above?
5. **Button.** Two sizes appear, 127 x 24 in the header and 164 x 31 in the
   body. Are those two variants, and what are the radius, fill, and hover and
   focus states?
6. **Service cards.** Three 312 x 365 cards. The copy spec calls for five
   service rows, one of them hidden behind a flag. Should the card grid become
   five, or does the section change shape?
7. **Case studies.** The alternating two-column layout with image sets: what
   are the image aspect ratios and the "Stats" chip style? One chip reads
   "CV/AI tools", and "AI" is banned on the site, so what replaces it?
8. **Mobile.** There is no 390px version of board 1. Should the desktop board
   be collapsed to one column with 24px margins, or is a mobile board coming?
9. **Type scale.** Section headings are all 70px tall text nodes and the hero
   block is 176 tall for two lines. What are the actual sizes and line heights?
10. **Grid.** Elements sit at x=160, 161, 166, 171, 174. Is there an intended
    grid or spacing scale, or should the build snap everything to the 4px scale?
11. **Radius and shadow.** The cards and images are rounded rectangles. What
    radius, and are there any shadows or borders on the dark ground?
12. **Illustrations.** The hero vector (358 x 311), the two How-it-works
    vectors, and the Case Studies vector: are these final artwork to export as
    SVG, and do they animate?
