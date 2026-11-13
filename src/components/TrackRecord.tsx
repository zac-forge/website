import { Reveal } from "./Reveal";
import { HAWAII_CARD } from "../lib/flags";

/**
 * The copy pass of 2026-11-06 dropped the IBM timeline framing from the
 * intro, at Drew's direction. It is in git history if it comes back.
 */

type CaseStudy = {
  client: string;
  /** URL and years, one line. */
  meta?: string;
  body: string;
  /** Set large. The number the card trades on. */
  figure?: string;
  figureCaption?: string;
  /**
   * One screenshot, MB11 359:1112 to 359:1134, served from public/work/ at
   * 360 and 720 wide (`<base>-360.webp`, `<base>-720.webp`). Without one the
   * card keeps the same slot in the board's placeholder grey.
   */
  image?: { base: string; alt: string };
};

/** Behind HAWAII_CARD until real before and after numbers exist. */
const HAWAII: CaseStudy = {
  client: "hawaii.surf",
  meta: "hawaii.surf",
  body: "Our own editorial publication on Hawaiian surf history, and our test bed for AI visibility.",
};

/**
 * Four cards, stacked, full width, text first, from docs/site-copy-v5.md.
 * Phrasing rules: the $1B is volume through the platform, never "we sold",
 * and the 90% is client-reported.
 *
 * Legal Access Alameda's URL, years, what was built, and its number are
 * [[slots]] in the deck with no working text, so the card ships with the one
 * sentence that is filled and nothing else.
 */
const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Heritage Global Partners",
    meta: "hgpauction.com · Live since 2010",
    body: "Every web property rebuilt, with real-time auction creation from the sale floor on connected tablets in 2010. Over $1 billion in assets sold through the platform since, and 16 years in production, maintained by someone else.",
    figure: "$1B+",
    figureCaption: "in asset sales through the platform",
    image: { base: "/work/heritage-global", alt: "Screenshot of the Heritage Global website" },
  },
  {
    client: "Legacy Studios · Teddy Bear Portraits",
    meta: "teddybearportraits.com · Built 2016 to 2019 · Still running",
    body: "Point of sale in 41 states, with tablets on a central database so parents bought photos the same day. We moved them to open source and handed it over, and the client reported support calls dropped by over 90%.",
    figure: "41 states",
    image: { base: "/work/teddy-bear-portraits", alt: "Screenshot of the Teddy Bear Portraits website" },
  },
  {
    client: "US Naval Academy · US Military Academy",
    meta: "usna.legacystudios.com · usma.legacystudios.com · Live since 2017",
    body: "A separately branded cadet portal for each academy, built on the platform already shipped for Teddy Bear Portraits. Bookings, photos, and information for the full photo experience, delivered through Legacy Studios and still running.",
    figure: "Live since 2017",
    // No image: MB11's screenshot here (359:1133) is the official usna.edu
    // home page with the Academy crest, which the DoD guardrail rules out,
    // and it is not the Legacy Studios portal this card describes.
  },
  {
    // TODO(Drew): URL, years, and the number for this card. Until they
    // arrive the meta line and the figure stay empty rather than invented.
    client: "Legal Access Alameda",
    body: "Web properties for a statewide group of attorneys providing disaster response and free legal assistance. A client across several years and several rebuilds.",
    image: { base: "/work/legal-access-alameda", alt: "Screenshot of the Legal Access Alameda website" },
  },
];

/**
 * Track record on MB11's grey band 394:1892 (curve top left, cut bottom
 * right). Heading left and intro right (366:1384, 367:1622), then the four
 * cases stacked, in full: client name, screenshot left, and the URL line,
 * body, and number right, as the comp sets them. The comp's flipped
 * screenshots are used upright. No carousel.
 */
export function TrackRecord() {
  const studies = HAWAII_CARD ? [HAWAII, ...CASE_STUDIES] : CASE_STUDIES;

  return (
    <section id="track-record" className="section band band--grey track-record" aria-labelledby="track-record-heading">
      <div className="container track-inner">
        <Reveal className="case-grid track-head">
          <div>
            <p className="eyebrow">Track record</p>
            <h2 className="h2" id="track-record-heading">
              <span className="h-light">Still</span> running.
            </h2>
          </div>
          {/* Confirmed by Drew on 2026-08-20 as repeatable across numerous
              projects, which is why it is a section claim, not a detail. */}
          <p className="track-intro case-text">
            Built on the practice Andrew Johnston has run since 2010. Every system below was handed
            to the people who own it. They run it without us.
          </p>
        </Reveal>

        <div className="case-list">
          {studies.map((study) => (
            <Reveal key={study.client}>
              <article className="case case-grid">
                <h3 className="case-client">{study.client}</h3>
                {study.image ? (
                  <img
                    className="case-image"
                    src={`${study.image.base}-720.webp`}
                    srcSet={`${study.image.base}-360.webp 360w, ${study.image.base}-720.webp 720w`}
                    sizes="(max-width: 760px) calc(100vw - 48px), 302px"
                    alt={study.image.alt}
                    width={302}
                    height={170}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="case-image placeholder" aria-hidden="true" />
                )}
                <div className="case-copy">
                  {study.meta ? <p className="case-meta">{study.meta}</p> : null}
                  <p className="case-body case-text">{study.body}</p>
                  {study.figure ? (
                    <p className="case-figure">
                      <span className="case-figure-value">{study.figure}</span>
                      {study.figureCaption ? (
                        <span className="case-figure-caption">{study.figureCaption}</span>
                      ) : null}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
