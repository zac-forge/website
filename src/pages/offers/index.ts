import { BRAND_SYSTEM } from "../../lib/flags";
import { realityCheck } from "./realityCheck";
import { fixWeek } from "./fixWeek";
import { aiVisibility } from "./aiVisibility";
import { accessibility } from "./accessibility";
import { webPartner } from "./webPartner";
import { brandSystem } from "./brandSystem";
import type { Offer } from "./types";

/**
 * Every offer that has a page, in v5 order: the front door, the paid step,
 * then the fixes behind it.
 */
export const ALL_OFFERS: Offer[] = [realityCheck, fixWeek, aiVisibility, accessibility, webPartner, brandSystem];

/** The offers that are live: routes, menus, sitemap, and schema. */
export const LIVE_OFFERS: Offer[] = ALL_OFFERS.filter((o) => !o.flagged || BRAND_SYSTEM);

export type { Offer, Block, Faq } from "./types";
