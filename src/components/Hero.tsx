import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const trustLabels = [
  "Clinical Readiness & Governance",
  "Physician Adoption",
  "EHR Integration & Training",
  "Sales, CSM & Deployment",
];

const Hero = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden pt-20">
        {/* Background Image */}
        <img
          src="/hero-boardroom.jpg"
          alt="Healthcare leadership team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay — 70% deep navy */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-[820px]">
            {/* Small caps label */}
            <p
              className="mb-6 font-inter font-medium uppercase"
              style={{
                fontSize: '13px',
                letterSpacing: '0.2em',
                color: 'hsl(45, 62%, 56%)',
              }}
            >
              Women's Health Advisory
            </p>

            {/* Headline */}
            <h1
              className="mb-6 font-display font-bold text-white"
              style={{
                fontSize: 'clamp(28px, 3.8vw, 52px)',
                lineHeight: 1.1,
              }}
            >
              You Built Something That Works.{' '}
              Now Let's Get It Used.
            </h1>

            {/* Subheadline */}
            <p
              className="mb-10 font-inter"
              style={{
                fontSize: 'clamp(16px, 1.6vw, 20px)',
                color: 'rgba(255, 255, 255, 0.85)',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              Strategy and system fluency for women's health tech founders.
            </p>

            {/* CTA */}
            <Button
              onClick={handleBooking}
              className="text-base font-semibold rounded-md px-8 py-5 border-0 group transition-all duration-300"
              style={{
                backgroundColor: '#F3DA73',
                color: '#5882A1',
              }}
            >
              Let's Meet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="w-full bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 gap-y-4 md:flex md:items-center md:justify-center md:gap-0 md:divide-x md:divide-border">
          {trustLabels.map((label) => (
            <span
              key={label}
              className="font-inter font-medium uppercase text-center md:px-8"
              style={{
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: 'hsl(210, 14%, 19%)',
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
