import { Lightbulb, Rocket, Target, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Creative Innovation",
      description: "Turning complex problems into elegant solutions"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Entrepreneurial Spirit",
      description: "Building the future with cutting-edge technology"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Thinking",
      description: "Focused approach to achieving ambitious goals"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Excellence Driven",
      description: "Committed to delivering outstanding results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist with a strong entrepreneurial mindset, 
            dedicated to creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a strong foundation in software engineering and AI analysis, I've dedicated my career 
                to pushing the boundaries of what's possible in technology. My journey is marked by continuous 
                learning, innovation, and a passion for creating solutions that impact lives.
              </p>
              
              {/* OMXE Support Highlight */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <h4 className="font-semibold text-accent">Powered by OMXE</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Proudly supported by OMXE Digital Hub, enabling me to deliver world-class 
                  solutions and maintain the highest standards of innovation and creativity.
                </p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="card-skill group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Professional image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>
            <img 
              src="/lovable-uploads/dd678493-674f-4f63-8b24-6085f1b509e5.png" 
              alt="Bwambale Chricent in professional tech environment"
              className="relative rounded-3xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;