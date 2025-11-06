import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { FileText, Briefcase } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      id="about"
      ref={ref} 
      className={`min-h-screen flex items-center px-6 py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Here's who I am & what I do</h3>
              
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  RESUME
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  PROJECTS
                </Button>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a DevOps Engineer specializing in Linux server management, cloud infrastructure, 
                and deployment automation. Check out my projects section or continue scrolling to 
                learn more about my journey.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in both infrastructure and automation, I create comprehensive 
                solutions that ensure reliability, security, and scalability across enterprise environments.
              </p>
            </div>
          </div>

          {/* Right: Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-background border-2 border-primary/30 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">SA</span>
                  </div>
                  <p className="text-muted-foreground">DevOps Engineer</p>
                  <p className="text-sm text-muted-foreground">Cloud Infrastructure Specialist</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
