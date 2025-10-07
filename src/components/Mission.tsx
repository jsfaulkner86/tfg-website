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
      className="px-6"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, rgba(113,141,169,0.05) 0%, rgba(249,249,249,0.5) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Text Content - Left Column */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4"
                style={{ color: '#2C2C2C' }}
              >
                Who We Are
              </h2>
              <div className="w-24 h-0.5 bg-[#F3DA73]" />
            </div>
            
            <div className="space-y-6 font-inter" style={{ lineHeight: '1.75', color: '#444' }}>
              <p className="text-base sm:text-lg">
                We are a boutique healthcare advisory firm that helps specialty practices, women's health groups, fertility practices, and health tech innovators escape broken systems and build organizations that thrive.
              </p>
              <p className="text-base sm:text-lg">
                Led by <strong style={{ color: '#2C2C2C' }}>John Faulkner</strong>, a Healthcare Growth Architect with 13+ years of experience, and <strong style={{ color: '#2C2C2C' }}>Dr. Nicole Faulkner</strong>, a board-certified OB/GYN physician with over a decade of frontline practice, we bring a rare combination of business strategy and clinical insight.
              </p>
              <p className="text-base sm:text-lg">
                You're not hiring consultants. You're partnering with growth architects who understand both the trenches of medicine and the boardroom strategy required to scale.
              </p>
            </div>
          </div>

          {/* Portraits - Right Column */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col gap-12 items-center">
              {/* John's Portrait */}
              <div className="text-center">
                <div 
                  className="relative w-56 h-56 rounded-full overflow-hidden mx-auto mb-4"
                  style={{
                    border: '2px solid #F3DA73',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    animation: 'fade-in 1.2s ease-out forwards'
                  }}
                >
                  <img 
                    src={johnHeadshot} 
                    alt="John Faulkner - Healthcare Growth Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-inter text-sm font-medium" style={{ color: '#444' }}>
                  John Faulkner
                </p>
                <p className="font-inter text-xs" style={{ color: '#666' }}>
                  Healthcare Growth Architect, Co-Founder
                </p>
              </div>

              {/* Nicole's Portrait */}
              <div className="text-center">
                <div 
                  className="relative w-56 h-56 rounded-full overflow-hidden mx-auto mb-4"
                  style={{
                    border: '2px solid #F3DA73',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    animation: 'fade-in 1.2s ease-out 0.2s forwards',
                    opacity: 0
                  }}
                >
                  <img 
                    src={nicoleHeadshot} 
                    alt="Dr. Nicole Faulkner - Board-Certified OB/GYN Physician"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-inter text-sm font-medium" style={{ color: '#444' }}>
                  Dr. Nicole Faulkner
                </p>
                <p className="font-inter text-xs" style={{ color: '#666' }}>
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
