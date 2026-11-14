import { Reveal } from "./Reveal";
import { HAWAII_CARD } from "../lib/flags";

/**
 * Case studies, Drew 2026-11-13: Recent work (CCCV) and Still Running merged
 * into one section, every card in one structure (batch 2 copy).
 */

type Link = { label: string; href: string };

type CaseStudy = {
  client: string;
  industry?: string;
  /** Status, or the years it has run. */
  status?: string;
  /** The three labelled lines. A card without a problem omits the label. */
  problem?: string;
  built: string;
  proof?: string;
  /** Set large. The one hard number the card trades on. */
  figure?: string;
  figureCaption?: string;
  /** The product name, linked to the site. Without an href it shows as text. */
  product?: { label: string; href?: string };
  /** Further sites on the same platform, linked after the product. */
  moreLinks?: Link[];
  /**
   * Screenshots, MB11 359:1112 to 359:1134, served from public/work/ at 360
   * and 720 wide (`<base>-360.webp`, `<base>-720.webp`), stacked in the
   * image column. Without one the card keeps the slot in the board's grey.
   */
  images?: { base: string; alt: string }[];
};

/** Behind HAWAII_CARD until real before and after numbers exist. */
const HAWAII: CaseStudy = {
  client: "hawaii.surf",
  built: "Our own editorial publication on Hawaiian surf history, and our test bed for AI Visibility.",
  product: { label: "hawaii.surf", href: "https://hawaii.surf" },
};

/**
 * Four cards, copy from Drew's batch 2 of 2026-11-13. Teddy Bear Portraits
 * and the academy portals are one card: same client, same system. Phrasing
 * rules: the $1B is volume through the platform, never "we sold", and the
 * 90% is client-reported. CCCV stays out of llms.txt and the schema until
 * ccconejovalley.com is live, and its link is the current deployment until
 * then.
 */
const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Calvary Chapel Conejo Valley",
    industry: "Faith-based nonprofit",
    status: "Launching soon",
    problem: "1,703 sermons from 2001 to 2026 sat on a hosted platform with no backup.",
    built:
      "We rescued the full archive, moved the audio to permanent public hosting, and rebuilt the site on a stack the church owns, for close to nothing a month.",
    proof: "All 70 old URLs still work.",
    figure: "1,703",
    figureCaption: "sermons saved",
    product: { label: "Sermon archive and church website", href: "https://cccv.ccconejovalley.workers.dev" },
    images: [
      {
        base: "/work/cccv",
        alt: "The sunburst over the Conejo Valley, artwork from the Calvary Chapel Conejo Valley site",
      },
    ],
  },
  {
    client: "Heritage Global Partners",
    industry: "Industrial auctions and asset sales",
    status: "Live since 2010",
    problem: "An outdated design and a weak server setup. The site kept crashing under load.",
    built:
      "A new design system, new site architecture and code on an up-to-date WordPress, and a custom server environment built for the load. Auction listings created on tablets straight from the sale floor.",
    proof: "Stable since launch, without interruption.",
    figure: "$1B+",
    figureCaption: "in asset sales through the platform",
    product: { label: "HGP auction platform", href: "https://hgpauction.com" },
    images: [{ base: "/work/heritage-global", alt: "Screenshot of the hgpauction.com home page" }],
  },
  {
    client: "Legacy Studios (Teddy Bear Portraits)",
    industry: "School and academy portraits",
    status: "Built 2016 to 2019 · Still running",
    problem: "A bloated proprietary system, controlled by a vendor that made it hard to leave.",
    built:
      "A custom back end on WordPress and open source, with tablet point of sale on one central database so parents bought photos the same day. The same platform runs separately branded portals for the US Naval Academy and the US Military Academy. Then we handed the keys back.",
    proof:
      "The client reported support calls dropped by over 90%. Still running, now maintained by another team.",
    figure: "41 states",
    product: { label: "School and academy photo platform", href: "https://teddybearportraits.com" },
    moreLinks: [
      { label: "USNA portal", href: "https://usna.legacystudios.com" },
      { label: "USMA portal", href: "https://usma.legacystudios.com" },
    ],
    images: [
      { base: "/work/teddy-bear-portraits", alt: "Screenshot of the Teddy Bear Portraits website" },
      // Drew's usna.legacystudios.com shot, cropped to the headline and
      // buttons so no insignia shows (DoD guardrail).
      {
        base: "/work/service-academies",
        alt: "Screenshot of the Legacy Studios U.S. Naval Academy official portraits site",
      },
    ],
  },
  {
    // Drew, 2026-11-13: the portal itself, built for Legal Access Alameda.
    // No screenshot of disasterlegalservicesca.org yet, so the grey slot.
    client: "Disaster Legal Services California",
    industry: "Nonprofit legal aid",
    status: "Live through the 2025 Los Angeles fires",
    built:
      "California's disaster legal services portal, for Legal Access Alameda and the Disaster Legal Assistance Collaborative, a statewide alliance of legal aid groups and volunteer attorneys. One place for Californians hit by wildfires, earthquakes, and floods to find free legal help. Accessible and simple to use.",
    proof: "It carried survivors of the 2025 Los Angeles fires to free legal help, in 7 languages.",
    figure: "7",
    figureCaption: "languages",
    product: { label: "disasterlegalservicesca.org", href: "https://disasterlegalservicesca.org/" },
  },
];

function CaseImage({ image }: { image: { base: string; alt: string } }) {
  return (
    <img
      className="case-image"
      src={`${image.base}-720.webp`}
      srcSet={`${image.base}-360.webp 360w, ${image.base}-720.webp 720w`}
      sizes="(max-width: 760px) calc(100vw - 48px), 302px"
      alt={image.alt}
      width={302}
      height={170}
      loading="lazy"
      decoding="async"
    />
  );
}

/**
 * One case study card: client over the screenshots, then the industry and
 * status on one line (Drew, 2026-11-13), the labelled lines, the number, and
 * the product link.
 */
function CaseCard({ study }: { study: CaseStudy }) {
  const facts: [string, string | undefined][] = [
    ["Problem", study.problem],
    ["What we built", study.built],
    ["Proof", study.proof],
  ];
  return (
    <article className="case case-grid">
      <h3 className="case-client">{study.client}</h3>
      <div className="case-images">
        {study.images?.length ? (
          study.images.map((image) => <CaseImage image={image} key={image.base} />)
        ) : (
          <div className="case-image placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="case-copy">
        {study.industry || study.status ? (
          <p className="case-industry case-text">
            {[study.industry, study.status].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        <dl className="case-facts">
          {facts.map(([label, text]) =>
            text ? (
              <div className="case-fact" key={label}>
                <dt className="case-fact-label">{label}</dt>
                <dd className="case-text">{text}</dd>
              </div>
            ) : null,
          )}
        </dl>
        {study.figure ? (
          <p className="case-figure">
            <span className="case-figure-value">{study.figure}</span>
            {study.figureCaption ? (
              <span className="case-figure-caption">{study.figureCaption}</span>
            ) : null}
          </p>
        ) : null}
        {study.product ? (
          <p className={`case-meta case-product${study.product.href ? "" : " case-product--plain"}`}>
            {study.product.href ? (
              <a className="inline-link" href={study.product.href}>
                {study.product.label}
              </a>
            ) : (
              <span>{study.product.label}</span>
            )}
          </p>
        ) : null}
        {study.moreLinks ? (
          <p className="case-more-links case-text">
            {study.moreLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " · " : null}
                <a className="inline-link" href={link.href}>
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Case studies on MB11's grey band 394:1892 (curve top left, cut bottom
 * right). Heading left and intro right (366:1384, 367:1622), then the cases
 * stacked: client name across, screenshots left, the rest right. The comp's
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
              <span className="h-light">Built to</span> last
            </h2>
          </div>
          {/* Intro from Drew's batch 2, 2026-11-13. Handover was confirmed
              on 2026-08-20 as repeatable across numerous projects. */}
          <p className="track-intro case-text">
            Every system below was built by our team and handed to the people who own it.
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
