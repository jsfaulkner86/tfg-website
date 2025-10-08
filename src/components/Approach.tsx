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
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FDFCF9 0%, #F8F4E3 100%)'
      }}
    >
      {/* Subtle curved divider at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-16"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(113,141,169,0.15) 0%, transparent 100%)',
        }}
      />
      
      {/* Ambient lighting glow effect at top center */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(243,218,115,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Light vignette frame */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.03) 100%)'
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
              color: '#2A3B4F',
              letterSpacing: '-0.03em',
              lineHeight: '1.05',
              textShadow: '0 2px 8px rgba(113,141,169,0.2)'
            }}
          >
            The Growth Blueprint™
          </h2>
          
          <p className="text-lg sm:text-xl font-inter font-light italic max-w-3xl mx-auto mb-4" style={{ 
            color: '#718DA9', 
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            The Blueprint is the entry point: 30 days to clarity, guaranteed.
          </p>
          
          <div className="flex justify-center mb-6">
            <div 
              className="h-0.5 w-24"
              style={{ background: '#F3DA73' }}
            />
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
                  {/* Outer glow on hover */}
                  <div 
                    className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #F3DA73, #D4B65D)',
                      filter: 'blur(12px)'
                    }}
                  />
                  
                  {/* Semi-translucent glass card */}
                  <div
                    className="relative p-10 rounded-[20px] transition-all duration-500 hover:-translate-y-[6px] h-full flex flex-col overflow-hidden"
                    style={{
                      background: 'rgba(113,141,169,0.1)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(243,218,115,0.3)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
                    }}
                  >
                    {/* Enhanced number badge with gold gradient */}
                    <div className="flex justify-center mb-8 relative">
                      {/* Badge glow on hover */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'radial-gradient(circle, rgba(243,218,115,0.5) 0%, transparent 70%)',
                          filter: 'blur(15px)',
                          transform: 'scale(2)'
                        }}
                      />
                      <div 
                        className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                          boxShadow: '0 6px 16px rgba(243,218,115,0.4), inset 0 2px 4px rgba(255,255,255,0.4)'
                        }}
                      >
                        <span className="text-2xl font-inter font-bold" style={{ color: '#2C2C2C', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
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
                              color: '#1E1E1E', 
                              letterSpacing: '0.01em',
                              lineHeight: '1.7'
                            }}
                          >
                            {benefit.text}
                            <span className="font-bold text-lg sm:text-xl" style={{ color: '#F3DA73' }}>
                              {benefit.emphasis}
                            </span>
                          </p>
                          <div className="space-y-4 mt-6 text-left max-w-md mx-auto">
                            {benefit.bullets.map((bullet, idx) => (
                              <div key={idx}>
                                {idx > 0 && (
                                  <div 
                                    className="h-px mb-4"
                                    style={{ 
                                      backgroundImage: 'repeating-linear-gradient(to right, #F3DA73 0px, #F3DA73 4px, transparent 4px, transparent 8px)',
                                      opacity: 0.3
                                    }}
                                  />
                                )}
                                <div className="flex items-start gap-3">
                                  <div 
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                                    style={{ background: '#F3DA73' }}
                                  />
                                  <p 
                                    className="text-sm sm:text-base font-inter"
                                    style={{ 
                                      color: '#1E1E1E',
                                      letterSpacing: '0.01em',
                                      lineHeight: '1.6'
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: bullet
                                        .replace(/\$250K\+/g, '<span style="color: #F3DA73; font-weight: 600;">$250K+</span>')
                                        .replace(/\$3 million/g, '<span style="color: #F3DA73; font-weight: 600;">$3 million</span>')
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p 
                          className="text-base sm:text-lg font-inter font-medium leading-relaxed text-center"
                          style={{ 
                            color: '#1E1E1E', 
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
                    
                    {/* Bottom accent line */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #F3DA73, transparent)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom callout - cinematic moment */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Thin gold separator line */}
          <div 
            className="h-px w-32 mx-auto mb-12"
            style={{ background: '#F3DA73' }}
          />
          
          <div 
            className="relative py-16 px-12 rounded-[32px] overflow-hidden mx-auto max-w-6xl group"
            style={{
              background: '#718DA9',
              border: '2px solid #F3DA73',
              boxShadow: '0 12px 40px rgba(113,141,169,0.3), 0 0 60px rgba(243,218,115,0.15)'
            }}
          >
            {/* Subtle shimmer effect on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              style={{
                background: 'linear-gradient(120deg, transparent 0%, rgba(243,218,115,0.1) 50%, transparent 100%)',
                animation: 'shimmer 3s ease-in-out infinite'
              }}
            />
            
            <div className="relative z-10 text-center">
              <p 
                className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold leading-relaxed"
                style={{ 
                  color: '#FFFFFF', 
                  letterSpacing: '-0.01em', 
                  lineHeight: '1.5'
                }}
              >
                We don't just identify the leaks. We <span style={{ color: '#F3DA73', fontWeight: 700 }}>architect</span> systems that stop them permanently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
