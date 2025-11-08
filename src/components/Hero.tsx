import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Palette } from "lucide-react";
import heroImage from "@/assets/hero-artistic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Artistic watercolor painting with brushes and paint palette"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Palette className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">For Artists, By Artists</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Art Deserves to Be{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seen Online
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-body">
            We help traditional artists get online without the tech headaches. Beautiful, 
            affordable websites that showcase your work—no coding required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="warm" className="text-base group">
              <Link to="/#contact">
                Get Your Website Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="soft" className="text-base">
              <Link to="/artists">
                View Artist Portfolios
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Affordable pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Personal support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
