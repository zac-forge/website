import { Reveal } from "./Reveal";
import { HAWAII_CARD } from "../lib/flags";

/**
 * The IBM and Mahalo Media Group timeline framing, picked by Drew on
 * 2026-08-20 and carried into v5 as "outlasted". It stays a named field
 * because it is the one sentence here whose factual claim depends on Andrew's
 * actual dates.
 */
const TIMELINE_FRAMING = "It started while he was still at IBM and outlasted that tenure.";

type CaseStudy = {
  client: string;
  /** URL and years, one line. */
  meta?: string;
  body: string;
  /** Set large. The number the card trades on. */
  figure?: string;
  figureCaption?: string;
  /** One tight crop of a real screen at most, per the copy deck. None yet. */
  image?: { src: string; alt: string; width: number; height: number };
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
    body: "Every web property rebuilt, including the flagship auction site. Real-time uploads and auction creation from the sale floor on connected tablets, in 2010. The platform has carried over $1 billion in asset sales since launch. 16 years in production, maintained by someone else.",
    figure: "$1B+",
    figureCaption: "in asset sales through the platform",
  },
  {
    client: "Legacy Studios · Teddy Bear Portraits",
    meta: "teddybearportraits.com · Built 2016 to 2019 · Still running",
    body: "End-to-end point of sale for onsite use across 41 states. Tablets connected to a central database, so parents saw their photos in real time and bought the same day. We moved them off proprietary software onto open source and handed it over. The client reported support calls dropped by over 90%. The platform is now maintained by an outside vendor, unchanged.",
    figure: "41 states",
  },
  {
    client: "US Naval Academy · US Military Academy",
    meta: "usna.legacystudios.com · usma.legacystudios.com · Live since 2017",
    body: "A separately branded cadet portal for each academy, built on the platform already shipped for Teddy Bear Portraits. Bookings, photos, and information for the full photo experience. Delivered through Legacy Studios, and still running.",
    figure: "Live since 2017",
  },
  {
    // TODO(Drew): URL, years, and the number for this card. Until they
    // arrive the meta line and the figure stay empty rather than invented.
    client: "Legal Access Alameda",
    body: "Web properties for a statewide group of attorneys providing disaster response and free legal assistance. A client across several years and several rebuilds.",
  },
];

/**
 * Comp 7 sets the heading left and the intro right (211:1243, 211:1247).
 * The deck's four stacked cards replace the comp's screenshot collage: no
 * carousel and no full-page shots.
 */
export function TrackRecord() {
  const studies = HAWAII_CARD ? [HAWAII, ...CASE_STUDIES] : CASE_STUDIES;

  return (
    <section id="track-record" className="section track-record">
      <div className="container">
        <Reveal className="split-head">
          <div>
            <p className="eyebrow">01 / Track record</p>
            <h2 className="h2">We've built this before.</h2>
          </div>
          <div className="split-head-copy">
            <p>
              ZAC is built on the practice Andrew Johnston has run since 2010. {TIMELINE_FRAMING}
            </p>
            {/* Confirmed by Drew on 2026-08-20 as repeatable across numerous
                projects, which is why it is a section claim, not a detail. */}
            <p className="label">
              Every system below was handed to the people who own it. They run them without us.
            </p>
          </div>
        </Reveal>

        <div className="case-list">
          {studies.map((study) => (
            <Reveal className="case surface" key={study.client}>
              <article className="case-copy">
                <h3 className="case-client">{study.client}</h3>
                {study.meta ? <p className="case-meta">{study.meta}</p> : null}
                <p className="case-body">{study.body}</p>
              </article>
              {study.figure ? (
                <p className="case-figure">
                  <span className="case-figure-value">{study.figure}</span>
                  {study.figureCaption ? (
                    <span className="case-figure-caption">{study.figureCaption}</span>
                  ) : null}
                </p>
              ) : null}
              {study.image ? (
                <img
                  className="case-image"
                  src={study.image.src}
                  alt={study.image.alt}
                  width={study.image.width}
                  height={study.image.height}
                  loading="lazy"
                />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
