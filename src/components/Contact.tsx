import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+256 760834976",
      action: () => window.open('https://wa.me/256760834976', '_blank')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "chricentbwambalek25galaxy@gmail.com",
      action: () => window.open('mailto:chricentbwambalek25galaxy@gmail.com', '_blank')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Uganda, East Africa",
      action: () => {}
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with innovative minds. 
                Whether you need a complete digital solution or want to discuss an idea, 
                I'm here to help make it happen.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="card-skill cursor-pointer group"
                  onClick={contact.action}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{contact.title}</h4>
                      <p className="text-muted-foreground text-sm">{contact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-accent flex-1"
                  onClick={() => window.open('https://wa.me/256760834976', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                  onClick={() => window.open('mailto:chricentbwambalek25galaxy@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </div>

            {/* Professional image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/f429b2ce-5376-426d-b921-9ac68b3e8e0c.png" 
                alt="Bwambale Chricent at professional location"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Professional & Reliable</p>
                <p className="text-sm opacity-90">Available for new projects</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card-modern">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Project discussion, consultation, etc."
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full btn-hero">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>

            {/* Additional info */}
            <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond within 2-4 hours during business hours. 
                For urgent projects, feel free to contact me directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;