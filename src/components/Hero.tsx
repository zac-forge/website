import { Reveal } from "./Reveal";
import { HeroForge } from "./HeroForge";
import { BOOKING_URL } from "../lib/links";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">ZAC / TECHNOLOGY + AI</p>
          <h1 className="h1">
            Technology has <span className="text-forge">new economics.</span>
          </h1>
          <p className="hero-body text-muted">
            AI has changed what it takes to turn an idea into working technology. ZAC combines
            senior technology judgment with AI-native execution to advise, design, and build at a
            speed that was not practical before.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={BOOKING_URL}>
              <span>Book a call</span>
              <span aria-hidden="true"> →</span>
            </a>
            <a className="text-link" href="#services">
              <span>See what we build</span>
              <span aria-hidden="true"> ↓</span>
            </a>
          </div>
          <p className="proof-line text-muted">
            Senior-led. Specialist-supported. Built without agency overhead.
          </p>
        </Reveal>

        <Reveal className="hero-visual">
          <HeroForge />
        </Reveal>
      </div>
    </section>
  );
}
