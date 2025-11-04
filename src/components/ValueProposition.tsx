import { Sparkles, Shield, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Made for Traditional Artists",
    description: "No tech jargon. No complicated dashboards. Just a beautiful website that shows your work the way it deserves.",
  },
  {
    icon: Shield,
    title: "Privacy You Can Trust",
    description: "Your work is yours. We don't track your visitors or sell data. Clean, ethical websites that respect everyone.",
  },
  {
    icon: Heart,
    title: "Personalized to Your Vision",
    description: "Every artist is unique. We work with you to create a site that feels authentically you—not a cookie-cutter template.",
  },
  {
    icon: Zap,
    title: "Get Online Fast",
    description: "From idea to live website in days, not months. We handle the tech so you can focus on creating.",
  },
];

const ValueProposition = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Artists Choose Us
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            We understand that technology can feel overwhelming. That's why we've made it simple, 
            affordable, and designed specifically for artists who want to focus on their craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
