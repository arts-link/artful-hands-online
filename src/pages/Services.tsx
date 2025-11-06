import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Palette, Users, Settings, Zap, Shield, Headphones, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Portfolio Design",
    description: "We create beautiful, unique portfolio websites tailored to your artistic style. Every design is crafted from scratch to showcase your work in the best possible light.",
    features: [
      "Personalized design consultation",
      "Mobile-responsive layouts",
      "High-resolution image galleries",
      "Custom color schemes and typography",
    ],
  },
  {
    icon: Globe,
    title: "Easy Content Management",
    description: "Update your portfolio anytime without technical knowledge. Our intuitive interface makes it simple to add new work, update descriptions, and manage your online presence.",
    features: [
      "Simple drag-and-drop interface",
      "Bulk image uploads",
      "Text editor with formatting",
      "Preview before publishing",
    ],
  },
  {
    icon: Users,
    title: "Artist Community Features",
    description: "Connect with collectors, galleries, and fellow artists. Build your network and grow your audience with integrated social features and professional presentation tools.",
    features: [
      "Visitor contact forms",
      "Social media integration",
      "Email newsletter setup",
      "Collector inquiry management",
    ],
  },
  {
    icon: Settings,
    title: "Technical Excellence",
    description: "We handle all the technical details so you can focus on your art. From hosting to security to performance optimization, everything is taken care of.",
    features: [
      "Fast loading speeds",
      "Automatic backups",
      "SSL security certificates",
      "99.9% uptime guarantee",
    ],
  },
  {
    icon: Zap,
    title: "SEO & Discoverability",
    description: "Get found by the right people. We optimize your site for search engines and implement best practices to help collectors and galleries discover your work.",
    features: [
      "Search engine optimization",
      "Meta tags and descriptions",
      "Image alt text optimization",
      "Analytics and insights",
    ],
  },
  {
    icon: Shield,
    title: "Privacy-First Approach",
    description: "Your work and your data are protected. We don't sell your information, track your visitors excessively, or compromise your privacy for profit.",
    features: [
      "GDPR compliant",
      "No third-party tracking",
      "Secure image watermarking",
      "Copyright protection tools",
    ],
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Real people who care about your success. Get help whenever you need it from our team of art-loving tech experts who understand your needs.",
    features: [
      "Email support within 24 hours",
      "Video tutorials and guides",
      "Regular feature updates",
      "Community forum access",
    ],
  },
  {
    icon: Sparkles,
    title: "Portfolio Enhancement",
    description: "Take your presentation to the next level with premium features like custom domains, advanced galleries, e-commerce integration, and more.",
    features: [
      "Custom domain setup",
      "Print shop integration",
      "Virtual exhibition spaces",
      "Artwork sales tracking",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Services Designed for Artists
              </h1>
              <p className="text-xl text-muted-foreground font-body">
                Everything you need to create, manage, and grow your online presence.
                No technical skills required—just bring your passion for art.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="font-display text-2xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-body mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-sm text-muted-foreground font-body">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  One affordable price includes everything you need. No hidden fees or surprise charges.
                </p>
              </div>
              <Card className="max-w-md mx-auto text-center p-8">
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-5xl font-bold text-foreground mb-2">$29</div>
                    <div className="text-muted-foreground font-body">per month</div>
                  </div>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground font-body">Custom portfolio design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground font-body">Unlimited image uploads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground font-body">All premium features included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground font-body">Priority support</span>
                    </li>
                  </ul>
                  <Button variant="warm" size="lg" className="w-full" asChild>
                    <a href="/#contact">Get Started Today</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Common Questions
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Do I need technical skills?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body">
                      Not at all! Our platform is designed for artists, not developers. If you can send an email, you can manage your portfolio.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Can I use my own domain name?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body">
                      Absolutely! We'll help you connect your custom domain or register a new one. Your brand, your way.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">How long does setup take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body">
                      Most portfolios are live within 48 hours. We handle everything—you just provide your artwork and preferences.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Showcase Your Art?
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-8">
                Join hundreds of artists who trust Arts-Link with their online presence.
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

export default Services;
