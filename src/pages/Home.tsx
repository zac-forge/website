import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LogoBand, ExperienceStrip } from "../components/LogoBand";
import { Problem } from "../components/Problem";
import { RealityCheck } from "../components/RealityCheck";
import { FixWeek } from "../components/FixWeek";
import { TrackRecord } from "../components/TrackRecord";
import { WhatWeFix } from "../components/WhatWeFix";
import { HowWeWork } from "../components/HowWeWork";
import { WhoWeAre } from "../components/WhoWeAre";
import { Closing } from "../components/Closing";
import { Footer } from "../components/Footer";

/** Section order from the copy pass of 2026-11-06: the problem, the free
 *  check, the paid week, then the proof and the bigger fixes. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBand />
        <Problem />
        <RealityCheck />
        <FixWeek />
        <TrackRecord />
        <WhatWeFix />
        <HowWeWork />
        <ExperienceStrip />
        <WhoWeAre />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
