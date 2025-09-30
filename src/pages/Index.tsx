import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import portfolioData from "@/data/portfolio.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero 
            data={portfolioData.personal} 
            social={portfolioData.social}
          />
        </section>
        
        <section id="about">
          <About data={portfolioData.about} />
        </section>
        
        <section id="skills">
          <Skills data={portfolioData.skills} />
        </section>
        
        <section id="projects">
          <Projects projects={portfolioData.projects} />
        </section>
        
        <section id="contact">
          <Contact 
            data={portfolioData.contact} 
            personal={portfolioData.personal}
          />
        </section>
      </main>
      
      <Footer 
        personal={portfolioData.personal}
        social={portfolioData.social}
      />
    </div>
  );
};

export default Index;
