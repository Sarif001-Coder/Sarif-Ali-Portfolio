import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "expertise", "certifications", "achievements", "experience", "training", "education"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT ME" },
    { id: "experience", label: "EXPERIENCE" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-3 h-3 bg-primary rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none">Shaikh Sarif Ali</span>
              <span className="text-xs text-muted-foreground">/ DEVOPS ENGINEER</span>
            </div>
          </button>

          {/* Nav Items */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
