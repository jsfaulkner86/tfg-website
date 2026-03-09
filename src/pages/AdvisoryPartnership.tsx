import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Heart, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const partnershipSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Strategic Advisory — The Faulkner Group",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
      sameAs: [
        "https://www.linkedin.com/company/faulkner-group/",
        "https://www.youtube.com/@YourHealthcareITexpert",
      ],
    },
    description:
      "Equity-based strategic advisory for pre-seed to Series A women's health tech companies. A Board-Certified OB/GYN and Healthcare IT Architect help femtech founders navigate enterprise health system sales, clinical governance, and physician adoption.",
    serviceType: "Healthcare Strategic Advisory",
    areaServed: { "@type": "Country", name: "US" },
    audience: {
      "@type": "Audience",
      audienceType: "Women's health tech founders, femtech startups, pre-seed to Series A",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Strategic Advisory Focus Areas",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shape the Enterprise Narrative", description: "Frame your solution in the language health systems respond to: clinical outcomes, governance, workflow fit, and risk reduction." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure-Test Your Go-to-Market", description: "Identify what's missing, misaligned, or will kill the deal before it starts." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Provide the Clinical Voice That Opens Doors", description: "A Board-Certified OB/GYN on your advisory team signals legitimacy to CMOs, CNOs, and clinical committees." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "De-Risk Decisions Before They Get Expensive", description: "Governance structures, pilot design, and physician adoption strategy built right the first time." } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicole Faulkner",
    honorificPrefix: "Dr.",
    honorificSuffix: "D.O.",
    jobTitle: "Board-Certified OB/GYN & Chief Clinical Officer",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    sameAs: "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/",
    knowsAbout: ["Women's Health", "OB/GYN", "Clinical Governance", "Physician Adoption", "Femtech"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnathon Faulkner",
    jobTitle: "CEO & Healthcare IT Architect",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    sameAs: "https://www.linkedin.com/in/johnathonfaulkner/",
    knowsAbout: ["Healthcare IT", "EHR Integration", "Enterprise Health Systems", "Clinical Adoption"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Strategic Advisory from The Faulkner Group?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An equity-based strategic advisory designed for pre-seed to Series A women's health tech companies. A Board-Certified OB/GYN and Healthcare IT Architect provide enterprise narrative shaping, go-to-market pressure testing, clinical credibility, and governance de-risking.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the Strategic Advisory for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Femtech founders building in women's health, maternal care, reproductive health, or women's digital health who need clinical credibility to navigate enterprise health system sales, procurement committees, and physician adoption before they have the runway to hire for it.",
        },
      },
      {
        "@type": "Question",
        name: "How is strategic advisory different from consulting or fractional work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strategic advisory is equity-based, not a consulting engagement, fractional hire, or retainer. The Faulkner Group aligns with your company long-term and provides ongoing access to clinical and operational expertise at the moments that matter most.",
        },
      },
      {
        "@type": "Question",
        name: "Why do femtech deals stall in enterprise health systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most femtech deals don't die in the demo. They die in the decision meeting the founder wasn't in. Without clinical credibility, governance documentation, and a narrative framed for health system procurement, promising products get stuck in committee indefinitely.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does the Strategic Advisory cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Four focus areas: (1) Shaping the enterprise narrative for clinical outcomes and governance, (2) Pressure-testing go-to-market strategy, (3) Providing a clinical voice (Board-Certified OB/GYN) that opens doors with CMOs and clinical committees, (4) De-risking decisions around governance, pilot design, and physician adoption.",
        },
      },
    ],
  },
];

const qualificationBullets = [
  "You're building something real for women's health, and investors keep asking \"but who's your clinical champion?\"",
  "You know your product works. You just can't prove it in the language a hospital procurement committee will believe.",
  "You're trying to get your first enterprise health system meeting, not close one.",
  "Your go-to-market assumes the patient is the buyer. The hospital has a different answer.",
  "You've been told \"women's health is a niche\" by someone who controls a check.",
  "You need clinical credibility before you have the runway to hire for it.",
];

const servicePillars = [
  {
    icon: MessageSquare,
    title: "Shape the Enterprise Narrative",
    description:
      "We help you frame your solution in the language health systems actually respond to: clinical outcomes, governance, workflow fit, and risk reduction. Not feature lists.",
  },
  {
    icon: Shield,
    title: "Pressure-Test Your Go-to-Market",
    description:
      "We've been inside the meetings you're trying to get into. We'll tell you what's missing, what's misaligned, and what will kill the deal before it starts.",
  },
  {
    icon: Heart,
    title: "Provide the Clinical Voice That Opens Doors",
    description:
      "A Board-Certified OB/GYN on your advisory team changes the room. It signals legitimacy to CMOs, CNOs, and clinical committees that most femtech companies never reach.",
  },
  {
    icon: Users,
    title: "De-Risk Decisions Before They Get Expensive",
    description:
      "Governance structures, pilot design, physician adoption strategy: we help you build it right the first time so you're not rebuilding it after a failed deployment.",
  },
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
        title="Femtech Strategic Advisory | The Faulkner Group"
        description="Equity-based advisory for pre-seed to Series A women's health tech founders. A Board-Certified OB/GYN and Healthcare IT Architect help you navigate enterprise health systems."
        canonical="https://thefaulknergroupadvisors.com/advisory-partnership"
        ogImage="https://thefaulknergroupadvisors.com/og-image.jpg"
        jsonLd={partnershipSchema}
      />

      <Header />

      <main className="overflow-x-hidden">
        {/* Section 1 — Hero */}
        <section className="relative w-full overflow-hidden pb-8 md:pb-10" style={{ paddingTop: 'max(180px, calc(180px + env(safe-area-inset-top, 0px)))' }}>
          <img
            src="/hero-boardroom.jpg"
            alt="The Faulkner Group women's health tech advisory team in a strategy session"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-foreground/60" />

          <div className="relative z-10 px-5 sm:px-6 text-center">
            <div className="mx-auto max-w-[860px]">
              <p className="mb-4 md:mb-6 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Strategic Advisory
              </p>

              <h1 className="mb-3 md:mb-4 font-display text-[clamp(26px,5vw,52px)] font-bold leading-[1.1] text-primary-foreground">
                Most femtech deals don't die in the demo
              </h1>

              <p className="mb-6 md:mb-8 font-display text-[clamp(18px,3.5vw,36px)] font-bold leading-[1.2] text-accent">
                They die in the decision meeting you weren't in
              </p>

              <p className="mx-auto mb-8 md:mb-10 max-w-2xl font-inter text-[clamp(14px,2vw,20px)] leading-relaxed text-primary-foreground/85" style={{ textWrap: 'balance' }}>
                Strategic advisory isn't consulting. It's not fractional. It's not a retainer. It's access: to the right perspective, the right credibility, and the right voice at the exact moment it matters.
              </p>

              <Button
                onClick={handleBooking}
                variant="glassy"
                size="lg"
                className="group h-auto w-full sm:w-auto px-8 py-4 md:py-5 text-base"
              >
                Book Your Call
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2 — Qualification */}
        <section className="bg-background px-5 sm:px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              You're in the right place if:
            </h2>

            <ul className="space-y-3">
              {qualificationBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[9px] h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p
                    className="font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg"
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
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-t border-border" />
        </div>

        {/* Section 3 — Offer Definition */}
        <section className="bg-background px-5 sm:px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 text-center">
              <h2 className="mb-3 font-playfair text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                What strategic advisory actually means.
              </h2>
              <p className="font-inter text-base italic text-muted-foreground md:text-lg">
                Not a consulting engagement. Not a fractional hire. Not a retainer.
              </p>
            </div>

            <p
              className="font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg"
              style={{ textWrap: "balance" }}
            >
              This is equity-based strategic advisory, designed specifically for early-stage women's health companies that need enterprise-grade expertise without enterprise-level overhead. We help you think more clearly, decide more confidently, and move through health systems without making the mistakes that cost you the deal.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-t border-border" />
        </div>

        {/* Section 4 — Service Pillars */}
        <section className="bg-background px-5 sm:px-6 py-6 md:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 md:mb-6 text-center">
              <h2 className="font-playfair text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Here's where we focus.
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {servicePillars.map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-accent/25 bg-card p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent/10">
                    <card.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 sm:mb-3 font-playfair text-base font-bold text-foreground sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-t border-border" />
        </div>

        {/* Section 5 — Credibility / Founder Bios */}
        <section className="bg-background px-5 sm:px-6 py-6 md:py-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-playfair text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl" style={{ textWrap: 'balance' }}>
              We've been where you're trying to go.
            </h2>

            <div className="space-y-4">
              <p className="font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg" style={{ textWrap: 'balance' }}>
                Dr. Nicole Faulkner spent years delivering care inside a major health system. She knows what gets dismissed in morning rounds and what earns a seat on the agenda.
              </p>
              <p className="font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg" style={{ textWrap: 'balance' }}>
                John Faulkner spent 15+ years building the operational infrastructure those systems run on. He knows why pilots stall before they ever reach the CMO.
              </p>
              <p className="font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg" style={{ textWrap: 'balance' }}>
                We don't advise from a slide deck. We've been inside the governance meetings, the clinical workflows, and the technology failures you're trying to fix right now.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 — Pull Quote */}
        <section className="bg-muted/30 px-5 sm:px-6 py-6 md:py-8">
          <div className="mx-auto max-w-4xl">
            <blockquote className="border-l-4 border-accent pl-5 sm:pl-6 md:pl-8">
              <p className="font-playfair text-lg font-bold leading-relaxed text-foreground italic sm:text-xl md:text-2xl lg:text-3xl" style={{ textWrap: 'balance' }}>
                "Women's health innovation isn't failing because the products are bad. It's failing because the infrastructure to support them doesn't exist yet. We build that infrastructure. That's the job."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Section 7 — CTA Block */}
        <section className="bg-background px-5 sm:px-6 py-6 md:py-8" style={{ paddingBottom: 'max(24px, calc(24px + env(safe-area-inset-bottom, 0px)))' }}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-playfair text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Schedule Your Discovery Call
            </h2>

            <p className="mx-auto mb-6 max-w-2xl font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg" style={{ textWrap: 'balance' }}>
              30 minutes. No pitch. Just a direct conversation about where you are and what it actually takes to move forward inside a health system that wasn't built with your product, or your patient, in mind.
            </p>

            <Button
              onClick={handleBooking}
              variant="glassy"
              size="lg"
              className="group h-auto w-full sm:w-auto px-8 py-4 md:py-5 text-base"
            >
              Book Your Call
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdvisoryPartnership;
