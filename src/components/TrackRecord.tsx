import { Reveal } from "./Reveal";
import { HAWAII_CARD } from "../lib/flags";

/**
 * Case studies, Drew 2026-11-13: Recent work (CCCV) and Still Running merged
 * into one section, every card in one structure. The longer card bodies of
 * 2026-11-06 and 2026-11-12 are in git history (bf9f0c1) if they come back.
 */

type CaseStudy = {
  client: string;
  /** A readable product name. The URL is only its link, never shown. */
  product: string;
  link?: string;
  /** One line: what it does. */
  line: string;
  /** Status, or the years it has run. */
  status?: string;
  /** Set large. The one hard number the card trades on. */
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
  product: "hawaii.surf",
  link: "https://hawaii.surf",
  line: "Our own editorial publication on Hawaiian surf history, and our test bed for AI Visibility.",
};

/**
 * CCCV first, then the systems that have run for years. Phrasing rules: the
 * $1B is volume through the platform, never "we sold". CCCV's figures were
 * checked on 2026-11-12 (1,703 sermons, 2001 to 2026) and it stays out of
 * llms.txt and the schema until ccconejovalley.com is live.
 */
const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Calvary Chapel Conejo Valley",
    // TODO(Drew): product label invented 2026-11-13, confirm.
    product: "CCCV Sermon Archive",
    link: "https://cccv.ccconejovalley.workers.dev",
    // TODO(Drew): one line cut down from the 2026-11-12 body, confirm.
    line: "We rescued the full sermon archive and rebuilt the site on a stack the church owns.",
    status: "Launching soon",
    figure: "1,703",
    figureCaption: "sermons saved",
    image: {
      base: "/work/cccv",
      alt: "The sunburst over the Conejo Valley, artwork from the Calvary Chapel Conejo Valley site",
    },
  },
  {
    client: "Heritage Global",
    product: "HGP Auction Platform",
    link: "https://hgpauction.com",
    // TODO(Drew): one line cut down from the 2026-11-06 body, confirm.
    line: "Real-time auction creation from the sale floor on connected tablets, built in 2010.",
    status: "Live since 2010",
    figure: "$1B+",
    figureCaption: "in asset sales through the platform",
    image: { base: "/work/heritage-global", alt: "Screenshot of the hgpauction.com home page" },
  },
  {
    client: "Teddy Bear Portraits",
    // TODO(Drew): product label invented 2026-11-13, confirm.
    product: "Photo Point of Sale",
    link: "https://teddybearportraits.com",
    // TODO(Drew): one line cut down from the 2026-11-06 body, confirm.
    line: "Tablets on a central database, so parents bought photos the same day.",
    status: "Built 2016 to 2019 · Still running",
    figure: "41 states",
    image: { base: "/work/teddy-bear-portraits", alt: "Screenshot of the Teddy Bear Portraits website" },
  },
  {
    // TODO(Drew): client set to Legacy Studios (was "US Naval Academy · US
    // Military Academy"), product label invented, and the figure ("2") is
    // new. Confirm all three. No insignia anywhere on this card (DoD).
    client: "Legacy Studios",
    product: "USNA and USMA Cadet Portals",
    link: "https://usna.legacystudios.com",
    line: "A separately branded cadet portal for each academy, built on the Teddy Bear Portraits platform.",
    status: "Live since 2017",
    figure: "2",
    figureCaption: "academy portals on one platform",
    // Drew's usna.legacystudios.com shot, cropped to the headline and
    // buttons so no insignia shows (DoD guardrail).
    image: {
      base: "/work/service-academies",
      alt: "Screenshot of the Legacy Studios U.S. Naval Academy official portraits site",
    },
  },
  {
    // TODO(Drew): product label invented 2026-11-13, confirm. URL, years,
    // and the number are still open slots, so the card has no link and no
    // figure rather than invented ones.
    client: "Legal Access Alameda",
    product: "Attorney Network Websites",
    line: "Web properties for a statewide group of attorneys providing disaster response and free legal assistance.",
    status: "A client across several years and several rebuilds",
    image: { base: "/work/legal-access-alameda", alt: "Screenshot of the Legal Access Alameda website" },
  },
];

/** One case study card: client, product, line, status, number. */
function CaseCard({ study }: { study: CaseStudy }) {
  return (
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
        <p className="case-meta">
          {study.link ? (
            <a className="inline-link" href={study.link}>
              {study.product}
            </a>
          ) : (
            <span>{study.product}</span>
          )}
        </p>
        <p className="case-body case-text">{study.line}</p>
        {study.status ? <p className="case-status">{study.status}</p> : null}
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
  );
}

/**
 * Case studies on MB11's grey band 394:1892 (curve top left, cut bottom
 * right). Heading left and intro right (366:1384, 367:1622), then the cases
 * stacked: client name across, screenshot left, the rest right. The comp's
 * flipped screenshots are used upright. No carousel. The id stays
 * track-record because the nav and older links point at it.
 */
export function TrackRecord() {
  const studies = HAWAII_CARD ? [HAWAII, ...CASE_STUDIES] : CASE_STUDIES;

  return (
    <section id="track-record" className="section band band--grey track-record" aria-labelledby="track-record-heading">
      <div className="container track-inner">
        <Reveal className="case-grid track-head">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 className="h2" id="track-record-heading">
              <span className="h-light">Still</span> Running
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
              <CaseCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
