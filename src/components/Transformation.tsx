import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Cog } from "lucide-react";

const outcomes = [
  {
    microHeadline: "From Skepticism to Advocacy",
    mainTitle: "Turn physicians into product champions",
    benefitSummary: "Through CMIO engagement, peer-to-peer advocacy, and clinical credibility building, your platform stops being 'another tool' and becomes essential to clinical workflows.",
    result: "Internal physician champions who drive adoption organically"
  },
  {
    microHeadline: "From Pilot to Enterprise",
    mainTitle: "Convert proof-of-concept into system-wide deployment",
    benefitSummary: "With clinical environment readiness assessments, governance frameworks, and structured training, we remove every barrier between your pilot and full-scale adoption.",
    result: "Structured rollout with governance and 24/7 support from day one"
  },
  {
    microHeadline: "From Risk to Confidence",
    mainTitle: "Give health systems the safety frameworks they demand",
    benefitSummary: "We build controlled rollback protocols, escalation pathways, and compliance documentation that turn risk objections into confident approvals.",
    result: "Enterprise contracts secured with pre-built governance packages"
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="outcomes"
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FDFCF9 0%, #F9F6EC 100%)'
      }}
    >
      {/* Cinematic lighting effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(113,141,169,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Ambient particles effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(circle at 80% 30%, rgba(113,141,169,0.04) 0%, transparent 25%),
            radial-gradient(circle at 20% 60%, rgba(243,218,115,0.05) 0%, transparent 30%),
            radial-gradient(circle at 60% 80%, rgba(113,141,169,0.03) 0%, transparent 20%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Refined header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(113,141,169,0.12), rgba(113,141,169,0.06))',
            border: '1.5px solid rgba(113,141,169,0.25)',
            boxShadow: '0 4px 12px rgba(113,141,169,0.08)'
          }}>
            <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>
              What You Get
            </span>
          </div>
          
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-8"
            style={{ 
              color: '#1A2A3A',
              letterSpacing: '-0.04em',
              lineHeight: '1',
              textShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
          >
            The Outcome
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl font-inter font-medium" style={{ 
              color: '#4A6A85', 
              letterSpacing: '0.02em',
              lineHeight: '1.6'
            }}>
              When clinical strategy meets health tech innovation, the results compound.
            </p>
            <p className="text-lg sm:text-xl font-inter" style={{ 
              color: '#4A6A85', 
              letterSpacing: '0.02em',
              lineHeight: '1.7'
            }}>
              Our partners don't just launch products. They build clinical ecosystems that drive lasting adoption and measurable patient outcomes.
            </p>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3">
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(113,141,169,0.4))' }} />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#718DA9', boxShadow: '0 0 8px rgba(113,141,169,0.4)' }}
            />
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(113,141,169,0.4), transparent)' }} />
          </div>
        </div>

        {/* Intro text */}
        <div className={`mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-2xl sm:text-3xl font-playfair font-bold text-center" style={{ 
            color: '#1A2A3A', 
            letterSpacing: '-0.02em',
            lineHeight: '1.3'
          }}>
            As your fractional clinical and operational advisors, we:
          </p>
        </div>

        {/* Success story cards */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => {
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  {/* Outer glow on hover */}
                  <div 
                    className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #D4B65D, #718DA9)',
                      filter: 'blur(8px)'
                    }}
                  />
                  
                  {/* Elevated card */}
                  <div
                    className="relative p-10 rounded-[24px] transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                      border: '2.5px solid #F3DA73',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.05)',
                      minHeight: '380px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Inner subtle gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)'
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Micro-headline */}
                      <p 
                        className="text-sm font-inter font-bold tracking-wider uppercase mb-4"
                        style={{ 
                          color: '#F3DA73',
                          letterSpacing: '0.1em',
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        {outcome.microHeadline}
                      </p>
                      
                      {/* Main title */}
                      <h3 
                        className="text-xl sm:text-2xl font-playfair font-bold mb-4"
                        style={{ 
                          color: 'rgba(255,255,255,0.98)',
                          letterSpacing: '-0.01em',
                          lineHeight: '1.3',
                          textShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                      >
                        {outcome.mainTitle}
                      </h3>
                      
                      {/* Benefit summary */}
                      <p 
                        className="text-base font-inter mb-6 flex-grow"
                        style={{ 
                          color: 'rgba(248,248,248,0.85)',
                          letterSpacing: '0.02em',
                          lineHeight: '1.6'
                        }}
                      >
                        {outcome.benefitSummary}
                      </p>
                      
                      {/* Result line with gold highlight */}
                      <div 
                        className="pt-4 mt-auto"
                        style={{
                          borderTop: '1px solid rgba(243,218,115,0.3)'
                        }}
                      >
                        <p 
                          className="text-sm font-inter font-semibold"
                          style={{ 
                            color: 'rgba(255,255,255,0.9)',
                            letterSpacing: '0.02em'
                          }}
                        >
                          <span style={{ color: '#F3DA73', fontWeight: 700 }}>Result:</span>{' '}
                          {outcome.result}
                        </p>
                      </div>
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
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative py-6 px-6 sm:py-8 sm:px-8 md:py-12 md:px-12 rounded-3xl mx-auto max-w-5xl"
            style={{
              background: '#FBF8F1',
              border: '2px solid #D4B65D',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}
          >
            <div className="text-center">
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.5'
                }}
              >
                This is where health tech companies stop stalling and start scaling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
