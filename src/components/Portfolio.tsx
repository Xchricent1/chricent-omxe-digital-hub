import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-powered recommendations and advanced analytics dashboard.",
      image: "/lovable-uploads/dd678493-674f-4f63-8b24-6085f1b509e5.png",
      technologies: ["React", "Python", "AI/ML", "PostgreSQL"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Machine learning dashboard for data visualization and predictive analytics with real-time insights.",
      image: "/lovable-uploads/8d9f9497-4c67-4993-a2c5-66012c3eecc9.png",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      category: "AI & Machine Learning",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "OMXE Graphics Portfolio",
      description: "Creative design portfolio showcasing branding, marketing materials, and digital graphics.",
      image: "/lovable-uploads/7bd0fd2d-1319-435b-beb0-901db87df6ef.png",
      technologies: ["Adobe Suite", "Figma", "Branding", "Print Design"],
      category: "Creative Design",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application with advanced user experience and real-time features.",
      image: "/lovable-uploads/adbe25f8-7c3c-48d1-b9d3-b52b29fcedc9.png",
      technologies: ["React Native", "Firebase", "TypeScript"],
      category: "Mobile Development",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Business Management System",
      description: "Comprehensive business management solution with inventory, CRM, and analytics modules.",
      image: "/lovable-uploads/e1760222-628c-4a79-a08f-271bc20732f7.png",
      technologies: ["Angular", "PHP", "MySQL", "Laravel"],
      category: "System Management",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Video Production Suite",
      description: "Professional video editing and content creation platform with advanced editing capabilities.",
      image: "/lovable-uploads/f429b2ce-5376-426d-b921-9ac68b3e8e0c.png",
      technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"],
      category: "Video Production",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "AI & Machine Learning", "Creative Design", "Mobile Development", "System Management", "Video Production"];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative projects that demonstrate technical excellence and creative problem-solving
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "btn-accent" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-modern group overflow-hidden">
              {/* Project image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-secondary border border-border px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 btn-hero text-sm py-2"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button className="btn-accent">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;