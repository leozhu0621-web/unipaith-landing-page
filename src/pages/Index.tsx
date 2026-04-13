import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import FlywheelSection from "@/components/landing/FlywheelSection";
import FAQSection from "@/components/landing/FAQSection";
import DualCTASection from "@/components/landing/DualCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <FlywheelSection />
    <FAQSection />
    <DualCTASection />
    <Footer />
  </div>
);

export default Index;
