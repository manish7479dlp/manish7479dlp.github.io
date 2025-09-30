import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  // Dynamic import for project images
  const getImageSrc = async (imagePath: string) => {
    try {
      const module = await import(imagePath);
      return module.default;
    } catch (error) {
      console.error(`Failed to load image: ${imagePath}`, error);
      return '';
    }
  };

  return (
    <Card className="glass-card hover-glow group cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={async (e) => {
            const imgSrc = await getImageSrc(project.image);
            if (imgSrc) {
              (e.target as HTMLImageElement).src = imgSrc;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Links Overlay */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="bg-background/80 backdrop-blur-sm h-8 w-8 p-0 sm:h-auto sm:w-auto sm:px-3"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-background/80 backdrop-blur-sm h-8 w-8 p-0 sm:h-auto sm:w-auto sm:px-3"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          {project.featured && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
              Featured
            </Badge>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm sm:text-base">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="skill-badge text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="skill-badge text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2 sm:space-x-3">
          <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" className="flex-1 text-xs sm:text-sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = ({ projects }: ProjectsProps) => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">More Projects</h3>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
