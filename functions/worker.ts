// Worker entry for zacforge.com. Wired in wrangler.toml as `main`.
//
// Everything is the prerendered static site in dist/, served through the
// ASSETS binding, with two exceptions:
//
//   1. POST /api/contact runs the contact form handler.
//   2. On any host that is not the production domain (workers.dev previews,
//      the website-<branch>-preview Workers), every response carries
//      X-Robots-Tag: noindex and /robots.txt disallows everything. Production
//      is decided by hostname, so a preview cannot be indexed and production
//      cannot pick up the noindex by accident.
//
// functions/api/chat.ts is a separate Pages-style stub and is not routed.

import { handleContact, type ContactEnv } from "./api/contact";

interface Env extends ContactEnv {
  ASSETS: Fetcher;
}

const PRODUCTION_HOSTS = new Set(["zacforge.com", "www.zacforge.com"]);

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const production = PRODUCTION_HOSTS.has(url.hostname);

    let response: Response;
    if (url.pathname === "/api/contact") {
      response = await handleContact(request, env);
    } else if (!production && url.pathname === "/robots.txt") {
      response = new Response("User-agent: *\nDisallow: /\n", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    } else {
      response = await env.ASSETS.fetch(request);
    }

    if (production) return response;
    const tagged = new Response(response.body, response);
    tagged.headers.set("X-Robots-Tag", "noindex, nofollow");
    return tagged;
  },
} satisfies ExportedHandler<Env>;
