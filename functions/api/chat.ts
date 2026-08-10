// Cloudflare Pages Function: POST /api/chat
//
// STUB ONLY. Not implemented yet. This file exists so the route is wired up
// and the frontend has something to call once the assistant is built.
//
// TODO (v1.1): implement the real handler. It should:
//   1. Read the request body (expects something like { messages: [...] }).
//   2. Read env.ANTHROPIC_API_KEY (set as an encrypted env var in the
//      Cloudflare Pages dashboard for production, and in .dev.vars locally,
//      never committed to the repo).
//   3. Call the Claude Messages API (https://api.anthropic.com/v1/messages)
//      server side, with a system prompt that represents ZAC: plain, senior,
//      no-hype voice. The assistant should be able to talk about ZAC's
//      services, which span technology and AI consulting plus custom builds
//      (software, sites, tools, automations, integrations), answer scoping
//      and pricing-range questions honestly, and nudge the visitor toward
//      booking a call. It should try to capture project details and an
//      email if the visitor is willing, and it must not invent specifics
//      it does not know.
//   4. Return the assistant's reply as JSON to the browser. The API key
//      must never be sent to or exposed in the client.
//   5. Add light rate limiting and keep responses on topic (web and AI
//      projects, ZAC services only).
//   6. On any upstream error, fail gracefully with a message that points
//      the visitor to the booking link or contact email instead of a raw
//      error.
//
// Until that lands, this handler just returns 501 so the endpoint is a
// known, predictable no-op instead of a 404.
//
// PagesFunction and Response are ambient globals here, typed via
// @cloudflare/workers-types (see functions/tsconfig.json).

interface Env {
  ANTHROPIC_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async () => {
  return new Response(
    JSON.stringify({
      error: "not_implemented",
      message: "The ZAC assistant is not wired up yet. Please book a call or email instead.",
    }),
    {
      status: 501,
      headers: { "content-type": "application/json" },
    },
  );
};

export const onRequestGet: PagesFunction<Env> = async () => {
  return new Response("Method not allowed. Use POST.", { status: 405 });
};
