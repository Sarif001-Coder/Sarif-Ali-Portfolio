import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profileImage from "@/assets/profile.jpg";
const Hero = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  return <section id="home" ref={ref} className={`min-h-screen flex items-center justify-center px-4 lg:px-6 pt-24 pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl w-full text-center space-y-6 lg:space-y-8">
        {/* Profile Image */}
        

        {/* Name */}
        <div className="space-y-1 lg:space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
            Shaikh
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-primary">Sarif Ali</h2>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto space-y-3 lg:space-y-4">
          <div className="inline-block px-4 py-2 lg:px-6 rounded-full bg-primary/10 border border-primary/30">
            <p className="text-sm lg:text-lg font-medium text-primary">
              DevOps Engineer | Cloud Infrastructure Specialist
            </p>
          </div>
          
          <p className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Transforming infrastructure into scalable, secure, and automated solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm lg:text-base text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 lg:h-4 lg:w-4 text-primary flex-shrink-0" />
            <span>Rajkot, Gujarat, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 lg:h-4 lg:w-4 text-primary flex-shrink-0" />
            <a href="mailto:contact@shaikhsarifali.com" className="hover:text-primary transition-colors break-all">
              contact@shaikhsarifali.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 lg:gap-4 justify-center pt-2 lg:pt-4">
          <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow font-semibold text-sm lg:text-base" asChild>
            <a href="https://www.linkedin.com/in/shaikh-sarif-ali" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button size="default" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm lg:text-base" asChild>
            <a href="https://github.com/shaikhsarifali" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>;
};
export default Hero;