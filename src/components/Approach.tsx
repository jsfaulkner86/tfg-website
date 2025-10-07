import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "A 10-12 page bespoke playbook showing exactly where your practice is leaking money and how to stop it",
  "A guarantee of at least six figures uncovered, often $250K+, and in some cases, far more. One recent practice uncovered over $3 million in lost revenue from processes they were already running but not optimizing.",
  "And if we don't uncover at least six figures? We keep working with you at no cost until you do."
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
        paddingTop: '120px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(113,141,169,0.08) 100%)'
      }}
    >
      {/* Subtle misty texture overlay */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
            style={{ 
              color: '#2C2C2C',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}
          >
            The Growth Blueprint™
          </h2>
          <p className="text-lg sm:text-xl font-inter font-light mb-6" style={{ color: '#5882A1', letterSpacing: '0.01em' }}>
            The Blueprint is the entry point: 30 days to clarity, guaranteed.
          </p>
          <div 
            className="relative overflow-hidden rounded-full mx-auto"
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

        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 
            className="text-2xl sm:text-3xl font-playfair font-semibold mb-12 text-center"
            style={{ color: '#2C2C2C', letterSpacing: '-0.01em' }}
          >
            What you get:
          </h3>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div
                  className="relative p-8 rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(113,141,169,0.15)]"
                  style={{
                    background: 'rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(113,141,169,0.2)',
                    boxShadow: '0 4px 20px rgba(113,141,169,0.08)'
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div 
                      className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #F3DA73, #D4B65D)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 12px rgba(243,218,115,0.4)'
                      }}
                    >
                      <CheckCircle2 
                        size={20} 
                        strokeWidth={2.5}
                        style={{ color: '#2C2C2C' }}
                      />
                    </div>
                    <p 
                      className="text-base sm:text-lg font-inter leading-relaxed pt-1"
                      style={{ color: '#2C2C2C', letterSpacing: '0.01em' }}
                    >
                      {benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative p-10 rounded-2xl overflow-hidden group mx-auto max-w-4xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(243,218,115,0.12), rgba(243,218,115,0.06))',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(243,218,115,0.3)',
              boxShadow: '0 8px 40px rgba(113,141,169,0.12)',
              transition: 'all 0.5s ease'
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle at center, rgba(243,218,115,0.1), transparent 70%)'
              }}
            />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 5s ease-in-out infinite'
              }}
            />
            <p 
              className="text-2xl sm:text-3xl font-playfair font-semibold italic relative z-10"
              style={{ color: '#718DA9', letterSpacing: '-0.01em', lineHeight: '1.4', whiteSpace: 'nowrap', textAlign: 'center' }}
            >
              This isn't theory. It's clarity, cash flow, and control, delivered fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
