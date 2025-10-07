import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  { 
    type: 'text',
    text: "A 10-12 page bespoke playbook showing exactly where your practice is ",
    emphasis: "leaking money",
    suffix: " and how to stop it"
  },
  {
    type: 'bullets',
    text: "A guarantee of at least ",
    emphasis: "six figures uncovered",
    bullets: [
      "Often $250K+",
      "In some cases, far more",
      "One recent practice: $3 million in lost revenue",
      "From processes already running but not optimizing"
    ]
  },
  {
    type: 'text',
    text: "If we don't uncover at least six figures? ",
    emphasis: "We keep working with you at no cost",
    suffix: " until you do."
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
              color: '#2C2C2C',
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

        {/* What you get - Centered single column with numbers */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 
            className="text-2xl sm:text-3xl font-playfair font-bold mb-12 text-center"
            style={{ color: '#2C2C2C', letterSpacing: '-0.02em' }}
          >
            What you receive:
          </h3>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {/* Blue card with gold border */}
                  <div
                    className="relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] h-full flex flex-col"
                    style={{
                      background: 'rgba(113,141,169,0.95)',
                      border: '2.5px solid #D4B65D',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                    }}
                  >
                    
                    {/* Refined minimal number badge */}
                    <div className="flex justify-center mb-6">
                      <div 
                        className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          border: '2px solid rgba(255,255,255,0.3)'
                        }}
                      >
                        <span className="text-xl font-inter font-semibold" style={{ color: '#FFFFFF' }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 flex-1">
                      {benefit.type === 'bullets' ? (
                        <div>
                          <p 
                            className="text-base sm:text-lg font-inter font-medium leading-relaxed mb-6 text-center"
                            style={{ 
                              color: '#FFFFFF', 
                              letterSpacing: '0.01em',
                              lineHeight: '1.7'
                            }}
                          >
                            {benefit.text}
                            <span className="font-bold text-lg sm:text-xl" style={{ color: '#F3DA73' }}>
                              {benefit.emphasis}
                            </span>
                          </p>
                          <div className="space-y-3 mt-6 text-left max-w-md mx-auto">
                            {benefit.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                                  style={{ background: '#F3DA73' }}
                                />
                                <p 
                                  className="text-sm sm:text-base font-inter"
                                  style={{ 
                                    color: '#FFFFFF',
                                    letterSpacing: '0.01em',
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
                          className="text-base sm:text-lg font-inter font-medium leading-relaxed text-center"
                          style={{ 
                            color: '#FFFFFF', 
                            letterSpacing: '0.01em',
                            lineHeight: '1.7'
                          }}
                        >
                          {benefit.text}
                          <span className="font-bold" style={{ color: '#F3DA73' }}>
                            {benefit.emphasis}
                          </span>
                          {benefit.suffix}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement with dramatic flair */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative p-12 rounded-[32px] overflow-hidden mx-auto max-w-5xl"
            style={{
              background: '#FAF9F6',
              border: '2.5px solid #C9B882',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}
          >
            
            <div className="relative z-10 text-center">
              <p 
                className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold italic mb-1"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.3'
                }}
              >
                This isn't theory.
              </p>
              <p 
                className="text-xl sm:text-2xl md:text-3xl font-playfair font-semibold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.01em',
                  lineHeight: '1.4'
                }}
              >
                It's clarity, cash flow, and control, delivered fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
