import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="contact"
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark-gray to-primary" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
          Ready to build a practice that thrives?
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto">
          Let's discuss how we can transform your organization from chaos to clarity.
        </p>

        <Button 
          onClick={scrollToContact}
          variant="accent" 
          size="lg" 
          className="text-lg px-12 py-7 group animate-glow"
        >
          Schedule Your Strategy Call
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        <p className="text-sm text-white/70 mt-8">
          No obligation. Just a conversation about your vision.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
