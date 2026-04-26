import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import GuaranteeStrip from "@/components/sections/GuaranteeStrip";
import PainPoints from "@/components/sections/PainPoints";
import Method from "@/components/sections/Method";
import Services from "@/components/sections/Services";
import Comparison from "@/components/sections/Comparison";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import RoiCalculator from "@/components/sections/RoiCalculator";
import Sectors from "@/components/sections/Sectors";
import Process from "@/components/sections/Process";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GuaranteeStrip />
      <PainPoints />
      <Method />
      <Services />
      <Comparison />
      <Portfolio />
      <Testimonials />
      <RoiCalculator />
      <Sectors />
      <Process />
      <LeadMagnet />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <StickyCtaBar />
    </main>
  );
};

export default Index;
