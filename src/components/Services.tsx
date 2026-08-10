import { Reveal } from "./Reveal";
import { ServiceRow } from "./ServiceRow";

const SERVICES = [
  {
    index: "01",
    title: "ADVISE",
    statement: "Find where technology creates leverage.",
    items: [
      "Technology strategy",
      "AI opportunity assessment",
      "Product and platform direction",
      "Workflow analysis",
      "Architecture and technical planning",
    ],
  },
  {
    index: "02",
    title: "BUILD",
    statement: "Turn the right ideas into working systems.",
    items: [
      "Custom software",
      "Web applications",
      "High-performance websites",
      "Internal tools",
      "Workflow automation",
      "AI integrations and agents",
      "Prototypes and MVPs",
    ],
  },
  {
    index: "03",
    title: "PARTNER",
    statement: "Senior technology capability when you need it.",
    items: [
      "Fractional technology leadership",
      "Ongoing product development",
      "Technical problem solving",
      "Specialist team assembly",
      "Existing platform improvement",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 / WHAT ZAC DOES</p>
        </Reveal>
        <div className="service-rows">
          {SERVICES.map((service) => (
            <Reveal key={service.index}>
              <ServiceRow {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
