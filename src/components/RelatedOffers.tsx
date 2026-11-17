import type { CSSProperties } from "react";
import { LIVE_OFFERS } from "../pages/offers";
import type { Offer } from "../pages/offers";

/**
 * One offer card, Misha's 423:2429 set (2026-11-13): the offer's line icon,
 * its name, its one line, and "More", underlined. Titles and "More" are all
 * in the site blue since 2026-11-17 (Drew), in place of the per-offer
 * colours. The link is stretched over the card, so the whole card clicks
 * through, and is named for the offer for screen readers.
 */
function OfferCard({ offer }: { offer: Offer }) {
  const style = offer.cardIcon ? ({ "--card-icon": `url("${offer.cardIcon}")` } as CSSProperties) : undefined;
  return (
    <article className="offer-card" style={style}>
      {offer.cardIcon ? <span className="offer-card-icon" aria-hidden="true" /> : null}
      <h3 className="offer-card-title">{offer.navTitle}</h3>
      <p className="offer-card-body case-text">{offer.summary}</p>
      <a className="offer-card-link" href={offer.path} aria-label={`More about ${offer.navTitle}`}>
        <span className="offer-card-more">More</span>
        <span className="offer-card-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  );
}

/**
 * The way sideways and the way back, above the closing call to action on the
 * offer pages and /faq: a card for every live offer but the current page's,
 * under the site's eyebrow (the arrow and the label in capitals, Drew,
 * 2026-11-17), then the link home.
 */
export function RelatedOffers({ label, currentPath }: { label: string; currentPath?: string }) {
  return (
    <section className="section offer-related" aria-labelledby="offer-related-heading">
      <div className="container">
        <h2 className="eyebrow offer-related-heading" id="offer-related-heading">
          {label}
        </h2>
        <div className="offer-related-grid">
          {LIVE_OFFERS.filter((o) => o.path !== currentPath).map((other) => (
            <OfferCard offer={other} key={other.path} />
          ))}
        </div>
        <a className="text-link offer-home-link" href="/">
          <span aria-hidden="true">←</span> <span>Back to the home page</span>
        </a>
      </div>
    </section>
  );
}
