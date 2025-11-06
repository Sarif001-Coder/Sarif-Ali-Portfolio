import cloudServer from "@/assets/cloud-server.png";
import { Server, GitBranch, Cloud, Globe } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Expertise = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const skills = [
    { icon: <Server className="h-5 w-5" />, text: "Functional Deployment" },
    { icon: <GitBranch className="h-5 w-5" />, text: "GitHub Version Control" },
    { icon: <Server className="h-5 w-5" />, text: "Linux Server Management" },
    { icon: <Cloud className="h-5 w-5" />, text: "Cloud Infrastructure" },
  ];

  const languages = [
    "Hindi (Limited Working Proficiency)",
    "English (Limited Working Proficiency)",
    "Bengali (Native Fluency)",
    "Gujarati (Native Fluency)",
  ];

  return (
    <section 
      id="expertise"
      ref={ref} 
      className={`py-16 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          Professional Expertise
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Technical Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Core Technical Skills</h3>
              <p className="text-muted-foreground mb-6">
                Specialized in deployment automation, GitHub workflows, and Linux system administration. 
                Extensive experience managing enterprise-level infrastructure with a focus on reliability and security.
              </p>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="text-primary">{skill.icon}</div>
                    <span>{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Languages & Communication</h3>
              <p className="text-muted-foreground mb-6">
                Multilingual professional capable of collaborating across diverse teams and global clients 
                with strong communication skills.
              </p>
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-background p-8 rounded-2xl border border-border">
              <img 
                src={cloudServer} 
                alt="Cloud Infrastructure" 
                className="w-full h-auto drop-shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
