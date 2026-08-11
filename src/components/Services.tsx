import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ServiceRow } from "./ServiceRow";
import { Motes } from "./Motes";
import { fadeUp } from "../lib/motion";

const SERVICES = [
  {
    index: "01",
    title: "ADVISE",
    statement: "Find where technology creates leverage.",
    items: [
      "Technology strategy",
      "AI opportunity assessment",
      "Product and platform direction",
      "Workflow analysis",
      "Architecture and technical planning",
    ],
  },
  {
    index: "02",
    title: "BUILD",
    statement: "Turn the right ideas into working systems.",
    items: [
      "Custom software",
      "Web applications",
      "High-performance websites",
      "Internal tools",
      "Workflow automation",
      "AI integrations and agents",
      "Prototypes and MVPs",
    ],
  },
  {
    index: "03",
    title: "PARTNER",
    statement: "Senior technology capability when you need it.",
    items: [
      "Fractional technology leadership",
      "Ongoing product development",
      "Technical problem solving",
      "Specialist team assembly",
      "Existing platform improvement",
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
          <p className="eyebrow">02 / WHAT ZAC DOES</p>
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
