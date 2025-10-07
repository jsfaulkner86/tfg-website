import { useEffect, useRef, useState } from "react";
import nicoleHeadshot from "@/assets/nicole-headshot.jpeg";
import johnHeadshot from "@/assets/john-headshot.jpg";

const Mission = () => {
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
      id="mission"
      ref={sectionRef}
      className="py-32 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-wide text-foreground">
              Who We Are
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              We are a boutique healthcare advisory firm that helps specialty practices, women's health groups, fertility practices, and health tech innovators escape broken systems and build organizations that thrive.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              Led by <strong className="text-foreground">John Faulkner</strong>, a Healthcare Growth Architect with 13+ years of experience, and <strong className="text-foreground">Dr. Nicole Faulkner</strong>, a board-certified OB/GYN physician with over a decade of frontline practice, we bring a rare combination of business strategy and clinical insight.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              You're not hiring consultants. You're partnering with growth architects who understand both the trenches of medicine and the boardroom strategy required to scale.
            </p>
          </div>

          {/* Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex justify-center gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={johnHeadshot} 
                  alt="John Faulkner - Healthcare Growth Architect"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={nicoleHeadshot} 
                  alt="Dr. Nicole Faulkner - Board-Certified OB/GYN Physician"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
