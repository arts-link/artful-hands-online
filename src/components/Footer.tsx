import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Arts-Link
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed max-w-md">
              Empowering artists with beautiful, privacy-first websites. 
              No tech headaches, just your art online.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="https://domains.arts-link.com/" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Domains
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground font-body">
          <p>&copy; {new Date().getFullYear()} Arts-Link. Made with care for artists.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
