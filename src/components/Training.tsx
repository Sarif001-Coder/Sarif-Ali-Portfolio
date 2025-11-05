import { Card } from "@/components/ui/card";
import { GitBranch, Cloud, Cog } from "lucide-react";

const Training = () => {
  const skills = [
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Version Control Mastery",
      description: "Gained comprehensive understanding of Git and GitHub for effective codebase version control, enabling collaborative development and streamlined code management across distributed teams.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "AWS Cloud Proficiency",
      description: "Developed expertise in AWS console operations, establishing CI/CD pipelines and navigating cloud environments across both Linux and Windows server architectures for scalable deployments.",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Automation Excellence",
      description: "Mastered Ansible for automating scripts across extensive server infrastructures, streamlining operations, enhancing monitoring capabilities, and reducing manual intervention in routine tasks.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          DevOps Training Experience
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Besant Technologies</h3>
          <p className="text-xl text-primary mb-2">Trainee</p>
          <p className="text-muted-foreground mb-6">
            <span className="font-semibold">October 2023 - December 2023</span>
            <br />
            Bengaluru, Karnataka, India
          </p>
          <p className="text-foreground max-w-4xl">
            Completed intensive DevOps training focused on modern automation and deployment practices. 
            This specialized program enhanced my understanding of continuous integration and continuous 
            deployment methodologies essential for contemporary IT operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <div className="text-primary">{skill.icon}</div>
              </div>
              <h4 className="text-lg font-bold mb-3">{skill.title}</h4>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
