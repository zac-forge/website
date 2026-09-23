import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./AppRoutes.tsx";

/**
 * Prerender entry. Used only by scripts/prerender.mjs at build time, never
 * shipped to the browser.
 *
 * Deliberately imports no CSS. The stylesheets are imported by main.tsx and
 * Vite emits them as a real <link> in the client build, so pulling them in
 * here would only produce a second, unused copy.
 */
export function render(url = "/") {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}

/** The route list and per-route head data the prerender iterates over. */
export { PAGES, canonical } from "./lib/meta";
export { schemaFor } from "./lib/schema";
export { SITE_NAME, OG_IMAGE } from "./lib/site";
