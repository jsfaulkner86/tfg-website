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
                  {/* Luxury blue card with white text */}
                  <div
                    className="relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(113,141,169,0.4)] h-full flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, #718DA9, #5882A1)',
                      boxShadow: '0 15px 50px rgba(113,141,169,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      position: 'relative'
                    }}
                  >
                    {/* Premium gradient accent line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                      style={{
                        background: 'linear-gradient(90deg, #F3DA73 0%, rgba(255,255,255,0.6) 50%, #F3DA73 100%)',
                        boxShadow: '0 2px 8px rgba(243,218,115,0.4)'
                      }}
                    />
                    
                    {/* Sophisticated hover glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(243,218,115,0.2), transparent 50%)'
                      }}
                    />
                    
                    {/* Elegant edge highlight */}
                    <div 
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.1)'
                      }}
                    />
                    
                    {/* Luxury number badge */}
                    <div className="flex justify-center mb-8">
                      <div 
                        className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                        style={{
                          background: 'linear-gradient(135deg, #F3DA73 0%, #E5C962 50%, #D4B65D 100%)',
                          boxShadow: '0 8px 24px rgba(243,218,115,0.6), inset 0 1px 2px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)'
                        }}
                      >
                        <span className="text-2xl font-playfair font-bold" style={{ color: '#2C2C2C', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 text-center flex-1">
                      <p 
                        className="text-base font-inter leading-relaxed"
                        style={{ 
                          color: '#FFFFFF', 
                          letterSpacing: '0.01em',
                          lineHeight: '1.8'
                        }}
                      >
                        {benefit}
                      </p>
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
            className="relative p-12 rounded-2xl overflow-hidden group mx-auto max-w-5xl"
            style={{
              background: 'linear-gradient(135deg, rgba(113,141,169,0.12), rgba(113,141,169,0.06))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(113,141,169,0.25)',
              boxShadow: '0 15px 50px rgba(113,141,169,0.15)',
              transition: 'all 0.6s ease'
            }}
          >
            {/* Animated gradient border glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.2), rgba(113,141,169,0.2))',
                filter: 'blur(30px)'
              }}
            />
            
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 6s ease-in-out infinite'
              }}
            />
            
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
                  color: '#2C2C2C', 
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
