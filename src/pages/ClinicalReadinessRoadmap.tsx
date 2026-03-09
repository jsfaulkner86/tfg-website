import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, MessageSquare, FileText, Search, Phone } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const roadmapSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Clinical Readiness Roadmap",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
    },
    description:
      "A structured written readiness assessment for women's health founders 3 to 6 months from their first enterprise pilot.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
  },
];

const ClinicalReadinessRoadmap = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Clinical Readiness Roadmap | The Faulkner Group"
        description="A structured written assessment for women's health founders building toward their first enterprise conversation."
        canonical="https://thefaulknergroupadvisors.com/clinical-readiness-roadmap"
        jsonLd={roadmapSchema}
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
                Structured Readiness Engagement
              </p>

              <h1 className="mb-6 font-display text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.08] text-primary-foreground">
                Think you're ready?
                <br />
                Let's find out.
              </h1>

              <p className="mx-auto mb-10 max-w-2xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                A focused written assessment built for women's health founders who are building toward their first enterprise conversation and need a clear, sequenced path to get there.
              </p>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Get Your Roadmap
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              This is for you if:
            </h2>
            <ul className="space-y-3">
              {[
                "You are 3 to 6 months from your first pilot conversation and want to close the gaps before they close the deal",
                "You have completed a Clinical Clarity Session and need a deeper structured plan to act on your findings",
                "You know your product is strong but you are not confident it will survive the scrutiny of a health system's clinical and compliance teams",
                "You want a written document your leadership team, investors, or advisors can review and act on",
                "You are done guessing at what \"ready\" means and want a credible answer from people who have been on both sides of the table",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
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

        {/* What You Receive */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What you receive
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                This is not a call. It is a structured engagement with a clear deliverable at the end.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { step: "1", icon: ClipboardList, title: "Structured Intake", text: "You submit your product documentation, integration details, and current health system conversations before the assessment begins." },
                { step: "2", icon: MessageSquare, title: "Async Q&A", text: "Targeted questions from our team as findings develop, so the final report reflects your actual situation, not a generic framework." },
                { step: "3", icon: FileText, title: "5 to 7 Page Written Report", text: "A prioritized assessment across all five readiness domains covering clinical workflow fit, EHR integration reality, physician adoption strategy, governance and risk infrastructure, and trust and liability exposure." },
                { step: "4", icon: Search, title: "Sequenced Remediation Roadmap", text: "A clear, ordered action plan so you know what to fix first and why." },
                { step: "5", icon: Phone, title: "60-Minute Live Findings Call", text: "Both practitioners on the call, clinical and systems perspective together, with full Q&A so you leave with zero ambiguity about next steps." },
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

        {/* The Five Readiness Domains */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                The five readiness domains
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                Every assessment covers the same five areas that health systems evaluate before saying yes to a new clinical product.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Clinical Workflow Fit",
                  description: "Where your product lives in a physician's actual day and whether that interaction is sustainable at scale.",
                },
                {
                  title: "EHR Integration Reality",
                  description: "What your integration actually is versus what your pilot agreement will likely require.",
                },
                {
                  title: "Physician Adoption Strategy",
                  description: "Whether your champion plan is realistic and how you will identify resistance before it becomes quiet non-adoption.",
                },
                {
                  title: "Governance and Risk Infrastructure",
                  description: "Whether you have escalation pathways, defined KPIs, and incident language your health system's legal team can defend.",
                },
                {
                  title: "Trust and Liability Exposure",
                  description: "Who owns the outcome if your product influences a clinical decision that goes wrong, and whether your current architecture reflects that answer.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
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

        {/* What Comes Next */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What comes next
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                For founders whose roadmap surfaces risks requiring deeper evaluation before a go-live date, the Clinical Readiness Assessment is the natural next step. A 14-day engagement. Five domains. A board-ready deliverable your entire leadership team can act on.
              </p>
              <p className="font-inter text-base font-semibold leading-relaxed text-foreground md:text-lg">
                You do not need a signed contract to get started. You need the clarity to get one.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-muted/30 px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 font-playfair text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl" style={{ textWrap: 'balance' }}>
              "Know exactly where you stand, and what to fix first, before your enterprise conversation begins."
            </p>

            <Button
              onClick={handleBooking}
              variant="accent"
              size="lg"
              className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Get Your Roadmap
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="mt-6 font-inter text-sm text-muted-foreground">
              A written report and sequenced action plan your entire team can act on.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClinicalReadinessRoadmap;
