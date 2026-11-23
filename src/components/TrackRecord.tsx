import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { ExperienceStrip } from "./LogoBand";
import { CASE_STUDIES, CASE_STUDIES_INTRO, CASE_STUDIES_PATH, caseMeta } from "../pages/caseStudies";
import type { CaseStudy } from "../pages/caseStudies";

/**
 * One stat card: the number is the hero of the card and counts up on entry,
 * then its label, the client, the meta line, the first sentence of the proof
 * where the card has one (Heritage Global Partners and Disaster Legal
 * Services California do not: number and meta line already say it), and one
 * link to the case on /case-studies, stretched over the card. The Problem
 * and What we built text lives on /case-studies.
 */
function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const proof = study.homeProof === false ? undefined : study.proof?.[0];
  return (
    <article
      className="proof-card surface reveal-item"
      style={{ "--case-accent": study.accent, "--i": index } as CSSProperties}
    >
      {study.figure ? (
        <p className="proof-card-figure">
          <CountUp value={study.figure} className="proof-card-figure-value" />
          {study.figureCaption ? (
            <>
              {" "}
              <span className="proof-card-figure-caption">{study.figureCaption}</span>
            </>
          ) : null}
        </p>
      ) : null}
      <h3 className="proof-card-client">{study.client}</h3>
      {caseMeta(study) ? <p className="proof-card-meta case-text">{caseMeta(study)}</p> : null}
      {proof ? <p className="proof-card-proof case-text">{proof}</p> : null}
      <a
        className="offer-card-link proof-card-link"
        href={`${CASE_STUDIES_PATH}#${study.slug}`}
        aria-label={`More about ${study.client}`}
      >
        <span className="offer-card-more">More</span>
        <span className="offer-card-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  );
}

/**
 * Proof: the case studies on MB11's grey band 394:1892 (curve top left, cut
 * bottom right), heading left and intro right (366:1384, 367:1622), the
 * four stat cards two by two, then the experience strip as one stat band
 * under them, inside the same band. The id stays track-record because older
 * links point at it.
 */
export function TrackRecord() {
  return (
    <section id="track-record" className="section band band--grey track-record" aria-labelledby="track-record-heading">
      <div className="container">
        <Reveal className="track-head">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 className="h2" id="track-record-heading">
              <span className="h-light">Built to</span> last
            </h2>
          </div>
          {/* Intro from Drew's batch 2, 2026-11-13. Handover was confirmed
              on 2026-08-20 as repeatable across numerous projects. */}
          <p className="track-intro case-text">{CASE_STUDIES_INTRO}</p>
        </Reveal>

        <Reveal className="proof-grid" stagger>
          {CASE_STUDIES.map((study, i) => (
            <CaseCard study={study} index={i} key={study.slug} />
          ))}
        </Reveal>

        <ExperienceStrip />
      </div>
    </section>
  );
}
