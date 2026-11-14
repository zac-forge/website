import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";

/**
 * Name and photo are optional on purpose. The design principal and the principal
 * engineer have not consented to being named, so they ship by role, and
 * adding a name later is a content change. Names are known (CLAUDE.md) and
 * go in only when Drew says consent is given.
 *
 * Their two bio lines are [[slots]] in docs/site-copy-v5.md, pending each
 * person's confirmation. The deck's working versions ship, as the build plan
 * says, and no bio introduces anyone as Andrew's former colleague.
 */
type TeamMember = { slug: string; name?: string; role: string; bio: string };

const TEAM: TeamMember[] = [
  {
    slug: "andrew-johnston",
    name: "Andrew Johnston",
    role: "Founder, Principal",
    bio: "Led global web work at IBM across several roles, including lead developer for IBM.com in North America and technical director at the IBM Design Lab. He has run his own practice since 2010.",
  },
  {
    slug: "design-principal",
    role: "Design Principal",
    bio: "Associate creative director at Ogilvy, then design lead on work for Walmart, Viacom, and Nike, and at the IBM Design Lab.",
  },
  {
    slug: "principal-engineer",
    role: "Principal Engineer",
    bio: "Principal engineer at IBM: WordPress, PHP, React, Node, and mobile.",
  },
];

/**
 * Photos are found by file name in src/assets/team/ at build time (see the
 * README there), so adding one is a file drop and a rebuild.
 */
const PHOTOS = import.meta.glob("../assets/team/*.{webp,avif,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function photoFor(slug: string) {
  return Object.entries(PHOTOS).find(([path]) => path.split("/").pop()?.startsWith(`${slug}.`))?.[1];
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Team, MB11 372:1736 and 372:1735 on the grey band 394:1894 (cut top left,
 * curve bottom right). Three white 176px circles (376:1749 to 376:1751),
 * then name, role, and bio. The comp's names and bios are placeholders, so
 * the live ones ship. Until a photo exists a named person's circle shows
 * their initials; an unnamed role's circle stays plain white, as drawn.
 */
export function WhoWeAre() {
  return (
    <section id="who-we-are" className="section band band--grey who-we-are" aria-labelledby="who-we-are-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="h2" id="who-we-are-heading">
            Principals
          </h2>
        </Reveal>
        <Reveal className="team" stagger={0.08}>
          {TEAM.map((m) => {
            const photo = photoFor(m.slug);
            return (
              <motion.div className="team-member" key={m.slug} variants={fadeUpSmall}>
                <div className="team-circle" aria-hidden="true">
                  {photo ? (
                    <img className="team-photo" src={photo} alt="" width={176} height={176} loading="lazy" />
                  ) : m.name ? (
                    <span className="team-initials">{initials(m.name)}</span>
                  ) : null}
                </div>
                <div className="team-text">
                  <h3 className="team-name">{m.name ?? m.role}</h3>
                  {m.name ? <p className="team-role">{m.role}</p> : null}
                  <p className="team-bio copy">{m.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
