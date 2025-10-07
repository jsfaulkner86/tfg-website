import { useEffect, useRef, useState } from "react";
import { AlertCircle } from "lucide-react";

const problems = [
  "Patient access gaps that quietly push new business to competitors",
  "Staff and provider turnover bleeding hundreds of thousands per year",
  "Workflows that exhaust clinicians and stall growth",
  "Systems that look \"fine\" but silently erode profitability"
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
      className="py-32 px-6 bg-secondary"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-wide text-foreground mb-6">
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Most practices aren't losing money because they don't have enough patients. They're losing it through hidden inefficiencies they can't see:
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 bg-background rounded-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground font-light">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-foreground font-medium">
            Even top-performing groups are leaking six to seven figures annually — without realizing it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
