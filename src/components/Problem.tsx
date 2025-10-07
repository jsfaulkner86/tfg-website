import { useEffect, useRef, useState } from "react";
import { DoorOpen, TrendingDown, Flame, AlertCircle } from "lucide-react";

const problemsData = [
  { 
    text: "Patient access gaps that quietly push new business to competitors",
    icon: DoorOpen,
    emphasis: "access gaps"
  },
  { 
    text: "Staff and provider turnover bleeding hundreds of thousands per year",
    icon: TrendingDown,
    emphasis: "turnover bleeding"
  },
  { 
    text: "Workflows that exhaust clinicians and stall growth",
    icon: Flame,
    emphasis: "exhaust clinicians"
  },
  { 
    text: "Systems that look \"fine\" but silently erode profitability",
    icon: AlertCircle,
    emphasis: "erode profitability"
  }
];

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'linear-gradient(90deg, #718DA9 0%, #4B647D 50%, #FFFFFF 50%, #FFFFFF 100%)'
      }}
    >
      {/* Golden diagonal light flare crossing the middle */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(243,218,115,0.15) 48%, rgba(243,218,115,0.2) 50%, rgba(243,218,115,0.15) 52%, transparent 60%)',
          mixBlendMode: 'screen'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - Dark gradient with header */}
          <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold uppercase mb-8" 
              style={{ 
                color: '#FFFFFF',
                letterSpacing: '0.12em',
                fontVariant: 'small-caps',
                textShadow: '0 4px 12px rgba(0,0,0,0.4)'
              }}
            >
              The Problem
            </h2>
            <div 
              className="bg-[#F3DA73] mb-12" 
              style={{ width: '60px', height: '2px' }}
            />
            
            {/* Timeline with pulse points */}
            <div className="relative mt-16">
              {/* Vertical gold connecting line */}
              <div 
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{
                  background: 'linear-gradient(180deg, #F3DA73 0%, rgba(243,218,115,0.3) 100%)'
                }}
              />
              
              <div className="space-y-10">
                {problemsData.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={index}
                      className={`relative pl-16 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 200 + 400}ms`
                      }}
                    >
                      {/* Pulse point icon */}
                      <div 
                        className="absolute left-0 top-0"
                        style={{
                          filter: 'drop-shadow(0 0 12px rgba(243,218,115,0.6))',
                          animation: 'pulse-soft 3s ease-in-out infinite'
                        }}
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgba(243,218,115,0.2)',
                            border: '2px solid #F3DA73'
                          }}
                        >
                          <Icon size={16} color="#F3DA73" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Problem card */}
                      <div 
                        className="p-6 rounded-xl"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(243,218,115,0.3)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <p 
                          className="text-lg font-inter font-medium" 
                          style={{ 
                            color: '#FFFFFF',
                            lineHeight: '1.7'
                          }}
                        >
                          {problem.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Light panel with support text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="p-12 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
              }}
            >
              <p 
                className="text-xl sm:text-2xl font-inter mb-10" 
                style={{ 
                  lineHeight: '1.8',
                  color: '#2C2C2C'
                }}
              >
                Most practices aren't <strong style={{ color: '#2C2C2C' }}>losing money</strong> because they don't have enough patients.
              </p>
              <p 
                className="text-xl sm:text-2xl font-inter mb-10" 
                style={{ 
                  lineHeight: '1.8',
                  color: '#2C2C2C'
                }}
              >
                They're <span style={{ color: '#F3DA73', fontWeight: 700 }}>losing it</span> through <span style={{ color: '#F3DA73', fontWeight: 700 }}>hidden inefficiencies</span> they can't see.
              </p>
              
              {/* Gold separator */}
              <div 
                className="w-20 h-px bg-[#F3DA73] my-10"
                style={{ opacity: 0.6 }}
              />
              
              <p 
                className="text-2xl sm:text-3xl font-inter font-bold" 
                style={{ 
                  color: '#2C2C2C',
                  lineHeight: '1.6'
                }}
              >
                Even top-performing groups are <span style={{ color: '#F3DA73' }}>leaking six to seven figures annually</span> - without realizing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
