/**
 * JSON-LD per route, server-rendered by scripts/prerender.mjs.
 *
 * Rules from docs/site-copy-v5.md: ProfessionalService for ZAC Forge, Person
 * for Andrew only (the other two team members are unnamed on the page pending
 * consent), one Service per live offer with provider ZAC Forge (the Reality
 * Check, the Fix Week, AI Visibility, Accessibility and Performance, Web
 * Partner, and the Brand System once its flag is on), and FAQPage on each
 * offer page and on the home page, matching the visible questions exactly,
 * and a two-step BreadcrumbList (Home, then the page) on each offer page. No offers, no price
 * properties, anywhere.
 */
import { LIVE_OFFERS } from "../pages/offers";
import { HOME_FAQ } from "../pages/homeFaq";
import type { Offer } from "../pages/offers";
import { HOME_META, canonical } from "./meta";
import { CONTACT_EMAIL } from "./links";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#andrew-johnston`;

const organization = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "ZAC",
  legalName: "ZAC Consulting LLC",
  url: `${SITE_URL}/`,
  // The v3 lockup.webp this used to name was retired with the redesign and
  // no longer exists. The 180px raster mark stands in, since search engines
  // do not take SVG for a logo.
  logo: `${SITE_URL}/brand/favicon-180.png`,
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  description: HOME_META.description,
  // Region only, no street or city (Drew, 2026-11-13: HI, was CA).
  address: {
    "@type": "PostalAddress",
    addressRegion: "HI",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  // sameAs (LinkedIn) is an open slot in the copy deck: no URL was supplied.
  founder: { "@id": PERSON_ID },
};

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Andrew Johnston",
  jobTitle: "Founder, Principal",
  worksFor: { "@id": ORG_ID },
};

function service(name: string, description: string, url?: string, alternateName?: string) {
  return {
    "@type": "Service",
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    provider: { "@id": ORG_ID },
    ...(url ? { url } : {}),
  };
}

/** FAQPage from the visible questions and answers, word for word. */
function faqPage(faq: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: plainText(f.question),
      acceptedAnswer: { "@type": "Answer", text: plainText(f.answer) },
    })),
  };
}

/** Drops the [text](/path) link markup an answer may carry, keeping the text. */
function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, (_match, label: string) => label);
}

function services() {
  return LIVE_OFFERS.map((o) => service(o.serviceName, o.serviceDescription, canonical(o.path), o.serviceAlternateName));
}

export function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization, person, ...services(), faqPage(HOME_FAQ)],
  };
}

export function offerSchema(offer: Offer) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical(offer.path),
        url: canonical(offer.path),
        name: offer.title,
        description: offer.description,
        isPartOf: { "@type": "WebSite", url: `${SITE_URL}/`, name: SITE_NAME },
        about: { "@id": ORG_ID },
      },
      service(offer.serviceName, offer.serviceDescription, canonical(offer.path), offer.serviceAlternateName),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: offer.navTitle, item: canonical(offer.path) },
        ],
      },
      faqPage(offer.faq),
    ],
  };
}

export function schemaFor(path: string) {
  const offer = LIVE_OFFERS.find((o) => o.path === path);
  return offer ? offerSchema(offer) : homeSchema();
}
