import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold text-foreground">
            Arts-Link
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              Services
            </a>
            <a
              href="#artists"
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              Artists
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              About
            </a>
            <Button variant="warm" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
