import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 transition-all duration-700"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Thejesh Mallidi</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
              Machine Learning Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Machine Learning Engineer with proven experience building scalable agentic AI systems, designing generative AI workflows, and pre-training and fine-tuning large language models and transformer-based architectures.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="http://linkedin.com/in/thejeshm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 border border-border hover:border-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/thejesh-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 border border-border hover:border-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:thejeshchowdary001@gmail.com"
              className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 border border-border hover:border-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+15177304554"
              className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 border border-border hover:border-primary"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("skills")}
              className="min-w-[160px]"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="min-w-[160px]"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
