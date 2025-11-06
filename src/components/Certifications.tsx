import { Card } from "@/components/ui/card";
import { Cpu, Shield, Grid, Cloud } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Certifications = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const certs = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Generative AI Fundamentals",
      subtitle: "Academy Accreditation",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Certified in Cybersecurity",
      subtitle: "Professional Certification",
    },
    {
      icon: <Grid className="h-8 w-8" />,
      title: "Azure Fundamentals",
      subtitle: "Microsoft Certified",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "AWS Cloud Practitioner",
      subtitle: "Exam Training Certified",
    },
  ];

  return (
    <section ref={ref} className={`py-12 px-6 bg-gradient-to-b from-background to-card transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Professional Certifications
        </h2>
        <p className="text-muted-foreground mb-6 max-w-4xl">
          Continuously expanding technical knowledge through industry-recognized certifications in cloud computing, 
          cybersecurity, and emerging technologies. These credentials demonstrate commitment to excellence and staying 
          current with evolving IT landscapes.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 p-6"
            >
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <div className="text-primary">{cert.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.subtitle}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
