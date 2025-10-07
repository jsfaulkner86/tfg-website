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
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, rgba(113,141,169,0.08) 0%, #FFFFFF 100%)'
      }}
    >
      {/* Subtle misty texture overlay - matching Who We Are */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(113,141,169,0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(113,141,169,0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 70%)
          `,
          opacity: 0.6,
          mixBlendMode: 'soft-light'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header - matching Who We Are style */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4" 
            style={{ color: '#2C2C2C' }}
          >
            The Problem
          </h2>
          <div 
            className="bg-[#F3DA73] mx-auto mb-8" 
            style={{ width: '60px', height: '2px' }}
          />
          <p 
            className="text-lg sm:text-xl font-inter max-w-3xl mx-auto" 
            style={{ lineHeight: '1.75', color: '#444' }}
          >
            Most practices aren't <strong style={{ color: '#2C2C2C' }}>losing money</strong> because they don't have enough patients. They're <strong style={{ color: '#2C2C2C' }}>losing it</strong> through <strong style={{ color: '#2C2C2C' }}>hidden inefficiencies</strong> they can't see:
          </p>
        </div>

        {/* Problem boxes with elegant styling */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-6 p-8 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(243,218,115,0.25)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div 
                  className="flex-shrink-0"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(243,218,115,0.3))'
                  }}
                >
                  <Icon 
                    size={28} 
                    color="#F3DA73" 
                    strokeWidth={1.5}
                  />
                </div>
                <p 
                  className="text-lg sm:text-xl font-inter" 
                  style={{ color: '#444', lineHeight: '1.7' }}
                >
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Gold separator line */}
        <div 
          className={`w-24 h-px bg-[#F3DA73] mx-auto mt-16 mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ opacity: 0.5 }}
        />

        {/* Closing statement */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p 
            className="text-xl sm:text-2xl font-inter font-semibold" 
            style={{ color: '#2C2C2C', lineHeight: '1.7' }}
          >
            Even top-performing groups are leaking{' '}
            <span style={{ color: '#F3DA73', fontWeight: 700 }}>
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
