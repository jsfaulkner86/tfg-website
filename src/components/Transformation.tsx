import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Cog } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    text: "Eliminate bottlenecks that stall growth"
  },
  {
    icon: TrendingUp,
    text: "Restore margins so profitability compounds"
  },
  {
    icon: Cog,
    text: "Build scalable systems that last long after we leave"
  }
];

const Transformation = () => {
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
        paddingTop: '100px',
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, rgba(243,218,115,0.08) 0%, #FFFFFF 50%, rgba(113,141,169,0.08) 100%)'
      }}
    >
      {/* Sophisticated texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 70% 20%, rgba(113,141,169,0.06) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(243,218,115,0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)
          `,
          opacity: 0.7,
          mixBlendMode: 'soft-light'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Refined header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(113,141,169,0.15), rgba(113,141,169,0.08))',
            border: '1px solid rgba(113,141,169,0.3)'
          }}>
            <span className="text-xs font-inter font-medium tracking-wider uppercase" style={{ color: '#718DA9' }}>
              The Journey Continues
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
            style={{ 
              color: '#2C2C2C',
              letterSpacing: '-0.03em',
              lineHeight: '1.05'
            }}
          >
            The Transformation
          </h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl font-inter font-light" style={{ 
              color: '#5882A1', 
              letterSpacing: '0.01em',
              lineHeight: '1.6'
            }}>
              The Growth Blueprint™ gives you clarity.
            </p>
            <p className="text-xl sm:text-2xl font-playfair font-semibold italic" style={{ 
              color: '#2C2C2C',
              letterSpacing: '-0.01em'
            }}>
              But the Transformation is where the real magic happens.
            </p>
            <p className="text-base sm:text-lg font-inter font-light" style={{ 
              color: '#5882A1', 
              letterSpacing: '0.01em',
              lineHeight: '1.7'
            }}>
              Almost every client who completes the Blueprint chooses to continue because once you see six or seven figures of hidden revenue uncovered, you don't want to stop there.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <div 
              className="relative overflow-hidden rounded-full"
              style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #718DA9, #F3DA73, #718DA9)' }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                  animation: 'shimmer 3s linear infinite'
                }}
              />
            </div>
          </div>
        </div>

        {/* Intro text */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xl sm:text-2xl font-playfair font-semibold text-center mb-3" style={{ color: '#2C2C2C', letterSpacing: '-0.01em' }}>
            Over 3–6 months, we integrate alongside your team to:
          </p>
        </div>

        {/* Luxury outcome cards */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  {/* Clean white card with gold border */}
                  <div
                    className="relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] h-full flex flex-col items-center text-center"
                    style={{
                      background: '#FFFFFF',
                      border: '2.5px solid #D4B65D',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                      minHeight: '240px'
                    }}
                  >
                    
                    {/* Icon */}
                    <div 
                      className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(113,141,169,0.1)',
                        border: '2px solid rgba(113,141,169,0.25)'
                      }}
                    >
                      <Icon 
                        size={32}
                        strokeWidth={2}
                        style={{ color: '#718DA9' }}
                      />
                    </div>
                    
                    <p 
                      className="text-base sm:text-lg font-inter font-medium leading-relaxed relative z-10"
                      style={{ 
                        color: '#2C2C2C',
                        letterSpacing: '0.01em',
                        lineHeight: '1.7'
                      }}
                    >
                      {outcome.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement with dramatic flair */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative p-12 rounded-2xl overflow-hidden mx-auto max-w-6xl"
            style={{
              background: 'rgba(243,218,115,0.08)',
              border: '2.5px solid #D4B65D',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
            }}
          >
            
            <div className="relative z-10 text-center flex items-center justify-center">
              <p 
                className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.4',
                  whiteSpace: 'nowrap'
                }}
              >
                This is where practices stop bleeding time and money and start thriving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
