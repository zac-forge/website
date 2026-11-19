import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";

/**
 * Name and photo are optional on purpose. The design principal and the
 * principal engineer still show by role; names are known (CLAUDE.md) and
 * go in when Drew says consent is given.
 *
 * Intro and all three bios from Drew's copy handoff of 2026-11-18, shipped
 * for Misha and Luke to review live (Drew overrode the doc's hold on theirs).
 */
type TeamMember = { slug: string; name?: string; role: string; bio: string[] };

const INTRO = [
  "We were already the guys. Now we're the guys with AI.",
  "Three people who've worked together since IBM. What used to take a floor of people now takes us and AI doing the junior work.",
  "Fast, fair and friendly.",
];

const TEAM: TeamMember[] = [
  {
    slug: "andrew-johnston",
    name: "Andrew Johnston",
    role: "Founder, Principal",
    bio: [
      "Taught himself HTML in the dot com boom and never stopped building. Bay Area startups, then IBM, where he led development for IBM.com North America and ran tech at the Design Lab in New York.",
      "He's who you talk to, and he still writes code.",
    ],
  },
  {
    slug: "design-principal",
    role: "Design Principal",
    bio: [
      "Classically trained. New York. Havas and Ogilvy. If you can see it, it's his.",
      "He's the reason our work doesn't look like AI made it.",
    ],
  },
  {
    slug: "principal-engineer",
    role: "Principal Engineer",
    bio: [
      "The fixer. We've never brought him a problem he couldn't solve, and we've brought him some ugly ones.",
      "He's been building alongside Andrew since IBM, across web, apps and mobile. When something has to work, it goes to Luke.",
      "Also the nicest guy on the team.",
    ],
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
          {INTRO.map((p) => (
            <p className="section-intro copy" key={p}>
              {p}
            </p>
          ))}
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
                  {m.bio.map((p) => (
                    <p className="team-bio copy" key={p}>
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
