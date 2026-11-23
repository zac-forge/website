import { Reveal } from "./Reveal";
import { OfferTile, offerTile } from "./OfferTiles";
import { LIVE_OFFERS } from "../pages/offers";

/**
 * The way sideways and the way back, above the closing call to action on the
 * offer pages and /faq: a tile for every live offer but the current page's,
 * under the site's eyebrow, then the link home. Since 2026-11-22 the tiles
 * are the home Partner section's (OfferTiles.tsx), on the same blue band,
 * with each offer's hero icon: its name, the header menu's line for it
 * (one source, the offer's `line`, since the text cut of 2026-11-22), and
 * "More", named for the offer for screen readers. They replace Misha's
 * white offer cards (423:2429), whose styles stay in layout.css unused
 * until he decides.
 */
export function RelatedOffers({ label, currentPath }: { label: string; currentPath?: string }) {
  const offers = LIVE_OFFERS.filter((o) => o.path !== currentPath);
  return (
    <section className="band band--blue fixes-band offer-related" aria-labelledby="offer-related-heading">
      <div className="container">
        <Reveal>
          <h2 className="eyebrow offer-related-heading" id="offer-related-heading">
            {label}
          </h2>
        </Reveal>
        <Reveal stagger>
          <ul className="fix-grid fix-grid--related" data-count={offers.length}>
            {offers.map((offer, i) => (
              <OfferTile
                key={offer.path}
                index={i}
                tile={offerTile(offer, "More", `More about ${offer.navTitle}`)}
              />
            ))}
          </ul>
        </Reveal>
        <a className="text-link offer-home-link" href="/">
          <span aria-hidden="true">←</span> <span>Back to the home page</span>
        </a>
      </div>
    </section>
  );
}
