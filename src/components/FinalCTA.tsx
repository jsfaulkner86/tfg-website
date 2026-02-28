import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
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
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
        {/* Premium badge */}
        <div className="inline-block mb-2 px-6 py-2 rounded-full" style={{
          background: 'rgba(243,218,115,0.2)',
          border: '1.5px solid rgba(243,218,115,0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>
            Let's Accelerate Your Adoption
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-wide text-white leading-tight" style={{
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          letterSpacing: '-0.02em'
        }}>
          Ready to See What's Possible?
        </h2>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-inter font-light text-white/95 max-w-4xl mx-auto leading-relaxed" style={{
          textShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          If you're building women's health tech that needs physician adoption, clinical governance, and a clear path from pilot to scale, the next step is simple.
        </p>

        <p className="text-lg sm:text-xl font-inter font-light text-white/85 max-w-3xl mx-auto leading-relaxed" style={{
          textShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          We guarantee to deliver a clinical adoption strategy that accelerates physician buy-in. If we're not moving the needle, we keep working until we do.
        </p>

        <div className="pt-4">
          <Button 
            onClick={handleBooking}
            className="text-base font-semibold rounded-md px-8 py-5 border-0 group transition-all duration-300"
            style={{ 
              backgroundColor: '#F3DA73',
              color: '#5882A1',
            }}
          >
            Let's Meet
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
          
        {/* Elegant contact information */}
        <div className="pt-8 space-y-6 max-w-3xl mx-auto">
          <div className="h-px w-20 mx-auto" style={{
            background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.6), transparent)'
          }} />
          
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-playfair font-bold text-white" style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                letterSpacing: '-0.01em'
              }}>
                John Faulkner
              </p>
              <p className="text-base sm:text-lg font-inter text-white/80" style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                letterSpacing: '0.02em'
              }}>
                CEO, Co-Founder and Healthcare IT Architect
              </p>
            </div>
            
            <div className="h-px w-12 mx-auto" style={{
              background: 'rgba(243,218,115,0.3)'
            }} />
            
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-playfair font-bold text-white" style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                letterSpacing: '-0.01em'
              }}>
                Dr. Nicole Faulkner
              </p>
              <p className="text-base sm:text-lg font-inter text-white/80" style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                letterSpacing: '0.02em'
              }}>
                Co-Founder, Chief Clinical Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
