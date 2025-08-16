import { 
  Code, 
  Lightbulb, 
  Video, 
  TrendingUp, 
  Cpu, 
  Brain,
  Database,
  Smartphone,
  Globe,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Design & Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React/Angular", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 98 },
        { name: "PHP", level: 85 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 92 },
        { name: "AI Analysis", level: 88 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Science", level: 80 }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Creative & Innovation",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: [
        { name: "Creative Problem Solving", level: 95 },
        { name: "Innovation Strategy", level: 90 },
        { name: "Design Thinking", level: 88 },
        { name: "Product Development", level: 85 }
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Video Editing & Content",
      icon: <Video className="h-6 w-6" />,
      skills: [
        { name: "Video Production", level: 90 },
        { name: "Content Creation", level: 92 },
        { name: "Motion Graphics", level: 85 },
        { name: "Digital Marketing", level: 80 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Entrepreneurship & Business",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: [
        { name: "Business Strategy", level: 88 },
        { name: "Project Management", level: 92 },
        { name: "Leadership", level: 90 },
        { name: "Innovation Management", level: 85 }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      title: "System Management",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Software Architecture", level: 88 },
        { name: "Database Management", level: 85 },
        { name: "System Optimization", level: 90 },
        { name: "Cloud Solutions", level: 82 }
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const programmingLanguages = [
    { name: "HTML", level: 98, color: "bg-orange-500" },
    { name: "CSS", level: 95, color: "bg-blue-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "Python", level: 92, color: "bg-green-500" },
    { name: "React", level: 95, color: "bg-cyan-500" },
    { name: "Angular", level: 88, color: "bg-red-500" },
    { name: "PHP", level: 85, color: "bg-purple-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning multiple domains of technology and innovation
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-modern group hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1 + skillIndex * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="card-modern">
          <h3 className="text-2xl font-bold mb-8 text-center">Programming Languages & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto rounded-full ${lang.color} flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform`}>
                    {lang.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center font-bold">
                    {Math.round(lang.level / 10)}
                  </div>
                </div>
                <p className="font-medium text-sm">{lang.name}</p>
                <p className="text-xs text-muted-foreground">{lang.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;