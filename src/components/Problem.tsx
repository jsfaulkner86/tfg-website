import { useEffect, useRef, useState } from "react";
import { Compass, CircleDollarSign, Activity, Settings2 } from "lucide-react";

const problemsData = [
  { 
    text: "Access gaps pushing patients to competitors",
    icon: Compass
  },
  { 
    text: "Turnover bleeding six figures annually",
    icon: CircleDollarSign
  },
  { 
    text: "Workflows exhausting clinicians",
    icon: Activity
  },
  { 
    text: "Systems silently eroding margins",
    icon: Settings2
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
      { threshold: 0.1, rootMargin: '50px' }
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
        paddingTop: '60px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FDFCF9 0%, #E9EEF3 100%)'
      }}
    >
      {/* Soft fade from Who We Are section */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '80px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)'
        }}
      />
      
      {/* Light vignette frame */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.03) 100%)'
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
                  color: '#2A3B4F',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                  textShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                The Problem
              </h2>
              <p className="text-lg sm:text-xl font-inter font-light mb-6" style={{ color: '#718DA9', letterSpacing: '0.03em' }}>
                Whether you're a single-site specialty practice, multi-specialty group, or large multi-location system—hidden leaks are draining your profitability without warning.
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

            <div className="space-y-6 font-inter" style={{ lineHeight: '1.75', color: '#222', letterSpacing: '0.01em' }}>
              <p className="text-base sm:text-lg">
                From single-site specialty practices to multi-specialty groups to large multi-location systems, most organizations aren't <strong style={{ color: '#718DA9', fontWeight: 600 }}>losing money</strong> because they don't have enough patients.
              </p>
              <p className="text-base sm:text-lg">
                They're <strong style={{ color: '#718DA9', fontWeight: 600 }}>losing it</strong> through <strong style={{ color: '#718DA9', fontWeight: 600 }}>hidden inefficiencies</strong> they can't see: problems buried in scheduling gaps, turnover costs, payer contract underpayments, and workflows that quietly bleed margins.
              </p>
              
              {/* Thin gold line separator */}
              <div 
                className="w-full h-px my-6"
                style={{ background: 'rgba(243,218,115,0.3)' }}
              />
              
              <div 
                className={`mt-8 p-8 rounded-xl relative overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #EAF0F6 100%)',
                  border: '2px solid #F3DA73',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                  transitionDelay: '0.6s'
                }}
              >
                <p className="text-xl sm:text-2xl font-inter leading-relaxed relative z-10" style={{ color: '#2A3B4F', letterSpacing: '-0.01em' }}>
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
              className="absolute left-6 top-0 bottom-0"
              style={{
                width: '1px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(243,218,115,0.3) 15%, rgba(243,218,115,0.3) 85%, transparent 100%)'
              }}
            />

            <div className="space-y-10">
              {problemsData.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={index}
                    className={`group relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 150 + 500}ms`
                    }}
                  >
                    {/* Problem box */}
                    <div 
                      className="relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-1 bg-white"
                      style={{
                        border: '1.5px solid #F3DA73',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                      }}
                    >
                      <div className="flex items-center gap-5 relative z-10">
                        {/* Icon */}
                        <div className="relative flex-shrink-0">
                          <Icon 
                            size={28} 
                            strokeWidth={1.5}
                            style={{ color: '#F3DA73' }}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        {/* Problem text */}
                        <p 
                          className="text-base sm:text-lg font-inter font-medium leading-relaxed"
                          style={{ color: '#2A3B4F', letterSpacing: '0.01em' }}
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

        {/* Bottom callout */}
        <div 
          className={`mt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1.2s' }}
        >
          <div 
            className="relative py-12 px-12 rounded-[32px] overflow-hidden mx-auto"
            style={{
              background: '#FBF8F1',
              border: '2.5px solid #C9B882',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              maxWidth: '1400px'
            }}
          >
            <div className="relative z-10 text-center">
              <p 
                className="text-lg sm:text-xl md:text-2xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em',
                  lineHeight: '1.4'
                }}
              >
                We don't just identify the leaks. We architect systems that stop them permanently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
