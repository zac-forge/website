import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";
import { BRAND_SYSTEM } from "../lib/flags";

type Fix = { title: string; line: string; link?: { label: string; href: string } };

/**
 * Six short rows, each one line plus a link, from docs/site-copy-v5.md.
 * Brand system links only when its page is live; with the flag off it is
 * plain text, as the deck's slot says.
 */
const FIXES: Fix[] = [
  {
    title: "AI visibility",
    line: "Get named when customers ask ChatGPT, Google, or Perplexity who to call.",
    link: { label: "More", href: "/ai-visibility" },
  },
  {
    title: "Rescue",
    line: "Finish and harden what AI started, or rebuild it if it can't be saved.",
    link: { label: "Ask us", href: "#contact" },
  },
  {
    title: "Accessibility and performance",
    line: "Fixed in the code, not covered with a widget.",
    link: { label: "More", href: "/accessibility" },
  },
  {
    title: "Brand system",
    line: "Senior design your AI tools follow, so everything looks like you.",
    link: BRAND_SYSTEM ? { label: "More", href: "/brand-system" } : undefined,
  },
  {
    title: "Platform escape",
    line: "Off the platform you've outgrown, onto something you own.",
    link: { label: "Ask us", href: "#contact" },
  },
  {
    title: "Web Partner",
    line: "One senior team keeps it running and makes it better every month.",
    link: { label: "More", href: "/web-partner" },
  },
];

/**
 * Bigger fixes, MB11 376:1756 and 376:1755 on the ground, then the six
 * fixes as a three by two grid on the blue band 394:1893 (cut top left,
 * curve bottom right): yellow title, one line, an outlined "More" or "Ask
 * us" pill. Titles drop their trailing periods, as the comp sets four of
 * them. Brand system has no pill while its page is off, as on the comp.
 */
export function WhatWeFix() {
  return (
    <section id="what-we-do" className="what-we-fix" aria-labelledby="what-we-do-heading">
      <div className="section what-we-fix-head">
        <Reveal className="container">
          <p className="eyebrow">Bigger fixes</p>
          <h2 className="h2" id="what-we-do-heading">
            <span className="h-light">When</span> the Check <span className="h-light">calls for</span>{" "}
            more.
          </h2>
        </Reveal>
      </div>
      <div className="band band--blue fixes-band">
        <img className="band-lines band-lines--fixes" src="/art/mb11/lines-bigger-fixes.svg" width={1280} height={607} alt="" aria-hidden="true" loading="lazy" />
        <Reveal className="container" stagger={0.06}>
          <ul className="fix-grid">
            {FIXES.map((fix) => (
              <motion.li className="fix" key={fix.title} variants={fadeUpSmall}>
                <h3 className="fix-title">{fix.title}</h3>
                <p className="fix-line case-text">{fix.line}</p>
                {fix.link ? (
                  <a className="btn btn-secondary fix-link" href={fix.link.href}>
                    <span>{fix.link.label}</span>
                    <span className="sr-only">: {fix.title}</span>{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
