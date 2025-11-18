import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { FileText, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
const About = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  return <section id="about" ref={ref} className={`min-h-screen flex items-center px-4 lg:px-6 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 lg:mb-4">
                About Me
              </h2>
              <div className="w-16 lg:w-20 h-1 bg-primary mb-4 lg:mb-8"></div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Here's who I am & what I do</h3>
              
              <div className="flex gap-3 lg:gap-4 flex-wrap">
                <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-sm lg:text-base">
                  <FileText className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  RESUME
                </Button>
                <Button size="default" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm lg:text-base" onClick={() => document.getElementById('experience')?.scrollIntoView({
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
          <div className="relative">
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;