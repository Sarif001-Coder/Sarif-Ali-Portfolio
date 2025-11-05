import officeScene from "@/assets/office-scene.png";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          Academic Background
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Master's Degree */}
            <div className="relative pl-6 border-l-2 border-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-2xl font-bold mb-2">Master of Computer Applications</h3>
              <p className="text-xl text-primary mb-2">Vellore Institute of Technology</p>
              <p className="text-muted-foreground mb-4">
                <span className="font-semibold">September 2025 - July 2027</span>
              </p>
              <p className="text-foreground mb-2">Specialization in Cybersecurity</p>
              <p className="text-muted-foreground">
                Pursuing advanced studies in cybersecurity and computer applications, focusing on emerging 
                threats, security architecture, and modern defense mechanisms to protect enterprise infrastructure.
              </p>
            </div>

            {/* Bachelor's Degree */}
            <div className="relative pl-6 border-l-2 border-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications</h3>
              <p className="text-xl text-primary mb-2">Marwadi University</p>
              <p className="text-muted-foreground mb-4">
                <span className="font-semibold">2019 - 2022</span>
              </p>
              <p className="text-foreground mb-2">Computer Applications</p>
              <p className="text-muted-foreground">
                Foundational degree providing comprehensive understanding of software development, database 
                management, networking fundamentals, and core computer science principles that launched my IT career.
              </p>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img 
                src={officeScene} 
                alt="Technology workspace" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
