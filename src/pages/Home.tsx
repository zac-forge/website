import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LogoBand } from "../components/LogoBand";
import { TrackRecord } from "../components/TrackRecord";
import { WhatChanged } from "../components/WhatChanged";
import { RealityCheck } from "../components/RealityCheck";
import { WhatWeFix } from "../components/WhatWeFix";
import { HowWeWork } from "../components/HowWeWork";
import { WhoWeAre } from "../components/WhoWeAre";
import { Closing } from "../components/Closing";
import { Footer } from "../components/Footer";

/** v5 order, docs/site-copy-v5.md: one problem, one front door. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBand />
        <TrackRecord />
        <WhatChanged />
        <RealityCheck />
        <WhatWeFix />
        <HowWeWork />
        <WhoWeAre />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
