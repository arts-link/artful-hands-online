import ContactForm from "@/components/ContactForm";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Create a website that does justice to your work, no tech skills needed.
            </p>
          </div>

          <ContactForm />

      
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
