import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profileImage from "@/assets/profile.jpg";
const Hero = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  return <section id="home" ref={ref} className={`min-h-screen flex items-center justify-center px-6 pt-24 pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl w-full text-center space-y-8">
        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto rounded-full border-4 border-primary/30 overflow-hidden mb-8 hover:scale-105 transition-transform duration-300">
          <img 
            src={profileImage} 
            alt="Shaikh Sarif Ali - DevOps Engineer" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <div className="space-y-2">
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
            Shaikh
          </h1>
          <h2 className="text-5xl lg:text-7xl font-bold text-primary">
            Sarif Ali
          </h2>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/30">
            <p className="text-lg font-medium text-primary">
              DevOps Engineer | Cloud Infrastructure Specialist
            </p>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming infrastructure into scalable, secure, and automated solutions. 
            Specializing in Linux server management, cloud architecture, and CI/CD pipelines.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Rajkot, Gujarat, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:contact@shaikhsarifali.com" className="hover:text-primary transition-colors">
              contact@shaikhsarifali.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow font-semibold" asChild>
            <a href="https://www.linkedin.com/in/shaikh-sarif-ali" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold" asChild>
            <a href="https://github.com/shaikhsarifali" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>;
};
export default Hero;