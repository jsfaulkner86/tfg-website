import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const investorSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clinical Adoption Diligence for VC & PE Firms",
  provider: {
    "@type": "Organization",
    name: "The Faulkner Group",
  },
  description:
    "Clinical and operational diligence for venture capital and private equity firms with women's health tech portfolio companies. We identify adoption barriers and build governance frameworks to accelerate physician buy-in.",
  areaServed: { "@type": "Country", name: "United States" },
};

const Investors = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9r-9x8-gbf/clinical-clarity-session', '_blank');
  };

  return (
    <>
      <SEOHead
        title="For VC & PE Firms | The Faulkner Group"
        description="Clinical adoption diligence for VC and PE firms with women's health tech portfolio companies. Identify adoption barriers before the next board meeting."
        canonical="https://thefaulknergroupadvisors.com/investors"
        jsonLd={investorSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section
          className="relative px-4 sm:px-6 overflow-hidden"
          style={{
            paddingTop: 'calc(140px + env(safe-area-inset-top, 0px))',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #2A3B4F 0%, #3A5A73 100%)',
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div
              className="inline-block mb-6 px-6 py-2 rounded-full"
              style={{
                background: 'rgba(243,218,115,0.15)',
                border: '1.5px solid rgba(243,218,115,0.4)',
              }}
            >
              <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#F3DA73' }}>
                For VC & PE Firms
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 sm:mb-8"
              style={{
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
              }}
            >
              Your Portfolio Company Has the Technology.<br />It Doesn't Have Clinical Adoption.
            </h1>

            <p
              className="text-lg sm:text-xl font-inter font-light mb-10 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.7' }}
            >
              We provide the clinical and operational diligence that tells you exactly why a women's health tech investment is stalling - and the embedded strategy to fix it before the next board meeting.
            </p>
          </div>
        </section>

        {/* Pain Points */}
        <section
          className="px-4 sm:px-6"
          style={{
            paddingTop: '60px',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              The Portfolio Problems We Solve
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {[
                "The platform is clinically validated but physicians won't use it - and no one on the team can explain why",
                "The company closed a pilot 12 months ago and still can't convert to enterprise because health systems want governance frameworks that don't exist",
                "A Series B or acquisition depends on demonstrating clinical traction, but the adoption metrics tell a different story",
              ].map((pain, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'white',
                    border: '1.5px solid rgba(243,218,115,0.3)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  }}
                >
                  <p className="text-base font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                    {pain}
                  </p>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What You Get
            </h2>

            <div className="space-y-5 mb-16">
              {[
                "A clinical readiness assessment that identifies the specific adoption barriers your portfolio company can't see from the inside",
                "Governance frameworks, CMIO engagement strategies, and risk documentation that satisfy health system and payer requirements",
                "An embedded clinical and operational partner who converts stalled pilots into enterprise-ready deployments with physician champions driving adoption organically",
              ].map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(113,141,169,0.06), rgba(113,141,169,0.02))',
                    border: '1px solid rgba(113,141,169,0.15)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(243,218,115,0.15)', border: '1px solid rgba(243,218,115,0.3)' }}
                  >
                    <span className="text-sm font-inter font-bold" style={{ color: '#D4B65D' }}>{i + 1}</span>
                  </div>
                  <p className="text-base sm:text-lg font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                    {outcome}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg font-inter mb-8" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                Start with a Clinical Clarity Session - 90 minutes of clinical and operational diligence you can bring to your next board meeting.
              </p>
              <Button
                onClick={handleBooking}
                variant="glassy"
                className="text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 group"
              >
                Book a Clinical Clarity Session - $1,500
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Investors;
