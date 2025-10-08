import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The Faulkner Group uncovered $780K in lost revenue in just 30 days. Within 90 days, we had systems in place that permanently fixed the leaks. This wasn't consulting, this was transformation.",
    author: "Medical Director",
    role: "Women's Health Practice",
    location: "Texas",
    result: "$780K recovered"
  },
  {
    quote: "We were drowning in inefficiency. The Growth Blueprint gave us clarity we'd never had. Six months later, our margins increased by 34% and our team actually has time to breathe.",
    author: "Chief Executive Officer",
    role: "Multi-Specialty Fertility Center",
    location: "California",
    result: "34% margin increase"
  },
  {
    quote: "John and Nicole don't just understand healthcare, they live it. Their dual perspective as both clinical expert and growth architect is exactly what modern practices need.",
    author: "Chief Medical Officer",
    role: "OB/GYN Group Practice",
    location: "Florida",
    result: "3x patient capacity"
  }
];

const Testimonials = () => {
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
      id="testimonials"
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(253,252,249,0.98) 100%)'
      }}
    >
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 20%, rgba(243,218,115,0.03) 0%, transparent 50%),
                       radial-gradient(circle at 70% 80%, rgba(113,141,169,0.03) 0%, transparent 50%)`,
          opacity: 0.5
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(243,218,115,0.15), rgba(243,218,115,0.08))',
            border: '1px solid rgba(243,218,115,0.4)'
          }}>
            <span className="text-xs font-inter font-medium tracking-wider uppercase" style={{ color: '#D4B65D' }}>
              Client Success Stories
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
            style={{ 
              color: '#1A2A3A',
              letterSpacing: '-0.03em',
              lineHeight: '1.05'
            }}
          >
            Real Practices. Real Results.
          </h2>
          
          <p className="text-xl font-inter font-light max-w-3xl mx-auto" style={{ 
            color: '#718DA9',
            letterSpacing: '0.01em',
            lineHeight: '1.6'
          }}>
            Our clients don't just see improvement, they experience transformation that compounds year after year.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              {/* Outer glow */}
              <div 
                className="absolute -inset-0.5 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #D4B65D, #718DA9)',
                  filter: 'blur(12px)'
                }}
              />
              
              {/* Card */}
              <div
                className="relative p-10 rounded-[24px] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(250,249,246,0.98) 100%)',
                  border: '2px solid #E5DCC5',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                  minHeight: '400px'
                }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(243,218,115,0.15), rgba(243,218,115,0.05))',
                      border: '1.5px solid rgba(243,218,115,0.3)'
                    }}
                  >
                    <Quote size={24} style={{ color: '#D4B65D' }} />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F3DA73" stroke="#F3DA73" />
                  ))}
                </div>

                {/* Quote */}
                <p 
                  className="text-base font-inter leading-relaxed mb-8 flex-1"
                  style={{ 
                    color: '#1A2A3A',
                    letterSpacing: '0.01em',
                    lineHeight: '1.7'
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Result badge */}
                <div 
                  className="inline-flex items-center px-4 py-2 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(113,141,169,0.1), rgba(113,141,169,0.05))',
                    border: '1px solid rgba(113,141,169,0.2)'
                  }}
                >
                  <span className="text-sm font-inter font-semibold" style={{ color: '#718DA9' }}>
                    {testimonial.result}
                  </span>
                </div>

                {/* Author */}
                <div>
                  <p className="font-inter text-base font-bold mb-1" style={{ color: '#1A2A3A' }}>
                    {testimonial.author}
                  </p>
                  <p className="font-inter text-sm mb-1" style={{ color: '#718DA9' }}>
                    {testimonial.role}
                  </p>
                  <p className="font-inter text-xs" style={{ color: '#999' }}>
                    {testimonial.location}
                  </p>
                </div>

                {/* Bottom accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #D4B65D, transparent)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative py-16 px-12 rounded-[32px] overflow-hidden mx-auto max-w-6xl"
            style={{
              background: '#FBF8F1',
              border: '2.5px solid #C9B882',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}
          >
            <div className="relative z-10 text-center">
              <p 
                className="text-lg sm:text-xl md:text-2xl font-playfair font-bold"
                style={{ 
                  color: '#718DA9', 
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.4'
                }}
              >
                Join the visionary healthcare leaders who chose clarity over chaos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
