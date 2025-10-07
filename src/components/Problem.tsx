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
        paddingTop: '140px',
        paddingBottom: '140px',
        background: 'linear-gradient(180deg, hsl(210 25% 96%) 0%, hsl(0 0% 100%) 100%)'
      }}
    >
      {/* Rich ambient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, hsl(210 25% 55% / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(210 25% 55% / 0.06) 0%, transparent 50%)
          `,
          opacity: 0.7
        }}
      />
      
      {/* Subtle animated glow */}
      <div className="absolute top-40 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'hsl(210 25% 55% / 0.06)', animationDuration: '8s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Bold header */}
        <div className={`text-center mb-28 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-6xl sm:text-7xl md:text-8xl font-playfair font-bold mb-8"
            style={{ 
              color: 'hsl(210 25% 55%)',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}
          >
            The Problem
          </h2>
          <div 
            className="h-1 mx-auto mb-12 rounded-full" 
            style={{ 
              width: '100px',
              background: 'hsl(210 25% 55% / 0.4)'
            }}
          />
          <p 
            className="text-2xl sm:text-3xl font-inter max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: 'hsl(210 25% 30%)' }}
          >
            Most practices aren't <strong style={{ color: 'hsl(210 25% 55%)', fontWeight: 600 }}>losing money</strong> because they don't have enough patients. They're <strong style={{ color: 'hsl(210 25% 55%)', fontWeight: 600 }}>losing it</strong> through <strong style={{ color: 'hsl(210 25% 55%)', fontWeight: 600 }}>hidden inefficiencies</strong> they can't see:
          </p>
        </div>

        {/* Rich problem cards */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`group relative flex items-center gap-8 p-10 rounded-2xl transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  background: 'linear-gradient(135deg, hsl(210 25% 55% / 0.08) 0%, hsl(210 25% 55% / 0.04) 100%)',
                  boxShadow: '0 8px 32px hsl(210 25% 55% / 0.12)',
                  border: '1px solid hsl(210 25% 55% / 0.15)'
                }}
              >
                {/* Bold left accent */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-all duration-300 group-hover:w-2"
                  style={{
                    background: 'hsl(210 25% 55%)'
                  }}
                />
                
                {/* Icon with rich background */}
                <div 
                  className="flex-shrink-0 p-5 rounded-xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, hsl(210 25% 55% / 0.15), hsl(210 25% 55% / 0.08))',
                    boxShadow: '0 4px 16px hsl(210 25% 55% / 0.2)'
                  }}
                >
                  <Icon 
                    size={32} 
                    strokeWidth={2}
                    style={{ color: 'hsl(210 25% 55%)' }}
                  />
                </div>
                
                <p 
                  className="text-xl sm:text-2xl font-inter leading-relaxed"
                  style={{ color: 'hsl(210 25% 25%)' }}
                >
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bold separator */}
        <div 
          className={`w-24 h-1 mx-auto mt-24 mb-20 rounded-full transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            background: 'hsl(210 25% 55% / 0.3)'
          }}
        />

        {/* Impactful closing statement */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="p-12 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(210 25% 55% / 0.12), hsl(210 25% 55% / 0.06))',
              border: '2px solid hsl(210 25% 55% / 0.2)',
              boxShadow: '0 12px 48px hsl(210 25% 55% / 0.15)'
            }}
          >
            <p 
              className="text-3xl sm:text-4xl font-playfair font-bold leading-tight"
              style={{ color: 'hsl(210 25% 25%)' }}
            >
              Even top-performing groups are leaking{' '}
              <span 
                style={{ 
                  color: 'hsl(210 25% 55%)',
                  fontWeight: 800
                }}
              >
                six to seven figures annually
              </span>
              {' '}- without realizing it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
