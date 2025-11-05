import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Training from "@/components/Training";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Expertise />
      <Certifications />
      <Achievements />
      <Experience />
      <Training />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
