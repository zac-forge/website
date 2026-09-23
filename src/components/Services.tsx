import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ServiceRow } from "./ServiceRow";
import { Motes } from "./Motes";
import { fadeUp } from "../lib/motion";
import { LIVE_OFFERS, FRACTIONAL_LEAD } from "../pages/offers";

/**
 * Five rows in the copy deck, each linking to its page. Row 04 (the brand
 * system) is behind a flag, so the rows are numbered by position at render
 * time rather than carrying the deck's fixed numbers: a visible 03 followed by
 * 05 would read as a defect, and the number is structure, not information.
 */
const ROWS = [
  ...LIVE_OFFERS.map((o) => ({
    key: o.path,
    title: o.rowTitle,
    statement: o.rowStatement,
    items: o.rowItems,
    note: o.rowNote,
    href: o.path,
    linkLabel: o.rowLink,
  })),
  {
    key: "fractional-digital-lead",
    title: FRACTIONAL_LEAD.rowTitle,
    statement: FRACTIONAL_LEAD.rowStatement,
    items: FRACTIONAL_LEAD.rowItems,
    note: undefined,
    href: undefined,
    linkLabel: undefined,
  },
];

export function Services() {
  return (
    <section id="services" className="section services">
      {/* The black band where the shift section ends and the service rows have
          not started yet. Right third only, and nothing here sits behind copy:
          one orbital construction line dissolving into black, plus five points.
          Dropped on narrow screens, where it reads as noise rather than
          atmosphere. */}
      <div className="atmos atmos--transition" aria-hidden="true">
        <svg className="atmos-arc" viewBox="0 0 200 260" fill="none" preserveAspectRatio="none">
          <ellipse cx="152" cy="130" rx="118" ry="122" />
        </svg>
        <Motes count={5} seed={61} />
      </div>

      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / WHAT WE DO</p>
        </Reveal>
        <Reveal className="service-rows" stagger={0.12}>
          {ROWS.map((row, i) => (
            <motion.div key={row.key} variants={fadeUp}>
              <ServiceRow
                index={String(i + 1).padStart(2, "0")}
                title={row.title}
                statement={row.statement}
                items={row.items}
                note={row.note}
                href={row.href}
                linkLabel={row.linkLabel}
              />
            </motion.div>
          ))}
        </Reveal>
        <Reveal>
          <p className="services-note">
            We also move organizations off platforms they have outgrown, and repair sites and apps
            built quickly with AI tools. <a href="/#contact">Ask us about it.</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
