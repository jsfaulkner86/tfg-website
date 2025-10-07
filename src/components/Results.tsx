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
                {/* Clean white card with elegant gold border */}
                <div
                  className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] h-full flex flex-col"
                  style={{
                    background: '#FFFFFF',
                    border: '2.5px solid #D4B65D',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    minHeight: '240px'
                  }}
                >
                  {/* Icon with clean styling */}
                  <div className="mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(113,141,169,0.1)',
                        border: '2px solid rgba(113,141,169,0.25)'
                      }}
                    >
                      <Icon 
                        size={28}
                        strokeWidth={2}
                        style={{ color: '#718DA9' }}
                      />
                    </div>
                  </div>
                  
                  {/* Stat */}
                  <div className="mb-4">
                    <p 
                      className="text-3xl sm:text-4xl font-playfair font-bold"
                      style={{ 
                        color: '#718DA9',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {highlight.stat}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p 
                    className="text-base font-inter leading-relaxed relative z-10 flex-1"
                    style={{ 
                      color: '#2C2C2C',
                      letterSpacing: '0.01em',
                      lineHeight: '1.7'
                    }}
                  >
                    {highlight.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean bottom statement - matching reference style */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative py-16 px-12 rounded-2xl overflow-hidden mx-auto max-w-6xl"
            style={{
              background: '#FFFFFF',
              border: '2px solid #D4B65D',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
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
