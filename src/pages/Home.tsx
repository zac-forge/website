import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TrackRecord } from "../components/TrackRecord";
import { ShiftComparison } from "../components/ShiftComparison";
import { Services } from "../components/Services";
import { HowItWorks } from "../components/HowItWorks";
import { StartHere } from "../components/StartHere";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Proof second. In v1 this sat fifth, behind the argument. The whole
            point of v3 is that the record leads. */}
        <TrackRecord />
        <ShiftComparison />
        <Services />
        <HowItWorks />
        <StartHere />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
