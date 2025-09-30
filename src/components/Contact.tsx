import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactProps {
  data: {
    title: string;
    subtitle: string;
    cta: string;
  };
  personal: {
    email: string;
    phone: string;
    location: string;
  };
}

export const Contact = ({ data, personal }: ContactProps) => {
  const handleMailSend = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.querySelector("#name") as HTMLInputElement;
    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const subjectInput = form.querySelector("#subject") as HTMLInputElement;
    const messageInput = form.querySelector("#message") as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    // Construct mailto link
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Clear all form fields after sending
    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{data.title}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <Card className="glass-card hover-glow">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                  <div className="bg-primary/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm break-all">{personal.email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-glow">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                  <div className="bg-primary/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{personal.phone}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-glow">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                  <div className="bg-primary/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{personal.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card order-1 lg:order-2">
            <CardContent className="p-6 sm:p-8">
              <form
                className="space-y-4 sm:space-y-6"
                onSubmit={handleMailSend}
              >
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-border text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50 border-border text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    className="bg-background/50 border-border text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 text-sm sm:text-base"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {data.cta}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
