import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LogoBand } from "../components/LogoBand";
import { Problem } from "../components/Problem";
import { RealityCheck } from "../components/RealityCheck";
import { FixWeek } from "../components/FixWeek";
import { TrackRecord } from "../components/TrackRecord";
import { WhatWeFix } from "../components/WhatWeFix";
import { WhoWeAre } from "../components/WhoWeAre";
import { Closing } from "../components/Closing";
import { Footer } from "../components/Footer";

/** Section order from Drew's pass 1 handoff of 2026-11-22, the home page cut:
 *  hero and employer band, Problem, then the spine (Check, Fix, Partner),
 *  Proof (the case study cards, then the experience strip, both rendered by
 *  TrackRecord), Team, Contact. The How we work section is gone (parked in
 *  .superseded/); its id stays on an anchor at the start of the spine so the
 *  nav and footer "How we work" links still land on Check, Fix, Partner.
 *  The FAQ moved to its own page at /faq on 2026-11-17. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBand />
        <Problem />
        <div id="how-we-work" className="spine-anchor" />
        <RealityCheck />
        <FixWeek />
        <WhatWeFix />
        <TrackRecord />
        <WhoWeAre bios={false} />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
