import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  { 
    title: "Workflow Architecture",
    details: [
      "We review every process, from scheduling to documentation, to find redundancies, bottlenecks, and hidden delays.",
      "Broken workflows bleed time and talent."
    ]
  },
  {
    title: "Revenue Integrity",
    details: [
      "Find the money you're already earning.",
      "Uncover hidden revenue leaks and coding inefficiencies, from charge capture gaps to missed claims."
    ]
  },
  {
    title: "Team Dynamics & Capacity",
    details: [
      "Align people with purpose.",
      "Identify role misalignment, unbalanced workloads, and capacity bottlenecks.",
      "Redistribute effort for greater impact."
    ]
  },
  {
    title: "Patient Experience Pathways",
    details: [
      "Reduce leakage. Grow loyalty.",
      "Diagnose patient touchpoints that drive drop-off or delay, and improve retention through lasting relationships."
    ]
  },
  {
    title: "AI Adoption & Automation",
    details: [
      "Leverage AI to enhance, not replace, human expertise.",
      "Streamline documentation, scheduling, and communication to boost efficiency without burnout."
    ]
  },
  {
    title: "Vendor, Technology & Compliance Optimization",
    details: [
      "Evaluate your EHR, tech stack, and vendor relationships.",
      "Eliminate redundancy, maximize ROI, and ensure all systems and workflows align with compliance and security standards."
    ]
  }
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
        background: 'linear-gradient(180deg, #FDFCF9 0%, #F9F6EC 100%)'
      }}
    >
      {/* Cinematic lighting effect - glow of clarity at top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Ambient particles effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(243,218,115,0.05) 0%, transparent 30%),
            radial-gradient(circle at 80% 60%, rgba(243,218,115,0.04) 0%, transparent 25%),
            radial-gradient(circle at 40% 80%, rgba(243,218,115,0.03) 0%, transparent 20%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with refined elegance */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(243,218,115,0.12), rgba(243,218,115,0.06))',
            border: '1.5px solid rgba(243,218,115,0.25)',
            boxShadow: '0 4px 12px rgba(243,218,115,0.08)'
          }}>
            <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>
              Your First Step
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
            The Growth Blueprint™
          </h2>
          
          <p className="text-xl sm:text-2xl font-inter font-medium max-w-4xl mx-auto mb-4" style={{ 
            color: '#4A6A85', 
            letterSpacing: '0.02em',
            lineHeight: '1.6'
          }}>
            A structured 30-day diagnostic engagement that delivers absolute clarity on where you're losing money and exactly how to fix it.
          </p>
          
          <p className="text-lg sm:text-xl font-inter font-semibold max-w-4xl mx-auto mb-8" style={{ 
            color: '#718DA9', 
            letterSpacing: '0.01em',
            lineHeight: '1.5'
          }}>
            Our guarantee: We'll uncover at least six figures in hidden revenue, or we work free until we do.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4))' }} />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#F3DA73', boxShadow: '0 0 8px rgba(243,218,115,0.4)' }}
            />
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(243,218,115,0.4), transparent)' }} />
          </div>
        </div>

        {/* What you receive - Cinematic reveal */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 
            className="text-3xl sm:text-4xl font-playfair font-bold mb-12 text-center"
            style={{ 
              color: '#1A2A3A', 
              letterSpacing: '0.05em',
              textShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}
          >
            The 6 Pillars We Evaluate:
          </h3>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Subtle vertical connectors behind cards */}
            <div className="absolute top-1/2 left-0 right-0 h-px hidden md:block pointer-events-none" style={{
              background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(243,218,115,0.2) 10px, rgba(243,218,115,0.2) 20px)',
              transform: 'translateY(-50%)'
            }} />
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  {/* Outer gold glow on hover */}
                  <div 
                    className="absolute -inset-1 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(243,218,115,0.4), rgba(243,218,115,0.2))',
                      filter: 'blur(16px)'
                    }}
                  />
                  
                  {/* Main card */}
                  <div
                    className="relative rounded-[24px] transition-all duration-300 hover:-translate-y-2 h-full flex flex-col overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                      border: '2.5px solid #F3DA73',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.05)',
                      backdropFilter: 'blur(10px)',
                      minHeight: '400px'
                    }}
                  >
                    {/* Inner lighting gradient */}
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                      }}
                    />
                    
                    <div className="relative p-8 sm:p-10 flex flex-col h-full">
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
                          className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1.5px solid rgba(255,255,255,0.25)',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)'
                          }}
                        >
                          <span className="text-2xl font-playfair font-bold" style={{ 
                            color: '#F3DA73',
                            textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                          }}>
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-col flex-1 text-center">
                        {/* Title */}
                        <h4 
                          className="text-xl sm:text-2xl font-playfair font-bold mb-6"
                          style={{ 
                            color: '#F3DA73',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            lineHeight: '1.3'
                          }}
                        >
                          {pillar.title}
                        </h4>
                        
                        {/* Details */}
                        <div className="space-y-4 text-left">
                          {pillar.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <span 
                                className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ background: '#F3DA73' }}
                              />
                              <p 
                                className="text-base font-inter leading-relaxed"
                                style={{ 
                                  color: 'rgba(248,248,248,0.95)', 
                                  letterSpacing: '0.3px',
                                  lineHeight: '1.6'
                                }}
                              >
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom accent line on hover */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, transparent, #F3DA73 50%, transparent)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.5'
                }}
              >
                In 30 days, you'll receive a comprehensive 10 to 12 page Revenue Recovery Blueprint revealing exactly where you're losing money and the precise steps to recover it, guaranteed to uncover at least six figures in hidden revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
