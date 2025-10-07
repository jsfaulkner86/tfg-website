import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "The Faulkner Group transformed our practice from chaos to clarity. Their strategic insights helped us recover over $12M in lost revenue.",
    author: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer, Regional Health System"
  },
  {
    quote: "Working with Faulkner was like having a trusted advisor who truly understands both the clinical and business sides of healthcare.",
    author: "James Chen",
    role: "CEO, Metropolitan Medical Group"
  },
  {
    quote: "They didn't just give us a plan—they helped us build a culture of excellence that continues to drive results years later.",
    author: "Dr. Emily Rodriguez",
    role: "Founder, Integrated Care Partners"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-wide text-foreground mb-6">
            Trusted by Healthcare Leaders
          </h2>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="text-center space-y-8 py-12 animate-fade-in" key={current}>
            <Quote className="h-12 w-12 text-accent mx-auto opacity-50" />
            
            <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed max-w-4xl mx-auto">
              "{testimonials[current].quote}"
            </blockquote>
            
            <div className="space-y-2">
              <p className="text-xl font-medium text-foreground">
                {testimonials[current].author}
              </p>
              <p className="text-lg text-muted-foreground">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              onClick={prev}
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-accent/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "w-8 bg-accent" 
                      : "w-2 bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-accent/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
