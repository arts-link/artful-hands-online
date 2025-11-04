import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const artists = [
  {
    name: "Jill Bonovitz",
    image: "https://www.arts-link.com/artists/jill-bonovitz/jill-bonovitz-feature_hu_14c1f0a945df8df6.jpg",
    url: "https://jillbonovitz.com/",
    description: "Contemporary sculpture and installation art",
  },
  {
    name: "Lucinda Kindred",
    image: "https://www.arts-link.com/artists/cindy-kindred/cindy-kindred-feature_hu_67578ad8337828cd.jpg",
    url: "https://www.lucindakindredart.com/",
    description: "Textile art inspired by Aboriginal patterns",
  },
  {
    name: "Louise Strawbridge",
    image: "https://www.arts-link.com/artists/louise-strawbridge/featured_louisestrawbridge-hp_hu_138937a253bb4e1f.jpg",
    url: "https://www.louisestrawbridge.com/",
    description: "Mixed media and abstract expressionism",
  },
];

const FeaturedArtists = () => {
  return (
    <section id="artists" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Artists We've Helped Shine
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            See how we've brought these artists' visions to life with beautiful, personalized websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={artist.image}
                  alt={`${artist.name}'s portfolio website`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {artist.name}
                </h3>
                <p className="text-muted-foreground mb-4 font-body">
                  {artist.description}
                </p>
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Artist Portfolios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
