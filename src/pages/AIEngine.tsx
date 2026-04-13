import Navbar from "@/components/landing/Navbar";
import AIFeaturesSection from "@/components/landing/AIFeaturesSection";
import DualCTASection from "@/components/landing/DualCTASection";
import Footer from "@/components/landing/Footer";

const AIEngine = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <AIFeaturesSection />
      <DualCTASection />
    </div>
    <Footer />
  </div>
);

export default AIEngine;
