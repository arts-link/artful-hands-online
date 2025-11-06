import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold text-foreground">
            Arts-Link
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-body"
              >
                About
              </a>
            ) : (
              <Link
                to="/#about"
                className="text-foreground hover:text-primary transition-colors font-body"
              >
                About
              </Link>
            )}
            <Link
              to="/artists"
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              Artists
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              Services
            </Link>
            <Button variant="warm" asChild>
              {isHomePage ? (
                <a href="#contact">Get Started</a>
              ) : (
                <Link to="/#contact">Get Started</Link>
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-[80vw] max-w-sm ml-auto rounded-l-2xl">
              <DrawerHeader className="text-left border-b border-border">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="font-display text-2xl">Menu</DrawerTitle>
                  <DrawerClose asChild>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="flex flex-col gap-2 p-6">
                <DrawerClose asChild>
                  {isHomePage ? (
                    <a
                      href="#about"
                      className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-body text-lg py-3 px-4 rounded-lg"
                    >
                      About
                    </a>
                  ) : (
                    <Link
                      to="/#about"
                      className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-body text-lg py-3 px-4 rounded-lg"
                    >
                      About
                    </Link>
                  )}
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    to="/artists"
                    className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-body text-lg py-3 px-4 rounded-lg"
                  >
                    Artists
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    to="/services"
                    className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-body text-lg py-3 px-4 rounded-lg"
                  >
                    Services
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="warm" className="mt-4 w-full" asChild>
                    {isHomePage ? (
                      <a href="#contact">Get Started</a>
                    ) : (
                      <Link to="/#contact">Get Started</Link>
                    )}
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
