import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsTrainer from "./components/WhatIsTrainer";
import HowCanYouHelp from "./components/HowCanYouHelp";
import WhyBecomeTrainer from "./components/WhyBecomeTrainer";
import HowItWorks from "./components/HowItWorks";
import PilotIncentive from "./components/PilotIncentive";
import AboutAfrijwi from "./components/AboutAfrijwi";
import WhyWeStarted from "./components/WhyWeStarted";
import CurrentStage from "./components/CurrentStage";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <Navbar />
      <main>
        <Hero />
        <WhatIsTrainer />
        <HowCanYouHelp />
        <WhyBecomeTrainer />
        <HowItWorks />
        <PilotIncentive />
        <AboutAfrijwi />
        <WhyWeStarted />
        <CurrentStage />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
