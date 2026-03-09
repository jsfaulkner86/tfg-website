import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Search, Zap } from "lucide-react";
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
        {/* Hero */}
        <section className="relative w-full overflow-hidden pt-[calc(160px+env(safe-area-inset-top,0px))] pb-10 md:pt-[180px] md:pb-16">
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team collaboration"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-foreground/60" />

          <div className="relative z-10 px-5 sm:px-6 text-center">
            <div className="mx-auto max-w-[860px]">
              <p className="mb-6 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                90-Minute Strategy Session
              </p>

              <h1 className="mb-6 font-display text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.08] text-primary-foreground">
                90 minutes
                <br />
                A clear path forward
              </h1>

              <p className="mx-auto mb-10 max-w-2xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                A focused strategy session for health system leaders and women's health tech companies who know something is broken — but aren't sure where to start.
              </p>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto w-full sm:w-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Book Your Session
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Promise */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-playfair text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl" style={{ textWrap: 'balance' }}>
              "You leave with a specific, honest assessment of what's blocking your deployment — and exactly what to do about it."
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* Who This Is For */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              This session is built for you if:
            </h2>
            <ul className="space-y-3">
              {[
                "You have a product in a health system but adoption is stuck",
                "You're a clinical leader who approved something that isn't being used",
                "You're preparing for an enterprise conversation and need to know where you're exposed",
                "You want an outside perspective from people who have been inside health systems — not just advised them",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* What Happens */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Here's what we cover.
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                No templates. No generic frameworks. Just your situation.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Where You Actually Are",
                  description: "We assess your current deployment, workflow fit, and physician relationship — honestly.",
                },
                {
                  icon: Search,
                  title: "Where the Gap Is",
                  description: "We identify the specific clinical, operational, or governance issue slowing you down.",
                },
                {
                  icon: Zap,
                  title: "What to Do Next",
                  description: "You leave with a clear, prioritized action plan — not a follow-up proposal.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <card.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 font-playfair text-lg font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="font-inter text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Is Different */}
        <section className="bg-foreground px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 font-playfair text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              This is not a discovery call in disguise.
            </h2>

            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                We are not going to spend 90 minutes learning about you so we can pitch you a bigger engagement.
              </p>
              <p className="font-inter text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                This session is designed to give you something useful whether or not we ever work together again. You'll hear direct, clinical and operational perspective from a Board-Certified OB/GYN and a Healthcare IT Architect, with a team built for enterprise health system deployments, who have spent their careers inside health systems.
              </p>
              <p className="font-inter text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                If there's a fit for deeper work after, we'll say so. If there isn't, we'll tell you that too.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-muted/30 px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 font-playfair text-xl font-bold leading-relaxed text-foreground md:text-2xl" style={{ textWrap: 'balance' }}>
              "Something is stuck, let's figure out why."
            </p>

            <p className="mb-6 font-playfair text-3xl font-bold text-foreground md:text-4xl">
              $1,500
            </p>

            <Button
              onClick={handleBooking}
              variant="accent"
              size="lg"
              className="group h-auto w-full sm:w-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Book Your Session
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="mt-6 font-inter text-sm text-muted-foreground">
              90 minutes. A Board-Certified OB/GYN, a Healthcare IT Architect, and a team built for enterprise deployments. Specific, honest, and no pitch.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClinicalClaritySession;
