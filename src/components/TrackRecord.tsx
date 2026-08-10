import { Reveal } from "./Reveal";

const EXPERIENCE = [
  "Enterprise systems",
  "Digital products",
  "Web + applications",
  "AI + automation",
  "Technology strategy",
  "Design + media",
];

export function TrackRecord() {
  return (
    <section id="about" className="section track-record">
      <div className="container track-grid">
        <Reveal className="track-copy">
          <p className="eyebrow">04 / TRACK RECORD</p>
          <h2 className="h2">Built on experience. Structured for what comes next.</h2>
          <p className="text-muted">
            ZAC is led by founder Andrew Johnston, whose experience spans enterprise systems,
            independent digital, web, media, and product work, alongside a senior team of
            developers and designers. That range matters, because good technology starts before
            the first line of code: understanding the business problem, choosing what is worth
            building, and knowing how to ship it.
          </p>
        </Reveal>

        <Reveal className="experience-grid">
          {EXPERIENCE.map((item) => (
            <div className="experience-item surface" key={item}>
              {item}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
