import { useEffect, useRef, useState } from "react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 70, suffix: "%", label: "Operational issues resolved within 3 months" },
  { value: 15, suffix: "M+", label: "In lost revenue recovered" },
  { value: 90, suffix: "%", label: "Client satisfaction rate" },
];

const Results = () => {
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          metrics.forEach((metric, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = metric.value / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              if (currentStep <= steps) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.min(Math.round(increment * currentStep), metric.value);
                  return newCounts;
                });
              } else {
                clearInterval(timer);
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-wide mb-6">
            Results That Matter
          </h2>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">
            We deliver measurable impact that transforms healthcare organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl md:text-7xl font-light text-accent">
                {counts[index]}{metric.suffix}
              </div>
              <p className="text-xl font-light opacity-90">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
