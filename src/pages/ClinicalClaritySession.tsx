import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const sessionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clinical Clarity Session",
  provider: {
    "@type": "Organization",
    name: "The Faulkner Group",
  },
  description:
    "A 90-minute virtual diagnostic with a board-certified OB/GYN and Healthcare IT Architect that identifies the highest-risk failure points in your health tech product's clinical adoption strategy.",
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "USD",
  },
};

const ClinicalClaritySession = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9r-9x8-gbf/clinical-clarity-session', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Clinical Clarity Session | The Faulkner Group"
        description="90-minute diagnostic with a board-certified OB/GYN and Healthcare IT Architect. Identify your top clinical adoption risks for $1,500."
        canonical="https://thrive-beacon-studio.lovable.app/clinical-clarity-session"
        jsonLd={sessionSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section
          className="relative px-4 sm:px-6 overflow-hidden"
          style={{
            paddingTop: 'calc(180px + env(safe-area-inset-top, 0px))',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #3A5A73 0%, #5A7D99 100%)',
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.1) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 sm:mb-8"
              style={{
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
              }}
            >
              Your Pilot Is Stalling.<br />Find Out Why Before It's Too Late.
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl font-inter font-light mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
              style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.7' }}
            >
              Most health tech pilots are already failing before the first physician logs in. The Clinical Clarity Session finds what's standing between your product and real physician adoption - before a contract, pilot, or investor meeting depends on it.
            </p>

            <Button
              onClick={handleBooking}
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl group transition-all duration-300 font-semibold w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                color: '#1A2A3A',
                boxShadow: '0 8px 32px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)',
                border: '2px solid rgba(255,255,255,0.2)',
              }}
            >
              Book Your Clinical Clarity Session
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
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
              Sound Familiar?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                "Physicians won't adopt your platform and you don't know why",
                "The health system wants governance documentation you haven't built yet",
                "Your investor meeting is in weeks and you can't show clinical traction",
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

            {/* What You Get */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What You Walk Away With
            </h2>

            <div className="space-y-5 mb-16">
              {[
                { icon: FileText, text: "Pre-session product review so we arrive informed, not orienting" },
                { icon: Users, text: "Live diagnostic with a practicing OB/GYN and a Healthcare IT Architect - clinical truth and systems reality in the same room" },
                { icon: Shield, text: "Identification of the 1-3 highest-risk failure points across workflow fit, governance, adoption barriers, EHR integration, and clinical trust" },
                { icon: CheckCircle2, text: "Specific prioritized next steps tied to your product, not generic frameworks" },
                { icon: FileText, text: "Written Clinical Clarity Summary delivered within 48 hours — findings, risks, and recommended actions shareable with your team or investors" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <Icon size={22} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-base sm:text-lg font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Who It's For */}
            <div
              className="p-8 rounded-2xl mb-16"
              style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.06), rgba(113,141,169,0.02))',
                border: '1.5px solid rgba(113,141,169,0.2)',
              }}
            >
              <h3
                className="text-2xl font-playfair font-bold mb-4"
                style={{ color: '#1A2A3A' }}
              >
                Best For
              </h3>
              <p className="text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.8' }}>
                Founders in active health system conversations, approaching a pilot, preparing for investor due diligence, or recovering from a pilot that didn't go as planned. A short intake form is required — it takes 5 minutes and makes the session significantly more valuable for both parties.
              </p>
            </div>

            {/* Guarantee + CTA */}
            <div className="text-center">
              <div
                className="inline-block p-6 rounded-2xl mb-10"
                style={{
                  background: '#FBF8F1',
                  border: '2px solid #D4B65D',
                }}
              >
                <p className="text-lg font-inter font-medium italic" style={{ color: '#718DA9', lineHeight: '1.7' }}>
                  We guarantee to deliver a clinical adoption strategy that accelerates physician buy-in - or we keep working until we do.
                </p>
              </div>

              <div>
                <Button
                  onClick={handleBooking}
                  className="text-lg px-10 py-7 rounded-xl group transition-all duration-300 font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #5A7D99 0%, #4A6B85 100%)',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 32px rgba(90,125,153,0.3)',
                    border: '2px solid rgba(243,218,115,0.4)',
                  }}
                >
                  Book Your Clinical Clarity Session - $1,500
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClinicalClaritySession;
