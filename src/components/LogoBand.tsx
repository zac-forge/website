import { Reveal } from "./Reveal";
import { step } from "../lib/reveal";

/**
 * "Where our team has worked." MB11 places it between the hero and Problem
 * as a flat image of this same band (358:1079), so it is built as live text
 * in the comp's arrangement: a small spaced label and the five names in
 * muted grey. Never labelled as clients. IBM is where the team worked, per
 * CLAUDE.md, which is exactly what this band says.
 */
const PLACES = ["IBM", "Walmart", "Ogilvy", "Viacom", "Nike"];

type LogoBandProps = {
  id?: string;
  label?: string;
  /** Keep the label for screen readers only. */
  hideLabel?: boolean;
  items?: string[];
};

export function LogoBand({
  id = "logo-band",
  label = "Where our team has worked",
  hideLabel = false,
  items = PLACES,
}: LogoBandProps = {}) {
  const headingId = `${id}-heading`;
  return (
    <section className="logo-band" aria-labelledby={headingId}>
      <div className="container">
        <h2 className={hideLabel ? "sr-only" : "logo-band-label"} id={headingId}>
          {label}
        </h2>
        <ul className="logo-band-list">
          {items.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * The credibility strip, MB11 388:1867 to 388:1871, in the comp's order and
 * words. The HIPAA line drops the comp's year count (Drew, 2026-11-12), per
 * the no-year-counts rule. Each line is split around its anchor, which sets
 * bold (design pass, 2026-11-22), and carries a line icon drawn in code.
 */
const EXPERIENCE: { before?: string; anchor: string; after?: string; icon: React.ReactNode }[] = [
  {
    before: "Accessibility under ",
    anchor: "IBM.com",
    after: " standards",
    // A figure in a circle.
    icon: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <circle cx="12" cy="7.4" r="1.1" />
        <path d="M7.4 10.2h9.2M12 10.2v4.6M12 14.8l-2.6 4M12 14.8l2.6 4" />
      </>
    ),
  },
  {
    before: "Salesforce integration for ",
    anchor: "20,000 users",
    // Two systems, joined.
    icon: (
      <>
        <rect x="2.5" y="2.5" width="8" height="8" rx="2.2" />
        <rect x="13.5" y="13.5" width="8" height="8" rx="2.2" />
        <path d="M10.5 6.5h4a3 3 0 0 1 3 3v4M13.5 17.5h-4a3 3 0 0 1-3-3v-4" />
      </>
    ),
  },
  {
    before: "Systems running ",
    anchor: "since 2010",
    // A clock that keeps going round.
    icon: (
      <>
        <path d="M21.5 12a9.5 9.5 0 1 1-3-6.9" />
        <path d="M21.5 3.2v4.4h-4.4" />
        <path d="M12 7.2V12l3.2 2" />
      </>
    ),
  },
  {
    anchor: "HIPAA",
    after: "-regulated healthcare systems",
    // A shield with a cross.
    icon: (
      <>
        <path d="M12 2.5l7.5 3v5.4c0 4.6-3 8.5-7.5 10.6-4.500-2.1-7.500-6-7.500-10.600V5.500z" />
        <path d="M12 8.6v6M9 11.600h6" />
      </>
    ),
  },
];

/**
 * A credential row (design pass, 2026-11-22): four equal columns on a dark
 * band inside Proof, ink running to the accent purple, so it breaks up the
 * white cards on grey. Each item is a line icon over its line, the anchor
 * in bold. Rendered by TrackRecord. Text unchanged.
 */
export function ExperienceStrip({ headingLevel: Heading = "h3" }: { headingLevel?: "h2" | "h3" } = {}) {
  return (
    <Reveal className="strip" stagger>
      <Heading className="sr-only" id="experience-heading">
        Experience
      </Heading>
      <ul className="strip-list" aria-labelledby="experience-heading">
        {EXPERIENCE.map((item, i) => (
          <li className="strip-item reveal-item" style={step(i)} key={item.anchor}>
            <svg className="strip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {item.icon}
            </svg>
            <p className="strip-line">
              {item.before}
              <strong>{item.anchor}</strong>
              {item.after}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
