import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";

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
  /** Set large. These are the numbers the section trades on. */
  metric?: string;
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
    metric: "The client reported support calls dropped by over 90%.",
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
    role: "Creative Director",
    bio: "Years at Havas and Ogilvy. He and Andrew met on a cross-company team at the IBM Design Lab.",
  },
  {
    role: "Senior Engineer",
    bio: "Full stack. Built alongside Andrew at IBM.",
  },
];

export function TrackRecord() {
  return (
    <section id="track-record" className="section track-record">
      <div className="container">
        <Reveal className="track-intro">
          <p className="eyebrow">01 / TRACK RECORD</p>
          <h2 className="h2">We have built this before.</h2>
          <p className="track-lede">
            ZAC is the successor to Mahalo Media Group, the practice Andrew Johnston has run for
            over 15 years.{TIMELINE_FRAMING ? ` ${TIMELINE_FRAMING}` : ""} Same principal, same
            standards, new economics.
          </p>
        </Reveal>

        <Reveal className="case-list" stagger={0.08}>
          {CASE_STUDIES.map((study) => (
            <motion.article className="case" key={study.client} variants={fadeUpSmall}>
              <h3 className="case-client">
                {study.client}
                {study.site ? <span className="case-site">{study.site}</span> : null}
              </h3>
              <p className="case-body">{study.body}</p>
              {study.metric ? <p className="case-metric">{study.metric}</p> : null}
            </motion.article>
          ))}
        </Reveal>

        <Reveal className="team" stagger={0.08}>
          {TEAM.map((member) => (
            <motion.div className="team-member" key={member.role} variants={fadeUpSmall}>
              {member.photo ? (
                <img className="team-photo" src={member.photo} alt="" width={72} height={72} />
              ) : null}
              {member.name ? <p className="team-name">{member.name}</p> : null}
              <p className="eyebrow team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
