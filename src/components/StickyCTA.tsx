import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SESSION_KEY = "sticky-cta-dismissed";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);
  const isMobile = useIsMobile();

  const dismiss = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  const handleBooking = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    window.location.href = "/clinical-clarity-session";
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const scrollThreshold = isMobile ? 0.6 : 0.5;

    const onScroll = () => {
      if (hasTriggered.current) return;
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= scrollThreshold) {
        hasTriggered.current = true;
        setIsVisible(true);
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (hasTriggered.current) return;
      if (e.clientY <= 0) {
        hasTriggered.current = true;
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (!isMobile) {
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isMobile]);

  // Add bottom padding to body when visible so content isn't hidden
  useEffect(() => {
    if (isVisible) {
      document.body.style.paddingBottom = isMobile ? "200px" : "120px";
    } else {
      document.body.style.paddingBottom = "";
    }
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [isVisible, isMobile]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999]"
      style={{
        animation: "slideUpCTA 300ms ease-out forwards",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <style>{`
        @keyframes slideUpCTA {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div
        className="relative w-full"
        style={{
          backgroundColor: "#0A1628",
          borderLeft: "4px solid #C9A84C",
        }}
      >
        {/* X dismiss — top right */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
          aria-label="Dismiss"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between px-10 py-4 gap-8">
          <div className="flex-1 min-w-0">
            <p className="font-inter font-bold text-white text-base leading-tight">
              We know how hard you've worked to get here.
            </p>
            <p className="font-inter text-white/60 text-sm mt-1">
              A Clinical Clarity Session helps us figure out what happens next.
            </p>
          </div>

          <div className="flex flex-col items-center flex-shrink-0">
            <Button
              onClick={handleBooking}
              variant="glassy"
              className="group text-base px-6 py-3"
            >
              Book a Clinical Clarity Session
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <button
              onClick={dismiss}
              className="mt-1.5 font-inter text-xs text-white/50 hover:text-white/70 transition-colors bg-transparent border-0 cursor-pointer"
            >
              No thanks, I'm not ready yet.
            </button>
          </div>
        </div>

        {/* Mobile layout — compact stacked */}
        <div className="flex md:hidden flex-col px-5 py-4 pr-12 gap-2">
          <p className="font-inter font-bold text-white text-sm leading-tight">
            We know how hard you've worked to get here.
          </p>
          <p className="font-inter text-white/60 text-xs leading-snug">
            A Clinical Clarity Session helps us figure out what happens next.
          </p>
          <Button
            onClick={handleBooking}
            variant="glassy"
            className="group text-sm w-full py-2.5 mt-1"
          >
            Book a Clinical Clarity Session
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <button
            onClick={dismiss}
            className="font-inter text-[11px] text-white/50 hover:text-white/70 transition-colors bg-transparent border-0 cursor-pointer text-center mt-0.5"
          >
            No thanks, I'm not ready yet.
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
