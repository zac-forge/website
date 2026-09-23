/**
 * Design token gate. Fails the build on any raw colour outside the generated
 * tokens file.
 *
 * What fails:
 *   - hex colours (#fff, #E83445, #0B0B0Dcc)
 *   - rgb(), rgba(), hsl(), hsla() with numeric channels
 * in src/**\/*.css, *.ts, *.tsx, except src/styles/tokens.css, which is
 * generated from design/tokens.json and is the one place a literal may live.
 *
 * rgb(var(--forge-rgb) / .3) passes: the channels are a token.
 *
 * Out of scope on purpose: index.html carries one <meta name="theme-color">
 * that browsers read as a literal, and tools/ is build tooling that never
 * ships. Pixel values are a CLAUDE.md rule but not linted here, because
 * layout composition legitimately uses them.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scanRoot = path.join(root, "src");
const allow = new Set([path.join(root, "src", "styles", "tokens.css")]);

const HEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
const FUNC = /\b(?:rgba?|hsla?)\(\s*\d/g;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (/\.(css|tsx?)$/.test(name)) files.push(full);
  }
  return files;
}

const findings = [];
for (const file of walk(scanRoot)) {
  if (allow.has(file)) continue;
  const text = readFileSync(file, "utf-8");
  text.split("\n").forEach((line, i) => {
    // Strip URL fragments and CSS comments so #root or /* #fff */ do not hit.
    const code = line.replace(/\/\*.*?\*\//g, "").replace(/url\([^)]*\)/g, "");
    const hits = [...(code.match(HEX) ?? []), ...(code.match(FUNC) ?? [])];
    // #root, #top, #services in selectors or hrefs are ids, not colours.
    const real = hits.filter((h) => !/^#[a-z]/.test(h) || /^#[0-9a-fA-F]{3,8}$/.test(h) && !/^#(root|top)$/i.test(h));
    if (real.length) findings.push(`${path.relative(root, file)}:${i + 1}: ${real.join(", ")}  ${line.trim()}`);
  });
}

if (findings.length) {
  console.error(`\nlint-tokens: ${findings.length} raw colour${findings.length === 1 ? "" : "s"} outside design/tokens.json\n`);
  console.error(findings.join("\n"));
  console.error("\nUse a token from design/tokens.json (npm run tokens after adding one).\n");
  process.exit(1);
}
console.log("lint-tokens: clean, no raw colours outside tokens");
