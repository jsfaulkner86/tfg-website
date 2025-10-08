import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BottomVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
      id="contact"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/hero-beach.mp4" type="video/mp4" />
        </video>
        
        {/* Sophisticated gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(44,44,44,0.5) 0%, rgba(44,44,44,0.7) 50%, rgba(44,44,44,0.85) 100%)'
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
          <div className="space-y-10">
            {/* Premium badge - centered and prominent */}
            <div className="flex justify-center mb-6">
              <div className="inline-block px-10 py-4 rounded-full animate-pulse" style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.4), rgba(243,218,115,0.25))',
                border: '3px solid #F3DA73',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 40px rgba(243,218,115,0.6), 0 8px 30px rgba(243,218,115,0.4), 0 4px 15px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.4)'
              }}>
                <span className="text-lg font-inter font-black tracking-widest uppercase" style={{ 
                  color: '#FFF',
                  textShadow: '0 0 20px rgba(243,218,115,0.8), 0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  Your First Step
                </span>
              </div>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
              style={{ 
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: '1.1',
                textShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}
            >
              Ready to See What's Possible?
            </h2>
            
            <p 
              className="text-xl sm:text-2xl md:text-3xl font-inter font-light mb-10"
              style={{ 
                color: 'rgba(255,255,255,0.95)',
                letterSpacing: '0.01em',
                lineHeight: '1.5',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)'
              }}
            >
              If you're a visionary healthcare leader who refuses to settle, the next step is simple: schedule your Growth Blueprint™ call today.
            </p>

            <div className="space-y-8">
              <Button 
                onClick={scrollToContact}
                className="text-xl px-12 py-8 rounded-lg group transition-all duration-300 bg-[#F3DA73] text-[#5882A1] hover:bg-[#718DA9] hover:text-white font-semibold"
                style={{ 
                  boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              {/* Elegant contact information */}
              <div className="pt-8 space-y-6 max-w-3xl mx-auto">
                <div className="h-px w-20 mx-auto" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.6), transparent)'
                }} />
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-playfair font-bold text-white" style={{
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      letterSpacing: '-0.01em'
                    }}>
                      John Faulkner
                    </p>
                    <p className="text-base sm:text-lg font-inter text-white/80" style={{
                      textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      letterSpacing: '0.02em'
                    }}>
                      Co-Founder, Healthcare Growth Architect
                    </p>
                  </div>
                  
                  <div className="h-px w-12 mx-auto" style={{
                    background: 'rgba(243,218,115,0.3)'
                  }} />
                  
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-playfair font-bold text-white" style={{
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      letterSpacing: '-0.01em'
                    }}>
                      Dr. Nicole Faulkner
                    </p>
                    <p className="text-base sm:text-lg font-inter text-white/80" style={{
                      textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      letterSpacing: '0.02em'
                    }}>
                      Co-Founder, Chief Clinical Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(44,44,44,0.95))'
        }}
      />
    </section>
  );
};

export default BottomVideo;
