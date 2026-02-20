import { useEffect, useRef, useState } from "react";
import { Stethoscope, Clock, Users } from "lucide-react";

const highlights = [
  {
    icon: Stethoscope,
    title: "Physician-First Strategy",
    description: "Board-certified OB/GYN co-founder who speaks the language of clinicians. Direct physician networks through BackTable and WHIS conferences. We build trust with the people who decide whether your product lives or dies."
  },
  {
    icon: Clock,
    title: "25+ Years Combined Experience",
    description: "25+ years in healthcare operations, EHR systems, and clinical workflow architecture. 10+ years in frontline OB/GYN clinical leadership. From clinical environment audits to 24/7 deployment support, we cover the full lifecycle."
  },
  {
    icon: Users,
    title: "Embedded Partners, Not Consultants",
    description: "We don't send slide decks. We embed as your fractional clinical and operational advisors. Governance frameworks, physician training, CMIO engagement, and controlled rollback protocols — built specifically for femtech and women's health innovation."
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
      { threshold: 0.1, rootMargin: '50px' }
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
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(113,141,169,0.12), rgba(113,141,169,0.06))',
            border: '1.5px solid rgba(113,141,169,0.25)',
            boxShadow: '0 4px 12px rgba(113,141,169,0.08)'
          }}>
            <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>
              The Difference
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
            Why Work With Us
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(113,141,169,0.4))' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#718DA9', boxShadow: '0 0 8px rgba(113,141,169,0.4)' }} />
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(113,141,169,0.4), transparent)' }} />
          </div>
        </div>

        {/* Stacked rows */}
        <div className="space-y-16 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                } ${isEven ? 'md:flex-row-reverse' : ''}`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {/* Icon + Title */}
                <div className="flex-shrink-0 md:w-1/3">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(243,218,115,0.15), rgba(243,218,115,0.05))',
                      border: '1.5px solid rgba(243,218,115,0.3)'
                    }}
                  >
                    <Icon size={28} strokeWidth={1.5} style={{ color: '#D4B65D' }} />
                  </div>
                  <h3 
                    className="text-2xl sm:text-3xl font-playfair font-bold"
                    style={{ 
                      color: '#1A2A3A',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.2'
                    }}
                  >
                    {highlight.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-2/3">
                  <p 
                    className="text-base sm:text-lg font-inter leading-relaxed"
                    style={{ 
                      color: '#4A5568',
                      letterSpacing: '0.005em',
                      lineHeight: '1.8'
                    }}
                  >
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.5'
                }}
              >
                Clinical credibility. Operational precision. Physician trust. That's the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
