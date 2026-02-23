import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of viewport height
      if (window.scrollY > window.innerHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-[slide-in-up_0.5s_ease-out] pointer-events-auto"
      style={{
        animation: 'fade-in 0.5s ease-out',
        touchAction: 'none'
      }}
    >
      <div 
        className="relative flex items-center gap-4 px-8 py-4 rounded-full backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(113,141,169,0.98), rgba(88,130,161,0.98))',
          border: '2px solid rgba(243,218,115,0.5)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 0 60px rgba(243,218,115,0.2)',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: '#F3DA73',
            color: '#1A2A3A',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
          aria-label="Dismiss"
        >
          <X size={14} strokeWidth={3} />
        </button>

        {/* Content */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <p className="text-sm font-inter font-semibold text-white">
              Ready to Scale?
            </p>
            <p className="text-xs font-inter text-white/80">
              Book a strategy call with our team
            </p>
          </div>
          
          <Button
            onClick={handleBooking}
            className="group transition-all duration-300 font-semibold rounded-full"
            style={{
              background: '#F3DA73',
              color: '#5882A1',
              padding: '0.75rem 2rem',
              boxShadow: '0 4px 16px rgba(243,218,115,0.4)',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFE999';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(243,218,115,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F3DA73';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(243,218,115,0.4)';
            }}
          >
            <span className="hidden sm:inline">Let's Meet</span>
            <span className="sm:hidden">Let's Meet</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#5882A1' }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
