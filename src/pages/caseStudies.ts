import { HAWAII_CARD } from "../lib/flags";

/**
 * The case studies, one object each, read by the home page cards
 * (TrackRecord.tsx) and by /case-studies (CaseStudiesPage.tsx), so a
 * per-client page can be generated from the same data later. Copy is Drew's
 * batch 2 of 2026-11-13, moved here from TrackRecord.tsx word for word on
 * 2026-11-22.
 *
 * Phrasing rules: the $1B is volume through the platform, never "we sold",
 * and the 90% is client-reported. CCCV is in llms.txt (Drew, 2026-11-13) but
 * stays out of the schema until ccconejovalley.com is live, and its link is
 * the current deployment until then.
 */
export type CaseLink = { label: string; href: string };

export type CaseStudy = {
  /** The case's id on /case-studies, so it can be linked directly. */
  slug: string;
  client: string;
  industry?: string;
  /** Status, or the years it has run. */
  status?: string;
  /** The three labelled lines. A case without a problem omits the label. */
  problem?: string;
  built: string;
  /** One sentence per entry. The home card shows the first only. */
  proof?: string[];
  /** False where the home card shows no proof sentence (Heritage Global
   *  Partners: "Live since 2010" is already in its meta line). */
  homeProof?: boolean;
  /** Set large. The one hard number the case trades on. */
  figure?: string;
  figureCaption?: string;
  /** The product name, linked to the site. Without an href it shows as text. */
  product?: { label: string; href?: string };
  /** Further sites on the same platform, linked after the product. */
  moreLinks?: CaseLink[];
  /**
   * Screenshots, MB11 359:1112 to 359:1134, served from public/work/ at 360
   * and 720 wide (`<base>-360.webp`, `<base>-720.webp`). Without one the
   * slot is a block in the case's colour carrying the number.
   */
  images?: { base: string; alt: string }[];
  /**
   * The case's one accent on /case-studies and the home card, a
   * --color-hero-* token from the offer pages' set (already darkened for
   * AA). Used for the number, which is large text, and for rules. Never for
   * small text.
   */
  accent: string;
};

/** Behind HAWAII_CARD until real before and after numbers exist. */
const HAWAII: CaseStudy = {
  slug: "hawaii-surf",
  client: "hawaii.surf",
  built: "Our own editorial publication on Hawaiian surf history, and our test bed for AI Visibility.",
  product: { label: "hawaii.surf", href: "https://hawaii.surf" },
  accent: "var(--color-band-blue)",
};

const LIVE: CaseStudy[] = [
  {
    slug: "calvary-chapel-conejo-valley",
    client: "Calvary Chapel Conejo Valley",
    industry: "Faith-based nonprofit",
    status: "Launching soon",
    problem: "1,703 sermons from 2001 to 2026 sat on a hosted platform with no backup.",
    built:
      "We rescued the full archive, moved the audio to permanent public hosting, and rebuilt the site on a stack the church owns, for close to nothing a month.",
    proof: ["All 70 old URLs still work."],
    figure: "1,703",
    figureCaption: "sermons saved",
    product: { label: "Sermon archive and church website", href: "https://cccv.ccconejovalley.workers.dev" },
    images: [
      {
        base: "/work/cccv",
        alt: "The sunburst over the Conejo Valley, artwork from the Calvary Chapel Conejo Valley site",
      },
    ],
    accent: "var(--color-hero-reality-check)",
  },
  {
    slug: "heritage-global-partners",
    client: "Heritage Global Partners",
    industry: "Industrial auctions and asset sales",
    status: "Live since 2010",
    problem: "An outdated design and a weak server setup. The site kept crashing under load.",
    built:
      "A new design system, new site architecture and code on an up-to-date WordPress, and a custom server environment built for the load. Auction listings created on tablets straight from the sale floor.",
    proof: ["Stable since launch, without interruption."],
    homeProof: false,
    figure: "$1B+",
    figureCaption: "in asset sales through the platform",
    product: { label: "HGP auction platform", href: "https://hgpauction.com" },
    images: [{ base: "/work/heritage-global", alt: "Screenshot of the hgpauction.com home page" }],
    accent: "var(--color-hero-web-partner)",
  },
  {
    slug: "legacy-studios",
    client: "Legacy Studios (Teddy Bear Portraits)",
    industry: "School and academy portraits",
    status: "Built 2016 to 2019 · Still running",
    problem: "A bloated proprietary system, controlled by a vendor that made it hard to leave.",
    built:
      "A custom back end on WordPress and open source, with tablet point of sale on one central database so parents bought photos the same day. The same platform runs separately branded portals for the US Naval Academy and the US Military Academy. Then we handed the keys back.",
    proof: [
      "The client reported support calls dropped by over 90%.",
      "Still running, now maintained by another team.",
    ],
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
    accent: "var(--color-hero-fix)",
  },
  {
    // Drew, 2026-11-13: the portal itself, built for Legal Access Alameda.
    // Screenshot from Drew, source in design/case-sources/dlac-portal.jpg.
    slug: "disaster-legal-services-california",
    client: "Disaster Legal Services California",
    industry: "Nonprofit legal aid",
    status: "Live through the 2025 Los Angeles fires",
    built:
      "California's disaster legal services portal, for Legal Access Alameda and the Disaster Legal Assistance Collaborative, a statewide alliance of legal aid groups and volunteer attorneys. One place for Californians hit by wildfires, earthquakes, and floods to find free legal help. Accessible and simple to use.",
    proof: ["It carried survivors of the 2025 Los Angeles fires to free legal help, in 7 languages."],
    figure: "7",
    figureCaption: "languages",
    product: { label: "disasterlegalservicesca.org", href: "https://disasterlegalservicesca.org/" },
    images: [
      {
        base: "/work/dlac-portal",
        alt: "Disaster Legal Services California home page: Get Help Now, free legal help for survivors of California disasters.",
      },
    ],
    accent: "var(--color-hero-accessibility)",
  },
];

/** The cases in page order. The hidden hawaii.surf case leads when its flag is on. */
export const CASE_STUDIES: CaseStudy[] = HAWAII_CARD ? [HAWAII, ...LIVE] : LIVE;

/** Industry and status on one line, as the cards set it. */
export function caseMeta(study: CaseStudy): string {
  return [study.industry, study.status].filter(Boolean).join(" · ");
}

export const CASE_STUDIES_PATH = "/case-studies";

export const CASE_STUDIES_INTRO =
  "Every system below was built by our team and handed to the people who own it.";
