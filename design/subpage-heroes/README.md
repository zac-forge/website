# Offer page heroes (Misha, 2026-11-13)

File `gLk6osGozuEch8I8bPv616`, read through the REST API on 2026-11-13:
417:2047 Reality Check, 417:2079 The Fix, 417:2020 AI Visibility,
417:1972 Web Partner, 417:2111 Accessibility and Performance.

- `nodes.json`: the five swoosh groups, with vector geometry.
- `parts.json`: each hero's band vector, wordmark, nav, title, and icon.
- `swoosh-render-417-2047.png`: Figma's render of the swoosh group (the
  black is transparency). The group is identical on all five pages.

Each hero is loose layers on the page, not a frame: the band (1280 x 568,
the home hero's cut, a linear gradient from `#2483C5` at the top to the
page's accent at the bottom), the swoosh group masked to the band, the
wordmark at (41, 31), the nav at (162, 18), the icon ending at y 232, and
the title (Helvetica Bold 64 on 59) at (157, 258).

`public/art/subpage/` was generated from these JSON files' geometry, since
the image endpoint was rate limited that day, and checked against the render.
