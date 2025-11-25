import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thejeshchowdary001@gmail.com",
      href: "mailto:thejeshchowdary001@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 517-730-4554",
      href: "tel:+15177304554",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/thejeshm",
      href: "http://linkedin.com/in/thejeshm",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/thejesh-m",
      href: "http://github.com/thejesh-m",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 transition-all duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and Machine Learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.label}
                  className="card-glass hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="card-glass text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Open to opportunities nationwide</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:thejeshchowdary001@gmail.com"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                    <Mail className="w-4 h-4 mr-2" />
                    Send an Email
                  </Button>
                </a>
                <a
                  href="assets/resume/Thejesh_Mallidi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto min-w-[200px]"
                  >
                    Download Resume
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
