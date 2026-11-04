import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";

/**
 * Name and photo are optional on purpose. The design director and the senior
 * engineer have not consented to being named, so they ship by role, and
 * adding a name later is a content change. Names are known (CLAUDE.md) and
 * go in only when Drew says consent is given.
 *
 * Their two bio lines are [[slots]] in docs/site-copy-v5.md, pending each
 * person's confirmation. The deck's working versions ship, as the build plan
 * says, and no bio introduces anyone as Andrew's former colleague.
 */
type TeamMember = { name?: string; photo?: string; role: string; bio: string };

const TEAM: TeamMember[] = [
  {
    name: "Andrew Johnston",
    role: "Founder, Principal",
    bio: "Nineteen years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things.",
  },
  {
    role: "Design Principal",
    bio: "Associate creative director at Ogilvy, then design lead on work for Walmart, Viacom, and Nike, and at the IBM Design Lab.",
  },
  {
    role: "Principal Engineer",
    bio: "Senior engineer at IBM. WordPress and PHP, React and Node, and mobile.",
  },
];

/**
 * Comp 7's sky band (198:551) with sweeps top left and bottom right. Comp 7
 * draws a 190px circle above each name (211:1380 to 211:1382); Drew removed
 * the grey placeholders on 2026-11-04, so the three are text-only white cards
 * until real photos exist. A card with a photo shows it cropped to that
 * circle. Andrew's is the only one to add when it arrives.
 */
export function WhoWeAre() {
  return (
    <section id="who-we-are" className="section band band--sky who-we-are" aria-labelledby="who-we-are-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">06 / Who we are</p>
          {/* The deck has no heading here beyond the eyebrow. This keeps the
              document outline whole without adding words to the page. */}
          <h2 className="sr-only" id="who-we-are-heading">
            Who we are
          </h2>
        </Reveal>
        <Reveal className="team" stagger={0.08}>
          {TEAM.map((m) => (
            <motion.div className="team-member surface" key={m.role} variants={fadeUpSmall}>
              {m.photo ? (
                <img className="team-photo" src={m.photo} alt="" width={190} height={190} loading="lazy" />
              ) : null}
              <h3 className="team-name">{m.name ?? m.role}</h3>
              {m.name ? <p className="team-role">{m.role}</p> : null}
              <p className="team-bio">{m.bio}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
