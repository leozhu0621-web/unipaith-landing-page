import Navbar from "@/components/landing/Navbar";
import InstitutionsSection from "@/components/landing/InstitutionsSection";
import DualCTASection from "@/components/landing/DualCTASection";
import Footer from "@/components/landing/Footer";

const Institutions = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <InstitutionsSection />
      <DualCTASection />
    </div>
    <Footer />
  </div>
);

export default Institutions;
