import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { Callout } from "./Callout";
import { step } from "../lib/reveal";

type Fix = {
  title: string;
  line: string;
  link: { label: string; href: string };
  /** Misha's white line icon for the offer, from public/art/subpage/. */
  icon?: string;
  /** The two stops of the tile's brand capsule, palette tokens. */
  from: string;
  to: string;
};

/**
 * Four tiles since the cut of 2026-11-22 (Drew's pass 1 handoff), down from
 * six: a title, one line, and the tile's existing link. The lines are the
 * handoff's, the header menu's subtext for each offer. The paragraph copy
 * each card carried is on its offer's own page. The Rescue card's text moved
 * to /fix-week, and the Brand system card is gone (/web-partner covers the
 * design system offer).
 */
const LEAD: Fix = {
  title: "Web Partner",
  line: "Senior help on call, month to month",
  link: { label: "See Web Partner", href: "/web-partner" },
  icon: "/art/subpage/subpage-icon-web-partner.svg",
  from: "var(--color-highlight)",
  to: "var(--color-accent-red)",
};
const FIXES: Fix[] = [
  {
    title: "AI Visibility",
    line: "Show up when people ask AI. No promises.",
    link: { label: "See AI Visibility", href: "/ai-visibility" },
    icon: "/art/subpage/subpage-icon-ai-visibility.svg",
    from: "var(--color-accent-red)",
    to: "var(--color-offer-web-partner)",
  },
  {
    title: "Platform Escape",
    line: "Off WordPress or Wix, onto something you own",
    link: { label: "See Platform Escape", href: "/platform-escape" },
    // No icon from Misha yet: a line drawing in the same weight, below.
    from: "var(--color-offer-reality-check)",
    to: "var(--color-accent-blue)",
  },
  {
    title: "Accessibility",
    line: "Works for everyone. Ready for the 2027 deadline.",
    link: { label: "See Accessibility", href: "/accessibility" },
    icon: "/art/subpage/subpage-icon-accessibility.svg",
    from: "var(--color-highlight)",
    to: "var(--color-offer-web-partner)",
  },
];

/** The offer's icon in a keyline circle. Platform Escape has no icon from
 *  Misha, so it gets an arrow leaving a box, drawn in the same line. */
function TileIcon({ icon }: { icon?: string }) {
  return (
    <span className="fix-icon" aria-hidden="true">
      {icon ? (
        <span className="fix-icon-art" style={{ "--tile-icon": `url("${icon}")` } as CSSProperties} />
      ) : (
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M13 4h7v7M20 4l-9.500 9.500M17.500 14.500V19a1.500 1.500 0 0 1-1.500 1.500H5A1.500 1.500 0 0 1 3.500 19V8A1.500 1.500 0 0 1 5 6.500h4.500" />
        </svg>
      )}
    </span>
  );
}

/** The tile's words and its pill. The pill's link is stretched over the
 *  whole tile, so the tile is one target with one name. */
function Tile({ fix, lead = false }: { fix: Fix; lead?: boolean }) {
  return (
    <>
      <TileIcon icon={fix.icon} />
      <h3 className="fix-title">{fix.title}</h3>
      <p className={`fix-line ${lead ? "copy" : "case-text"}`}>{fix.line}</p>
      <a className="btn btn-secondary fix-link" href={fix.link.href}>
        <span>{fix.link.label}</span>{" "}
        <span aria-hidden="true">→</span>
      </a>
    </>
  );
}

const capsule = (fix: Fix) => ({ "--tile-from": fix.from, "--tile-to": fix.to }) as CSSProperties;

/**
 * Partner, the third step of the page's spine, on the blue band 394:1893
 * (cut top left, curve bottom right), MB11 376:1756 and 376:1755, as a bento
 * grid. Web Partner is the large tile: its words on the left, the ownership
 * callout from the removed How we work section's Partner step in an inset
 * panel under them, and Misha's two-piece Z (370:1640, 370:1657, from that
 * same section) set large on the right inside dotted orbits. The other
 * three tiles carry their offer's icon and a capsule in the brand's shape
 * language, cropped by the tile's corner. Tiles are a darker tint of the
 * band, so white text gains contrast on them (5.73:1 at the lightest) and
 * the yellow titles, 24px bold and up, stay large text (3.99:1).
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
          <ul className="fix-grid">
            <li className="fix fix--lead reveal-item" style={{ ...step(0), ...capsule(LEAD) }}>
              <div className="fix-lead-copy">
                <Tile fix={LEAD} lead />
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
            {FIXES.map((fix, i) => (
              <li className="fix reveal-item" style={{ ...step(i + 1), ...capsule(fix) }} key={fix.title}>
                <span className="fix-capsule" aria-hidden="true" />
                <Tile fix={fix} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
