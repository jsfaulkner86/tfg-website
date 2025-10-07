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
      {/* Background Video */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-110">
          <source src="/hero-beach.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl opacity-0 animate-[fade-in_1.2s_ease-out_0.2s_forwards]">
          <h1 
            className="mb-6 text-4xl font-display font-semibold text-white sm:text-5xl md:text-7xl lg:text-8xl uppercase" 
            style={{ 
              letterSpacing: '0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)'
            }}
          >
            LESS CHAOS.<br />
            MORE CLARITY.<br />
            REAL GROWTH.
          </h1>
          <p 
            className="mb-12 text-lg font-light sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto" 
            style={{ 
              color: '#F9F9F9',
              textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            We help healthcare leaders escape broken systems & build organizations that thrive.
          </p>
          <Button 
            onClick={scrollToContact} 
            className="text-xl px-12 py-8 rounded-lg group transition-all duration-300 bg-[#F3DA73] text-[#5882A1] hover:bg-[#718DA9] hover:text-white font-semibold"
            style={{ 
              boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
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