import ContactForm from "@/components/ContactForm";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Share Your Art with the World?
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Let's create a website that does justice to your artwork. No tech skills needed—
              just bring your passion, and we'll handle the rest.
            </p>
          </div>

          <ContactForm />

          <p className="mt-8 text-center text-sm text-muted-foreground font-body">
            Questions? Email us anytime—we're real people who love helping artists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
