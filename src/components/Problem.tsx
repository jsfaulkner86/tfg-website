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
        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, hsl(var(--background)) 50%, hsl(var(--accent) / 0.04) 100%)'
      }}
    >
      {/* Enhanced ambient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, hsl(var(--accent) / 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, hsl(var(--primary) / 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, hsl(var(--background)) 0%, transparent 100%)
          `,
          opacity: 0.8
        }}
      />
      
      {/* Animated glow orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-6 text-foreground" 
            style={{ 
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px hsl(var(--accent) / 0.15)'
            }}
          >
            The Problem
          </h2>
          <div 
            className="h-1 mx-auto mb-10 rounded-full relative overflow-hidden" 
            style={{ 
              width: '80px',
              background: 'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent) / 0.6))',
              boxShadow: '0 0 20px hsl(var(--accent) / 0.4)'
            }}
          />
          <p 
            className="text-xl sm:text-2xl font-inter max-w-4xl mx-auto text-muted-foreground leading-relaxed"
          >
            Most practices aren't <strong className="text-foreground font-semibold">losing money</strong> because they don't have enough patients. They're <strong className="text-foreground font-semibold">losing it</strong> through <strong className="text-foreground font-semibold">hidden inefficiencies</strong> they can't see:
          </p>
        </div>

        {/* Enhanced problem cards */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`group relative flex items-center gap-8 p-10 rounded-3xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.95) 100%)',
                  boxShadow: '0 10px 40px hsl(var(--foreground) / 0.08), 0 0 0 1px hsl(var(--accent) / 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid hsl(var(--accent) / 0.2)'
                }}
              >
                {/* Accent gradient bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl transition-all duration-300 group-hover:w-2"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--accent)), hsl(var(--accent) / 0.5))',
                    boxShadow: '0 0 20px hsl(var(--accent) / 0.4)'
                  }}
                />
                
                {/* Icon container with glow */}
                <div 
                  className="flex-shrink-0 p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.08))',
                    boxShadow: '0 4px 20px hsl(var(--accent) / 0.2), inset 0 1px 0 hsl(var(--accent) / 0.3)'
                  }}
                >
                  <Icon 
                    className="text-accent"
                    size={32} 
                    strokeWidth={2}
                  />
                </div>
                
                <p 
                  className="text-xl sm:text-2xl font-inter text-foreground/90 leading-relaxed"
                >
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enhanced separator */}
        <div 
          className={`w-32 h-1 mx-auto mt-20 mb-16 rounded-full transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            background: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)',
            boxShadow: '0 0 30px hsl(var(--accent) / 0.5)'
          }}
        />

        {/* Enhanced closing statement */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="p-10 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.08), hsl(var(--accent) / 0.04))',
              boxShadow: '0 10px 40px hsl(var(--accent) / 0.15), inset 0 1px 0 hsl(var(--accent) / 0.2)',
              border: '1px solid hsl(var(--accent) / 0.2)'
            }}
          >
            <p 
              className="text-2xl sm:text-3xl font-inter font-semibold text-foreground leading-relaxed"
            >
              Even top-performing groups are leaking{' '}
              <span 
                className="font-bold"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent) / 0.7))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px hsl(var(--accent) / 0.3)'
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
