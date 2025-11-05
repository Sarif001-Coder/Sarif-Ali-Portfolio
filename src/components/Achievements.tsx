import abstractShapes from "@/assets/abstract-shapes.png";
import guitarPlayer from "@/assets/guitar-player.png";

const Achievements = () => {
  return (
    <section className="py-12 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Recognition & Achievements
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Best Soft Skills Presenter */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-4 overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src={abstractShapes} 
                alt="Abstract geometric shapes" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Best Soft Skills Presenter</h3>
              <p className="text-muted-foreground">
                Recognized for exceptional communication and presentation abilities in technical environments.
              </p>
            </div>
          </div>

          {/* Well-Rounded Professional */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-card to-background border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Well-Rounded Professional</h3>
              <p className="text-foreground">
                Combining technical expertise with soft skills and creative talents to deliver comprehensive 
                value in every role.
              </p>
            </div>
          </div>

          {/* Guitar Enthusiast */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-4 overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src={guitarPlayer} 
                alt="Guitar player silhouette" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Guitar Enthusiast</h3>
              <p className="text-muted-foreground">
                Creative pursuit demonstrating discipline, dedication, and artistic expression beyond technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
