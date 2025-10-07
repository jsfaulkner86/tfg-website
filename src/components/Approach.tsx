import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "A 10-12 page bespoke playbook showing exactly where your practice is leaking money and how to stop it",
  "A guarantee of at least six figures uncovered, often $250K+, and in some cases, far more. One recent practice uncovered over $3 million in lost revenue from processes they were already running but not optimizing.",
  "And if we don't uncover at least six figures? We keep working with you at no cost until you do."
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
      className="py-32 px-6 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-wide text-foreground mb-6">
            The Growth Blueprint™
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            The Blueprint is the entry point — 30 days to clarity, guaranteed.
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
            What you get:
          </h3>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-secondary rounded-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground font-light leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl text-foreground font-medium italic">
            This isn't theory. It's clarity, cash flow, and control — delivered fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
