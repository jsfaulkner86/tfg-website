import { useEffect, useRef, useState } from "react";

const problemsData = [
  { 
    number: "01",
    title: "Patient Access Gaps",
    text: "New business is quietly walking out your door to competitors"
  },
  { 
    number: "02",
    title: "Staff Turnover",
    text: "Bleeding hundreds of thousands per year in replacement costs"
  },
  { 
    number: "03",
    title: "Broken Workflows",
    text: "Exhausting your clinicians and killing your growth potential"
  },
  { 
    number: "04",
    title: "Silent System Failures",
    text: "Looking \"fine\" while eroding profitability every single day"
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #2C3E50 100%)'
      }}
    >
      {/* Dramatic light effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(243,218,115,0.15) 0%, transparent 60%)',
          mixBlendMode: 'screen'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Bold headline */}
        <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-2 h-20 bg-[#F3DA73]" />
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold" 
              style={{ color: '#FFFFFF', lineHeight: '1.1' }}
            >
              The Hidden<br />Cost of "Fine"
            </h2>
          </div>
          
          <p 
            className="text-2xl sm:text-3xl font-inter max-w-3xl ml-8" 
            style={{ lineHeight: '1.5', color: '#F3DA73', fontWeight: 600 }}
          >
            Your practice isn't dying. It's just slowly bleeding out.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {problemsData.map((problem, index) => (
            <div
              key={index}
              className={`group p-10 rounded-none border-l-4 transition-all duration-700 cursor-default ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderLeftColor: '#F3DA73',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-start gap-6">
                <span 
                  className="text-6xl font-playfair font-bold"
                  style={{ 
                    color: 'rgba(243,218,115,0.3)',
                    lineHeight: '1'
                  }}
                >
                  {problem.number}
                </span>
                <div>
                  <h3 
                    className="text-2xl font-playfair font-bold mb-3"
                    style={{ color: '#FFFFFF' }}
                  >
                    {problem.title}
                  </h3>
                  <p 
                    className="text-lg font-inter"
                    style={{ color: '#E0E0E0', lineHeight: '1.6' }}
                  >
                    {problem.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Powerful closing */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div 
            className="inline-block px-12 py-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(243,218,115,0.15) 0%, rgba(243,218,115,0.05) 100%)',
              border: '2px solid rgba(243,218,115,0.3)'
            }}
          >
            <p 
              className="text-3xl sm:text-4xl font-playfair font-bold mb-2"
              style={{ color: '#F3DA73', lineHeight: '1.4' }}
            >
              $600,000 - $700,000
            </p>
            <p 
              className="text-xl font-inter"
              style={{ color: '#FFFFFF' }}
            >
              leaked annually by top-performing groups
            </p>
            <p 
              className="text-lg font-inter mt-2"
              style={{ color: '#E0E0E0' }}
            >
              without even knowing it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
