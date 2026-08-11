import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUp, fadeUpSmall } from "../lib/motion";

const EXPERIENCE = [
  "Enterprise systems",
  "Digital products",
  "Web + applications",
  "AI + automation",
  "Technology strategy",
  "Design + media",
];

// Roles only, no names. Swap in real people once those are ready to be
// public, the layout takes a name line without restructuring.
const ROLES = [
  { label: "FOUNDER", body: "Technology strategy and direction." },
  { label: "DEVELOPMENT", body: "Software, web, and AI integration." },
  { label: "DESIGN", body: "Product and brand design." },
];

export function TrackRecord() {
  return (
    <section id="about" className="section track-record">
      <div className="container">
        <div className="track-grid">
          <Reveal className="track-heading">
            <p className="eyebrow">04 / TRACK RECORD</p>
            <h2 className="h2 h2--split">
              Built on experience.{" "}
              <span className="h2-secondary">Structured for what comes next.</span>
            </h2>
          </Reveal>

          <Reveal className="track-copy">
            <p className="text-muted">
              ZAC is led by founder Andrew Johnston, whose experience spans enterprise systems,
              independent digital, web, media, and product work, alongside a senior team of
              developers and designers.
            </p>
            <p className="text-muted">
              That range matters, because good technology starts before the first line of code:
              understanding the business problem, choosing what is worth building, and knowing how
              to get it into the world.
            </p>
          </Reveal>

          <Reveal className="experience-grid" stagger={0.06}>
            {EXPERIENCE.map((item) => (
              <motion.div className="experience-item" key={item} variants={fadeUpSmall}>
                {item}
              </motion.div>
            ))}
          </Reveal>
        </div>

        <Reveal className="roles-row" stagger={0.1}>
          {ROLES.map((role) => (
            <motion.div className="role" key={role.label} variants={fadeUp}>
              <p className="eyebrow">{role.label}</p>
              <p className="text-muted">{role.body}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
