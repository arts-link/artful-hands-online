import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Music } from "lucide-react";
import heroImage from "@/assets/hero-artistic.jpg";
import heroMusicImage from "@/assets/hero-music.jpg";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselApi 
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* Slide 1 - Art */}
          <CarouselItem>
            <div className="relative min-h-[90vh] flex items-center">
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
                    <span className="text-sm font-medium text-foreground">Professional Art Portfolios</span>
                  </div>

                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                    Your Art Should Be{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Seen Online
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-body">
                    Get online without the tech headaches. Beautiful, 
                    affordable websites that showcase your work—no coding required.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/#contact">
                      <Button size="lg" variant="warm" className="text-base group">
                        Get Your Website Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/artists">
                      <Button size="lg" variant="soft" className="text-base">
                        View Artist Portfolios
                      </Button>
                    </Link>
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
            </div>
          </CarouselItem>

          {/* Slide 2 - Music */}
          <CarouselItem>
            <div className="relative min-h-[90vh] flex items-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={heroMusicImage}
                  alt="Professional music recording studio with microphone and equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
              </div>

              {/* Content */}
              <div className="container relative z-10 mx-auto px-4 py-20">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Music className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Professional Music Portfolios</span>
                  </div>

                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                    Your Music Should Be{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Heard Online
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-body">
                    Showcase your compositions and recordings with a professional 
                    portfolio designed for musicians—no coding required.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/#contact">
                      <Button size="lg" variant="warm" className="text-base group">
                        Get Your Website Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
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
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Custom Dot Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index 
                  ? "w-8 h-3 bg-primary" 
                  : "w-3 h-3 bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
