import { Code, Brain, Video, Settings, TrendingUp, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web & Software Development",
      description: "Custom web applications, software solutions, and full-stack development using modern technologies.",
      features: [
        "Responsive web applications",
        "E-commerce platforms",
        "Custom software solutions",
        "API development & integration"
      ],
      color: "from-blue-500 to-blue-600",
      price: "Starting at $2,000"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning Solutions",
      description: "Intelligent systems, data analytics, and AI-powered applications to automate and optimize processes.",
      features: [
        "Predictive analytics",
        "Machine learning models",
        "Data visualization dashboards",
        "AI integration services"
      ],
      color: "from-purple-500 to-purple-600",
      price: "Starting at $3,000"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editing & Creative Content",
      description: "Professional video production, editing, and creative content development for digital marketing.",
      features: [
        "Video editing & post-production",
        "Motion graphics & animation",
        "Social media content",
        "Brand video production"
      ],
      color: "from-green-500 to-green-600",
      price: "Starting at $500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "System Management Consulting",
      description: "Optimize your IT infrastructure, database management, and system architecture for peak performance.",
      features: [
        "System architecture design",
        "Database optimization",
        "Cloud migration services",
        "Performance monitoring"
      ],
      color: "from-orange-500 to-orange-600",
      price: "Starting at $1,500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business & Startup Innovation Support",
      description: "Strategic consulting for startups and businesses looking to innovate and scale their operations.",
      features: [
        "Business strategy development",
        "Digital transformation",
        "Innovation workshops",
        "Startup mentoring"
      ],
      color: "from-red-500 to-red-600",
      price: "Starting at $1,000"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance and exceptional user experience.",
      features: [
        "iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization"
      ],
      color: "from-teal-500 to-teal-600",
      price: "Starting at $2,500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and drive innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-modern group relative overflow-hidden">
              {/* Service header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-accent">{service.price}</p>
                </div>
              </div>

              {/* Service description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <Button 
                className="w-full btn-hero group-hover:shadow-lg"
                onClick={() => {
                  // Scroll to contact section
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="card-modern text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that exceeds your expectations. 
            Book a consultation to get started on your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-accent text-lg px-8 py-4"
              onClick={() => {
                // Open WhatsApp
                window.open('https://wa.me/256760834976', '_blank');
              }}
            >
              Book Me for a Deal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;