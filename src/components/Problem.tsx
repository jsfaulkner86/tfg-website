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
                style={{ color: '#2C2C2C' }}
              >
                The Problem
              </h2>
              <p className="text-lg sm:text-xl font-inter font-light mb-6" style={{ color: '#5882A1' }}>
                Hidden leaks draining your profitability — without warning.
              </p>
              <div 
                className="bg-[#F3DA73]" 
                style={{ width: '60px', height: '2px' }}
              />
            </div>

            <div className="space-y-6 font-inter" style={{ lineHeight: '1.75', color: '#444' }}>
              <p className="text-base sm:text-lg">
                Most practices aren't <strong style={{ color: '#2C2C2C' }}>losing money</strong> because they don't have enough patients.
              </p>
              <p className="text-base sm:text-lg">
                They're <strong style={{ color: '#2C2C2C' }}>losing it</strong> through <strong style={{ color: '#2C2C2C' }}>hidden inefficiencies</strong> they can't see — problems buried in scheduling gaps, turnover costs, and workflows that quietly bleed margins.
              </p>
              <p className="text-base sm:text-lg font-medium" style={{ color: '#2C2C2C' }}>
                Even top-performing groups leak <span style={{ color: '#718DA9', fontWeight: 600 }}>six to seven figures annually</span> — without realizing it.
              </p>
            </div>
          </div>

          {/* Right Column - Flowing Problem Visualization */}
          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            {/* Vertical golden thread connecting problems */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #F3DA73 15%, #F3DA73 85%, transparent 100%)',
                opacity: 0.4
              }}
            />

            <div className="space-y-8">
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
                    {/* Glassmorphism card */}
                    <div 
                      className="group relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(243,218,115,0.3)]"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(243,218,115,0.3)',
                        boxShadow: '0 8px 32px rgba(113,141,169,0.1)'
                      }}
                    >
                      {/* Golden accent dot on connecting line */}
                      <div 
                        className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-125"
                        style={{
                          background: 'linear-gradient(135deg, #F3DA73, #D4B65D)',
                          boxShadow: '0 0 20px rgba(243,218,115,0.6)'
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
                          style={{ color: '#2C2C2C' }}
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
            className="relative p-10 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(243,218,115,0.15), rgba(243,218,115,0.08))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(243,218,115,0.4)',
              boxShadow: '0 12px 48px rgba(243,218,115,0.2)'
            }}
          >
            {/* Shimmer animation */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 4s linear infinite'
              }}
            />
            
            <p 
              className="text-2xl sm:text-3xl font-playfair font-semibold text-center leading-tight relative z-10"
              style={{ color: '#2C2C2C' }}
            >
              We don't just identify the leaks.{' '}
              <span style={{ color: '#718DA9', fontWeight: 700 }}>
                We architect systems that stop them — permanently.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
