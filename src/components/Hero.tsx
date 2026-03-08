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
      <section className="relative w-full overflow-hidden pt-[160px] pb-[60px] md:pt-[200px] md:pb-[140px]" style={{ paddingTop: 'max(160px, calc(160px + env(safe-area-inset-top, 0px)))' }}>
        {/* Background Image */}
        <img
          src="/hero-boardroom.jpg"
          alt="Healthcare leadership team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark overlay — 70% deep navy */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center px-5 sm:px-6 text-center">
          <div className="max-w-[820px] w-full">
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
              <span className="block md:whitespace-nowrap">You Built Something That Works</span>
              <span className="block md:whitespace-nowrap">Now Let's Get It Used</span>
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
              Where clinical strategy meets enterprise systems reality for women's health founders.
            </p>

            {/* CTA */}
            <Button
              onClick={handleBooking}
              className="text-sm sm:text-base font-semibold rounded-lg px-6 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
              style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                color: '#2A3B4F',
                borderColor: 'rgba(255,255,255,0.25)',
                boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                backdropFilter: 'blur(8px)',
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
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-5 grid grid-cols-2 gap-y-3 gap-x-2 md:flex md:items-center md:justify-center md:gap-0 md:divide-x md:divide-border">
          {trustLabels.map((label) => (
            <span
              key={label}
              className="font-inter font-medium uppercase text-center md:px-8 text-[11px] sm:text-[13px]"
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
