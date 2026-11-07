/**
 * "Where our team has worked." Comp 7 draws five grey circles here (198:528
 * to 198:532). Per the copy deck the names are set as plain muted text until
 * each mark is cleared, and they are never labelled as clients. IBM is where
 * the team worked, per CLAUDE.md, which is exactly what this band says.
 *
 * The same band, with its label hidden, carries the experience strip between
 * How we work and Who we are (copy pass of 2026-11-06), so the two share one
 * style and the strip adds none.
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
        <h2 className={hideLabel ? "sr-only" : "eyebrow logo-band-label"} id={headingId}>
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

/** Text only, in the logo band's muted style. */
const EXPERIENCE = [
  "Accessibility under IBM.com standards",
  "5 years in HIPAA-regulated healthcare",
  "Salesforce integration for 20,000 users",
  "Systems running since 2010",
];

export function ExperienceStrip() {
  return <LogoBand id="experience" label="Experience" hideLabel items={EXPERIENCE} />;
}
