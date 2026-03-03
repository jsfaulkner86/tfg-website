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
      "A selective, equity-based advisory partnership for early-stage women's health tech companies where clinical and systems credibility can materially change your trajectory before the high-stakes moments arrive.",
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
    description: "Board-certified OB/GYN, Medical Director at BackTable, featured speaker at the Women's Health Innovation Summit (WHIS).",
    sameAs: "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnathon Faulkner",
    jobTitle: "CEO and Healthcare IT Architect",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    description: "Healthcare IT Architect with 14+ years and 40+ Epic implementations specializing in women's health technology enterprise integration.",
    sameAs: "https://www.linkedin.com/in/johnathonfaulkner/",
  },
];

const faqData = [
  {
    question: "What is the Strategic Advisory?",
    answer:
      "A selective, equity-based advisory relationship for early-stage women's health tech companies. Two practitioners, a practicing OB/GYN and a healthcare IT architect, align with your company early and remain at the table through the moments that matter most.",
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
      "Equity-based, with or without a modest cash retainer. We take a small number of these partnerships and choose based on mission alignment, founder quality, and genuine belief that what you are building belongs inside health systems.",
  },
  {
    question: "How is this different from the Clinical Clarity Session or Readiness Assessment?",
    answer:
      "The Clinical Clarity Session is a 90-minute diagnostic. The Readiness Assessment is a 14-day deep engagement. The Strategic Advisory is ongoing alignment with two practitioners who intend to still be at the table when it matters most. Different depth, different duration, same practitioners.",
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
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Strategic Advisory | The Faulkner Group"
        description="A selective, equity-based advisory for early-stage women's health tech companies. Clinical and systems credibility at the table before the high-stakes moments arrive."
        canonical="https://thefaulknergroupadvisors.com/advisory-partnership"
        jsonLd={partnershipSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full overflow-hidden pt-[180px] pb-[60px] md:pt-[240px] md:pb-[140px]" style={{ paddingTop: 'max(180px, calc(180px + env(safe-area-inset-top, 0px)))' }}>
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
          />

          <div className="relative z-10 flex items-center justify-center px-5 sm:px-6 text-center">
            <div className="max-w-[820px] w-full">
              <p
                className="mb-6 font-inter font-medium uppercase"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  color: 'hsl(45, 62%, 56%)',
                }}
              >
                Equity-Based Advisory
              </p>

              <h1
                className="mb-6 font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 52px)',
                  lineHeight: 1.1,
                }}
              >
                The Reality
              </h1>

              <p
                className="mb-8 sm:mb-10 font-inter max-w-lg mx-auto"
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 20px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  lineHeight: '1.6',
                }}
              >
                The right clinical and systems credibility at the table changes what gets taken seriously.
              </p>

              <Button
                onClick={handleBooking}
                className="text-sm sm:text-base font-semibold rounded-lg px-6 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                  color: '#2A3B4F',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Reality (expanded body) */}
        <section
          className="px-5 sm:px-6"
          style={{
            paddingTop: '48px',
            paddingBottom: '32px',
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Why Early Alignment Matters
            </h2>
            <p
              className="text-sm sm:text-lg font-inter text-center sm:text-center text-left mb-8 sm:mb-10 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              Most early-stage women's health tech companies don't fail because the idea was wrong. They fail because no one in their corner has ever actually built inside a health system, and by the time that gap becomes visible, the opportunity cost is already compounding. The right clinical and systems credibility at the table changes what deals get taken seriously, what pilots get structured correctly, and what investors believe is possible. This is not a monthly check-in. This is early alignment with two practitioners who intend to still be at the table when it matters most.
            </p>
          </div>
        </section>

        {/* All remaining sections */}
        <section
          className="px-5 sm:px-6"
          style={{
            paddingTop: '20px',
            paddingBottom: '48px',
            background: 'linear-gradient(180deg, #F5F0E4 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* What This Is */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What This Is
            </h2>
            <p
              className="text-sm sm:text-lg font-inter text-center sm:text-center text-left mb-8 sm:mb-10 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              A selective, equity-based advisory partnership for early-stage companies where we believe in the mission, the founders, and the long-term potential, and where our clinical and systems credibility can materially change your trajectory before the high-stakes moments arrive. We take a small number of these partnerships. We choose based on mission alignment, founder quality, and our genuine belief that what you are building belongs inside health systems.
            </p>

            {/* What We Bring */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What We Bring
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-16">
              {[
                {
                  title: "Monthly or Bi-Monthly Strategic Sessions",
                  text: "Clinical and systems perspective on your most pressing decisions, not generic frameworks.",
                },
                {
                  title: "Clinical and Workflow Validation",
                  text: "Is this solving a problem a physician actually has? Would it survive contact with a real clinical environment?",
                },
                {
                  title: "Go-to-Market Guidance",
                  text: "How to position for health systems, what enterprise buyers actually evaluate, and where your current narrative would break down in the room.",
                },
                {
                  title: "Credibility Support",
                  text: "Two practitioners who can be present when clinical or systems credibility affects what a partner, investor, or health system believes about you.",
                },
                {
                  title: "A Defined Path Forward",
                  text: "As your company scales and the stakes grow, this engagement has a clear structure to deepen into an Operating Partner engagement.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl"
                  style={{
                    background: 'white',
                    border: '1.5px solid rgba(243,218,115,0.3)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  }}
                >
                  <h3 className="text-base font-inter font-bold mb-2" style={{ color: '#1A2A3A' }}>
                    {item.title}
                  </h3>
                  <p className="text-base font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Who This Is For */}
            <div
              className="p-5 sm:p-8 rounded-2xl mb-12 sm:mb-16"
              style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.06), rgba(113,141,169,0.02))',
                border: '1.5px solid rgba(113,141,169,0.2)',
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-playfair font-bold mb-5 sm:mb-6"
                style={{ color: '#1A2A3A' }}
              >
                Who This Is For
              </h3>
              <div className="space-y-3">
                {[
                  "Pre-Seed through Series A companies building in women's health, maternal care, reproductive health, or women's digital health",
                  "Founders who understand that clinical credibility is not a feature. It is a survival requirement for enterprise health system adoption",
                  "Companies where current cash position doesn't support a full retainer but where early alignment creates real long-term value for both sides",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div
              className="p-5 sm:p-8 rounded-2xl mb-8"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D',
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A' }}
              >
                How It Works
              </h3>
              <p className="text-base font-inter max-w-2xl mx-auto" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                This is not an open offer. If you believe there is a fit, reach out directly. We will have a candid conversation about where you are, where you are going, and whether this partnership makes sense. If it does, we structure it simply and move quickly.
              </p>
            </div>

            {/* What Comes Next */}
            <div className="mb-16 mt-8">
              <h2
                className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
              >
                What Comes Next
              </h2>
              <p
                className="text-sm sm:text-lg font-inter text-center sm:text-center text-left max-w-3xl mx-auto"
                style={{ color: '#4A5568', lineHeight: '1.7' }}
              >
                Strategic Advisory engagements that reach scale convert into Operating Partner engagements, where involvement deepens across sales, implementation, and adoption. We structure the path at the start so there are no surprises when the moment arrives.
              </p>
            </div>

            {/* FAQ */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-8 sm:mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="mb-16">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-0 rounded-2xl overflow-hidden"
                    style={{
                      background: 'white',
                      border: '1.5px solid rgba(243,218,115,0.3)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    }}
                  >
                    <AccordionTrigger
                      className="px-5 sm:px-8 py-5 sm:py-6 text-left hover:no-underline font-playfair font-bold text-base sm:text-xl"
                      style={{ color: '#1A2A3A', letterSpacing: '-0.01em' }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 sm:px-8 pb-5 sm:pb-6">
                      <p className="text-sm sm:text-base font-inter leading-relaxed" style={{ color: '#4A5568', lineHeight: '1.8' }}>
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div
                className="inline-block p-5 sm:p-6 rounded-2xl mb-8 sm:mb-10"
                style={{
                  background: '#FBF8F1',
                  border: '2px solid #D4B65D',
                }}
              >
                <p className="text-base sm:text-lg font-inter font-medium italic" style={{ color: '#718DA9', lineHeight: '1.7' }}>
                  The right alignment at the right stage. Before the high-stakes moments arrive, not after.
                </p>
              </div>

              <div>
              <Button
                  onClick={handleBooking}
                  className="text-sm sm:text-base font-semibold rounded-lg px-6 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                    color: '#2A3B4F',
                    borderColor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
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
