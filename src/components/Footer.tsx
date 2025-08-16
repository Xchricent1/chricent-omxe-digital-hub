import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "AI Solutions",
    "Video Editing",
    "System Management",
    "Business Consulting",
    "Mobile Apps"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">BWAMBALE</span> CHRICENT
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Software Engineer, AI Analyst, and Creative Innovator dedicated to 
              transforming ideas into powerful digital solutions. Proudly supported by OMXE.
            </p>
            
            {/* OMXE badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-medium text-sm">Powered by OMXE</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-background/70">WhatsApp</p>
                <p className="font-medium">+256 760834976</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-background/70">Email</p>
                <p className="font-medium text-sm">chricentbwambalek25galaxy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-background/70">Location</p>
                <p className="font-medium">Uganda, East Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-background/70">
            <span>© 2024 Bwambale Chricent</span>
            <Heart className="h-4 w-4 text-accent" />
            <span>Supported by OMXE</span>
          </div>
          
          <div className="text-background/70 text-sm">
            Built with passion and cutting-edge technology
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;