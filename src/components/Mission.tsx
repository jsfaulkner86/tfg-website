import { useEffect, useRef, useState } from "react";
import nicoleHeadshot from "@/assets/nicole-headshot.jpeg";
import johnHeadshot from "@/assets/john-headshot.jpg";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="mission"
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '90px',
        paddingBottom: '90px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(113,141,169,0.04) 100%)'
      }}
    >
      {/* Soft top fade from hero */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '25%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.97) 100%)'
        }}
      />
      
      {/* Subtle corner shadows for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(0,0,0,0.02) 0%, transparent 40%),
            radial-gradient(circle at 100% 0%, rgba(0,0,0,0.02) 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, rgba(0,0,0,0.02) 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(0,0,0,0.02) 0%, transparent 40%)
          `
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-start relative">
          {/* Vertical divider */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(113,141,169,0.15) 20%, rgba(113,141,169,0.15) 80%, transparent 100%)'
            }}
          />
          
          {/* Text Content - Left Column */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ maxWidth: '650px', transitionDelay: '0.2s' }}
          >
            <div>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4"
                style={{ color: '#1E1E1E', lineHeight: '1.1' }}
              >
                Who We Are
              </h2>
              <div className="relative inline-block">
                <p 
                  className="text-lg sm:text-xl font-inter font-light mb-2" 
                  style={{ color: '#718DA9', lineHeight: '1.82' }}
                >
                  Built at the intersection of medicine, strategy, and innovation.
                </p>
                <div 
                  className="bg-[#F3DA73]" 
                  style={{ width: '100%', height: '1.5px', opacity: 0.8 }}
                />
              </div>
            </div>
            
            <div className="space-y-8 font-inter" style={{ lineHeight: '1.82', color: '#1E1E1E' }}>
              <p className="text-base sm:text-lg">
                We are a boutique healthcare advisory firm helping specialty practices, women's health groups, fertility clinics, and health tech innovators escape broken systems and build organizations that thrive.
              </p>
              <p className="text-base sm:text-lg">
                Led by <strong style={{ color: '#1E1E1E' }}>John Faulkner</strong>, a Healthcare Growth Architect with over 13 years of experience optimizing operations and EHR systems nationwide, and <strong style={{ color: '#1E1E1E' }}>Dr. Nicole Faulkner</strong>, a board-certified OB/GYN physician with over a decade of frontline practice, we unite business strategy and clinical expertise to drive real, measurable change.
              </p>
              <p className="text-base sm:text-lg">
                You're not hiring consultants - you're partnering with growth architects who understand both the trenches of medicine and the boardroom strategy required to scale.
              </p>
              <div className="mt-10 space-y-3 font-inter font-medium" style={{ color: '#1E1E1E' }}>
                <p className="text-base sm:text-lg">
                  We don't just analyze problems.<br />
                  We rebuild systems.
                </p>
                <p className="text-base sm:text-lg">
                  We don't just deliver reports.<br />
                  We deliver results that last.
                </p>
              </div>
            </div>
          </div>

          {/* Portraits - Right Column */}
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="flex flex-col gap-16 items-center">
              {/* John's Portrait */}
              <div className="text-center group" style={{ marginTop: '16px' }}>
                <div className="relative">
                  <div 
                    className="relative w-64 h-64 rounded-full overflow-hidden mx-auto mb-4 transition-all duration-500 group-hover:-translate-y-2"
                    style={{
                      border: '3px solid #F3DA73',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.05), inset 0 0 20px rgba(243,218,115,0.2)',
                      background: 'linear-gradient(135deg, rgba(243,218,115,0.3), transparent, rgba(243,218,115,0.3))',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s linear infinite',
                      zIndex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FFE999';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08), inset 0 0 30px rgba(243,218,115,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#F3DA73';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.05), inset 0 0 20px rgba(243,218,115,0.2)';
                    }}
                  >
                    <img 
                      src={johnHeadshot} 
                      alt="John Faulkner - Healthcare Growth Architect"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ transform: 'scaleX(-1) scale(1.3) translateY(8%)' }}
                    />
                  </div>
                </div>
                <p className="font-inter text-base font-semibold" style={{ color: '#1E1E1E' }}>
                  John Faulkner
                </p>
                <p className="font-inter text-sm" style={{ color: '#718DA9' }}>
                  Healthcare Growth Architect, Co-Founder
                </p>
              </div>

              {/* Nicole's Portrait */}
              <div className="text-center group" style={{ marginTop: '16px' }}>
                <div className="relative">
                  <div 
                    className="relative w-64 h-64 rounded-full overflow-hidden mx-auto mb-4 transition-all duration-500 group-hover:-translate-y-2"
                    style={{
                      border: '3px solid #F3DA73',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.05), inset 0 0 20px rgba(243,218,115,0.2)',
                      background: 'linear-gradient(135deg, rgba(243,218,115,0.3), transparent, rgba(243,218,115,0.3))',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s linear infinite 0.5s',
                      zIndex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FFE999';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08), inset 0 0 30px rgba(243,218,115,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#F3DA73';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.05), inset 0 0 20px rgba(243,218,115,0.2)';
                    }}
                  >
                    <img 
                      src={nicoleHeadshot} 
                      alt="Dr. Nicole Faulkner - Board-Certified OB/GYN Physician"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="font-inter text-base font-semibold" style={{ color: '#1E1E1E' }}>
                  Dr. Nicole Faulkner
                </p>
                <p className="font-inter text-sm" style={{ color: '#718DA9' }}>
                  Chief Clinical Officer, Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
