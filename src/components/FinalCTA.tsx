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
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
        {/* Premium badge */}
        <div className="inline-block mb-2 px-6 py-2 rounded-full" style={{
          background: 'rgba(243,218,115,0.2)',
          border: '1.5px solid rgba(243,218,115,0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>
            Let's Transform Your Practice
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
          If you're a visionary healthcare leader who refuses to settle, the next step is simple: schedule your Growth Blueprint™ call today.
        </p>

        <div className="pt-4">
          <Button 
            onClick={scrollToContact}
            className="text-xl sm:text-2xl px-16 py-10 rounded-2xl group transition-all duration-500 font-semibold"
            style={{ 
              background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
              color: '#2C2C2C',
              boxShadow: '0 12px 40px rgba(243,218,115,0.5), 0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
          >
            Book Your Growth Blueprint™ Call
            <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
          
        {/* Elegant contact cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
          <div 
            className="group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
            }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'linear-gradient(135deg, rgba(243,218,115,0.1), transparent)',
            }} />
            <div className="relative z-10">
              <p className="text-lg font-inter font-semibold text-white mb-2">John Faulkner</p>
              <p className="text-base font-inter text-white/80">Co-Founder, Healthcare Growth Architect</p>
            </div>
          </div>
          
          <div 
            className="group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
            }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'linear-gradient(135deg, rgba(243,218,115,0.1), transparent)',
            }} />
            <div className="relative z-10">
              <p className="text-lg font-inter font-semibold text-white mb-2">Dr. Nicole Faulkner</p>
              <p className="text-base font-inter text-white/80">Co-Founder, Chief Clinical Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
