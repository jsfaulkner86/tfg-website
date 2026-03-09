import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Users, Cpu, FileText, Handshake } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    audience: {
      "@type": "Audience",
      audienceType: "Women's health tech founders with signed enterprise pilots or health system contracts",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Faulkner Group",
    url: "https://thefaulknergroupadvisors.com",
    description: "Boutique clinical and systems advisory firm for women's health technology companies. We embed directly inside organizations to drive physician adoption, build clinical governance, and convert pilots into enterprise-wide deployments.",
    knowsAbout: [
      "Women's health technology",
      "Physician adoption strategy",
      "EHR integration",
      "Epic implementations",
      "Clinical governance frameworks",
      "Health system pilot management",
      "Enterprise health tech deployment",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicole Faulkner",
    honorificPrefix: "Dr.",
    honorificSuffix: "D.O.",
    jobTitle: "Chief Clinical Officer",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    description: "Board-certified OB/GYN, Medical Director at BackTable, featured speaker at the Women's Health Innovation Summit (WHIS). Clinical advisor to women's health tech startups navigating physician adoption and enterprise health system integration.",
    sameAs: "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnathon Faulkner",
    jobTitle: "CEO and Healthcare IT Architect",
    worksFor: { "@type": "Organization", name: "The Faulkner Group" },
    description: "Healthcare IT Architect with 14+ years and 40+ Epic implementations specializing in women's health technology enterprise integration, EHR workflow design, and clinical systems architecture.",
    sameAs: "https://www.linkedin.com/in/johnathonfaulkner/",
  },
];

const faqData = [
  {
    question: "What is the Operating Partner?",
    answer:
      "An ongoing clinical and systems operating partnership that spans the full lifecycle of your enterprise health system relationship, from the sales conversation through go-live, adoption, and contract renewal. Our team embedded in your organization for the duration.",
  },
  {
    question: "Who runs this engagement?",
    answer:
      "Nicole Faulkner, D.O., a practicing OB/GYN who brings frontline clinical credibility. Johnathon Faulkner, a healthcare IT architect with 14+ years and 40+ Epic implementations including Epic (EHR) - Women's Health. Our team is embedded in your work, not consulting from the outside.",
  },
  {
    question: "How many partners do you take at a time?",
    answer:
      "A small number. That is not a sales line. It is how we protect the quality of what we deliver. If we are at capacity, we will tell you directly and help you find the right timing.",
  },
  {
    question: "Do I need to complete a Clinical Clarity Session first?",
    answer:
      "Founders who have completed a Clinical Clarity Session or Clinical Readiness Assessment, or can demonstrate equivalent preparation, are the right fit. We do not step into active pilots that have not been de-risked.",
  },
  {
    question: "Is there a public price?",
    answer:
      "No. This engagement is scoped through a direct conversation because the work, the duration, and the depth vary based on your specific enterprise relationship and clinical environment. Reach out and we will tell you quickly whether this is the right fit.",
  },
  {
    question: "How is this different from a fractional CMO or advisor?",
    answer:
      "Most fractional executives advise from the outside. We operate from the inside, joining sales calls, auditing workflows, managing governance documentation, and providing direct escalation support when adoption stalls or a safety question surfaces. A dedicated team, not one consultant.",
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
        <section className="relative w-full overflow-hidden pb-[40px] md:pb-[60px]" style={{ paddingTop: 'max(180px, calc(180px + env(safe-area-inset-top, 0px)))' }}>
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team in strategic planning session"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
          />
          <div className="relative z-10 flex items-center justify-center px-5 sm:px-6 text-center">
            <div className="max-w-[820px]">
              <p
                className="mb-6 font-inter font-medium uppercase"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  color: 'hsl(45, 62%, 56%)',
                }}
              >
                Ongoing Operating Partnership
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
                className="mb-10 font-inter"
                style={{
                  fontSize: 'clamp(16px, 1.6vw, 20px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                The difference between a pilot that converts and one that quietly dies is almost never the product.
              </p>
              <Button
                onClick={handleBooking}
                className="text-sm sm:text-base font-semibold rounded-lg px-7 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)] min-h-[48px] w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                  color: '#2A3B4F',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Reality — expanded */}
        <section
          className="px-5 sm:px-6"
          style={{
            paddingTop: '24px',
            paddingBottom: '16px',
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              The Reality
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg font-inter text-center mb-6 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              There is a version of this that ends well. Your pilot converts to a full contract, utilization climbs, your clinical champion becomes a reference, and your next health system deal closes faster because the first one worked. There is another version where none of that happens, where a governance gap, a workflow misfit, or a physician adoption problem surfaces six months in and your team spends the next quarter managing a relationship that is quietly dying.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg font-inter text-center max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              The difference between those two versions is almost never the product. It is whether the right clinical and systems expertise was embedded in your organization before the hard moments arrived.
            </p>
          </div>
        </section>

        {/* What This Is + What We Do + Who This Is For + How It Works + Offer Ladder + FAQ + CTA */}
        <section
          className="px-5 sm:px-6"
          style={{
            paddingTop: '8px',
            paddingBottom: '32px',
            background: '#F5F0E4',
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* What This Is */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What This Is
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg font-inter text-center mb-6 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              An ongoing clinical and systems operating partnership across the full lifecycle of your enterprise health system relationship, from the sales conversation through go-live, adoption, and contract renewal. Not a monthly advisory call. Not a fractional CMO who has never touched Epic. A team that stays in it with you, led by a Board-Certified OB/GYN who still sees patients and a Healthcare IT Architect with 14 years and 40+ Epic implementations including Epic (EHR) - Women's Health, until the pilot converts, the adoption holds, and the relationship is stable.
            </p>
            <p
              className="text-base font-inter text-center mb-8"
              style={{ color: '#718DA9', lineHeight: '1.7', fontStyle: 'italic' }}
            >
              We take a small number of partners at a time. That is not a sales line. It is how we protect the quality of what we deliver.
            </p>

            {/* What We Do */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 sm:mb-6 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What We Do
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                {
                  icon: Handshake,
                  label: "Pre-sale and enterprise credibility",
                  text: "Nicole and John join key sales calls, enterprise negotiations, and investor meetings when clinical or operational credibility will determine what gets believed and what gets signed.",
                },
                {
                  icon: Shield,
                  label: "Clinical and systems readiness",
                  text: "We audit workflows, translate clinical reality into product and integration requirements, and identify gaps before contracts are signed and before they become expensive.",
                },
                {
                  icon: Cpu,
                  label: "Implementation oversight",
                  text: "EHR integration strategy, governance framework design, pilot structure, KPI definition, and adoption planning built around what your health system actually requires, not what your contract says you promised.",
                },
                {
                  icon: Users,
                  label: "Physician adoption and escalation",
                  text: "Champion programs, clinical training, office hours, and direct escalation support when adoption stalls, utilization drops, or a safety question surfaces that needs a real clinician in the room.",
                },
                {
                  icon: FileText,
                  label: "Governance operations",
                  text: "Steering committee support, kill-switch protocol management, KPI monitoring, and risk register maintenance so your health system always has the documentation it needs to defend the partnership internally.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <Icon size={20} className="flex-shrink-0 mt-1 sm:w-[22px] sm:h-[22px]" style={{ color: '#D4B65D' }} />
                    <p className="text-sm sm:text-base md:text-lg font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                      <strong>{item.label}:</strong> {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Who This Is For */}
            <div
              className="p-5 sm:p-8 rounded-2xl mb-10 sm:mb-16"
              style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.06), rgba(113,141,169,0.02))',
                border: '1.5px solid rgba(113,141,169,0.2)',
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-playfair font-bold mb-4 sm:mb-6"
                style={{ color: '#1A2A3A' }}
              >
                Who This Is For
              </h3>
              <div className="space-y-3">
                {[
                  "Post-raise companies with signed enterprise pilots or health system contracts where a failed deployment is measured in relationship capital and investor confidence, not just dollars",
                  "Companies in OB/GYN, maternal health, reproductive care, or women's digital health where clinical trust, documentation accuracy, and physician adoption are non-negotiable",
                  "Founders who have completed a Clinical Clarity Session or Clinical Readiness Assessment, or can demonstrate equivalent preparation, because we do not step into active pilots that have not been de-risked",
                  "Leadership teams who want our team embedded in their corner for the duration, not a vendor relationship, an operating one",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-sm sm:text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              How It Works
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg font-inter text-center mb-6 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              This is not a transactional engagement and it does not start with a proposal. It starts with a conversation. If you are at the stage where this level of partnership makes sense, or if you are already inside a pilot that is showing early warning signs, reach out directly. We will tell you quickly whether this is the right fit, what the right scope looks like, and what working together actually means.
            </p>

            <p
              className="text-sm sm:text-base font-inter text-center mb-10 sm:mb-16"
              style={{ color: '#718DA9', lineHeight: '1.7' }}
            >
              No proposal deck. No discovery call gauntlet. One conversation to determine fit.
            </p>

            {/* The Offer Ladder */}
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
                The Offer Ladder
              </h3>
              <p className="text-sm sm:text-base font-inter max-w-2xl mx-auto mb-6" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                The <a href="/clinical-clarity-session" className="underline" style={{ color: '#718DA9' }}>Clinical Clarity Session</a> is where fast triage happens. The <a href="/clinical-readiness-assessment" className="underline" style={{ color: '#718DA9' }}>Clinical Readiness Assessment</a> is comprehensive de-risking before go-live. The Operating Partner is what you move into when the stakes are too high to navigate alone and you need our team embedded in your organization for the duration. Same people. Deeper commitment. Built for companies where getting this right is not optional.
              </p>
            </div>

            {/* FAQ */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-6 sm:mb-10 text-center mt-10 sm:mt-16"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="mb-10 sm:mb-16">
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
                      className="px-5 sm:px-8 py-5 sm:py-6 text-left hover:no-underline font-playfair font-bold text-base sm:text-lg md:text-xl"
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
                className="inline-block p-4 sm:p-6 rounded-2xl mb-8 sm:mb-10"
                style={{
                  background: '#FBF8F1',
                  border: '2px solid #D4B65D',
                }}
              >
                <p className="text-base sm:text-lg font-inter font-medium italic" style={{ color: '#718DA9', lineHeight: '1.7' }}>
                  We do not just consult. We build with you until it works.
                </p>
              </div>

              <div>
                <Button
                  onClick={handleBooking}
                  className="text-sm sm:text-base font-semibold rounded-lg px-7 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)] min-h-[48px] w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                    color: '#2A3B4F',
                    borderColor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Start a Conversation
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

export default OperatingPartnerRetainer;
