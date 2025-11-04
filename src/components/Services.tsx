import { Globe, Palette, Users, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Artist Portfolio Websites",
    description: "Custom-designed websites that showcase your artwork beautifully. Perfect for painters, sculptors, and traditional artists.",
  },
  {
    icon: Palette,
    title: "Gallery Websites",
    description: "Create branded websites for each exhibition and artist. Elegant solutions for galleries representing multiple artists.",
  },
  {
    icon: Users,
    title: "Personal Support",
    description: "We're here to help every step of the way. From setup to updates, you'll always have someone to talk to.",
  },
  {
    icon: Settings,
    title: "Easy Updates",
    description: "Need to add new work? We make it simple. Email us your images and we'll update your site—no login required.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Simple, affordable solutions designed specifically for artists and galleries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-6 bg-card p-8 rounded-lg border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
