/**
 * Feature flags. Build-time constants, so a flag that is off removes its
 * content from the prerendered HTML, the sitemap, the schema, and llms.txt,
 * not just from the screen.
 */

/** Services row 04 and the /brand-system page. Off until Misha signs off on
 *  the positioning, the deliverables, and the proof. */
export const BRAND_SYSTEM = false;

/** The hawaii.surf case study card. Off until real before and after numbers
 *  exist. */
export const HAWAII_CARD = false;
