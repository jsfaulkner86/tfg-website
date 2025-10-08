import { useEffect, useRef, useState } from "react";
import { TrendingUp, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    stat: "$50M+ Recovered",
    bullets: [
      "Uncovered in lost revenue across hospitals, health systems, and specialty practices",
      "By fixing inefficiencies hiding in plain sight"
    ]
  },
  {
    icon: Award,
    stat: "23+ Years of Expertise",
    bullets: [
      "13+ years leading healthcare growth architecture",
      "10+ years in frontline clinical leadership",
      "We bridge the boardroom and the bedside"
    ]
  },
  {
    icon: Users,
    stat: "Boutique by Design",
    bullets: [
      "High-touch partnership blending physician insight, operational precision, and executive strategy",
      "Every engagement is customized",
      "No cookie-cutter consulting, ever"
    ]
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
                  className="relative p-12 rounded-[24px] transition-all duration-500 hover:-translate-y-3 h-full flex flex-col overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FEFDFB 100%)',
                    border: '3px solid #D4B65D',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(212,182,93,0.2), inset 0 1px 0 rgba(255,255,255,1)',
                    minHeight: '340px'
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
                  <div className="flex justify-center mb-10 relative">
                    {/* Icon glow */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle, rgba(113,141,169,0.25) 0%, transparent 70%)',
                        filter: 'blur(16px)',
                        transform: 'scale(1.5)'
                      }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(113,141,169,0.08), rgba(113,141,169,0.03))',
                        border: '2px solid rgba(113,141,169,0.2)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)'
                      }}
                    >
                      <Icon 
                        size={36}
                        strokeWidth={2}
                        style={{ color: '#718DA9' }}
                      />
                    </div>
                  </div>
                  
                  {/* Stat */}
                  <div className="mb-6 relative z-10 text-center">
                    <p 
                      className="text-5xl sm:text-6xl font-playfair font-bold"
                      style={{ 
                        color: '#718DA9',
                        letterSpacing: '-0.03em',
                        textShadow: '0 2px 8px rgba(113,141,169,0.15)'
                      }}
                    >
                      {highlight.stat}
                    </p>
                  </div>
                  
                  {/* Description with bullets */}
                  <ul className="space-y-3 relative z-10 flex-1">
                    {highlight.bullets.map((bullet, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-3 text-left"
                      >
                        <span 
                          className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: '#D4B65D' }}
                        />
                        <span 
                          className="text-base sm:text-lg font-inter font-medium leading-relaxed"
                          style={{ 
                            color: '#4A5568',
                            letterSpacing: '0.005em',
                            lineHeight: '1.6'
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
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
