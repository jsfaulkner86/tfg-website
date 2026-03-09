import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Cpu, FileText, Handshake, Rocket } from "lucide-react";
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
        <section className="relative w-full overflow-hidden pt-[calc(160px+env(safe-area-inset-top,0px))] pb-10 md:pt-[180px] md:pb-14">
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
                The pilot signed
                <br />
                Now the real work begins
              </h1>

              <p className="mx-auto mb-10 max-w-2xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                An ongoing clinical and operational partnership for women's health companies navigating enterprise health system relationships — from first sales conversation through go-live, adoption, and contract renewal.
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

        {/* The Problem */}
        <section className="bg-background px-6 py-5 md:py-6">
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              There are two versions of how this goes.
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                In one version, your pilot converts, utilization climbs, your champion becomes a reference, and your next health system deal closes faster because the first one worked.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                In the other version, a governance gap, a workflow misfit, or a physician adoption problem surfaces six months in. Your team spends the next quarter managing a relationship that is quietly dying.
              </p>
              <p 
                className="font-inter font-semibold text-foreground"
                style={{ fontSize: '20px', lineHeight: 1.6 }}
              >
                The difference between those two versions is almost never the product. It is whether the right clinical and operational expertise was embedded before the hard moments arrived.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* Who This Is For */}
        <section className="bg-background px-6 py-5 md:py-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              This is built for you if:
            </h2>
            <ul className="space-y-3">
              {[
                "You have signed enterprise pilots or health system contracts and a failed deployment is measured in relationship capital and investor confidence",
                "You are operating in OB/GYN, maternal health, reproductive care, or women's digital health where clinical trust and physician adoption are non-negotiable",
                "You have completed a Clinical Clarity Session or Clinical Readiness Assessment — or can demonstrate equivalent preparation",
                "You want our team embedded in your corner for the duration — not a vendor relationship, an operating one",
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

        {/* What We Do */}
        <section className="bg-background px-6 py-5 md:py-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl" style={{ textWrap: 'balance' }}>
                Not a monthly advisory call.
                <br />
                We stay in it with you.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Handshake,
                  title: "Enterprise Credibility",
                  description: "We join key sales calls, enterprise negotiations, and investor meetings when clinical or operational credibility determines what gets believed and what gets signed.",
                },
                {
                  icon: Shield,
                  title: "Clinical & Systems Readiness",
                  description: "We audit workflows, identify integration gaps, and translate clinical reality into product requirements before contracts are signed and before gaps become expensive.",
                },
                {
                  icon: Cpu,
                  title: "Implementation Oversight",
                  description: "Governance framework design, pilot structure, KPI definition, and adoption planning built around what your health system actually requires.",
                },
                {
                  icon: Users,
                  title: "Physician Adoption & Escalation",
                  description: "Champion programs, clinical training, office hours, and direct escalation support when adoption stalls, utilization drops, or a safety question surfaces.",
                },
                {
                  icon: FileText,
                  title: "Governance Operations",
                  description: "Steering committee support, kill-switch protocol management, KPI monitoring, and risk register maintenance so your health system always has the documentation it needs.",
                },
                {
                  icon: Rocket,
                  title: "Deployment & Scale Readiness",
                  description: "We build the standardized playbooks, SOPs, and training frameworks that turn your first successful deployment into a repeatable model — so your second and third health system deals move faster and close cleaner.",
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

        {/* Why Us */}
        <section className="bg-background px-6 py-5 md:py-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl" style={{ textWrap: 'balance' }}>
              A Board-Certified OB/GYN who still sees patients. A Healthcare IT Architect with 15+ years inside enterprise health systems.
            </h2>

            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                We take a small number of partners at a time. That is not a sales line. It is how we protect the quality of what we deliver.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                We have been inside the governance meetings, the clinical workflows, and the technology failures you are trying to prevent. We do not advise from a slide deck.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* How It Works */}
        <section className="bg-background px-6 py-5 md:py-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl" style={{ textWrap: 'balance' }}>
              This starts with one conversation — not a proposal deck.
            </h2>
            <div className="space-y-4 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                If you are at the stage where this level of partnership makes sense — or if you are already inside a pilot showing early warning signs — reach out directly.
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
