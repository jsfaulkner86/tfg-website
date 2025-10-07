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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold tracking-wide text-white">
          Ready to See What's Possible?
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto">
          If you're a visionary healthcare leader who refuses to settle, the next step is simple: schedule your Growth Blueprint™ call today.
        </p>

        <div className="space-y-4">
          <Button 
            onClick={scrollToContact}
            variant="accent" 
            size="lg" 
            className="text-lg px-12 py-7 group animate-glow"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <div className="space-y-2 text-white/90">
            <p className="text-lg">
              📩 <strong>John Faulkner</strong> – Co-Founder, Healthcare Growth Architect
            </p>
            <p className="text-lg">
              📩 <strong>Dr. Nicole Faulkner</strong> – Co-Founder, Chief Clinical Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
