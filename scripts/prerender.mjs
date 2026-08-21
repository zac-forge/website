/**
 * Renders the site to static HTML at build time.
 *
 * Vite has no built-in prerender API, so this follows the pattern the SSR
 * guide documents: build the client, build an SSR bundle from
 * src/entry-server.tsx, then render the routes into the client's index.html.
 *
 * Why this exists: the site is a single-page app, so before this the served
 * HTML was an empty shell. Every case study, date, and number lived only in
 * the JavaScript bundle, which meant anything that does not execute JS saw
 * nothing. That is now half of B2B discovery.
 */
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "dist", "index.html");
const ssrEntry = path.join(root, ".prerender", "entry-server.js");

if (!existsSync(ssrEntry)) {
  console.error("prerender: no SSR bundle at .prerender/entry-server.js");
  process.exit(1);
}

const { render } = await import(ssrEntry);
const template = readFileSync(templatePath, "utf-8");

if (!template.includes("<!--app-html-->")) {
  console.error("prerender: index.html is missing the <!--app-html--> placeholder");
  process.exit(1);
}

const appHtml = render("/");
if (!appHtml || appHtml.length < 2000) {
  console.error(`prerender: rendered output looks too small (${appHtml.length} chars)`);
  process.exit(1);
}

writeFileSync(templatePath, template.replace("<!--app-html-->", appHtml));

// The SSR bundle is a build artifact, never a deployed one. wrangler ships
// everything under dist/, which is why this is built outside it and removed.
rmSync(path.join(root, ".prerender"), { recursive: true, force: true });

const bytes = Buffer.byteLength(readFileSync(templatePath, "utf-8"));
console.log(`prerender: index.html is now ${(bytes / 1024).toFixed(1)} kB (was ~${(Buffer.byteLength(template) / 1024).toFixed(1)} kB)`);
