import { useEffect, useRef, useState } from "react";

const AlertIcon = () => (
  <div className="relative flex-shrink-0">
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: 'drop-shadow(0 0 8px rgba(243,218,115,0.4))',
        animation: 'pulse-soft 4s ease-in-out infinite'
      }}
    >
      <circle 
        cx="14" 
        cy="14" 
        r="13" 
        stroke="#F3DA73" 
        strokeWidth="1.5" 
        fill="none" 
      />
      <path 
        d="M14 8V16" 
        stroke="#F3DA73" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="14" cy="20" r="1.5" fill="#F3DA73" />
    </svg>
  </div>
);

const problems = [
  { 
    text: "Patient access gaps that quietly push new business to competitors",
    keywords: ["Patient access gaps"]
  },
  { 
    text: "Staff and provider turnover bleeding hundreds of thousands per year",
    keywords: ["turnover bleeding"]
  },
  { 
    text: "Workflows that exhaust clinicians and stall growth",
    keywords: ["exhaust clinicians"]
  },
  { 
    text: "Systems that look \"fine\" but silently erode profitability",
    keywords: ["erode profitability"]
  }
];

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.03;

  return (
    <section 
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        background: `linear-gradient(180deg, rgba(113,141,169,0.1) 0%, #FFFFFF 100%)`,
        transform: `translateY(${parallaxOffset}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Fog/glass texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(113,141,169,0.02) 0%, transparent 50%)
          `,
          opacity: 0.6,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.06) 100%)'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 uppercase tracking-wider" 
            style={{ 
              color: '#2C2C2C',
              fontVariant: 'small-caps',
              letterSpacing: '0.08em'
            }}
          >
            The Problem
          </h2>
          <div className="w-16 h-0.5 bg-[#F3DA73] mx-auto mb-10" />
          <p className="text-lg font-inter max-w-3xl mx-auto" style={{ lineHeight: '1.8', color: '#444' }}>
            Most practices aren't losing money because they don't have enough patients. They're losing it through <strong style={{ color: '#2C2C2C' }}>hidden inefficiencies</strong> they can't see:
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group flex items-center gap-6 p-8 rounded-3xl transition-all duration-700 cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundColor: 'rgba(255,255,255,0.85)',
                boxShadow: '0 10px 30px rgba(113,141,169,0.15)',
                border: '1px solid rgba(243,218,115,0.35)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(113,141,169,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(113,141,169,0.15)';
              }}
            >
              <AlertIcon />
              <p className="text-base sm:text-lg font-inter" style={{ color: '#444', lineHeight: '1.7' }}>
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* Gold separator line */}
        <div 
          className={`w-24 h-px bg-[#F3DA73] mx-auto mt-16 mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ opacity: 0.5 }}
        />

        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl font-inter font-semibold" style={{ color: '#2C2C2C', lineHeight: '1.7' }}>
            Even top-performing groups are <strong style={{ color: '#2C2C2C' }}>leaking</strong>{' '}
            <span 
              className="transition-all duration-700"
              style={{ 
                color: '#F3DA73',
                textShadow: '0 0 20px rgba(243,218,115,0.3)'
              }}
            >
              six to seven figures annually
            </span>
            {' '}- without realizing it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
