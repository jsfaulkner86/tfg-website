import { useEffect, useRef, useState } from "react";
import { TrendingUp, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    stat: "$50M+",
    text: "Uncovered in lost revenue across hospitals, health centers, and specialty practices"
  },
  {
    icon: Award,
    stat: "23+ years",
    text: "Combined expertise: 13+ years of healthcare growth architecture + 10+ years of physician leadership"
  },
  {
    icon: Users,
    stat: "Boutique",
    text: "High-touch approach that blends clinical insight with growth strategy"
  }
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      id="results"
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '100px',
        paddingBottom: '80px',
        background: '#718DA9'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Refined header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
            background: 'rgba(243,218,115,0.2)',
            border: '1.5px solid rgba(243,218,115,0.5)',
            boxShadow: '0 4px 12px rgba(243,218,115,0.15)'
          }}>
            <span className="text-xs font-inter font-bold tracking-[0.15em] uppercase" style={{ color: '#F3DA73' }}>
              THE DIFFERENCE
            </span>
          </div>
          
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-8"
            style={{ 
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              lineHeight: '1',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Why Work With Us
          </h2>
          
          <div className="flex justify-center">
            <div 
              className="relative overflow-hidden rounded-full"
              style={{ width: '120px', height: '4px', background: 'linear-gradient(90deg, transparent, #F3DA73, transparent)' }}
            />
          </div>
        </div>

        {/* Elegant cards with glass morphism */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                {/* Gold glow on hover */}
                <div 
                  className="absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(212,182,93,0.6), rgba(243,218,115,0.3), transparent 70%)',
                    filter: 'blur(20px)'
                  }}
                />
                
                {/* Glass card with light depth */}
                <div
                  className="relative p-12 rounded-[28px] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                    border: '2px solid rgba(212,182,93,0.3)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 30px rgba(113,141,169,0.12), inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(212,182,93,0.1)',
                    backdropFilter: 'blur(10px)',
                    minHeight: '360px'
                  }}
                >
                  {/* Subtle light gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, transparent 60%)'
                    }}
                  />
                  
                  {/* Icon with sequential fade-in */}
                  <div 
                    className={`flex justify-center mb-10 relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 500}ms` }}
                  >
                    {/* Icon subtle glow */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle, rgba(113,141,169,0.3) 0%, transparent 70%)',
                        filter: 'blur(16px)',
                        transform: 'scale(1.3)'
                      }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, rgba(248,250,252,1), rgba(241,245,249,0.98))',
                        border: '1.5px solid rgba(113,141,169,0.15)',
                        boxShadow: '0 4px 12px rgba(113,141,169,0.08), inset 0 1px 0 rgba(255,255,255,1)'
                      }}
                    >
                      <Icon 
                        size={36}
                        strokeWidth={2}
                        style={{ color: '#718DA9' }}
                      />
                    </div>
                  </div>
                  
                  {/* Stat headline - large serif bold Faulkner Blue */}
                  <div 
                    className={`mb-3 relative z-10 text-center transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 650}ms` }}
                  >
                    <p 
                      className="text-6xl sm:text-7xl font-playfair font-bold"
                      style={{ 
                        color: '#718DA9',
                        letterSpacing: '-0.04em',
                        lineHeight: '1',
                        textShadow: '0 2px 12px rgba(113,141,169,0.1)'
                      }}
                    >
                      {highlight.stat}
                    </p>
                  </div>
                  
                  {/* Description - muted gray-blue for warmth */}
                  <p 
                    className={`text-base sm:text-lg font-inter leading-relaxed relative z-10 flex-1 text-center transition-all duration-700 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      color: '#4A5568',
                      letterSpacing: '0.005em',
                      lineHeight: '1.6',
                      transitionDelay: `${index * 150 + 800}ms`
                    }}
                  >
                    {highlight.text}
                  </p>
                  
                  {/* Bottom gold accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(212,182,93,0.6), rgba(243,218,115,0.8), rgba(212,182,93,0.6), transparent)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean bottom statement - matching reference style */}
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
                We don't just analyze. We architect organizations built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
