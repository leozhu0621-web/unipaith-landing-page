import Navbar from "@/components/landing/Navbar";
import StudentsSection from "@/components/landing/StudentsSection";
import DualCTASection from "@/components/landing/DualCTASection";
import Footer from "@/components/landing/Footer";

const Students = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <StudentsSection />
      <DualCTASection />
    </div>
    <Footer />
  </div>
);

export default Students;
