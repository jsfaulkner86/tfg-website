import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Heart, Shield, Users, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const partnershipSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Strategic Advisory",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
    },
    description:
      "Strategic advisory for women's health tech companies and health system leaders who are done watching good ideas die in committee.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicole Faulkner",
    honorificPrefix: "Dr.",
    honorificSuffix: "D.O.",
    jobTitle: "Board-Certified OB/GYN",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnathon Faulkner",
    jobTitle: "Healthcare IT Architect",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
  },
];

const whatWeDoCards = [
  {
    icon: Shield,
    title: "Build Governance Your Board Can Defend",
    description: "Escalation protocols, decision rights, and KPI frameworks built for enterprise scrutiny.",
  },
  {
    icon: Users,
    title: "Drive Physician Adoption That Sticks",
    description: "Not a training event. A sustained change management strategy built around how clinicians actually work.",
  },
  {
    icon: MessageSquare,
    title: "Translate Between Tech and Clinical Teams",
    description: "We speak both languages fluently so nothing gets lost in the handoff.",
  },
  {
    icon: Heart,
    title: "Sustain Deployments After Go-Live",
    description: "We stay embedded after launch so utilization holds and client relationships stay strong.",
  },
];

const whoThisIsFor = [
  "Your deal is in the hospital. It just won't close.",
  "You greenlit a pilot that quietly went nowhere.",
  "Your providers are using the workaround, not the tool.",
  "You need a clinical voice the C-suite will actually listen to.",
];

const AdvisoryPartnership = () => {
  const handleBooking = () => {
    window.open(
      "https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner",
      "_blank",
    );
  };

  return (
    <>
      <SEOHead
        title="Strategic Advisory | The Faulkner Group"
        description="Strategic advisory for women's health tech companies and health system leaders who are done watching good ideas die in committee."
        canonical="https://thefaulknergroupadvisors.com/advisory-partnership"
        jsonLd={partnershipSchema}
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
                Strategic Advisory
              </p>

              <h1 className="mb-6 font-display text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.08] text-primary-foreground">
                Your deployment is stalling
                <br />
                We fix that
              </h1>

              <p className="mx-auto mb-10 max-w-2xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                Strategic advisory for women's health tech companies and health system leaders who are done watching good ideas die in committees.
              </p>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Book a Call
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Promise */}
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-playfair text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl" style={{ textWrap: 'balance' }}>
              "We embed with your team, clinically and operationally, and get your women's health technology from pilot to full implementation."
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
              You're in the right place if:
            </h2>

            <ul className="space-y-3">
              {whoThisIsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p
                    className={`font-inter text-base leading-relaxed text-muted-foreground md:text-lg ${
                      index === 0 ? "whitespace-nowrap" : ""
                    }`}
                    style={{ textWrap: "balance" }}
                  >
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
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What strategic advisory actually means.
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                No retainer fluff. Here's what we do.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {whatWeDoCards.map((card, index) => (
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
        <section className="bg-background px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-playfair text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl" style={{ textWrap: 'balance' }}>
              A Board-Certified OB/GYN and a Healthcare IT Architect, in the room with you.
            </h2>

            <div className="space-y-6 text-left">
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                Dr. Nicole Faulkner spent years delivering care inside a major health system. John Faulkner spent 15+ years building the operational infrastructure those health systems run on.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: 'balance' }}>
                We don't advise from a slide deck. We've been inside the governance meetings, the clinical workflows, and the technology failures you're trying to fix right now.
              </p>
            </div>
          </div>
        </section>

        {/* The Bottom Line */}
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
              Schedule Your Discovery Call
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="mt-6 font-inter text-sm text-muted-foreground">
              30 minutes. No pitch. Just a direct conversation about where you are and what it takes to move forward.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdvisoryPartnership;
