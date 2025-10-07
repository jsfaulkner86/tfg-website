import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-110">
          <source src="/hero-beach.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-overlay)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl animate-fade-in">
          <h1 className="mb-6 text-4xl font-display font-semibold tracking-wide text-white sm:text-5xl md:text-7xl lg:text-8xl uppercase">
            LESS CHAOS.<br />
            MORE CLARITY.<br />
            REAL GROWTH.
          </h1>
          <p className="mb-12 text-lg font-normal text-white/90 sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto">We help healthcare leaders escape broken systems & build organizations that thrive.</p>
          <Button onClick={scrollToContact} variant="hero" size="lg" className="text-lg px-10 py-7 group">
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="h-2 w-1 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;