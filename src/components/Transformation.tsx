import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Cog } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    heading: "Eliminate bottlenecks",
    emphasis: "that stall growth",
    bullets: [
      "Identify the 3-5 critical constraints holding you back",
      "Implement proven fixes that unlock capacity"
    ]
  },
  {
    icon: TrendingUp,
    heading: "Restore margins so",
    emphasis: "profitability compounds",
    bullets: [
      "Reclaim 10-20% of revenue lost to inefficiency",
      "Build sustainable profit momentum quarter over quarter"
    ]
  },
  {
    icon: Cog,
    heading: "Build scalable systems",
    emphasis: "that last after we leave",
    bullets: [
      "Create repeatable processes your team can own",
      "Ensure growth doesn't require constant intervention"
    ]
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="transformation"
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
              The Journey Continues
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
            The Transformation
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl font-inter font-medium" style={{ 
              color: '#4A6A85', 
              letterSpacing: '0.02em',
              lineHeight: '1.6'
            }}>
              The Growth Blueprint™ gives you clarity.
            </p>
            <p className="text-2xl sm:text-3xl font-playfair font-bold italic" style={{ 
              color: '#1A2A3A',
              letterSpacing: '-0.02em',
              lineHeight: '1.3'
            }}>
              But the Transformation is where the real magic happens.
            </p>
            <p className="text-lg sm:text-xl font-inter" style={{ 
              color: '#4A6A85', 
              letterSpacing: '0.02em',
              lineHeight: '1.7'
            }}>
              Almost every client who completes the Blueprint chooses to continue because once you see six or seven figures of hidden revenue uncovered, you don't want to stop there.
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
            Over 3–6 months, we integrate alongside your team to:
          </p>
        </div>

        {/* Luxury outcome cards */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
                  
                  {/* Elevated card with multiple layers */}
                  <div
                    className="relative p-12 rounded-[24px] transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col items-center text-center overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                      border: '2.5px solid #F3DA73',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.05)',
                      minHeight: '300px',
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
                    
                    {/* Number badge */}
                    <div className="flex justify-center mb-8 relative">
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'radial-gradient(circle, rgba(243,218,115,0.5) 0%, transparent 70%)',
                          filter: 'blur(20px)',
                          transform: 'scale(2)'
                        }}
                      />
                      <div 
                        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(10px)',
                          border: '1.5px solid rgba(255,255,255,0.25)',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 0 20px rgba(243,218,115,0.1)'
                        }}
                      >
                        <span className="text-3xl font-playfair font-bold" style={{ 
                          color: '#F3DA73',
                          textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Fixed height heading section */}
                      <div className="mb-3" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p 
                          className="text-lg sm:text-xl font-inter leading-relaxed text-center"
                          style={{ 
                            color: 'rgba(248,248,248,0.95)', 
                            letterSpacing: '0.3px',
                            lineHeight: '1.6'
                          }}
                        >
                          {outcome.heading}
                        </p>
                      </div>
                      
                      {/* Fixed height emphasis - perfectly aligned */}
                      <div className="mb-6" style={{ minHeight: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p className="font-bold text-2xl sm:text-3xl text-center font-playfair" style={{ 
                          color: '#F3DA73',
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                          lineHeight: '1.3'
                        }}>
                          {outcome.emphasis}
                        </p>
                      </div>
                      
                      {/* Bullet points */}
                      <div className="flex-1 flex flex-col justify-start">
                        <div className="space-y-4">
                          {outcome.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                              <div 
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-2"
                                style={{ 
                                  background: '#F3DA73',
                                  boxShadow: '0 0 8px rgba(243,218,115,0.5)'
                                }}
                              />
                              <p 
                                className="text-base sm:text-lg font-inter"
                                style={{ 
                                  color: 'rgba(248,248,248,0.95)',
                                  letterSpacing: '0.3px',
                                  lineHeight: '1.7'
                                }}
                              >
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
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
            className="relative py-12 px-12 rounded-3xl mx-auto max-w-5xl"
            style={{
              background: '#FBF8F1',
              border: '2px solid #D4B65D',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}
          >
            <div className="text-center">
              <p 
                className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.5'
                }}
              >
                This is where practices stop bleeding time and money and start thriving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
