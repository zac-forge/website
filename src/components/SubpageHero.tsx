import type { CSSProperties } from "react";

type Props = {
  /** The page name, set large. The page's h1. */
  title: string;
  /** A white line icon from public/art/subpage/, set over the title. */
  icon?: { src: string; width: number; height: number };
  /**
   * The colour the band fades to at the bottom, as a CSS value, normally a
   * colour token: `var(--color-accent)`. Misha's comps run each page from the
   * band blue at the top to its own colour at the bottom. Until those colours
   * are approved every page passes nothing and the band stays flat blue.
   */
  accent?: string;
};

/**
 * The offer page hero, from Misha's comps of 2026-11-13 (file
 * gLk6osGozuEch8I8bPv616: 417:2047 Reality Check, 417:2079 The Fix, 417:2020
 * AI Visibility, 417:1972 Web Partner, 417:2111 Accessibility and
 * Performance). One band, cut at the bottom left like the home hero, with
 * the swoosh art over it: five rounded bars in a navy radial gradient at 25%,
 * the same on every page, so it darkens whatever colour the band is. The
 * header and its wordmark and nav are the site header above. The art was
 * generated from the nodes' vector geometry, see design/subpage-heroes/.
 */
export function SubpageHero({ title, icon, accent }: Props) {
  const style = accent ? ({ "--hero-accent": accent } as CSSProperties) : undefined;

  return (
    <section id="top" className="subpage-hero band band--blue" style={style}>
      <img
        className="subpage-hero-art"
        src="/art/subpage/subpage-swoosh.svg"
        width={1280}
        height={568}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <div className="container">
        <div className="subpage-hero-copy">
          {icon ? (
            <span className="subpage-hero-icon" aria-hidden="true">
              <img src={icon.src} width={icon.width} height={icon.height} alt="" />
            </span>
          ) : null}
          <h1 className="h1 subpage-hero-title">{title}</h1>
        </div>
      </div>
    </section>
  );
}
