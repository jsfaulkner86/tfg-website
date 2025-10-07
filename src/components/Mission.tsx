import { useEffect, useRef, useState } from "react";
import missionVisual from "@/assets/mission-visual.jpg";

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
      ref={sectionRef}
      className="py-32 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground">
              We unite clinical insight with modern growth systems.
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              The Faulkner Group bridges the gap between healthcare expertise and strategic excellence. We bring clarity to complexity, transforming operational chaos into streamlined systems that drive sustainable growth.
            </p>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Our approach is rooted in deep clinical understanding, elevated by cutting-edge business strategy and AI integration.
            </p>
          </div>

          {/* Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={missionVisual} 
                alt="Abstract representation of clarity and transformation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
