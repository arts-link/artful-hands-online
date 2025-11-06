import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const artists = [
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop",
    url: "https://sarah-chen-art.com",
    description: "Contemporary abstract painter exploring color and emotion through bold, dynamic compositions.",
    specialty: "Abstract Painting",
  },
  {
    name: "Marcus Rivera",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&auto=format&fit=crop",
    url: "https://marcus-rivera.art",
    description: "Digital sculptor creating surreal 3D worlds that challenge perception and reality.",
    specialty: "Digital Sculpture",
  },
  {
    name: "Elena Popov",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&auto=format&fit=crop",
    url: "https://elena-popov.studio",
    description: "Mixed media artist combining traditional techniques with modern materials.",
    specialty: "Mixed Media",
  },
  {
    name: "James Wu",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&auto=format&fit=crop",
    url: "https://jameswu-photography.com",
    description: "Fine art photographer capturing intimate moments in urban landscapes.",
    specialty: "Photography",
  },
  {
    name: "Aisha Kamara",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&auto=format&fit=crop",
    url: "https://aisha-kamara.art",
    description: "Textile artist weaving stories of heritage and identity through intricate patterns.",
    specialty: "Textile Art",
  },
  {
    name: "Diego Santos",
    image: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800&auto=format&fit=crop",
    url: "https://diego-santos.studio",
    description: "Ceramic sculptor creating organic forms inspired by nature and human connection.",
    specialty: "Ceramics",
  },
];

const Artists = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Featured Artist Gallery
              </h1>
              <p className="text-xl text-muted-foreground font-body">
                Discover talented artists who trust Arts-Link to showcase their work online.
                Each portfolio is crafted with care to highlight their unique creative vision.
              </p>
            </div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artist.image}
                      alt={`${artist.name}'s artwork`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {artist.specialty}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {artist.name}
                    </h3>
                    <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                      {artist.description}
                    </p>
                    <Button variant="outline" className="w-full group" asChild>
                      <a
                        href={artist.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Portfolio
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Join Them?
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-8">
                Let's create a stunning online presence for your artwork.
              </p>
              <Button variant="warm" size="lg" asChild>
                <a href="/#contact">Start Your Portfolio</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artists;
