import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ServiceRow } from "./ServiceRow";
import { Motes } from "./Motes";
import { fadeUp } from "../lib/motion";

const SERVICES = [
  {
    index: "01",
    title: "ADVISE",
    statement: "Find out what is worth building.",
    items: [
      "Technology strategy",
      "What to build and in what order",
      "Second opinions on decisions and vendors",
      "Workflow analysis",
      "Architecture and planning",
    ],
  },
  {
    index: "02",
    title: "BUILD",
    statement: "Turn the right ideas into working systems.",
    items: [
      "Custom software",
      "Web applications",
      "Internal tools",
      "Workflow automation",
      "Integrations",
      "High-performance websites",
      "Prototypes",
    ],
  },
  {
    index: "03",
    title: "PARTNER",
    statement: "Keep senior capability on hand.",
    items: [
      "Fractional technology leadership",
      "Continuous product development",
      "Standing senior review",
      "Specialist teams assembled to the work",
      "Fixing what someone else built",
    ],
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
          {SERVICES.map((service) => (
            <motion.div key={service.index} variants={fadeUp}>
              <ServiceRow {...service} />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
