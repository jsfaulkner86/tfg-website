import { useEffect, useRef, useState } from "react";

const highlights = [
  "$50M+ uncovered in lost revenue across hospitals, health centers, and specialty practices",
  "13+ years of healthcare growth architecture + 10+ years of physician leadership",
  "A boutique, high-touch approach that blends clinical insight with growth strategy"
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="results"
      ref={sectionRef}
      className="py-32 px-6 bg-primary text-primary-foreground"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-wide mb-6">
            Why Work With Us
          </h2>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-base sm:text-lg md:text-xl font-light text-primary-foreground leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl sm:text-2xl font-medium text-accent italic">
            We don't just analyze. We architect organizations built to last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
