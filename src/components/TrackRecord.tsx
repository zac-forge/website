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
            ZAC is led by Andrew Johnston, a seasoned technology practitioner with experience
            spanning enterprise technology, independent digital work, web, media, and product
            development.
          </p>
          <p className="text-muted">
            That background matters because good technology work starts before the first line of
            code. It requires understanding the business problem, choosing what is worth
            building, and knowing how to get it into the world.
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
