import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
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
