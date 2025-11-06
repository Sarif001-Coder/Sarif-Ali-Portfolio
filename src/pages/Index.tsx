import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <Navigation />
      <Hero />
      <About />
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
