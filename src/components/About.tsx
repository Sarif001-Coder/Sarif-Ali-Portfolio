import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { FileText, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <section id="about" ref={ref} className="relative min-h-screen flex items-center px-4 lg:px-6 py-16 lg:py-24 overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
      </div>

      <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 lg:mb-4">
                About Me
              </h2>
              <div className="w-16 lg:w-20 h-1 bg-primary mb-4 lg:mb-8"></div>
            </div>

            <div className="space-y-4 lg:space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              <h3 className="text-xl lg:text-2xl font-bold">Here's who I am & what I do</h3>
              
              <div className="flex gap-3 lg:gap-4 flex-wrap">
                <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-sm lg:text-base hover:scale-105 transition-transform duration-300">
                  <FileText className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  RESUME
                </Button>
                <Button size="default" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm lg:text-base hover:scale-105 transition-transform duration-300" onClick={() => document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <Briefcase className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  PROJECTS
                </Button>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                I'm a DevOps Engineer specializing in Linux server management, cloud infrastructure, 
                and deployment automation.
              </p>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <div className="relative group">
              <img 
                src={profileImage} 
                alt="Shaikh Sarif Ali" 
                className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10 animate-float"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-2xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;