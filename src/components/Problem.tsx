import { useEffect, useRef, useState } from "react";

const AlertIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="16" cy="16" r="15" stroke="hsl(var(--accent))" strokeWidth="2" fill="hsl(var(--accent) / 0.1)" />
    <path d="M16 10V18" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="22" r="1.5" fill="hsl(var(--accent))" />
  </svg>
);

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
              <AlertIcon />
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
