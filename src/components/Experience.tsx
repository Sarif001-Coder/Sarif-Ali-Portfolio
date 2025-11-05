import { Card } from "@/components/ui/card";
import { Briefcase, Server, Database, Activity, Users } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-background to-card animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Current Role */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Current Leadership Role
          </h2>
          <Card className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AS Ornaments</h3>
                <p className="text-xl text-primary">Managing Partner</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold">October 2024 - Present</span> | Rajkot, Gujarat, India
            </p>
            <p className="text-foreground">
              Leading business operations with a strong focus on understanding the product and aligning team 
              management accordingly. Overseeing day-to-day operations, coordinating staff based on product 
              requirements, and ensuring efficient workflow to achieve business objectives.
            </p>
          </Card>
        </div>

        {/* Capgemini Experience */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Capgemini Experience
          </h2>
          <p className="text-xl text-primary mb-2">Associate Software Engineer</p>
          <p className="text-muted-foreground mb-8">
            <span className="font-semibold">July 2022 - September 2024 (2 years 3 months)</span> | 
            Bengaluru, Karnataka, India
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Infrastructure Management</h3>
              </div>
              <p className="text-muted-foreground">
                Managed and maintained over 100 Linux servers, ensuring consistent performance, stability, 
                and security across production environments. Proficient in troubleshooting memory issues, 
                configuring clusters, and performing preventive maintenance to minimize service disruptions.
              </p>
            </Card>

            <Card className="bg-card border-border p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Backup & Recovery</h3>
              </div>
              <p className="text-muted-foreground">
                Implemented comprehensive backup systems using Networker and VMware, including incremental 
                and full backups. Maintained accurate reports and ensured compliance with organizational 
                data protection standards.
              </p>
            </Card>

            <Card className="bg-card border-border p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">24/7 Monitoring Operations</h3>
              </div>
              <p className="text-muted-foreground">
                Oversaw monitoring with Logic Monitor and SiteScope, proactively detecting and resolving 
                website and application alerts to maintain optimal system uptime and exceptional user experience.
              </p>
            </Card>

            <Card className="bg-card border-border p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">WebSphere Administration</h3>
              </div>
              <p className="text-muted-foreground">
                Administered IBM WebSphere Console and APIC Manager for production clusters, streamlining 
                deployments and managing integrations, data sources, URLs, and SSL certificates.
              </p>
            </Card>

            <Card className="bg-card border-border p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Reporting & Documentation</h3>
              </div>
              <p className="text-muted-foreground">
                Prepared daily, weekly, and monthly reports covering VM snapshots, system health checks, 
                and infrastructure performance metrics for stakeholder review.
              </p>
            </Card>

            <Card className="bg-card border-border p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Client Collaboration</h3>
              </div>
              <p className="text-muted-foreground">
                Participated in weekly client meetings with onshore teams to understand requirements, 
                discuss priorities, and ensure smooth workflow coordination through Jira tracking.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
