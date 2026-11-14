import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";
import { BRAND_SYSTEM } from "../lib/flags";

type Fix = { title: string; line: string; link?: { label: string; href: string } };

/**
 * Six short rows, each one line plus a link, from docs/site-copy-v5.md as
 * amended by Drew on 2026-11-13. Brand system goes to the form while its
 * page is off.
 */
const FIXES: Fix[] = [
  {
    title: "AI Visibility",
    line: "Get named when customers ask ChatGPT, Google, or Perplexity who to call.",
    link: { label: "See AI Visibility", href: "/ai-visibility" },
  },
  {
    title: "Rescue",
    line: "Finish and harden what AI started. If it can't be saved, we build it properly from the ground up.",
    link: { label: "Ask about a rescue", href: "#contact" },
  },
  {
    title: "Accessibility and performance",
    line: "Public agencies face federal deadlines in April 2027 and April 2028. We fix it in the code, not with a widget.",
    link: { label: "See Accessibility", href: "/accessibility" },
  },
  {
    title: "Brand system",
    line: "Senior design your AI tools follow, so everything looks like you.",
    // Drew, 2026-11-13: always a link. To the form while the page is off.
    link: BRAND_SYSTEM
      ? { label: "Ask about a brand system", href: "/brand-system" }
      : { label: "Ask about a brand system", href: "#contact" },
  },
  {
    title: "Platform escape",
    line: "Off the platform you've outgrown, onto something you own.",
    link: { label: "Ask about moving platforms", href: "#contact" },
  },
  {
    title: "Web Partner",
    line: "One senior team keeps it running and makes it better every month.",
    link: { label: "See Web Partner", href: "/web-partner" },
  },
];

/**
 * Bigger fixes, MB11 376:1756 and 376:1755 on the ground, then the six
 * fixes as a three by two grid on the blue band 394:1893 (cut top left,
 * curve bottom right): yellow title, one line, an outlined pill whose label
 * names its destination (Drew, 2026-11-13). Titles drop their trailing
 * periods, as the comp sets four of them.
 */
export function WhatWeFix() {
  return (
    <section id="what-we-do" className="what-we-fix" aria-labelledby="what-we-do-heading">
      <div className="section what-we-fix-head">
        <Reveal className="container">
          <p className="eyebrow">Bigger fixes</p>
          <h2 className="h2" id="what-we-do-heading">
            <span className="h-light">When</span> the Check <span className="h-light">calls for</span>{" "}
            more
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
                    <span>{fix.link.label}</span>{" "}
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
