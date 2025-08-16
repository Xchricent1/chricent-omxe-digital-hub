import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-1/4 -left-8 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-primary/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* OMXE Support Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium text-sm">Supported by OMXE</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">BWAMBALE</span>
            <br />
            <span className="text-foreground">CHRICENT</span>
          </h1>
          
          {/* Professional titles */}
          <div className="text-xl md:text-2xl lg:text-3xl font-montserrat font-medium mb-6 text-muted-foreground">
            <span className="text-primary">Software Engineer</span>
            <span className="mx-3 text-accent">|</span>
            <span className="text-primary">AI Analyst</span>
            <span className="mx-3 text-accent">|</span>
            <span className="text-primary">Creative Innovator</span>
          </div>
          
          {/* Bio */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground leading-relaxed">
            Passionate about transforming ideas into powerful digital solutions. 
            I combine technical expertise with creative innovation to build the future of technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-hero group">
              <span>Explore My Work</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Professional image */}
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <img 
              src="/lovable-uploads/e1760222-628c-4a79-a08f-271bc20732f7.png" 
              alt="Bwambale Chricent - Professional Portrait"
              className="relative rounded-2xl shadow-2xl animate-slide-up max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;