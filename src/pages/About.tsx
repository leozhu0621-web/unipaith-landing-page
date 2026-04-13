import Navbar from "@/components/landing/Navbar";
import SocialProofSection from "@/components/landing/SocialProofSection";
import DualCTASection from "@/components/landing/DualCTASection";
import Footer from "@/components/landing/Footer";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <SocialProofSection />
      <DualCTASection />
    </div>
    <Footer />
  </div>
);

export default About;
