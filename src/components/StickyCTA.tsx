import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyCTA = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9r-9x8-gbf/clinical-clarity-session', '_blank');
  };

  if (isDismissed) return null;

  return (
    <div 
      className="fixed left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-[calc(100%-2rem)] sm:w-auto"
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        animation: 'fade-in 0.5s ease-out',
      }}
    >
      <div 
        className="relative flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(113,141,169,0.98), rgba(88,130,161,0.98))',
          border: '2px solid rgba(243,218,115,0.5)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 0 60px rgba(243,218,115,0.2)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        {/* Dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-7 h-7 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
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
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="hidden sm:block flex-shrink-0">
            <p className="text-sm font-inter font-semibold text-white">
              We know how hard you've worked to get here.
            </p>
            <p className="text-xs font-inter text-white/80">
              A Clinical Clarity Session helps us figure out what happens next.
            </p>
          </div>
          
          <Button
            onClick={handleBooking}
            className="group transition-all duration-300 font-semibold rounded-full w-full sm:w-auto active:scale-95"
            style={{
              background: '#F3DA73',
              color: '#5882A1',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 16px rgba(243,218,115,0.4)',
              border: 'none',
              WebkitTapHighlightColor: 'transparent'
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
            <span className="text-sm sm:text-base">Book a Clinical Clarity Session</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#5882A1' }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
