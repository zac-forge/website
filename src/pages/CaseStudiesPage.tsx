import { REALITY_CHECK_LABEL } from "../lib/links";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Closing } from "../components/Closing";
import { SubpageHero } from "../components/SubpageHero";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";
import { BrowserFrame } from "../components/BrowserFrame";
import { step } from "../lib/reveal";
import { CASE_STUDIES, CASE_STUDIES_INTRO } from "./caseStudies";
import type { CaseStudy } from "./caseStudies";

const accentStyle = (study: CaseStudy) => ({ "--case-accent": study.accent }) as CSSProperties;

/**
 * The results strip under the lead: the four numbers in one row, each a link
 * to its case, so a visitor who reads nothing else still sees the proof.
 */
function Results() {
  return (
    <Reveal stagger>
      <ul className="cases-results">
        {CASE_STUDIES.filter((s) => s.figure).map((study, i) => (
          <li className="reveal-item" key={study.slug} style={{ ...accentStyle(study), ...step(i) }}>
            <a className="cases-result surface" href={`#${study.slug}`}>
              <span className="cases-result-figure">
                <CountUp value={study.figure!} />
              </span>
              {study.figureCaption ? (
                <span className="cases-result-caption">{study.figureCaption}</span>
              ) : null}
              <span className="cases-result-client case-text">{study.client}</span>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/**
 * The client index. One list, laid out twice by CSS: a sticky column beside
 * the cases at desktop widths, with a track that fills as the cases scroll
 * past, and a horizontally scrolling row of chips below that. The current
 * case is marked with aria-current. The track is a CSS scroll-driven
 * animation where the browser has one. Elsewhere it steps to the current
 * case, from the same observer that sets aria-current.
 */
function CaseIndex({ current }: { current: string | null }) {
  const at = CASE_STUDIES.findIndex((s) => s.slug === current);
  return (
    <nav
      className="cases-index"
      aria-label="Case studies"
      style={{ "--cases-progress": (at + 1) / CASE_STUDIES.length } as CSSProperties}
    >
      <span className="cases-index-track" aria-hidden="true">
        <span className="cases-index-fill" />
      </span>
      <ul>
        {CASE_STUDIES.map((study) => (
          <li key={study.slug} style={accentStyle(study)}>
            <a href={`#${study.slug}`} aria-current={current === study.slug ? "true" : undefined}>
              {study.client}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * One case, with the work as the hero (design pass, 2026-11-22):
 *
 *   the client name, and the at-a-glance facts as a chip row under it
 *     (sector, status, then each link as a chip, no new copy)
 *   the number on the case's accent surface, which at desktop widths pins
 *     under the header as a bar while the rest of the case scrolls beneath
 *   the screenshot in a large browser frame, the full width of the column,
 *     on the same accent surface (two layered frames where a case has two)
 *   Problem, What we built, and Proof as three panels in a row, Proof the
 *     heaviest, on the accent surface
 *
 * Below desktop the bar scrolls with the page, and on phones the panels
 * stack.
 */
function Case({ study }: { study: CaseStudy }) {
  const headingId = `${study.slug}-heading`;
  const links = [...(study.product?.href ? [study.product as { label: string; href: string }] : []), ...(study.moreLinks ?? [])];
  const images = study.images?.slice(0, 2) ?? [];
  return (
    <article id={study.slug} className="case-study" style={accentStyle(study)} aria-labelledby={headingId}>
      <Reveal className="case-study-head">
        <h2 className="case-study-client" id={headingId}>
          {study.client}
        </h2>
        <ul className="case-study-chips">
          {study.industry ? (
            <li className="chip">
              <span className="sr-only">Sector: </span>
              {study.industry}
            </li>
          ) : null}
          {study.status ? (
            <li className="chip">
              <span className="sr-only">Status: </span>
              {study.status}
            </li>
          ) : null}
          {links.map((link) => (
            <li key={link.href}>
              <a className="chip chip--link" href={link.href}>
                {link.label}
                <span className="chip-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
          {!links.length && study.product ? <li className="chip">{study.product.label}</li> : null}
        </ul>
      </Reveal>

      <div className="case-study-work">
        {study.figure ? (
          <p className="case-study-figure">
            <CountUp value={study.figure} className="case-study-figure-value" />
            {study.figureCaption ? (
              <>
                {" "}
                <span className="case-study-figure-caption">{study.figureCaption}</span>
              </>
            ) : null}
          </p>
        ) : null}

        <Reveal className={`case-study-stage${images.length > 1 ? " case-study-stage--layered" : ""}`}>
          {images.length ? (
            // Drawn back to front, so the first screenshot sits on top.
            [...images].reverse().map((image, i, all) => (
              <BrowserFrame
                base={image.base}
                alt={image.alt}
                sizes="(max-width: 760px) calc(100vw - 80px), 720px"
                className={all.length > 1 ? (i === 0 ? "browser--back" : "browser--front") : ""}
                key={image.base}
              />
            ))
          ) : study.figure ? (
            <div className="case-study-art--block" aria-hidden="true">
              {study.figure}
            </div>
          ) : null}
        </Reveal>

        <Reveal stagger>
          <dl className="case-study-beats">
            {study.problem ? (
              <div className="case-study-beat reveal-item" style={step(0)}>
                <dt className="case-fact-label">Problem</dt>
                <dd>{study.problem}</dd>
              </div>
            ) : null}
            <div className="case-study-beat reveal-item" style={step(1)}>
              <dt className="case-fact-label">What we built</dt>
              <dd>{study.built}</dd>
            </div>
            {study.proof ? (
              <div className="case-study-beat case-study-beat--proof reveal-item" style={step(2)}>
                <dt className="case-fact-label">Proof</dt>
                <dd>{study.proof.join(" ")}</dd>
              </div>
            ) : null}
          </dl>
        </Reveal>
      </div>
    </article>
  );
}

/**
 * /case-studies (Drew's pass 1 handoff, 2026-11-22), on the /about and /faq
 * layout: the shared hero with the page name, the headline "Built to last"
 * as the page's one h1 and the intro, both from the home section, then the
 * results strip, the client index, the four cases, and one call to action.
 * Every word of case copy is the home cards' copy, read from caseStudies.ts.
 */
export default function CaseStudiesPage() {
  const [current, setCurrent] = useState<string | null>(null);

  // Marks the case crossing the upper part of the viewport as current.
  useEffect(() => {
    const cases = CASE_STUDIES.map((s) => document.getElementById(s.slug)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!cases.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    cases.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="offer-page cases-page">
        <SubpageHero title="Case studies" />

        <section className="section offer-lead cases-lead">
          <div className="container">
            {/* Plain text: tools/og-images.mjs reads the headline from here. */}
            <h1 className="h2 offer-title">Built to last</h1>
            <p className="offer-intro">{CASE_STUDIES_INTRO}</p>
            <Results />
          </div>
        </section>

        <div className="container cases-body">
          <CaseIndex current={current} />
          <div className="cases-list">
            {CASE_STUDIES.map((study) => (
              <Case study={study} key={study.slug} />
            ))}
          </div>
        </div>

        <Closing cta={{ label: REALITY_CHECK_LABEL, href: "/#contact" }} />
      </main>
      <Footer />
    </>
  );
}
