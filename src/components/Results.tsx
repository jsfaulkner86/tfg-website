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
        background: 'linear-gradient(135deg, #718DA9 0%, #5882A1 100%)'
      }}
    >
      {/* Sophisticated texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(243,218,115,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)
          `,
          opacity: 0.6,
          mixBlendMode: 'soft-light'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Refined header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full" style={{
            background: 'rgba(243,218,115,0.2)',
            border: '1px solid rgba(243,218,115,0.5)'
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
              style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #F3DA73, rgba(255,255,255,0.6), #F3DA73)' }}
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

        {/* Luxury highlight cards */}
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
                {/* Elegant card with white theme */}
                <div
                  className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] h-full flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '2px solid rgba(243,218,115,0.6)',
                    boxShadow: '0 15px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
                    minHeight: '240px'
                  }}
                >
                  {/* Premium gradient accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                    style={{
                      background: 'linear-gradient(90deg, #F3DA73 0%, #718DA9 50%, #F3DA73 100%)',
                      boxShadow: '0 2px 8px rgba(243,218,115,0.4)'
                    }}
                  />
                  
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(243,218,115,0.15), transparent 50%)'
                    }}
                  />
                  
                  {/* Elegant edge highlight */}
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 1px rgba(0,0,0,0.02)'
                    }}
                  />
                  
                  {/* Icon with luxury styling */}
                  <div className="mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(113,141,169,0.15), rgba(113,141,169,0.08))',
                        border: '2px solid rgba(113,141,169,0.3)'
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

        {/* Bottom statement with dramatic flair */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative p-12 rounded-2xl overflow-hidden group mx-auto max-w-5xl"
            style={{
              background: 'linear-gradient(135deg, rgba(243,218,115,0.2), rgba(243,218,115,0.1))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(243,218,115,0.5)',
              boxShadow: '0 15px 50px rgba(0,0,0,0.2)',
              transition: 'all 0.6s ease'
            }}
          >
            {/* Animated gradient border glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.3), rgba(255,255,255,0.2))',
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
                className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold italic"
                style={{ 
                  color: '#F3DA73', 
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
