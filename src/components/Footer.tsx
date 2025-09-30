import { Github, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  personal: {
    name: string;
    email: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
}

export const Footer = ({ personal, social }: FooterProps) => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Name and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold gradient-text mb-2">{personal.name}</h3>
            <p className="text-muted-foreground flex items-center justify-center md:justify-start text-sm sm:text-base">
              Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-red-500" /> in React & TypeScript
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-4 sm:space-x-6">
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
              href={`mailto:${personal.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform p-2"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};