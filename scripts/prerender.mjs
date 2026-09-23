/**
 * Renders every route to static HTML at build time.
 *
 * Vite has no built-in prerender API, so this follows the pattern the SSR
 * guide documents: build the client, build an SSR bundle from
 * src/entry-server.tsx, then render each route into the client's index.html
 * template with its own head (title, description, canonical, Open Graph,
 * JSON-LD) and its own file.
 *
 * Why this exists: assistants and crawlers do not run JavaScript. Every case
 * study, question, and answer has to be in the HTML they fetch. Half of B2B
 * discovery now happens that way, and the offer pages exist to be read by it.
 *
 * Output: dist/index.html for "/", and dist/<path>.html for every other
 * route. Cloudflare's static asset handling serves dist/ai-visibility.html at
 * /ai-visibility, which matches the canonical URLs in the copy deck. The
 * sitemap is written from the same route list, so a flagged page cannot be
 * listed before it exists.
 */
import { readFileSync, writeFileSync, rmSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");
const ssrEntry = path.join(root, ".prerender", "entry-server.js");

if (!existsSync(ssrEntry)) {
  console.error("prerender: no SSR bundle at .prerender/entry-server.js");
  process.exit(1);
}

const { render, PAGES, canonical, schemaFor, SITE_NAME, OG_IMAGE } = await import(ssrEntry);
const template = readFileSync(templatePath, "utf-8");

for (const marker of ["<!--app-html-->", "<!--app-head-->", "<title>ZAC Forge</title>"]) {
  if (!template.includes(marker)) {
    console.error(`prerender: index.html is missing ${marker}`);
    process.exit(1);
  }
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const meta = (attr, key, value) => `    <meta ${attr}="${key}" content="${esc(value)}" />`;

function head(page) {
  const url = canonical(page.path);
  const ld = JSON.stringify(schemaFor(page.path), null, 2).replace(/<\//g, "<\\/");
  return [
    meta("name", "description", page.description),
    `    <link rel="canonical" href="${url}" />`,
    meta("property", "og:type", "website"),
    meta("property", "og:title", page.ogTitle),
    meta("property", "og:description", page.description),
    meta("property", "og:image", OG_IMAGE),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", `${SITE_NAME}. ${page.ogTitle}`),
    meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:url", url),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", page.ogTitle),
    meta("name", "twitter:description", page.description),
    meta("name", "twitter:image", OG_IMAGE),
    `    <script type="application/ld+json">\n${ld}\n    </script>`,
  ].join("\n");
}

let total = 0;
for (const page of PAGES) {
  const appHtml = render(page.path);
  if (!appHtml || appHtml.length < 2000) {
    console.error(`prerender: ${page.path} rendered output looks too small (${appHtml.length} chars)`);
    process.exit(1);
  }
  const html = template
    .replace("<title>ZAC Forge</title>", `<title>${esc(page.title)}</title>`)
    .replace("<!--app-head-->", head(page))
    .replace("<!--app-html-->", appHtml);
  const file = page.path === "/" ? templatePath : path.join(dist, `${page.path.replace(/^\//, "")}.html`);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, html);
  total += 1;
  console.log(`prerender: ${page.path} -> ${path.relative(root, file)} (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`);
}

// The sitemap comes from the same route list, so a flagged page can never be
// listed before its file exists.
const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.map(
  (p) =>
    `  <url>\n    <loc>${canonical(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${p.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
).join("\n");
writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`prerender: sitemap.xml lists ${PAGES.length} pages`);

// The SSR bundle is a build artifact, never a deployed one. wrangler ships
// everything under dist/, which is why this is built outside it and removed.
rmSync(path.join(root, ".prerender"), { recursive: true, force: true });
console.log(`prerender: ${total} pages written`);
