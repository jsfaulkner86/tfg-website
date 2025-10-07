import { useEffect, useRef, useState } from "react";
import { TrendingUp, Workflow, Users } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Strategy & Growth Architecture",
    description: "We design scalable systems that align with your vision, optimizing revenue streams and operational efficiency for long-term success."
  },
  {
    icon: Workflow,
    title: "Workflow Redesign & AI Integration",
    description: "Transform outdated processes with intelligent automation and AI tools that enhance productivity while preserving the human element of care."
  },
  {
    icon: Users,
    title: "Leadership & Culture Alignment",
    description: "Build cohesive teams and cultivate organizational cultures that empower leaders and drive exceptional patient outcomes."
  }
];

const Approach = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of each card
          pillars.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          });
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-wide text-foreground mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Three foundational pillars that transform healthcare organizations from fragmented to flourishing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group p-8 bg-background rounded-2xl shadow-lg hover:shadow-elegant transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="mb-6 inline-flex p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-all duration-300">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
