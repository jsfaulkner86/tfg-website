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
        background: 'linear-gradient(180deg, hsl(var(--primary) / 0.04) 0%, hsl(var(--background)) 100%)'
      }}
    >
      {/* Sophisticated ambient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.04) 0%, transparent 50%)
          `,
          opacity: 0.5
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Refined header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-6"
            style={{ 
              color: 'hsl(var(--primary))',
              letterSpacing: '-0.02em'
            }}
          >
            The Problem
          </h2>
          <div 
            className="h-0.5 mx-auto mb-10" 
            style={{ 
              width: '60px',
              background: 'hsl(var(--primary) / 0.3)'
            }}
          />
          <p 
            className="text-xl sm:text-2xl font-inter max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            Most practices aren't <strong style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>losing money</strong> because they don't have enough patients. They're <strong style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>losing it</strong> through <strong style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>hidden inefficiencies</strong> they can't see:
          </p>
        </div>

        {/* Sophisticated problem cards */}
        <div className="grid gap-5 max-w-5xl mx-auto">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`group relative flex items-center gap-7 p-9 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  background: 'hsl(var(--card))',
                  boxShadow: '0 4px 20px hsl(var(--primary) / 0.08)',
                  border: '1px solid hsl(var(--primary) / 0.12)'
                }}
              >
                {/* Subtle left accent */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{
                    background: 'hsl(var(--primary) / 0.4)'
                  }}
                />
                
                {/* Icon container - minimal and elegant */}
                <div 
                  className="flex-shrink-0"
                >
                  <Icon 
                    size={28} 
                    strokeWidth={1.5}
                    style={{ color: 'hsl(var(--primary) / 0.6)' }}
                  />
                </div>
                
                <p 
                  className="text-lg sm:text-xl font-inter leading-relaxed"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Refined separator */}
        <div 
          className={`w-20 h-px mx-auto mt-20 mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            background: 'hsl(var(--primary) / 0.25)'
          }}
        />

        {/* Refined closing statement */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="p-10 rounded-2xl"
            style={{
              background: 'hsl(var(--primary) / 0.04)',
              border: '1px solid hsl(var(--primary) / 0.1)'
            }}
          >
            <p 
              className="text-2xl sm:text-3xl font-inter font-semibold leading-relaxed"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Even top-performing groups are leaking{' '}
              <span 
                style={{ 
                  color: 'hsl(var(--primary))',
                  fontWeight: 700
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
