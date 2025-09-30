import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategory {
  name: string;
  technologies: string[];
}

interface SkillsProps {
  data: {
    title: string;
    categories: SkillCategory[];
  };
}

export const Skills = ({ data }: SkillsProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{data.title}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.categories.map((category, index) => (
            <Card key={category.name} className="glass-card hover-glow group">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="skill-badge px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium"
                      style={{
                        animationDelay: `${(index * 100) + (techIndex * 50)}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};