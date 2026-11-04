export const BOOKING_URL = "https://cal.com/zacforge/20-min-chat";

/** Per docs/site-copy-v5.md: schema, llms.txt, and the contact form all use this address. */
export const CONTACT_EMAIL = "drew@zacforge.com";

/** The contact form posts here. Served by the Worker in functions/worker.ts. */
export const CONTACT_ENDPOINT = "/api/contact";

/**
 * Cloudflare Turnstile site key, read at build time. Empty until the keys
 * exist, in which case the form renders without the widget and the handler
 * skips verification. See README.md.
 */
export const TURNSTILE_SITE_KEY: string = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? "";
