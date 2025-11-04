import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import FeaturedArtists from "@/components/FeaturedArtists";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ValueProposition />
        <FeaturedArtists />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
