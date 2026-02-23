import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      // Only update scroll position if not mobile for performance
      if (!isMobile) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };
  return <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Video with Parallax */}
      <div
      className="absolute inset-0"
      style={{
        transform: isMobile ? 'none' : `translateY(${scrollY * 0.5}px)`
      }}>

        <img
        src="/hero-boardroom.jpg"
        alt="Healthcare leadership team collaboration"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(1.15) contrast(1.1)',
          willChange: isMobile ? 'auto' : 'transform'
        }} />

        
        {/* Dark gradient overlay for better text readability */}
        <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, transparent 70%, rgba(0,0,0,0.15) 100%)'
        }} />

      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center pt-16">
        <div className="max-w-5xl opacity-0 animate-[fade-in_1.2s_ease-out_0.2s_forwards] translate-y-5">
          <h1
          className="mb-6 text-2xl font-display font-semibold text-white sm:text-3xl md:text-[64px] md:leading-tight relative overflow-hidden"
          style={{
            fontSize: '64px',
            whiteSpace: 'nowrap',
            width: '100%',
            letterSpacing: '0.02em',
            textShadow: '0 4px 8px rgba(0,0,0,0.35)',
            animation: 'fade-in 1.2s ease-out 0.2s forwards, slide-up 1.2s ease-out 0.2s forwards'
          }}>

            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_15s_ease-in-out_infinite]"
          style={{
            backgroundSize: '200% 100%'
          }} />

            <span className="relative">You Built Something That Works.<br />Now Let's Get It Used.</span>
          </h1>
          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4 py-3 rounded-lg" style={{ color: 'rgb(255, 255, 255)',
          textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(4px)'
        }}>You've done the hard part — now the health system or payer is in the way. We partner with women's health tech founders to navigate physician adoption, clinical governance, and EHR integration so your solution reaches the women who need it.
        </p>
          
          {/* Trust indicators */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-white/90 px-4">
            {["Clinical Readiness & Governance", "Physician Adoption", "EHR Integration & Training", "Sales, CSM & Deployment"].map((badge) =>
          <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F3DA73' }} />
                <span className="text-sm sm:text-base font-inter font-bold px-2 sm:px-3 py-1 rounded whitespace-nowrap" style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(4px)'
            }}>
                  {badge}
                </span>
              </div>
          )}
          </div>

          <Button
          onClick={handleBooking}
          className="text-base sm:text-lg md:text-xl rounded-lg group transition-all duration-300 font-semibold relative overflow-hidden border-0 px-6 sm:px-8 md:px-12 py-4 sm:py-6"
          style={{
            backgroundColor: 'rgba(243, 218, 115, 0.9)',
            color: '#5882A1',
            boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(243,218,115,0.6), 0 0 40px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)';
          }}>

            Let's Meet
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
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