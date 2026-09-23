import { BRAND_SYSTEM } from "../../lib/flags";
import { aiVisibility } from "./aiVisibility";
import { webPartner } from "./webPartner";
import { accessibility } from "./accessibility";
import { brandSystem } from "./brandSystem";
import type { Offer } from "./types";

/** Every offer that has a page, in Services row order. */
export const ALL_OFFERS: Offer[] = [aiVisibility, webPartner, accessibility, brandSystem];

/** The offers that are live: routes, rows, sitemap, schema, llms.txt. */
export const LIVE_OFFERS: Offer[] = ALL_OFFERS.filter((o) => !o.flagged || BRAND_SYSTEM);

/**
 * Row 05 has no page of its own. It is here so the Services list and the
 * schema Service nodes come from one place.
 */
export const FRACTIONAL_LEAD = {
  row: "05",
  rowTitle: "FRACTIONAL DIGITAL LEAD",
  rowStatement: "Someone who owns digital, a few hours a week.",
  rowItems: ["Roadmap", "Vendors and tools", "Analytics", "Direction for staff or volunteers", "Budget decisions"],
  serviceName: "Fractional Digital Lead",
  serviceDescription:
    "A few hours a week owning an organization's digital roadmap, vendors, and analytics.",
};

export type { Offer, Block, Faq } from "./types";
