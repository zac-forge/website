/**
 * JSON-LD per route, server-rendered by scripts/prerender.mjs.
 *
 * Rules from docs/site-copy-v4.md: ProfessionalService for ZAC Forge, Person
 * for Andrew only (the other two team members are unnamed on the page pending
 * consent), one Service per live offer with provider ZAC Forge, and FAQPage on
 * each offer page matching the visible questions exactly. No offers, no
 * price properties, anywhere.
 */
import { LIVE_OFFERS, FRACTIONAL_LEAD } from "../pages/offers";
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
  logo: `${SITE_URL}/brand/zacforge-lockup.webp`,
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  description: HOME_META.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ventura",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ventura County, CA" },
    { "@type": "Country", name: "United States" },
  ],
  // sameAs (LinkedIn) is an open slot in the copy deck: no URL was supplied.
  founder: { "@id": PERSON_ID },
};

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Andrew Johnston",
  jobTitle: "Founder",
  worksFor: { "@id": ORG_ID },
};

function service(name: string, description: string, url?: string) {
  return {
    "@type": "Service",
    name,
    description,
    provider: { "@id": ORG_ID },
    ...(url ? { url } : {}),
  };
}

function services() {
  return [
    ...LIVE_OFFERS.map((o) => service(o.serviceName, o.serviceDescription, canonical(o.path))),
    service(FRACTIONAL_LEAD.serviceName, FRACTIONAL_LEAD.serviceDescription),
  ];
}

export function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization, person, ...services()],
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
      service(offer.serviceName, offer.serviceDescription, canonical(offer.path)),
      {
        "@type": "FAQPage",
        mainEntity: offer.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export function schemaFor(path: string) {
  const offer = LIVE_OFFERS.find((o) => o.path === path);
  return offer ? offerSchema(offer) : homeSchema();
}
