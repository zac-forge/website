import type { CSSProperties } from "react";
import { step } from "../lib/reveal";
import { ALL_OFFERS } from "../pages/offers";
import type { Offer } from "../pages/offers";

/**
 * The bento tile for an offer, shared by the home Partner section
 * (WhatWeFix.tsx) and the "Other services" block on every subpage
 * (RelatedOffers.tsx), so a change to the tile reaches every page. A tile
 * is the offer's icon in a keyline circle, a title, one line, and a pill
 * whose link is stretched over the whole tile, on a darker tint of the blue
 * band, with a gradient capsule in the brand's shape language behind.
 */
export type Tile = {
  title: string;
  line: string;
  link: { label: string; href: string; ariaLabel?: string };
  /** Misha's white line icon for the offer, from public/art/subpage/. */
  icon?: string;
};

/** The tile for an offer, from the offer's own data: its name, the line
 *  the header menu also shows (`tileLine` where the tile says more), and its
 *  hero icon. `label` is the pill's words. */
export function offerTile(offer: Offer, label: string, ariaLabel?: string): Tile {
  return {
    title: offer.navTitle,
    line: offer.tileLine ?? offer.line ?? offer.summary,
    icon: offer.heroIcon?.src,
    link: { label, href: offer.path, ariaLabel },
  };
}

/**
 * The capsule takes its offer's one accent, the colour its page's hero
 * fades to (2026-11-22), so a tile and its page match. An offer without one
 * takes the site blue.
 */
export function capsuleStyle(href: string): CSSProperties {
  const accent = ALL_OFFERS.find((o) => o.path === href)?.heroAccent ?? "var(--color-band-blue)";
  return { "--tile-accent": accent } as CSSProperties;
}

/** The stand-in for an offer with no icon from Misha (Platform Escape): an
 *  arrow leaving a box, in the same line. Its tile and its hero both use it. */
export function EscapeGlyph() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M13 4h7v7M20 4l-9.500 9.500M17.500 14.500V19a1.500 1.500 0 0 1-1.500 1.500H5A1.500 1.500 0 0 1 3.500 19V8A1.500 1.500 0 0 1 5 6.500h4.500" />
    </svg>
  );
}

/** The offer's icon in a keyline circle. An offer with no icon from Misha
 *  (Platform Escape) gets an arrow leaving a box, drawn in the same line. */
export function TileIcon({ icon }: { icon?: string }) {
  return (
    <span className="fix-icon" aria-hidden="true">
      {icon ? (
        <span className="fix-icon-art" style={{ "--tile-icon": `url("${icon}")` } as CSSProperties} />
      ) : (
        <EscapeGlyph />
      )}
    </span>
  );
}

/** The tile's words and its pill. */
export function TileBody({ tile, lead = false }: { tile: Tile; lead?: boolean }) {
  return (
    <>
      <TileIcon icon={tile.icon} />
      <h3 className="fix-title">{tile.title}</h3>
      <p className={`fix-line ${lead ? "copy" : "case-text"}`}>{tile.line}</p>
      <a className="btn btn-secondary fix-link" href={tile.link.href} aria-label={tile.link.ariaLabel}>
        <span>{tile.link.label}</span>{" "}
        <span aria-hidden="true">→</span>
      </a>
    </>
  );
}

/** One tile as a list item, at stagger position `index`. */
export function OfferTile({ tile, index }: { tile: Tile; index: number }) {
  return (
    <li className="fix reveal-item" style={{ ...step(index), ...capsuleStyle(tile.link.href) }}>
      <span className="fix-capsule" aria-hidden="true" />
      <TileBody tile={tile} />
    </li>
  );
}
