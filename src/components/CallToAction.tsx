import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Share Your Art with the World?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 font-body max-w-2xl mx-auto">
            Let's create a website that does justice to your artwork. No tech skills needed—
            just bring your passion, and we'll handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="warm" className="text-base group">
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              See Our Pricing
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground font-body">
            Questions? Email us anytime—we're real people who love helping artists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
