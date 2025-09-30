import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  data: {
    title: string;
    content: string;
    image: string;
    statsCard: any[];
  };
}

export const About = ({ data }: AboutProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">{data.title}</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {data.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {
              data?.statsCard.map((data) => (
                <Card className="glass-card hover-glow text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{data?.value}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{data?.title}</p>
                  </CardContent>
                </Card>
              )

              )
            }
            {/* <Card className="glass-card hover-glow text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">5+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">20+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Dedication</p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};