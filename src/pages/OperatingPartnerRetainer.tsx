import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Cpu, FileText, Handshake } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const retainerSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operating Partner",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
    },
    description:
      "An ongoing clinical and systems operating partnership for women's health tech companies navigating enterprise health system pilots, physician adoption, EHR integration, and contract renewals.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
  },
];

const OperatingPartnerRetainer = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Operating Partner for Women's Health Tech | The Faulkner Group"
        description="Ongoing clinical and systems operating partnership for women's health tech companies navigating enterprise pilots, physician adoption, EHR integration, and contract renewals."
        canonical="https://thefaulknergroupadvisors.com/operating-partner-retainer"
        jsonLd={retainerSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full overflow-hidden pt-[calc(140px+env(safe-area-inset-top,0px))] pb-10 md:pt-[180px] md:pb-16">
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team in strategic planning session"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-foreground/60" />

          <div className="relative z-10 px-6 text-center">
            <div className="mx-auto max-w-[860px]">
              <p className="mb-6 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Ongoing Operating Partnership
              </p>

              <h1 className="mb-6 font-display text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.08] text-primary-foreground">
                The pilot signed.
                <br />
                Now the real work begins.
              </h1>

              <p className="mx-auto mb-10 max-w-2xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                The difference between a pilot that converts and one that quietly dies is almost never the product.
              </p>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Reality */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              There are two versions of this.
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                There is a version where your pilot converts to a full contract, utilization climbs, your clinical champion becomes a reference, and your next health system deal closes faster because the first one worked.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                There is another version where none of that happens. Where a governance gap, a workflow misfit, or a physician adoption problem surfaces six months in and your team spends the next quarter managing a relationship that is quietly dying.
              </p>
              <p className="font-inter text-base font-semibold leading-relaxed text-foreground md:text-lg">
                The difference between those two versions is almost never the product. It is whether the right clinical and systems expertise was embedded in your organization before the hard moments arrived.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* What This Is */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What this is
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                An ongoing clinical and systems operating partnership across the full lifecycle of your enterprise health system relationship, from the sales conversation through go-live, adoption, and contract renewal.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                Not a monthly advisory call. Not a fractional CMO who has never touched Epic. A team that stays in it with you, led by a Board-Certified OB/GYN who still sees patients and a Healthcare IT Architect with 14 years and 40+ Epic implementations including Epic (EHR) - Women's Health.
              </p>
              <p className="font-inter text-sm italic leading-relaxed text-muted-foreground">
                We take a small number of partners at a time. That is not a sales line. It is how we protect the quality of what we deliver.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* What We Do */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What we do
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Handshake,
                  title: "Pre-sale and enterprise credibility",
                  description: "Nicole and John join key sales calls, enterprise negotiations, and investor meetings when clinical or operational credibility will determine what gets believed and what gets signed.",
                },
                {
                  icon: Shield,
                  title: "Clinical and systems readiness",
                  description: "We audit workflows, translate clinical reality into product and integration requirements, and identify gaps before contracts are signed and before they become expensive.",
                },
                {
                  icon: Cpu,
                  title: "Implementation oversight",
                  description: "EHR integration strategy, governance framework design, pilot structure, KPI definition, and adoption planning built around what your health system actually requires.",
                },
                {
                  icon: Users,
                  title: "Physician adoption and escalation",
                  description: "Champion programs, clinical training, office hours, and direct escalation support when adoption stalls, utilization drops, or a safety question surfaces.",
                },
                {
                  icon: FileText,
                  title: "Governance operations",
                  description: "Steering committee support, kill-switch protocol management, KPI monitoring, and risk register maintenance so your health system always has the documentation it needs.",
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

        {/* Who This Is For */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Who this is for
            </h2>
            <ul className="space-y-3">
              {[
                "Post-raise companies with signed enterprise pilots or health system contracts where a failed deployment is measured in relationship capital and investor confidence",
                "Companies in OB/GYN, maternal health, reproductive care, or women's digital health where clinical trust, documentation accuracy, and physician adoption are non-negotiable",
                "Founders who have completed a Clinical Clarity Session or Clinical Readiness Assessment, or can demonstrate equivalent preparation",
                "Leadership teams who want our team embedded in their corner for the duration, not a vendor relationship, an operating one",
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

        {/* How It Works */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How it works
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                This is not a transactional engagement and it does not start with a proposal. It starts with a conversation. If you are at the stage where this level of partnership makes sense, or if you are already inside a pilot that is showing early warning signs, reach out directly.
              </p>
              <p className="font-inter text-sm italic leading-relaxed text-muted-foreground">
                No proposal deck. No discovery call gauntlet. One conversation to determine fit.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-muted/30 px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 font-playfair text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl" style={{ textWrap: 'balance' }}>
              "Women's health innovation isn't failing because the products are bad. It's failing because the infrastructure to support them doesn't exist yet. We build that infrastructure. That's the job."
            </p>

            <Button
              onClick={handleBooking}
              variant="accent"
              size="lg"
              className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="mt-6 font-inter text-sm text-muted-foreground">
              One conversation. No pitch. We will tell you quickly whether this is the right fit.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default OperatingPartnerRetainer;
