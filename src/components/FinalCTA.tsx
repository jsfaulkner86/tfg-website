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
          If you're building health tech that needs physician adoption, clinical governance, and a path from pilot to scale, the next step is simple: schedule a strategy call today.
        </p>

        <div className="pt-4">
          <Button 
            onClick={handleBooking}
            className="text-xl sm:text-2xl px-16 py-10 rounded-2xl group transition-all duration-500 font-semibold"
            style={{ 
              background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
              color: '#1A2A3A',
              boxShadow: '0 12px 40px rgba(243,218,115,0.5), 0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
          >
            Book Your Strategy Call
            <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
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
                Co-Founder, Operational Systems Architect
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
