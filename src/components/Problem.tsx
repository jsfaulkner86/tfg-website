import { useEffect, useRef, useState } from "react";
import { DoorOpen, TrendingDown, Flame, Settings } from "lucide-react";

const problemsData = [
  { 
    text: "Access gaps pushing patients to competitors",
    icon: DoorOpen
  },
  { 
    text: "Turnover bleeding six figures annually",
    icon: TrendingDown
  },
  { 
    text: "Workflows exhausting clinicians",
    icon: Flame
  },
  { 
    text: "Systems silently eroding margins",
    icon: Settings
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
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(113,141,169,0.08) 100%)'
      }}
    >
      {/* Subtle misty texture overlay - matching Who We Are */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(113,141,169,0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(113,141,169,0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 70%)
          `,
          opacity: 0.6,
          mixBlendMode: 'soft-light'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* Left Column - Headline & Summary */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ maxWidth: '650px', transitionDelay: '0.2s' }}
          >
            <div>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4"
                style={{ 
                  color: '#2C2C2C',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                The Problem
              </h2>
              <p className="text-lg sm:text-xl font-inter font-light mb-6" style={{ color: '#5882A1', letterSpacing: '0.01em' }}>
                Hidden leaks draining your profitability without warning.
              </p>
              <div 
                className="relative overflow-hidden rounded-full"
                style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #F3DA73, #D4B65D)' }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                    animation: 'shimmer 3s linear infinite'
                  }}
                />
              </div>
            </div>

            <div className="space-y-6 font-inter" style={{ lineHeight: '1.75', color: '#444', letterSpacing: '0.01em' }}>
              <p className="text-base sm:text-lg">
                Most practices aren't <strong style={{ color: '#2C2C2C', fontWeight: 600 }}>losing money</strong> because they don't have enough patients.
              </p>
              <p className="text-base sm:text-lg">
                They're <strong style={{ color: '#2C2C2C', fontWeight: 600 }}>losing it</strong> through <strong style={{ color: '#2C2C2C', fontWeight: 600 }}>hidden inefficiencies</strong> they can't see: problems buried in scheduling gaps, turnover costs, and workflows that quietly bleed margins.
              </p>
              <div 
                className="mt-8 p-8 rounded-xl relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, rgba(113,141,169,0.1), rgba(113,141,169,0.05))',
                  border: '1px solid rgba(113,141,169,0.2)',
                  boxShadow: '0 4px 20px rgba(113,141,169,0.1)',
                  transition: 'all 0.4s ease'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.05), transparent)',
                  }}
                />
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #F3DA73, #D4B65D)'
                  }}
                />
                <p className="text-xl sm:text-2xl font-inter leading-relaxed relative z-10" style={{ color: '#2C2C2C', letterSpacing: '-0.01em' }}>
                  Even top-performing groups leak <strong className="font-bold" style={{ color: '#718DA9', fontSize: '1.15em' }}>six to seven figures annually</strong> without realizing it.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Flowing Problem Visualization */}
          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.4s', marginTop: '60px' }}
          >
            {/* Vertical golden thread connecting problems */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #F3DA73 15%, #F3DA73 85%, transparent 100%)',
                opacity: 0.4
              }}
            />

            <div className="space-y-10">
              {problemsData.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200 + 400}ms`
                    }}
                  >
                    {/* Clean white card with gold border */}
                    <div 
                      className="group relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                      style={{
                        background: '#FFFFFF',
                        border: '2.5px solid #D4B65D',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                      }}
                    >
                      {/* Golden accent dot on connecting line */}
                      <div 
                        className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-125"
                        style={{
                          background: '#D4B65D',
                          boxShadow: '0 4px 12px rgba(212,182,93,0.3)'
                        }}
                      />

                      <div className="flex items-center gap-5">
                        {/* Elegant thin-line icon */}
                        <div 
                          className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        >
                          <Icon 
                            size={28} 
                            strokeWidth={1.5}
                            style={{ color: '#F3DA73' }}
                          />
                        </div>

                        {/* Problem text */}
                        <p 
                          className="text-base sm:text-lg font-inter leading-relaxed"
                          style={{ color: '#2C2C2C', letterSpacing: '0.01em' }}
                        >
                          {problem.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Translucent gold banner - ending statement */}
        <div 
          className={`mt-24 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div 
            className="relative p-12 rounded-[32px] overflow-hidden mx-auto max-w-7xl"
            style={{
              background: '#FAF9F6',
              border: '2.5px solid #C9B882',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}
          >
            
            <p 
              className="text-2xl sm:text-3xl font-playfair font-semibold text-center leading-tight relative z-10"
              style={{ 
                color: '#718DA9', 
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap'
              }}
            >
              We don't just identify the leaks.{' '}
              <span style={{ color: '#718DA9', fontWeight: 700 }}>
                We architect systems that stop them permanently.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
