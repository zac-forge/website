import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";
import { HAWAII_CARD } from "../lib/flags";

/**
 * The IBM and Mahalo Media Group timeline framing. Held open as do-not-guess
 * through the v3 build and picked by Drew on 2026-08-20. It stays a named
 * field rather than being inlined, because it is the one sentence here whose
 * factual claim depends on Andrew's actual dates: the practice began inside
 * the IBM tenure and continued past it.
 */
const TIMELINE_FRAMING: string | null =
  "It started while he was still at IBM and has outlasted that tenure.";

type CaseStudy = {
  client: string;
  site?: string;
  body: string;
  /** Set in the board's bold figure row. These are the numbers the section trades on. */
  metric?: string;
  /**
   * Imagery is still open with Misha (count, size, and ratio). When it lands
   * it goes here; until then the image column carries the board's grey
   * placeholder at the one full-size ratio the board shows.
   */
  images?: { src: string; alt: string; width: number; height: number }[];
};

/**
 * First position when live. Drew's own property, said plainly: that candor is
 * the credibility. Ships only with real before and after numbers, which are
 * still open slots in docs/site-copy-v4.md, so the card stays behind
 * HAWAII_CARD with the one sentence that needs no numbers.
 */
const HAWAII: CaseStudy = {
  client: "hawaii.surf",
  site: "hawaii.surf",
  body: "Our own editorial publication on Hawaiian surf history, and our test bed for AI visibility.",
};

const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Heritage Global Partners",
    site: "hgpauction.com",
    body: "Every web property, rebuilt. Real-time uploads and auction creation from the sale floor on connected tablets, in 2010. Still running today.",
    metric: "Over $1 billion in assets sold through the platform since launch.",
  },
  {
    client: "Legacy Studios · Teddy Bear Portraits",
    body: "End-to-end point of sale and same-day photo delivery across 41 states. Parents saw their photos in real time and bought on the spot. We moved them off proprietary software onto open source, then handed the system to their own team. Built 2016 to 2019. Still running.",
    metric: "Support calls dropped by over 90%, according to the client.",
  },
  {
    client: "US Naval Academy · US Marines",
    body: "Branded cadet booking and photo portals for both academies, built on the platform we had already shipped. Delivered through Legacy Studios. Live since 2017 and still running.",
  },
  {
    client: "Legal Access Alameda",
    body: "Web properties for a statewide group of attorneys providing disaster response and free legal assistance across California.",
  },
];

/**
 * Name and photo are optional on purpose. Two of the three have not consented
 * to being named yet, so the block ships nameless and adding a name later is a
 * content change rather than a redesign.
 *
 * No bio introduces anyone as Andrew's former colleague, even though two of
 * them are. Defining people by their proximity to the founder makes him the
 * centre and them satellites, which contradicts "One team. No layers." and
 * describes a relationship where a credential should be. IBM appears in all
 * three instead, so the shared history is visible without being asserted.
 * Phrasing follows the IBM guardrail in CLAUDE.md: worked at, never a client.
 */
type TeamMember = {
  name?: string;
  photo?: string;
  role: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Andrew Johnston",
    role: "Founder",
    bio: "Twenty years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things.",
  },
  {
    role: "Design Director",
    bio: "Associate creative director at Ogilvy. Before that, the IBM Design Lab.",
  },
  {
    role: "Senior Engineer",
    bio: "Full stack. Built enterprise systems at IBM.",
  },
];

const TEAM_ACCENTS = ["var(--color-accent)", "var(--color-accent-blue)", "var(--color-accent-red)"];

export function TrackRecord() {
  const studies = HAWAII_CARD ? [HAWAII, ...CASE_STUDIES] : CASE_STUDIES;

  return (
    <section id="track-record" className="section track-record">
      <div className="container">
        <Reveal className="section-head">
          <div className="track-intro">
            <p className="eyebrow">01 / Track record</p>
            <h2 className="h2">We have built this before.</h2>
            <p className="track-lede">
              ZAC is the successor to Mahalo Media Group, the practice Andrew Johnston has run for
              over 15 years.{TIMELINE_FRAMING ? ` ${TIMELINE_FRAMING}` : ""} Same principal, same
              standards.
            </p>
            {/* Confirmed by Drew on 2026-08-20 as repeatable across numerous
                projects, which is what promotes it from a detail inside one case
                study to the thing the section is about. */}
            <p className="track-handover label">
              Every system below was handed to the people who own it. They run them without us.
            </p>
          </div>
          {/* Nodes 44:437, 44:402, 44:420, and 44:454, composed by eye from
              the board render, since the exports trim each clip group. */}
          <div className="section-art section-art--case" aria-hidden="true">
            <img className="z-a" src="/art/z-case-a.svg" width={199} height={169} alt="" loading="lazy" />
            <img className="z-b" src="/art/z-case-b.svg" width={102} height={87} alt="" loading="lazy" />
            <img className="z-c" src="/art/z-case-c.svg" width={61} height={52} alt="" loading="lazy" />
            <img className="z-d" src="/art/z-case-d.svg" width={61} height={52} alt="" loading="lazy" />
          </div>
        </Reveal>

        <div className="case-list">
          {studies.map((study) => (
            <Reveal className="case" key={study.client}>
              <article className="case-copy">
                <h3 className="h3 case-client">
                  {study.client}
                  {study.site ? <span className="case-site">{study.site}</span> : null}
                </h3>
                <p className="case-body">{study.body}</p>
                {study.metric ? <p className="case-metric">{study.metric}</p> : null}
              </article>
              <div className="case-media-list">
                {study.images?.length ? (
                  study.images.map((img) => (
                    <img
                      key={img.src}
                      className="case-media"
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                    />
                  ))
                ) : (
                  <div className="case-media placeholder" aria-hidden="true" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="team" stagger={0.08}>
          {TEAM.map((member, i) => (
            <motion.div
              className="team-member surface"
              key={member.role}
              variants={fadeUpSmall}
              style={{ "--card-accent": TEAM_ACCENTS[i % TEAM_ACCENTS.length] } as React.CSSProperties}
            >
              {member.photo ? (
                <img className="team-photo" src={member.photo} alt="" width={72} height={72} />
              ) : null}
              {member.name ? <p className="h3 team-name">{member.name}</p> : null}
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
