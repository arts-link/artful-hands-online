import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-muted rounded-lg border border-border flex items-center justify-center">
                <span className="text-muted-foreground font-body">Photo placeholder</span>
              </div>
              
              {/* Content */}
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
