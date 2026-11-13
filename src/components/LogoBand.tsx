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
 * The credibility strip, MB11 388:1867 to 388:1871: four lines in the comp
 * blue, Helvetica Light 32px, in the comp's order. Its label stays for
 * screen readers only. The HIPAA line carries a year count, which CLAUDE.md
 * rules out for people, so it is on the list for Drew with an alternative.
 */
const EXPERIENCE = [
  "Accessibility under IBM.com standards",
  "Salesforce integration for 20,000 users",
  "Systems running since 2010",
  "5 years in HIPAA-regulated healthcare",
];

export function ExperienceStrip() {
  return (
    <section className="strip" aria-labelledby="experience-heading">
      <div className="container">
        <h2 className="sr-only" id="experience-heading">
          Experience
        </h2>
        <ul className="strip-list">
          {EXPERIENCE.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
