import { useEffect, useRef, useState } from "react";

const AlertIcon = () => (
  <div className="relative flex-shrink-0">
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse-soft"
    >
      <circle 
        cx="20" 
        cy="20" 
        r="18" 
        stroke="#F3DA73" 
        strokeWidth="1.5" 
        fill="none" 
      />
      <path 
        d="M20 13V23" 
        stroke="#F3DA73" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="20" cy="27" r="1.5" fill="#F3DA73" />
    </svg>
  </div>
);

const problems = [
  "Patient access gaps that quietly push new business to competitors",
  "Staff and provider turnover bleeding hundreds of thousands per year",
  "Workflows that exhaust clinicians and stall growth",
  "Systems that look \"fine\" but silently erode profitability"
];

const Problem = () => {
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
      ref={sectionRef}
      className="px-6 relative"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #F6F6F6 0%, rgba(113,141,169,0.07) 100%)'
      }}
    >
      {/* Soft vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.05) 100%)'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4" style={{ color: '#2C2C2C' }}>
            The Problem
          </h2>
          <div className="w-16 h-0.5 bg-[#F3DA73] mx-auto mb-8" />
          <p className="text-base sm:text-lg font-inter max-w-3xl mx-auto" style={{ lineHeight: '1.75', color: '#444' }}>
            Most practices aren't losing money because they don't have enough patients. They're losing it through hidden inefficiencies they can't see:
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex items-start gap-5 p-7 rounded-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundColor: 'rgba(255,255,255,0.85)',
                boxShadow: '0 4px 25px rgba(0,0,0,0.08)'
              }}
            >
              <AlertIcon />
              <p className="text-base sm:text-lg font-inter pt-2" style={{ color: '#444', lineHeight: '1.7' }}>
                {problem}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg sm:text-xl font-inter font-semibold" style={{ color: '#2C2C2C' }}>
            Even top-performing groups are leaking{' '}
            <span style={{ color: '#F3DA73' }}>six to seven figures annually</span>{' '}
            - without realizing it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
