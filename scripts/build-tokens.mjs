/**
 * Generates src/styles/tokens.css from design/tokens.json.
 *
 * design/tokens.json is the source of truth for every design value on the
 * site. This script is the only thing allowed to write tokens.css, and the
 * build runs it first so the two cannot drift. Edit the JSON, never the CSS.
 *
 *   node scripts/build-tokens.mjs          write tokens.css
 *   node scripts/build-tokens.mjs --check  exit 1 if tokens.css is stale
 *
 * Group rules: a top-level group becomes a CSS prefix (color.bg becomes
 * --color-bg). A group may set "$prefix" to override that, "" for none, and
 * "$emit": false to keep values as documentation only.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "design", "tokens.json");
const out = path.join(root, "src", "styles", "tokens.css");

const tokens = JSON.parse(readFileSync(src, "utf-8"));
const lines = [
  "/* GENERATED FILE. Do not edit.",
  "   Source: design/tokens.json, written by scripts/build-tokens.mjs.",
  "   Provenance for every value is in the JSON and in",
  "   design/DESIGN-SYSTEM-NOTES.md. */",
  ":root {",
];

for (const [group, members] of Object.entries(tokens)) {
  if (group.startsWith("$") || typeof members !== "object") continue;
  if (members.$emit === false) continue;
  const prefix = "$prefix" in members ? members.$prefix : group;
  lines.push("");
  lines.push(`  /* ${group}${members.$description ? `: ${members.$description}` : ""} */`);
  for (const [name, token] of Object.entries(members)) {
    if (name.startsWith("$")) continue;
    if (typeof token !== "object" || !("$value" in token)) {
      throw new Error(`tokens: ${group}.${name} has no $value`);
    }
    const varName = prefix ? `--${prefix}-${name}` : `--${name}`;
    const note = token.$description ? `  /* ${token.$description} */` : "";
    lines.push(`  ${varName}: ${token.$value};${note}`);
  }
}
lines.push("}", "");

const css = lines.join("\n");
if (process.argv.includes("--check")) {
  const current = readFileSync(out, "utf-8");
  if (current !== css) {
    console.error("tokens: src/styles/tokens.css is stale, run `npm run tokens`");
    process.exit(1);
  }
  console.log("tokens: tokens.css matches design/tokens.json");
} else {
  writeFileSync(out, css);
  console.log(`tokens: wrote ${path.relative(root, out)} (${lines.length - 3} lines)`);
}
