import type { CSSProperties, ReactNode } from "react";

type Props = {
  /**
   * "offer" (the default) sets the icon and the page name. "home" is Misha's
   * home banner (412:1907 and its siblings, 2026-11-13): the same band and
   * swoosh, with the home hero's own content passed as children.
   */
  variant?: "offer" | "home";
  /** The page name, set large, as a label. Offer variant only. */
  title?: string;
  /** A white line icon from public/art/subpage/, set over the title. */
  icon?: { src: string; width: number; height: number };
  /**
   * The colour the band fades to at the bottom, as a CSS value, normally a
   * colour token: `var(--color-accent)`. Misha's comps run each page from the
   * band blue at the top to its own colour at the bottom. Until those colours
   * are approved every page passes nothing and the band stays flat blue.
   */
  accent?: string;
  /** The home variant's content. */
  children?: ReactNode;
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
export function SubpageHero({ variant = "offer", title, icon, accent, children }: Props) {
  const style = accent ? ({ "--hero-accent": accent } as CSSProperties) : undefined;
  const className = `subpage-hero${variant === "home" ? " subpage-hero--home" : ""} band band--blue`;

  return (
    <section id="top" className={className} style={style}>
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
        {variant === "home" ? (
          children
        ) : (
          <div className="subpage-hero-copy">
            {icon ? (
              <span className="subpage-hero-icon" aria-hidden="true">
                <img src={icon.src} width={icon.width} height={icon.height} alt="" />
              </span>
            ) : null}
            {/* The page name is a label, set at h1 size. The headline under
                the hero is the page's h1 (SEO pass, 2026-11-13). */}
            <p className="h1 subpage-hero-title">{title}</p>
          </div>
        )}
      </div>
    </section>
  );
}
