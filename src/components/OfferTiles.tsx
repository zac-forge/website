import type { CSSProperties } from "react";
import { step } from "../lib/reveal";

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

/**
 * The two palette stops of each offer's capsule, by path. An offer without
 * an entry takes the site's own pair.
 */
const CAPSULES: Record<string, [string, string]> = {
  "/reality-check": ["var(--color-accent-blue)", "var(--color-offer-reality-check)"],
  "/fix-week": ["var(--color-highlight)", "var(--color-offer-fix)"],
  "/web-partner": ["var(--color-highlight)", "var(--color-accent-red)"],
  "/ai-visibility": ["var(--color-accent-red)", "var(--color-offer-web-partner)"],
  "/platform-escape": ["var(--color-offer-reality-check)", "var(--color-accent-blue)"],
  "/accessibility": ["var(--color-highlight)", "var(--color-offer-web-partner)"],
};

export function capsuleStyle(href: string): CSSProperties {
  const [from, to] = CAPSULES[href] ?? ["var(--color-highlight)", "var(--color-accent-red)"];
  return { "--tile-from": from, "--tile-to": to } as CSSProperties;
}

/** The offer's icon in a keyline circle. An offer with no icon from Misha
 *  (Platform Escape) gets an arrow leaving a box, drawn in the same line. */
export function TileIcon({ icon }: { icon?: string }) {
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
