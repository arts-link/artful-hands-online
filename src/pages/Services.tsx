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

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How It Works
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  From first conversation to launch, we make the process simple and collaborative.
                </p>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-muted-foreground font-body">
                      We start with a conversation about your vision, your work, and what you want to achieve with your online presence. 
                      This is where we learn about your style and needs.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Choose Your Path
                    </h3>
                    <div className="space-y-4">
                      <div className="pl-4 border-l-2 border-primary/30">
                        <h4 className="font-semibold text-foreground mb-1">Template Option</h4>
                        <p className="text-muted-foreground font-body text-sm">
                          Start with our professionally designed templates optimized for SEO, accessibility, and performance. 
                          We'll customize it with your images, content, and brand colors.
                        </p>
                      </div>
                      <div className="pl-4 border-l-2 border-primary/30">
                        <h4 className="font-semibold text-foreground mb-1">Custom Design Option</h4>
                        <p className="text-muted-foreground font-body text-sm">
                          Bring your existing design, work with us to create something unique, or we can connect you with 
                          one of our partner designers for a fully customized creation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Content & Assets
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Share your artwork images, artist statement, bio, and any other content you'd like included. 
                      We'll guide you on what we need and help with content strategy if needed.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Development & Review
                    </h3>
                    <p className="text-muted-foreground font-body">
                      We build your site using modern, open-source tools and set it up on our platform. 
                      You'll get a preview link to review everything before launch, and we'll make any adjustments you need.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Launch & Beyond
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Once you're happy with everything, we'll launch your site and connect your custom domain if you have one. 
                      You'll receive tutorials for updating your site yourself, or you can rely on us for ongoing updates—your choice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button variant="warm" size="lg" asChild>
                  <a href="/#contact">Start Your Project</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Honest, Upfront Pricing
                </h2>
                <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                  Pay once for your website. No subscriptions, no surprise fees. 
                  You own your code and can host it anywhere.
                </p>
              </div>
              
              <Card className="max-w-2xl mx-auto p-8">
                <CardContent className="space-y-8">
                  <div className="text-center pb-6 border-b border-border">
                    <div className="text-muted-foreground font-body text-sm uppercase tracking-wide mb-2">
                      Starting at
                    </div>
                    <div className="text-5xl font-bold text-foreground mb-2">$500</div>
                    <div className="text-lg text-muted-foreground font-body">
                      One-time payment • No ongoing fees
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground font-body">
                            <strong className="text-foreground">Custom portfolio design</strong> tailored to your artistic style
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground font-body">
                            <strong className="text-foreground">Built with open source tools</strong> - no vendor lock-in
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground font-body">
                            <strong className="text-foreground">You own all the code</strong> - transfer it anywhere, anytime
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground font-body">
                            <strong className="text-foreground">Free hosting included</strong> for most sites - no recurring costs
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground font-body">
                            <strong className="text-foreground">Fast, optimized, accessible</strong> - built right from the start
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground font-body">
                            <strong className="text-foreground">Privacy-focused</strong> - no tracking, no data selling
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                        Ongoing Support (Optional)
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        Update your site yourself using our tutorials, or let us handle changes for a reasonable per-update fee. 
                        You choose what works best for you.
                      </p>
                    </div>
                  </div>

                  <Button variant="warm" size="lg" className="w-full" asChild>
                    <a href="/#contact">Get Your Free Quote</a>
                  </Button>
                </CardContent>
              </Card>

              <p className="text-center text-sm text-muted-foreground font-body mt-6 max-w-2xl mx-auto">
                * Very large or high-traffic sites may have additional considerations, 
                but we guarantee transparent pricing that's lower than you'd expect.
              </p>
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
