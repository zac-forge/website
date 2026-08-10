import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ShiftComparison } from "../components/ShiftComparison";
import { Services } from "../components/Services";
import { HowItWorks } from "../components/HowItWorks";
import { TrackRecord } from "../components/TrackRecord";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShiftComparison />
        <Services />
        <HowItWorks />
        <TrackRecord />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
