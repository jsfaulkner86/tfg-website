import { useEffect, useRef, useState } from "react";

const BottomVideo = () => {
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
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        >
          <source src="/hero-beach.mp4" type="video/mp4" />
        </video>
        
        {/* Sophisticated gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(113,141,169,0.3) 0%, rgba(113,141,169,0.6) 50%, rgba(113,141,169,0.8) 100%)'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div 
          className={`max-w-5xl text-center transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            className="relative p-16 rounded-3xl overflow-hidden mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '2px solid rgba(243,218,115,0.4)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}
          >
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 6s ease-in-out infinite'
              }}
            />
            
            <div className="relative z-10">
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8"
                style={{ 
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: '1.1',
                  textShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
              >
                Transform Your Practice
              </h2>
              
              <p 
                className="text-xl sm:text-2xl md:text-3xl font-inter font-light"
                style={{ 
                  color: '#F3DA73',
                  letterSpacing: '0.01em',
                  lineHeight: '1.5',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}
              >
                From chaos to clarity. From surviving to thriving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(113,141,169,0.95))'
        }}
      />
    </section>
  );
};

export default BottomVideo;
