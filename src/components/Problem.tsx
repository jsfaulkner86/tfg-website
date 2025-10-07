import { useEffect, useRef, useState } from "react";
import { DoorOpen, TrendingDown, Flame, AlertCircle } from "lucide-react";

const problemsData = [
  { 
    text: "Patient access gaps that quietly push new business to competitors",
    icon: DoorOpen
  },
  { 
    text: "Staff and provider turnover bleeding hundreds of thousands per year",
    icon: TrendingDown
  },
  { 
    text: "Workflows that exhaust clinicians and stall growth",
    icon: Flame
  },
  { 
    text: "Systems that look \"fine\" but silently erode profitability",
    icon: AlertCircle
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
      className="relative overflow-hidden"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        background: 'linear-gradient(180deg, #718DA9 0%, #F6F8FA 100%)'
      }}
    >
      {/* Diagonal gold light beams with enhanced visibility */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(140deg, transparent 25%, rgba(243,218,115,0.15) 45%, rgba(243,218,115,0.18) 50%, rgba(243,218,115,0.15) 55%, transparent 75%),
            linear-gradient(160deg, transparent 35%, rgba(243,218,115,0.12) 50%, transparent 65%)
          `,
          transform: `translateY(${parallaxOffset * -0.5}px)`,
          mixBlendMode: 'screen'
        }}
      />

      {/* Radial vignette - center lighter, edges darker */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)'
        }}
      />

      {/* Dimensional blur overlay - luxury lighting effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(113,141,169,0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)
          `,
          backdropFilter: 'blur(1px)',
          mixBlendMode: 'soft-light',
          opacity: 0.8
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold uppercase mb-8" 
            style={{ 
              color: '#FFFFFF',
              letterSpacing: '0.15em',
              fontVariant: 'small-caps',
              textShadow: '0 0 40px rgba(243,218,115,0.5), 0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            The Problem
          </h2>
          <div 
            className="bg-[#F3DA73] mx-auto mb-12" 
            style={{ width: '80px', height: '2px' }}
          />
          
          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl font-inter max-w-4xl mx-auto mb-6" 
            style={{ 
              lineHeight: '1.8',
              color: '#EDEDED',
              letterSpacing: '0.02em'
            }}
          >
            Most practices aren't losing money because they don't have enough patients.
          </p>
          <p 
            className="text-xl sm:text-2xl font-inter max-w-4xl mx-auto" 
            style={{ 
              lineHeight: '1.8',
              color: '#EDEDED',
              letterSpacing: '0.02em'
            }}
          >
            They're <span style={{ color: '#F3DA73', fontWeight: 600 }}>losing it</span> through <span style={{ color: '#F3DA73', fontWeight: 600 }}>hidden inefficiencies</span> they can't see:
          </p>
        </div>

        {/* Problem Points - Floating glass boxes */}
        <div className="space-y-6 max-w-4xl mx-auto mb-20">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`group flex items-center gap-6 p-8 rounded-2xl transition-all duration-700 cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150 + 400}ms`,
                  backgroundColor: 'rgba(243,218,115,0.08)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(15px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(243,218,115,0.15)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(243,218,115,0.25)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(243,218,115,0.08)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  className="flex-shrink-0"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(243,218,115,0.5))'
                  }}
                >
                  <Icon 
                    size={32} 
                    color="#F3DA73" 
                    strokeWidth={1.5}
                  />
                </div>
                <p 
                  className="text-lg sm:text-xl font-inter" 
                  style={{ 
                    color: '#FFFFFF',
                    lineHeight: '1.7',
                    fontWeight: 400
                  }}
                >
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Gold separator line */}
        <div 
          className={`w-32 h-0.5 bg-[#F3DA73] mx-auto mb-12 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-20 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ height: '2px' }}
        />

        {/* Closing statement */}
        <div className={`text-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p 
            className="text-2xl sm:text-3xl font-inter font-semibold max-w-4xl mx-auto" 
            style={{ 
              color: '#FFFFFF',
              lineHeight: '1.7',
              letterSpacing: '0.02em'
            }}
          >
            Even top-performing groups are leaking{' '}
            <span 
              style={{ 
                color: '#F3DA73',
                fontWeight: 700,
                animation: 'shimmer-glow 10s ease-in-out infinite'
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
