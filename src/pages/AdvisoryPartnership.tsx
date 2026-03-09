import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "A selective advisory partnership for early-stage women's health tech companies where clinical and systems credibility can materially change your trajectory before the high-stakes moments arrive.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicole Faulkner",
    honorificPrefix: "Dr.",
    honorificSuffix: "D.O.",
    jobTitle: "Chief Clinical Officer",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    description:
      "Board-certified OB/GYN, Medical Director at BackTable, featured speaker at the Women's Health Innovation Summit (WHIS).",
    sameAs: "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnathon Faulkner",
    jobTitle: "CEO and Healthcare IT Architect",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    description:
      "Healthcare IT Architect with 14+ years and 40+ Epic implementations specializing in women's health technology enterprise integration.",
    sameAs: "https://www.linkedin.com/in/johnathonfaulkner/",
  },
];

const faqData = [
  {
    question: "What is the Strategic Advisory?",
    answer:
      "A selective advisory relationship for early-stage women's health tech companies. Our team, including a practicing OB/GYN and a healthcare IT architect, aligns with your company early and remains at the table through the moments that matter most.",
  },
  {
    question: "Who is involved?",
    answer:
      "Nicole Faulkner, D.O., a practicing OB/GYN who brings frontline clinical credibility. Johnathon Faulkner, a healthcare IT architect with 14+ years and 40+ Epic implementations. Both participate in strategic sessions and are available for credibility support when it matters.",
  },
  {
    question: "Who is this for?",
    answer:
      "Pre-Seed through Series A companies building in women's health, maternal care, reproductive health, or women's digital health. Founders who understand that clinical credibility is a survival requirement for enterprise adoption, not a feature.",
  },
  {
    question: "How is this structured?",
    answer:
      "We take a small number of these partnerships and choose based on mission alignment, founder quality, and genuine belief that what you are building belongs inside health systems.",
  },
  {
    question: "How is this different from the Clinical Clarity Session or Readiness Assessment?",
    answer:
      "The Clinical Clarity Session is a 90-minute diagnostic. The Readiness Assessment is a 14-day deep engagement. The Strategic Advisory is ongoing alignment with a team who intends to still be at the table when it matters most. Different depth, different duration, same team.",
  },
  {
    question: "Is this an open offer?",
    answer:
      "No. This is not an open offer. If you believe there is a fit, reach out directly. We will have a candid conversation about where you are, where you are going, and whether this partnership makes sense.",
  },
  {
    question: "What happens as the company scales?",
    answer:
      "Strategic Advisory engagements that reach scale convert into Operating Partner engagements, where involvement deepens across sales, implementation, and adoption. We structure the path at the start so there are no surprises when the moment arrives.",
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
        title="Strategic Advisory | The Faulkner Group"
        description="A selective advisory for early-stage women's health tech companies. Clinical and systems credibility at the table before the high-stakes moments arrive."
        canonical="https://thefaulknergroupadvisors.com/advisory-partnership"
        jsonLd={partnershipSchema}
      />

      <Header />

      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full overflow-hidden pt-[calc(180px+env(safe-area-inset-top,0px))] pb-16 md:pt-[240px] md:pb-36">
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team collaboration"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-foreground/60" />

          <div className="relative z-10 px-6 text-center">
            <div className="mx-auto max-w-[860px]">
              <p className="mb-6 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Strategic Advisory
              </p>

              <h1 className="mb-6 font-display text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.08] text-primary-foreground">
                The Reality
              </h1>

              <p className="mx-auto mb-10 max-w-xl font-inter text-[clamp(15px,1.6vw,20px)] leading-relaxed text-primary-foreground/85">
                The right clinical and systems credibility at the table changes what gets taken
                seriously.
              </p>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Start the Conversation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-background px-6 py-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Early Alignment Matters
              </h2>
              <p className="mx-auto max-w-3xl text-center font-inter text-base leading-relaxed text-muted-foreground sm:text-lg">
                Most early-stage women's health tech companies don't fail because the idea was wrong.
                They fail because no one in their corner has ever actually built inside a health
                system, and by the time that gap becomes visible, the opportunity cost is already
                compounding. The right clinical and systems credibility at the table changes what
                deals get taken seriously, what pilots get structured correctly, and what investors
                believe is possible.
              </p>
            </div>

            <div className="mb-12 border-t border-border" />

            <div className="mb-12">
              <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What This Is
              </h2>
              <p className="mx-auto max-w-3xl text-center font-inter text-base leading-relaxed text-muted-foreground sm:text-lg">
                A selective advisory partnership for early-stage companies where we believe in the
                mission, the founders, and the long-term potential — and where our clinical and
                systems credibility can materially change your trajectory before the high-stakes
                moments arrive.
              </p>
            </div>

            <div className="mb-12 border-t border-border" />

            <div className="mb-12">
              <h2 className="mb-8 text-center font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Bring
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Monthly or Bi-Monthly Strategic Sessions",
                    text: "Clinical and systems perspective on your most pressing decisions — not generic frameworks.",
                  },
                  {
                    title: "Clinical and Workflow Validation",
                    text: "Is this solving a problem a physician actually has? Would it survive contact with a real clinical environment?",
                  },
                  {
                    title: "Go-to-Market Guidance",
                    text: "How to position for health systems, what enterprise buyers actually evaluate, and where your current narrative breaks down in the room.",
                  },
                  {
                    title: "Credibility Support",
                    text: "A team that can be present when clinical or systems credibility affects what a partner, investor, or health system believes about you.",
                  },
                  {
                    title: "A Defined Path Forward",
                    text: "As your company scales and the stakes grow, this engagement has a clear structure to deepen into an Operating Partner engagement.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-3 rounded-2xl border border-accent/25 bg-card p-6 shadow-sm md:grid-cols-[280px_1fr] md:gap-8"
                  >
                    <h3 className="font-inter text-sm font-bold leading-snug text-foreground sm:text-base">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 border-t border-border" />

            <div className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm sm:p-8">
              <h3 className="mb-6 text-center font-playfair text-2xl font-bold tracking-tight text-foreground">
                Who This Is For
              </h3>

              <div className="space-y-4">
                {[
                  "Pre-Seed through Series A companies building in women's health, maternal care, reproductive health, or women's digital health",
                  "Founders who understand that clinical credibility is not a feature — it is a survival requirement for enterprise adoption",
                  "Companies where early alignment creates real long-term value for both sides",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="font-inter text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 rounded-2xl border-2 border-accent bg-accent/10 p-6 text-center shadow-sm sm:p-8">
              <h3 className="mb-4 font-playfair text-2xl font-bold tracking-tight text-foreground">
                How It Works
              </h3>
              <p className="mx-auto max-w-2xl font-inter text-sm leading-relaxed text-muted-foreground sm:text-base">
                This is not an open offer. If you believe there is a fit, reach out directly. We will
                have a candid conversation about where you are, where you are going, and whether this
                partnership makes sense. If it does, we structure it simply and move quickly.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 text-center font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Comes Next
              </h2>
              <p className="mx-auto max-w-3xl text-center font-inter text-base leading-relaxed text-muted-foreground sm:text-lg">
                Strategic Advisory engagements that reach scale convert into Operating Partner
                engagements, where involvement deepens across sales, implementation, and adoption. We
                structure the path at the start so there are no surprises when the moment arrives.
              </p>
            </div>

            <div className="mb-12 border-t border-border" />

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="mb-8 text-center font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-6 text-left font-playfair text-lg font-bold tracking-tight text-foreground hover:no-underline sm:px-8 sm:text-xl">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 sm:px-8">
                      <p className="font-inter text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div className="mx-auto mb-10 max-w-3xl rounded-2xl border-2 border-accent bg-accent/10 p-6">
                <p className="font-inter text-base font-medium italic leading-relaxed text-primary">
                  The right alignment at the right stage. Before the high-stakes moments arrive, not
                  after.
                </p>
              </div>

              <Button
                onClick={handleBooking}
                variant="accent"
                size="lg"
                className="group h-auto rounded-lg px-8 py-5 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Start the Conversation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
};

export default AdvisoryPartnership;
