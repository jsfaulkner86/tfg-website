import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Shield, Users, Cpu, Scale, ClipboardList, Search, FileText, Send, Video } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const assessmentSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Clinical Readiness Assessment",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
    },
    description:
      "A structured 14-day readiness engagement that evaluates clinical workflow fit, governance infrastructure, physician adoption strategy, EHR integration, and liability exposure before your enterprise pilot goes live.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
  },
];

const ClinicalReadinessAssessment = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Clinical Readiness Assessment | The Faulkner Group"
        description="A 14-day structured readiness engagement that evaluates clinical workflow fit, governance, physician adoption, EHR integration, and liability exposure before your enterprise pilot goes live."
        canonical="https://thefaulknergroupadvisors.com/clinical-readiness-assessment"
        jsonLd={assessmentSchema}
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
                14-Day Readiness Engagement
              </p>

              <h1 className="mb-6 font-display text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.08] text-primary-foreground">
                Signing the LOI is not the hard part
                <br />
                What comes next is
              </h1>

              <p className="mx-auto mb-10 max-w-2xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                A structured 14-day readiness engagement built around your product, your integration, and your pilot before your go-live date arrives.
              </p>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto w-full sm:w-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Book Your Assessment
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Most pilots don't fail because the product was wrong.
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                They fail because no one mapped the product to actual clinical workflows. No one stress-tested the integration before go-live. No one built the governance a health system needs when something goes sideways.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                By the time those gaps surface, your champion is exposed and the relationship is already fragile.
              </p>
              <p className="font-inter text-base font-semibold leading-relaxed text-foreground md:text-lg">
                This assessment closes those gaps. In 14 days.
              </p>
            </div>
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
              This is built for you if:
            </h2>
            <ul className="space-y-3">
              {[
                "You have a signed pilot or LOI with a go-live date on the calendar",
                "This is your first enterprise deployment and a failed pilot costs more than money",
                "You are operating in OB/GYN, maternal health, reproductive care, or women's digital health where clinical trust is non-negotiable",
                "Your leadership team needs to walk into go-live knowing the most predictable failure points have been found and addressed",
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

        {/* What We Evaluate */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Five domains. Every health system checks all of them.
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Stethoscope,
                  title: "Clinical Workflow Fit",
                  description: "Where your product lives in a physician's actual day at 6:47 AM when your champion is three charts behind and a nurse is waiting.",
                },
                {
                  icon: Shield,
                  title: "Governance & Risk Infrastructure",
                  description: "Escalation pathways, kill-switch protocol, defined KPIs, and incident language your legal and compliance teams can defend.",
                },
                {
                  icon: Users,
                  title: "Physician Adoption Strategy",
                  description: "Whether your champion plan is realistic, how you track utilization, and how you catch quiet non-adoption before it becomes a contract non-renewal.",
                },
                {
                  icon: Cpu,
                  title: "Technology Integration Reality",
                  description: "What your integration actually is versus what your pilot agreement likely requires. Not what's in the deck, what's real.",
                },
                {
                  icon: Scale,
                  title: "Trust & Liability Exposure",
                  description: "Who owns the outcome if your product influences a clinical decision that goes wrong and whether your current architecture reflects that answer.",
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

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* How It Works */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                14 days. Five domains. One deliverable.
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                { step: "1", icon: ClipboardList, title: "Days 1 to 2: Structured Intake", text: "We review your product, pilot terms, and integration documentation before any assessment begins." },
                { step: "2", icon: Search, title: "Days 3 to 10: Active Evaluation", text: "Assessment across all five domains with targeted async questions as findings develop." },
                { step: "3", icon: FileText, title: "Days 11 to 12: Report Preparation", text: "Written report and prioritized remediation roadmap prepared." },
                { step: "4", icon: Send, title: "Days 12 to 14: Report Delivered", text: "A document you can share with your board, investors, or health system counterparts." },
                { step: "5", icon: Video, title: "Within 48 Hours: Live Presentation", text: "60-minute findings call with both practitioners, clinical and operational perspective in the same conversation. Full Q&A. Zero ambiguity about next steps." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-foreground">
                      {item.step}
                    </span>
                    <item.icon className="h-5 w-5 text-accent" />
                    <h3 className="font-playfair text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-inter text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* Why Us */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl" style={{ textWrap: 'balance' }}>
              A Board-Certified OB/GYN and a Healthcare IT Architect who have been in the room where these decisions are made.
            </h2>

            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                Nicole still sees patients. John has spent 15+ years building and optimizing the most clinically complex women's health workflow environments in enterprise healthcare.
              </p>
              <p className="font-inter text-base font-semibold leading-relaxed text-foreground md:text-lg">
                We don't assess in the abstract. We assess against what health systems actually require.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* Not Sure Where to Start */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Not sure where to start?
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                The Clinical Clarity Session is where fast triage happens: 90 minutes in, findings within 48 hours. The Clinical Readiness Assessment is what comes next when the stakes are too high for triage alone.
              </p>
              <p className="font-inter text-base font-semibold leading-relaxed text-foreground md:text-lg">
                Same team. Deeper scope. 14 days to comprehensive de-risking before your go-live date arrives.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-muted/30 px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 font-playfair text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl" style={{ textWrap: 'balance' }}>
              "Fourteen days to know exactly where your pilot is exposed. Before go-live, not after."
            </p>

            <Button
              onClick={handleBooking}
              variant="accent"
              size="lg"
              className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Book Your Clinical Readiness Assessment
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="mt-6 font-inter text-sm text-muted-foreground">
              14 days. Five domains. A board-ready deliverable your entire team can act on.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClinicalReadinessAssessment;
