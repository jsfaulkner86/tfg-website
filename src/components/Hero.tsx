import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoPanova from "@/assets/logo-panova.png";
import logoConceive from "@/assets/logo-conceive.png";
import logoBacktable from "@/assets/logo-backtable.png";
import logoAmie from "@/assets/logo-amie.png";
import logoNavo from "@/assets/logo-navo.png";

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
      <section className="relative w-full overflow-hidden pt-[calc(140px+env(safe-area-inset-top,0px))] pb-[40px] md:pt-[calc(200px+env(safe-area-inset-top,0px))] md:pb-[140px]">
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
              className="mb-4 sm:mb-6 font-inter font-medium uppercase"
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
              className="mb-4 sm:mb-6 font-display font-bold text-white"
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
              className="mb-6 sm:mb-10 font-inter"
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
              variant="glassy"
              className="text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 group"
            >
              Let's Meet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="w-full py-0" style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.7) 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div
            className="grid grid-cols-2 gap-y-3 gap-x-2 md:grid-cols-4 md:divide-x md:divide-white/15 rounded-lg px-4 py-3 md:px-6 md:py-4"
            style={{
              background: 'rgba(243,218,115,0.06)',
              border: '1px solid rgba(243,218,115,0.25)',
              boxShadow: '0 4px 24px rgba(243,218,115,0.08), inset 0 1px 0 rgba(243,218,115,0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            {trustLabels.map((label) => (
              <span
                key={label}
                className="font-inter font-medium uppercase text-center md:px-8 text-[11px] sm:text-[13px]"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.9)',
                  textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Client logo bar */}
      <div className="w-full py-5 sm:py-8" style={{ background: 'hsl(216, 25%, 57%)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-center font-inter text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: 'hsl(45, 62%, 56%)' }}>
            Trusted By
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex md:items-center md:justify-center md:gap-10 lg:gap-14">
            {[
              { src: logoPanova, alt: "Panova Health", href: "https://panova.ai/" },
              { src: logoConceive, alt: "Conceive", href: "https://weconceive.com/" },
              { src: logoBacktable, alt: "BackTable OB/GYN", href: "https://www.backtable.com/shows/obgyn" },
              { src: logoAmie, alt: "Amie", href: "https://www.askamie.co/" },
              { src: logoNavo, alt: "Navo Health", href: "https://website.navo.health/" },
            ].map((logo) => (
              <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-14 md:h-16 w-auto max-w-[140px] sm:max-w-none rounded-md opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
