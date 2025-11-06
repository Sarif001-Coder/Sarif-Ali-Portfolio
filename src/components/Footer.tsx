import { Linkedin, Github, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Footer = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <footer ref={ref} className={`py-8 px-6 border-t border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Shaikh Sarif Ali</h3>
            <p className="text-muted-foreground">DevOps Engineer | Cloud Infrastructure Specialist</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/shaikh-sarif-ali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border hover:border-primary p-3 rounded-full transition-all duration-300 hover:shadow-glow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/shaikhsarifali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border hover:border-primary p-3 rounded-full transition-all duration-300 hover:shadow-glow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@shaikhsarifali.com" 
              className="bg-card border border-border hover:border-primary p-3 rounded-full transition-all duration-300 hover:shadow-glow-sm"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Shaikh Sarif Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
