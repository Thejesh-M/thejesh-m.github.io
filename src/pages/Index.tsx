import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <div className="pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>© 2025 Thejesh Mallidi. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
