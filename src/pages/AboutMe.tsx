import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const AboutMe = () => {
  const artistLinks = [
    { name: "Gordon Landreth Photography", url: "https://gordon-landreth-photography.arts-link.com/" },
    { name: "Louise Strawbridge", url: "https://louisestrawbridge.com/" },
    { name: "Alex Eben Meyer", url: "https://eben.com/" },
    { name: "Jon Beinart", url: "https://beinart.org/" },
    { name: "Rudy Ernst", url: "https://www.rudyernst.com/" },
    { name: "Stephanie Mulvihill", url: "https://www.stephaniemulvihill.com/" },
    { name: "Gia-Bao Tran", url: "https://gbtran.com/" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
              About Me
            </h1>
            
            {/* Intro Section */}
            <section className="mb-16">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Photo placeholder */}
                <div className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center">
                  <span className="text-muted-foreground font-body text-sm">Photo of Ben</span>
                </div>
                
                {/* Intro text */}
                <div className="md:col-span-2 space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p className="text-lg text-foreground">
                    Hi, I'm <strong>Ben Strawbridge</strong>.
                  </p>
                  <p>
                    I founded arts-link in 1998 as a labor of love to help my artist mom and photographer grandfather get online. It was a simple art gallery website with image galleries. It was my first project and my learning project for getting onto the world wide web!
                  </p>
                </div>
              </div>
            </section>

            {/* History Section with Screenshot */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Early Days
              </h2>
              
              <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border">
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Here is a screenshot of arts-link.com circa 2006 from the Internet Archive Wayback Machine showing our gallery of artists at that time. I am not working with these artists anymore but still love the work they are putting out on their own, many still with active websites today:
                </p>
                
                {/* Screenshot placeholder */}
                <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center mb-6 overflow-hidden">
                  <span className="text-muted-foreground font-body text-sm">Screenshot: arts-link.com circa 2006</span>
                </div>
                
                {/* Artist links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {artistLinks.map((artist) => (
                    <a
                      key={artist.url}
                      href={artist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm transition-colors group"
                    >
                      <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                      {artist.name}
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Career Journey */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Journey
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Over the years working on arts-link I experimented with a few things: online affiliate stores, custom websites, domain hosting… Then I got sidetracked by my career in Silicon Valley building enterprise software, streaming music software, security software, finance software and more…
                </p>
                <p className="text-foreground font-medium">
                  Now I am returning to my roots and revisiting arts-link.
                </p>
              </div>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Some Things I Do to Help Artists
              </h2>
              
              <div className="space-y-8">
                {/* Service 1 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Build Custom Websites from Scratch
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Professional, handcrafted websites designed specifically for artists and musicians to showcase their work beautifully.
                  </p>
                </div>

                {/* Service 2 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Domain Recovery & Management
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    On multiple occasions I have had people turn to me because they lost control of their domain, or couldn't figure out how to manage it and update it. My experience with domain management led me to domain reselling. Now through partnership with Tucows, I am able to host all the domains for my clients so they always have access and can control their content down to the lowest level.
                  </p>
                </div>

                {/* Service 3 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Website Rescue & Modernization
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Customers have hired me because they no longer have access to their own website, or the software running their website is completely old and no longer being maintained. In the case of Jill Bonovitz, she loved her web design but could no longer update it. I was able to do a complete code redesign and rebuild, while keeping the customer-facing design exactly the same.
                  </p>
                </div>

                {/* Service 4 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    File Optimization for Web & Streaming
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Helping artists with their files and file sizes for web and streaming—ensuring your images and media look great while loading fast.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
