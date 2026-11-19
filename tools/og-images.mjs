#!/usr/bin/env node
/**
 * Renders one 1200 x 630 Open Graph image per page into public/og/, and
 * copies the home card to public/og-image.jpg. A local tool, never deployed.
 *
 * Each card is the page's hero band: the band blue with the home hero's
 * bottom-left cut, Misha's swoosh art (public/art/subpage/subpage-swoosh.svg),
 * the white wordmark, and the page's own words, read from the built HTML in
 * dist/ so a card can never drift from its page: on an offer page the icon,
 * the page name, and the headline (the h1); on home the two-weight headline
 * and the Z (public/art/mb11/hero-z.svg). All text sits between x 100 and
 * 1100 and y 60 and 530, clear of the crops LinkedIn and Slack apply.
 *
 * Run after `npm run build`:  npm run og
 * Needs Google Chrome (headless) and macOS `sips` for the JPEG downscale.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const pub = path.join(root, "public");
const outDir = path.join(pub, "og");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/** slug -> the built page it reads. */
const CARDS = [
  { slug: "home", file: "index.html" },
  { slug: "reality-check", file: "reality-check.html" },
  { slug: "fix-week", file: "fix-week.html" },
  { slug: "ai-visibility", file: "ai-visibility.html" },
  { slug: "accessibility", file: "accessibility.html" },
  { slug: "web-partner", file: "web-partner.html" },
  { slug: "platform-escape", file: "platform-escape.html" },
  { slug: "faq", file: "faq.html" },
  { slug: "about", file: "about.html" },
];

const asset = (p) => pathToFileURL(path.join(pub, p)).href;

function pick(html, re, what, file) {
  const m = html.match(re);
  if (!m) throw new Error(`og-images: no ${what} in dist/${file}. Run npm run build first.`);
  return m[1];
}

/** Text as it appears in the built page: tags kept only where we ask. */
const stripComments = (s) => s.replace(/<!-- -->/g, "");

function cardBody(card) {
  const html = readFileSync(path.join(dist, card.file), "utf8");
  if (card.slug === "home") {
    const lead = pick(html, /hero-title-lead">([^<]*)<\/span>/, "home headline lead", card.file);
    const rest = pick(html, /hero-title-lead">[^<]*<\/span>\s*<span>([^<]*)<\/span>/, "home headline", card.file);
    return `
      <div class="copy copy--home">
        <h1 class="headline headline--home"><span class="light">${lead}</span> <span>${rest}</span></h1>
      </div>
      <img class="z" src="${asset("art/mb11/hero-z.svg")}" alt="" />`;
  }
  // /faq has no hero icon, so its card sets the name and headline alone.
  const icon = html.match(/subpage-hero-icon"[^>]*><img src="([^"]+)"/)?.[1];
  const name = pick(html, /subpage-hero-title">([^<]*)<\/p>/, "page name", card.file);
  const headline = pick(html, /offer-title">([^<]*)<\/h1>/, "headline", card.file);
  return `
      <div class="copy">
        ${icon ? `<img class="icon" src="${asset(icon.replace(/^\//, ""))}" alt="" />` : ""}
        <p class="name">${stripComments(name)}</p>
        <p class="headline">${stripComments(headline)}</p>
      </div>`;
}

function page(card) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<style>
  /* Values copied from design/tokens.json: color.band-blue, color.bg,
     color.on-band, the display font, and band.clip-hero's cut. */
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; background: #EBEBEB; overflow: hidden; }
  .card {
    position: relative; width: 1200px; height: 630px; overflow: hidden;
    background: #227CBA; color: #FFFFFF;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 232px 100%, 29px calc(100% - 91px), 0 calc(100% - 155px));
  }
  .swoosh { position: absolute; top: 0; left: 50%; width: 1420px; height: 630px; transform: translateX(-50%); }
  .wordmark { position: absolute; left: 100px; top: 60px; width: 155px; filter: brightness(0) invert(1); }
  .copy { position: absolute; left: 100px; top: 170px; width: 1000px; }
  .icon { display: block; height: 64px; width: auto; }
  .name { margin-top: 28px; font-size: 68px; font-weight: 700; line-height: 0.95; white-space: nowrap; }
  .headline { margin-top: 22px; max-width: 980px; font-size: 44px; font-weight: 300; line-height: 1.12; text-wrap: balance; }
  .copy--home { top: 150px; width: 640px; }
  .headline--home { margin-top: 0; font-size: 72px; font-weight: 700; line-height: 0.95; max-width: 640px; }
  .light { display: block; font-weight: 300; }
  .z { position: absolute; right: 100px; top: 150px; width: 368px; height: auto; }
</style></head>
<body><div class="card">
  <img class="swoosh" src="${asset("art/subpage/subpage-swoosh.svg")}" alt="" />
  <img class="wordmark" src="${asset("brand/zacforge-wordmark.svg")}" alt="" />
  ${cardBody(card)}
</div></body></html>`;
}

mkdirSync(outDir, { recursive: true });
const tmp = mkdtempSync(path.join(tmpdir(), "zac-og-"));
try {
  for (const card of CARDS) {
    const htmlPath = path.join(tmp, `${card.slug}.html`);
    const pngPath = path.join(tmp, `${card.slug}@2x.png`);
    const jpgPath = path.join(outDir, `${card.slug}.jpg`);
    writeFileSync(htmlPath, page(card));
    execFileSync(CHROME, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      "--force-device-scale-factor=2",
      "--window-size=1200,630",
      `--screenshot=${pngPath}`,
      pathToFileURL(htmlPath).href,
    ], { stdio: "ignore" });
    execFileSync("sips", ["-z", "630", "1200", pngPath, "-s", "format", "jpeg", "-s", "formatOptions", "88", "--out", jpgPath], { stdio: "ignore" });
    console.log(`og-images: public/og/${card.slug}.jpg`);
  }
  copyFileSync(path.join(outDir, "home.jpg"), path.join(pub, "og-image.jpg"));
  console.log("og-images: public/og-image.jpg (the home card)");
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
