import { Reveal } from "./Reveal";
import { Callout } from "./Callout";
import { OfferTile, TileBody, capsuleStyle } from "./OfferTiles";
import type { Tile } from "./OfferTiles";
import { step } from "../lib/reveal";

/**
 * Four tiles since the cut of 2026-11-22 (Drew's pass 1 handoff), down from
 * six: a title, one line, and the tile's existing link. The lines are the
 * handoff's, the header menu's subtext for each offer. The paragraph copy
 * each card carried is on its offer's own page. The Rescue card's text moved
 * to /fix-week, and the Brand system card is gone (/web-partner covers the
 * design system offer).
 */
const LEAD: Tile = {
  title: "Web Partner",
  line: "Senior help on call, month to month",
  link: { label: "See Web Partner", href: "/web-partner" },
  icon: "/art/subpage/subpage-icon-web-partner.svg",
};
const FIXES: Tile[] = [
  {
    title: "AI Visibility",
    line: "Show up when people ask AI. No promises.",
    link: { label: "See AI Visibility", href: "/ai-visibility" },
    icon: "/art/subpage/subpage-icon-ai-visibility.svg",
  },
  {
    title: "Platform Escape",
    line: "Off WordPress or Wix, onto something you own",
    link: { label: "See Platform Escape", href: "/platform-escape" },
  },
  {
    title: "Accessibility",
    line: "Works for everyone. Ready for the 2027 deadline.",
    link: { label: "See Accessibility", href: "/accessibility" },
    icon: "/art/subpage/subpage-icon-accessibility.svg",
  },
];

/**
 * Partner, the third step of the page's spine, on the blue band 394:1893
 * (cut top left, curve bottom right), MB11 376:1756 and 376:1755, as a bento
 * grid of the shared offer tiles (OfferTiles.tsx). Web Partner is the large
 * tile: its words on the left, the ownership callout from the removed How
 * we work section's Partner step in an inset panel under them, and Misha's
 * two-piece Z (370:1640, 370:1657, from that same section) set large on the
 * right inside dotted orbits. Tiles are a darker tint of the band, so white
 * text gains contrast on them (5.73:1 at the lightest) and the yellow
 * titles, 24px bold and up, stay large text (3.99:1).
 */
export function WhatWeFix() {
  return (
    <section
      id="what-we-do"
      className="what-we-fix band band--blue fixes-band"
      aria-labelledby="what-we-do-heading"
    >
      <div className="container">
        <Reveal className="what-we-fix-head">
          <p className="eyebrow">Partner</p>
          <h2 className="h2" id="what-we-do-heading">
            <span className="h-light">When</span> the Check <span className="h-light">calls for</span>{" "}
            more
          </h2>
        </Reveal>
        <Reveal stagger>
          <ul className="fix-grid fix-grid--bento">
            <li className="fix fix--lead reveal-item" style={{ ...step(0), ...capsuleStyle(LEAD.link.href) }}>
              <div className="fix-lead-copy">
                <TileBody tile={LEAD} lead />
                <Callout>
                  You own the code, the accounts, and the files. If we vanished tomorrow, you'd be fine.
                </Callout>
              </div>
              <div className="fix-lead-art" aria-hidden="true">
                <svg className="fix-orbits" viewBox="0 0 320 320" focusable="false">
                  <circle cx="160" cy="160" r="156" />
                  <circle cx="160" cy="160" r="112" />
                  <circle cx="160" cy="160" r="66" />
                </svg>
                <img className="fix-lead-z fix-lead-z--a" src="/art/mb11/howwework-art-a.svg" width={183} height={110} alt="" loading="lazy" />
                <img className="fix-lead-z fix-lead-z--b" src="/art/mb11/howwework-art-b.svg" width={118} height={71} alt="" loading="lazy" />
              </div>
            </li>
            {FIXES.map((tile, i) => (
              <OfferTile tile={tile} index={i + 1} key={tile.title} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
