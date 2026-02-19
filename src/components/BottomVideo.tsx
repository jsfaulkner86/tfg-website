import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BottomVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleBooking = () => {
    window.open('https://savvycal.com/thefaulknergroup/growth-blueprint-call-with-john', '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, rootMargin: '100px' });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-6 overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'linear-gradient(180deg, #5A7D99 0%, #4A6B85 100%)'
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className={`max-w-4xl mx-auto relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8"
          style={{
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}
        >
          Ready to See What's Possible?
        </h2>

        <p
          className="text-lg sm:text-xl md:text-2xl font-inter font-light mb-6 max-w-3xl mx-auto"
          style={{
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.7',
            letterSpacing: '0.01em'
          }}
        >
          If you're building health tech that needs physician adoption, clinical governance, and a clear path from pilot to scale — the next step is simple.
        </p>

        {/* Risk reversal */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div
            className="h-px w-16 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.5), transparent)' }}
          />
          <p
            className="text-base sm:text-lg font-inter italic"
            style={{
              color: 'rgba(255,255,255,0.75)',
              lineHeight: '1.7'
            }}
          >
            We guarantee to deliver a clinical adoption strategy that accelerates physician buy-in — or we keep working until we do.
          </p>
        </div>

        <Button
          onClick={handleBooking}
          className="text-lg sm:text-xl px-12 py-8 rounded-xl group transition-all duration-300 font-semibold"
          style={{
            background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
            color: '#1A2A3A',
            boxShadow: '0 8px 32px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)',
            border: '2px solid rgba(255,255,255,0.2)'
          }}
        >
          Book Your Strategy Call
          <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
        </Button>

        {/* Contact info */}
        <div className="mt-16 space-y-6">
          <div
            className="h-px w-20 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4), transparent)' }}
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <p className="text-xl font-playfair font-bold text-white mb-1">
                John Faulkner
              </p>
              <p className="text-sm font-inter" style={{ color: 'rgba(255,255,255,0.65)' }}>
                CEO & Co-Founder, Operational Systems Architect
              </p>
            </div>

            <div
              className="hidden sm:block w-px h-12"
              style={{ background: 'rgba(243,218,115,0.3)' }}
            />

            <div className="text-center">
              <p className="text-xl font-playfair font-bold text-white mb-1">
                Dr. Nicole Faulkner
              </p>
              <p className="text-sm font-inter" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Co-Founder, Chief Clinical Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomVideo;
