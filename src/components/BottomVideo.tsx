import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import backtableIcon from "@/assets/backtable-obgyn-icon.png";
import drNicolePhoto from "@/assets/dr-nicole-faulkner.png";

const BottomVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
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
      className="relative px-6 overflow-hidden py-12 md:py-20"
      style={{
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
          If you're building health tech that needs physician adoption, clinical governance, and a clear path from pilot to scale - the next step is simple.
        </p>

        {/* Risk reversal */}
        <div className="mb-8 max-w-2xl mx-auto">
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
            We guarantee to deliver a clinical adoption strategy that accelerates physician buy-in - or we keep working until we do.
          </p>
        </div>

        <Button
          onClick={handleBooking}
          className="text-base font-semibold rounded-lg px-9 py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
          style={{
            background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
            color: '#2A3B4F',
            borderColor: 'rgba(255,255,255,0.25)',
            boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          Let's Meet
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        {/* Clinical Clarity Session entry point */}
        <div className="mt-8 max-w-xl mx-auto text-center">
          <div className="h-px w-16 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4), transparent)' }} />
          <p className="text-sm font-inter font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: '#F3DA73' }}>
            Start with a Clinical Clarity Session
          </p>
          <p className="text-sm font-inter mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            A focused 90-minute diagnostic with a practicing OB/GYN and healthcare IT architect to find what's standing between your product and real adoption.
          </p>
          <a
            href="/clinical-clarity-session"
            className="inline-flex items-center gap-2 text-sm font-inter font-semibold transition-all duration-300 hover:gap-3"
            style={{ color: '#F3DA73' }}
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Contact info */}
        <div className="mt-10 space-y-6">
          <div
            className="h-px w-20 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4), transparent)' }}
          />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left: founder info */}
            <div className="flex flex-col items-center gap-8 sm:gap-10">
              <div className="text-center">
                <p className="text-xl font-playfair font-bold text-white mb-1">
                  John Faulkner
                </p>
                <p className="text-sm font-inter" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  CEO & Co-Founder, Healthcare IT Architect
                </p>
                <a
                  href="https://www.linkedin.com/in/johnathonfaulkner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm font-inter transition-all duration-300 hover:opacity-80"
                  style={{ color: '#F3DA73' }}
                >
                  <LinkedInIcon size={16} color="#F3DA73" /> Connect on LinkedIn
                </a>
              </div>

              <div className="h-px w-12" style={{ background: 'rgba(243,218,115,0.3)' }} />

              <div className="text-center">
                <p className="text-xl font-playfair font-bold text-white mb-1">
                  Dr. Nicole Faulkner
                </p>
                <p className="text-sm font-inter" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Co-Founder, Chief Clinical Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm font-inter transition-all duration-300 hover:opacity-80"
                  style={{ color: '#F3DA73' }}
                >
                  <LinkedInIcon size={16} color="#F3DA73" /> Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Right: Dr. Nicole full photo */}
            <div
              className="w-[260px] sm:w-[300px] md:w-[320px] rounded-xl overflow-hidden flex-shrink-0"
              style={{
                boxShadow: '0 12px 40px rgba(0,0,0,0.35), 0 4px 16px rgba(243,218,115,0.1), inset 0 1px 0 rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <img
                src={drNicolePhoto}
                alt="Dr. Nicole Faulkner, Chief Clinical Officer at Henry Ford Health"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Footer links */}
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <a href="/clinical-clarity-session" className="text-xs font-inter transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Clinical Clarity Session</a>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <a href="/services" className="text-xs font-inter transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Services</a>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <a href="/for-womens-health" className="text-xs font-inter transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>For Women's Health</a>
          </div>

          {/* Social channels */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/company/faulkner-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              aria-label="The Faulkner Group LinkedIn"
            >
              <LinkedInIcon size={20} color="#F3DA73" />
            </a>
            <a
              href="https://www.youtube.com/@YourHealthcareITexpert"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              aria-label="The Faulkner Group YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="#F3DA73">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/smarter-systems-better-care-podcast/id1835554141"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              aria-label="Smarter Systems Better Care Podcast"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="#F3DA73">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 0 1 8.4 8.4c0 2.47-1.065 4.688-2.76 6.228a.725.725 0 0 1-.476.18.72.72 0 0 1-.716-.72c0-.212.092-.404.236-.54A6.96 6.96 0 0 0 18.96 12 6.96 6.96 0 0 0 12 5.04 6.96 6.96 0 0 0 5.04 12a6.96 6.96 0 0 0 2.276 5.148.72.72 0 0 1 .236.54.72.72 0 0 1-.716.72.725.725 0 0 1-.476-.18A8.363 8.363 0 0 1 3.6 12 8.4 8.4 0 0 1 12 3.6zm0 3.6A4.8 4.8 0 0 1 16.8 12c0 1.42-.62 2.696-1.6 3.572a.72.72 0 0 1-1.196-.54.72.72 0 0 1 .248-.544A3.36 3.36 0 0 0 15.36 12 3.36 3.36 0 0 0 12 8.64 3.36 3.36 0 0 0 8.64 12c0 .952.396 1.812 1.032 2.424a.72.72 0 0 1-.948 1.084A4.764 4.764 0 0 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-.72 3.48h1.44l.6 4.44a.72.72 0 0 1-.6.84h-1.44a.72.72 0 0 1-.6-.84l.6-4.44z"/>
              </svg>
            </a>
            <a
              href="https://open.spotify.com/show/1vUfjTssusiFxzcjV80sDH?si=151dc41f2a2341f8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              aria-label="Podcast on Spotify"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="#F3DA73">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
            <a
              href="https://www.backtable.com/shows/obgyn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              aria-label="BackTable OB/GYN Podcast"
            >
              <img src={backtableIcon} alt="BackTable OB/GYN" className="h-[26px] w-auto rounded-sm border border-[#F3DA73] p-[1px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomVideo;
