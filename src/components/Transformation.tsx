import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Cog } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    text: "Eliminate bottlenecks that stall growth"
  },
  {
    icon: TrendingUp,
    text: "Restore margins so profitability compounds"
  },
  {
    icon: Cog,
    text: "Build scalable systems that last long after we leave"
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
      ref={sectionRef}
      className="py-32 px-6 bg-secondary"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-wide text-foreground mb-6">
            The Transformation
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mb-6">
            The Growth Blueprint™ gives you clarity.
          </p>
          <p className="text-lg sm:text-xl text-foreground font-medium italic mb-6">
            But the Transformation is where the real magic happens.
          </p>
          <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Almost every client who completes the Blueprint chooses to continue because once you see six or seven figures of hidden revenue uncovered, you don't want to stop there.
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg sm:text-xl text-muted-foreground font-light text-center mb-10">
            Over 3–6 months, we integrate alongside your team to:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-8 bg-background rounded-xl transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mb-6 p-4 bg-accent/10 rounded-xl">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <p className="text-base sm:text-lg text-foreground font-light leading-relaxed">
                    {outcome.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl sm:text-2xl text-foreground font-medium">
            This is where practices stop bleeding time and money and start thriving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
