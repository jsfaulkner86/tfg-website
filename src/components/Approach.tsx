import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  { 
    type: 'text',
    text: "Your custom ",
    emphasis: "Revenue Recovery Blueprint: ",
    suffix: "10-12 pages revealing exactly where you're hemorrhaging cash—and the precise fixes to plug every leak"
  },
  {
    type: 'bullets',
    text: "Our iron-clad guarantee: Uncover at least ",
    emphasis: "$100,000+ in hidden revenue",
    bullets: [
      "Most practices? $250K+ recovered",
      "One recent client: $3 MILLION in lost revenue found",
      "All from systems you're already running",
      "Just not optimizing (yet)"
    ]
  },
  {
    type: 'text',
    text: "Don't hit six figures? ",
    emphasis: "We work FREE",
    suffix: " until you do. You literally cannot lose."
  }
];

const Approach = () => {
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
      id="approach"
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '100px',
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, rgba(113,141,169,0.08) 0%, #FFFFFF 50%, rgba(243,218,115,0.08) 100%)'
      }}
    >
      {/* Sophisticated texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(243,218,115,0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(113,141,169,0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)
          `,
          opacity: 0.7,
          mixBlendMode: 'soft-light'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with refined elegance */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(243,218,115,0.15), rgba(243,218,115,0.08))',
            border: '1px solid rgba(243,218,115,0.3)'
          }}>
            <span className="text-xs font-inter font-medium tracking-wider uppercase" style={{ color: '#718DA9' }}>
              Your First Step
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
            style={{ 
              color: '#1A2A3A',
              letterSpacing: '-0.03em',
              lineHeight: '1.05'
            }}
          >
            The Growth Blueprint™
          </h2>
          
          <p className="text-lg sm:text-xl font-inter font-light max-w-3xl mx-auto mb-6" style={{ 
            color: '#5882A1', 
            letterSpacing: '0.01em',
            lineHeight: '1.6'
          }}>
            The Blueprint is the entry point: 30 days to clarity, guaranteed.
          </p>
          
          <div className="flex justify-center">
            <div 
              className="relative overflow-hidden rounded-full"
              style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #F3DA73, #718DA9, #F3DA73)' }}
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

        {/* What you get - Executive clean layout */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 
            className="text-3xl sm:text-4xl font-playfair font-bold mb-20 text-center"
            style={{ color: '#1A2A3A', letterSpacing: '-0.03em' }}
          >
            What you receive:
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div
                    className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col bg-white"
                    style={{
                      border: '1px solid rgba(113,141,169,0.12)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)',
                    }}
                  >
                    {/* Minimal number indicator */}
                    <div className="mb-6">
                      <div 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #F3DA73, #D4B65D)',
                          boxShadow: '0 2px 8px rgba(243,218,115,0.25)'
                        }}
                      >
                        <span className="text-sm font-inter font-bold" style={{ color: '#1A2A3A' }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 flex-1">
                      {benefit.type === 'bullets' ? (
                        <div>
                          <p 
                            className="text-lg font-inter font-semibold leading-relaxed mb-6"
                            style={{ 
                              color: '#1A2A3A', 
                              letterSpacing: '-0.01em',
                              lineHeight: '1.5'
                            }}
                          >
                            {benefit.text}
                            <span style={{ color: '#D4B65D' }}>
                              {benefit.emphasis}
                            </span>
                          </p>
                          <div className="space-y-3.5 mt-6">
                            {benefit.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                                  style={{ background: '#D4B65D' }}
                                />
                                <p 
                                  className="text-base font-inter"
                                  style={{ 
                                    color: '#5882A1',
                                    letterSpacing: '0.002em',
                                    lineHeight: '1.6'
                                  }}
                                >
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p 
                          className="text-lg font-inter font-semibold leading-relaxed"
                          style={{ 
                            color: '#1A2A3A', 
                            letterSpacing: '-0.01em',
                            lineHeight: '1.5'
                          }}
                        >
                          {benefit.text}
                          <span style={{ color: '#D4B65D' }}>
                            {benefit.emphasis}
                          </span>
                          {benefit.suffix && (
                            <span style={{ color: '#1A2A3A' }}>{benefit.suffix}</span>
                          )}
                        </p>
                      )}
                    </div>
                    
                    {/* Hover accent */}
                    <div 
                      className="absolute bottom-0 left-8 right-8 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #D4B65D, transparent)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement with dramatic flair */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative py-16 px-12 rounded-[32px] overflow-hidden mx-auto max-w-6xl"
            style={{
              background: '#FBF8F1',
              border: '2.5px solid #C9B882',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
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
                This isn't theory. It's clarity, cash flow, and control, delivered fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
