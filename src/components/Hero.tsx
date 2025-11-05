import { Button } from "@/components/ui/button";
import cloudServer from "@/assets/cloud-server.png";
import { Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 items-center animate-fade-in">
        {/* Left: Cloud Server Illustration */}
        <div className="relative animate-float">
          <div className="bg-gradient-to-br from-card to-background p-8 rounded-2xl border border-border">
            <img 
              src={cloudServer} 
              alt="Cloud Infrastructure Illustration" 
              className="w-full h-auto drop-shadow-glow"
            />
          </div>
        </div>

        {/* Right: Hero Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Shaikh Sarif Ali
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow font-semibold"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/shaikh-sarif-ali" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                View LinkedIn Profile
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a 
                href="https://github.com/shaikhsarifali" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub Portfolio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
