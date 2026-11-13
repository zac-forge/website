# MacBook Air - 11 (node 357:763), cached

Misha's home page comp for v6, read once on 2026-11-12 and cached here so the
build never has to go back to Figma. File `gLk6osGozuEch8I8bPv616`, frame
1280 x 8027, desktop only. Nothing outside this frame applies (comps 1 to 9
and the loose notes on the page are older).

## How it was read

- **Figma REST API** (no quota): `GET /v1/files/{key}/nodes?ids=357:763&geometry=paths`,
  PNG renders at 1x and 2x, SVG exports of every illustration, icon, band,
  and line, and the six image fills.
- **Figma MCP**, one call each, as asked: `get_variable_defs` on 357:763
  returned `{}` (the file has no variables, as in September), and
  `get_design_context` returned reference code. The MCP tool did not persist
  its output to disk, so that code is not saved verbatim. `node-357-763.json`
  is a superset of it: every node, style run, transform, and path.

## Files

| File | What it is |
|---|---|
| `node-357-763.json` | The full node tree with geometry, from the REST API |
| `tree.txt` | That tree flattened: id, type, name, frame-relative x,y, size, fills, strokes, type styles, text |
| `screenshot-1x.png`, `screenshot-2x.png` | The frame rendered by Figma |
| `assets/svg/` | SVG exports: `hero-z`, `problem-art`, `fixweek-art`, `howwework-art-a/b`, the four Reality Check icons, the three step rings, `flow-partner-glyph` (372:1726, a sibling of its ring), the band shapes, buttons, arrows, dotted lines |
| `assets/raw/` | The image fills at full size, upright (the comp flips three of them with a node transform) |

## Not shipped from here

- `assets/raw/359-1133.png` is the official usna.edu home page with the
  Naval Academy crest. The DoD guardrail in CLAUDE.md rules it out, so the
  site shows a placeholder in that slot. Kept here only as the record of
  what the comp contains.
- `assets/raw/358-1079.png` is a flat image of the live logo band. The site
  builds the band as text.
- `assets/raw/384-1811.png` is a screenshot of the live contact form. The
  site renders the real form.
