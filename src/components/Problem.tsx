import { useEffect, useRef, useState } from "react";
import { Link2Off, DollarSign, Flame, Settings } from "lucide-react";

const problemsData = [
  { 
    text: "Patient access gaps that quietly push new business to competitors",
    icon: Link2Off,
    keywords: ["Patient access gaps"]
  },
  { 
    text: "Staff and provider turnover bleeding hundreds of thousands per year",
    icon: DollarSign,
    keywords: ["turnover bleeding"]
  },
  { 
    text: "Workflows that exhaust clinicians and stall growth",
    icon: Flame,
    keywords: ["exhaust clinicians"]
  },
  { 
    text: "Systems that look \"fine\" but silently erode profitability",
    icon: Settings,
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

  const parallaxOffset = scrollY * 0.02;

  return (
    <section 
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        background: `linear-gradient(180deg, rgba(113,141,169,0.7) 0%, #FFFFFF 100%)`,
        transform: `translateY(${parallaxOffset}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Gold light flare overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(243,218,115,0.15) 0%, transparent 60%)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Subtle shimmer particles overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(243,218,115,0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(243,218,115,0.03) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)
          `,
          animation: 'shimmer 8s ease-in-out infinite',
          opacity: 0.7
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-8 uppercase" 
            style={{ 
              color: '#2C2C2C',
              letterSpacing: '0.1em',
              fontVariant: 'small-caps'
            }}
          >
            The Problem
          </h2>
          <div 
            className="w-16 h-0.5 mx-auto mb-12" 
            style={{ 
              backgroundColor: '#F3DA73',
              height: '2px'
            }}
          />
          <p className="text-xl font-inter max-w-3xl mx-auto" style={{ lineHeight: '1.8', color: '#666' }}>
            Most practices aren't <span style={{ color: '#444', fontWeight: 600 }}>losing money</span> because they don't have enough patients. They're <span style={{ color: '#444', fontWeight: 600 }}>losing it</span> through <strong style={{ color: '#2C2C2C' }}>hidden inefficiencies</strong> they can't see:
          </p>
        </div>

        <div className="space-y-7 max-w-3xl mx-auto">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`group flex items-center gap-7 p-8 rounded-3xl transition-all duration-700 cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  boxShadow: '0 10px 25px rgba(113,141,169,0.25)',
                  border: '1px solid rgba(243,218,115,0.4)',
                  backdropFilter: 'blur(12px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(243,218,115,0.35), 0 0 30px rgba(243,218,115,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(113,141,169,0.25)';
                }}
              >
                <div 
                  className="flex-shrink-0"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(243,218,115,0.5))',
                    animation: 'pulse-soft 4s ease-in-out infinite'
                  }}
                >
                  <Icon 
                    size={32} 
                    color="#F3DA73" 
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-base sm:text-lg font-inter" style={{ color: '#444', lineHeight: '1.7', fontWeight: 400 }}>
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Gold separator line */}
        <div 
          className={`w-24 h-px bg-[#F3DA73] mx-auto mt-16 mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ opacity: 0.6 }}
        />

        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl sm:text-2xl font-inter font-semibold" style={{ color: '#2C2C2C', lineHeight: '1.7' }}>
            Even top-performing groups are <strong style={{ color: '#2C2C2C' }}>leaking</strong>{' '}
            <span 
              className="transition-all duration-700"
              style={{ 
                color: '#F3DA73',
                textShadow: '0 0 20px rgba(243,218,115,0.4)',
                fontWeight: 700
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
