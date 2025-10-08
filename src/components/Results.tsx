import { useEffect, useRef, useState } from "react";
import { TrendingUp, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    stat: "$50M+",
    text: "uncovered in lost revenue across hospitals, health centers, and specialty practices"
  },
  {
    icon: Award,
    stat: "23+ years",
    text: "combined expertise: 13+ years of healthcare growth architecture + 10+ years of physician leadership"
  },
  {
    icon: Users,
    stat: "Boutique",
    text: "high-touch approach that blends clinical insight with growth strategy"
  }
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full" style={{
            background: 'rgba(243,218,115,0.15)',
            border: '1px solid rgba(243,218,115,0.4)'
          }}>
            <span className="text-xs font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>
              The Difference
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
            style={{ 
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: '1.05'
            }}
          >
            Why Work With Us
          </h2>
          
          <div className="flex justify-center">
            <div 
              className="relative overflow-hidden rounded-full"
              style={{ width: '80px', height: '3px', background: '#F3DA73' }}
            />
          </div>
        </div>

        {/* Clean cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {/* Outer glow on hover */}
                <div 
                  className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #D4B65D, #F3DA73)',
                    filter: 'blur(8px)'
                  }}
                />
                
                {/* Elevated card with multiple layers */}
                <div
                  className="relative p-10 rounded-[20px] transition-all duration-500 hover:-translate-y-4 h-full flex flex-col overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(250,249,246,0.98) 100%)',
                    border: '2.5px solid #D4B65D',
                    boxShadow: '0 15px 50px rgba(0,0,0,0.2), 0 5px 20px rgba(212,182,93,0.15), inset 0 1px 0 rgba(255,255,255,0.9)',
                    minHeight: '280px'
                  }}
                >
                  {/* Inner subtle gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 30% 20%, rgba(113,141,169,0.15) 0%, transparent 60%)'
                    }}
                  />
                  
                  {/* Enhanced Icon with glow */}
                  <div className="flex justify-center mb-8 relative">
                    {/* Icon glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle, rgba(113,141,169,0.3) 0%, transparent 70%)',
                        filter: 'blur(12px)',
                        transform: 'scale(1.5)'
                      }}
                    />
                    <div 
                      className="relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(113,141,169,0.15), rgba(113,141,169,0.05))',
                        border: '2px solid rgba(113,141,169,0.3)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)'
                      }}
                    >
                      <Icon 
                        size={32}
                        strokeWidth={2.5}
                        style={{ color: '#718DA9' }}
                      />
                    </div>
                  </div>
                  
                  {/* Stat */}
                  <div className="mb-4 relative z-10 text-center">
                    <p 
                      className="text-3xl sm:text-4xl font-playfair font-bold"
                      style={{ 
                        color: '#718DA9',
                        letterSpacing: '-0.02em',
                        textShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      {highlight.stat}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p 
                    className="text-base font-inter font-medium leading-relaxed relative z-10 flex-1 text-center"
                    style={{ 
                      color: '#2C2C2C',
                      letterSpacing: '0.01em',
                      lineHeight: '1.7'
                    }}
                  >
                    {highlight.text}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #D4B65D, transparent)'
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
                className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold"
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
