import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    description: string;
    email: string;
    resume: string
  };
  social: {
    github: string;
    linkedin: string;
  };
}

export const Hero = ({ data, social }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">{data.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 sm:mb-4 font-medium">
            {data.title}
          </h2>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light gradient-text px-4">
            {data.tagline}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 font-medium px-6 sm:px-8 text-sm sm:text-base"
            >
              <a href="mailto:manish7479dlp@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              asChild
              variant="link"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-secondary font-medium px-6 sm:px-8 text-sm sm:text-base"
            >
              <a href={data.resume} download className="flex items-center gap-2 hover:no-underline"  >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform p-2"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform p-2"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};