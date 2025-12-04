import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Music } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Logo/Graphic placeholder */}
      <div className="mb-12">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border border-border">
          <span className="font-display text-3xl md:text-4xl font-bold text-primary">arts-link</span>
        </div>
      </div>

      {/* Hero statement */}
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-4xl mb-12 leading-tight">
        Building websites for artists and musicians — no coding involved
      </h1>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link to="/visual-artists">
            <Palette className="mr-2 h-5 w-5" />
            Visual Artists
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
          <Link to="/musicians">
            <Music className="mr-2 h-5 w-5" />
            Musicians
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
