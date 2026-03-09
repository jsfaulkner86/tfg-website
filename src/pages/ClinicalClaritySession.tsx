import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Search, Zap } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const sessionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Clinical Clarity Session",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
    },
    description:
      "A 90-minute strategy session for health system leaders and women's health tech companies.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
  },
];

const ClinicalClaritySession = () => {
  const handleBooking = () => {
    window.open(
      "https://calendly.com/d/cx9r-9x8-gbf/clinical-clarity-session",
      "_blank",
    );
  };

  return (
    <>
      <SEOHead
        title="Clinical Clarity Session | The Faulkner Group"
        description="90-minute strategy session for health system leaders and women's health tech companies to find a clear path forward."
        canonical="https://thefaulknergroupadvisors.com/clinical-clarity-session"
        jsonLd={sessionSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          className="relative w-full overflow-hidden pt-[180px] pb-[40px] md:pt-[240px] md:pb-[80px]"
          style={{
            paddingTop: "max(180px, calc(180px + env(safe-area-inset-top, 0px)))",
          }}
        >
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(10, 22, 40, 0.6)" }}
          />

          <div className="relative z-10 flex items-center justify-center px-5 sm:px-6 text-center">
            <div className="max-w-[820px] w-full">
              <h1
                className="mb-6 font-display font-bold text-white"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  lineHeight: 1.1,
                }}
              >
                90 minutes<br />A clear path forward.
              </h1>

              <p
                className="mb-8 sm:mb-10 font-inter max-w-2xl mx-auto"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 22px)",
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  lineHeight: "1.6",
                  textWrap: "balance",
                }}
              >
                A focused strategy session for health system leaders and women's health tech
                companies who know something is broken — but aren't sure where to start.
              </p>

              <Button
                onClick={handleBooking}
                className="text-sm sm:text-base font-semibold rounded-lg px-6 sm:px-10 py-5 sm:py-6 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)",
                  color: "#2A3B4F",
                  borderColor: "rgba(255,255,255,0.25)",
                  boxShadow:
                    "0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Book Your Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 1 — THE PROMISE */}
        <section
          className="px-4 sm:px-6 py-8 sm:py-10"
          style={{ background: "linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold"
              style={{ color: "#1A2A3A", lineHeight: "1.4", textWrap: "balance" }}
            >
              "You leave with a specific, honest assessment of what's blocking your deployment —
              and exactly what to do about it."
            </h2>
          </div>
        </section>

        {/* SECTION 2 — WHO THIS IS FOR */}
        <section className="px-4 sm:px-6 py-8 sm:py-10" style={{ background: "#F5F0E4" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-center"
              style={{ color: "#1A2A3A", letterSpacing: "-0.02em" }}
            >
              This session is built for you if:
            </h2>
            <div className="space-y-3">
              {[
                "You have a product in a health system but adoption is stuck",
                "You're a clinical leader who approved something that isn't being used",
                "You're preparing for an enterprise conversation and need to know where you're exposed",
                "You want an outside perspective from people who have been inside health systems — not just advised them",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-3 rounded-xl bg-white/50 border border-[#D4B65D]/20"
                >
                  <CheckCircle2
                    size={24}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#D4B65D" }}
                  />
                  <p
                    className="text-lg font-inter"
                    style={{ color: "#2A3B4F", lineHeight: "1.6", textWrap: "balance" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT HAPPENS IN THE SESSION */}
        <section className="px-4 sm:px-6 py-10 sm:py-14" style={{ background: "#FDFCF9" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-playfair font-bold mb-3"
                style={{ color: "#1A2A3A", letterSpacing: "-0.02em" }}
              >
                Here's what we cover.
              </h2>
              <p
                className="text-lg sm:text-xl font-inter mx-auto"
                style={{ color: "#4A5568", textWrap: "balance" }}
              >
                No templates. No generic frameworks. Just your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  icon: Target,
                  title: "Where You Actually Are",
                  body: "We assess your current deployment, workflow fit, and physician relationship — honestly.",
                },
                {
                  icon: Search,
                  title: "Where the Gap Is",
                  body: "We identify the specific clinical, operational, or governance issue slowing you down.",
                },
                {
                  icon: Zap,
                  title: "What to Do Next",
                  body: "You leave with a clear, prioritized action plan — not a follow-up proposal.",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "white",
                      border: "1px solid rgba(212,182,93,0.3)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(212,182,93,0.1)" }}
                    >
                      <Icon size={24} style={{ color: "#D4B65D" }} />
                    </div>
                    <h3
                      className="text-xl font-playfair font-bold mb-3"
                      style={{ color: "#1A2A3A" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-base font-inter flex-1"
                      style={{ color: "#4A5568", lineHeight: "1.7" }}
                    >
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY THIS IS DIFFERENT */}
        <section
          className="px-4 sm:px-6 py-10 sm:py-14 relative overflow-hidden"
          style={{ background: "#1A2A3A" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #D4B65D 0%, transparent 50%)",
            }}
          />

          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-5"
              style={{ color: "white", letterSpacing: "-0.02em" }}
            >
              This is not a discovery call in disguise.
            </h2>

            <div
              className="space-y-4 text-lg font-inter text-left mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}
            >
              <p>
                We are not going to spend 90 minutes learning about you so we can pitch you a
                bigger engagement.
              </p>
              <p>
                This session is designed to give you something useful whether or not we ever work
                together again. You'll hear direct, clinical and operational perspective from a
                Board-Certified OB/GYN and a Healthcare IT Architect who have spent their careers
                inside health systems.
              </p>
              <p>
                If there's a fit for deeper work after, we'll say so. If there isn't, we'll tell
                you that too.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — BOTTOM LINE CTA */}
        <section
          className="px-4 sm:px-6 py-10 sm:py-14 text-center"
          style={{ background: "#F5F0E4" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-6"
              style={{ color: "#1A2A3A", letterSpacing: "-0.02em" }}
            >
              "If something is stuck, let's figure out why."
            </h2>

            <Button
              onClick={handleBooking}
              className="text-sm sm:text-base font-semibold rounded-lg px-8 sm:px-12 py-5 sm:py-6 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)] mb-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)",
                color: "#2A3B4F",
                borderColor: "rgba(255,255,255,0.25)",
                boxShadow:
                  "0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              Book Your Clinical Clarity Session
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p
              className="text-sm font-inter uppercase tracking-widest font-medium"
              style={{ color: "#718DA9" }}
            >
              90 minutes. Specific. Honest. No pitch.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClinicalClaritySession;
