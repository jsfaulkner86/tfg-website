import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Users, Shield, ClipboardList, Search, Video, Send } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    question: "What is the Clinical Readiness Assessment?",
    answer:
      "A structured 14-day engagement that evaluates your product across five domains: clinical workflow fit, governance and risk infrastructure, physician adoption strategy, EHR integration reality, and trust and liability exposure. You receive a written Clinical Readiness Report and a 60-minute live findings presentation with both practitioners.",
  },
  {
    question: "Who runs the assessment?",
    answer:
      "Nicole Faulkner, D.O., a practicing OB/GYN who brings frontline clinical credibility. Johnathon Faulkner, a healthcare IT architect with 14+ years and 40+ Epic implementations. Our team is involved throughout the full 14-day engagement and presents findings together.",
  },
  {
    question: "Who is this for?",
    answer:
      "Founders and leadership teams with a signed enterprise pilot or health system contract approaching go-live, especially products operating in OB/GYN, maternal health, reproductive care, or women's digital health where clinical trust and documentation accuracy are non-negotiable.",
  },
  {
    question: "How is this different from the Clinical Clarity Session?",
    answer:
      "The Clinical Clarity Session is a 90-minute diagnostic designed for fast triage. The Clinical Readiness Assessment is a 14-day deep engagement for companies whose stakes are too high for triage alone. Same team, deeper scope, comprehensive de-risking before your go-live date.",
  },
  {
    question: "What do I receive at the end?",
    answer:
      "A written Clinical Readiness Report with findings and a prioritized remediation roadmap, designed to share with your board, investors, or health system counterparts. Within 48 hours of delivery, you also receive a 60-minute live findings presentation with both practitioners and full Q&A.",
  },
  {
    question: "When is the right time to book this?",
    answer:
      "When you have a signed pilot or enterprise contract with a go-live date on the calendar and the cost of failure is measured in relationship capital, not just dollars. This assessment is built to close gaps before they surface in production.",
  },
  {
    question: "Is this tied to a longer engagement?",
    answer:
      "Not by default. The Clinical Readiness Assessment delivers a complete, standalone report. For companies whose assessment surfaces risks requiring ongoing oversight, we offer a structured path to a deeper operating partnership. The assessment is where that conversation begins.",
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
        <section className="relative w-full overflow-hidden pt-[180px] pb-[40px] md:pt-[200px] md:pb-[60px]" style={{ paddingTop: 'max(180px, calc(180px + env(safe-area-inset-top, 0px)))' }}>
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
                14-Day Readiness Engagement
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
                Signing the LOI is not the hard part. What comes next is.
              </p>

              <Button
                onClick={handleBooking}
                className="text-sm sm:text-base font-semibold rounded-lg px-5 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                  color: '#2A3B4F',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Book Your Clinical Readiness Assessment
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
              Why Pilots Fail
            </h2>
            <p
              className="text-sm sm:text-lg font-inter text-center sm:text-center text-left mb-8 sm:mb-10 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              Most enterprise pilots do not fail because the product was wrong. They fail because no one mapped the product to actual clinical workflows, no one stress-tested the EHR integration before go-live, and no one built the governance infrastructure a health system needs to defend when something goes sideways. By the time those gaps surface, your champion is exposed and your relationship with the health system is already fragile. This assessment closes those gaps before you go live, in 14 days.
            </p>
          </div>
        </section>

        {/* What This Is + What We Evaluate + How It Works + Who It's For + Offer Ladder + What Comes Next + FAQ + CTA */}
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
              A structured 14-day readiness engagement built specifically around your product, your integration architecture, and your pilot environment. Not a framework applied generically. Not a checklist downloaded from a consulting firm's website. You get a team that has been inside the room where these decisions are made: a Board-Certified OB/GYN who still sees patients and a Healthcare IT Architect with 14 years and 40+ Epic implementations, including Epic (EHR) - Women's Health, the most clinically complex OB/GYN workflow environment in enterprise healthcare. We do not assess in the abstract. We assess against what health systems actually require.
            </p>

            {/* What We Evaluate */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What We Evaluate
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-16">
              {[
                {
                  title: "Clinical Workflow Fit",
                  text: "Where does your product live in a physician's actual day? What does that interaction look like at 6:47 AM when your champion is three charts behind and a nurse is waiting?",
                },
                {
                  title: "Governance and Risk Infrastructure",
                  text: "Do you have escalation pathways, a kill-switch protocol, defined KPIs, and incident reporting language your health system's legal and compliance teams can defend?",
                },
                {
                  title: "Physician Adoption Strategy",
                  text: "Is your champion plan realistic? How are you tracking utilization, identifying resistance early, and preventing quiet non-adoption from becoming a contract non-renewal?",
                },
                {
                  title: "EHR Integration Reality",
                  text: "Is your integration real, or is it a separate portal with SSO dressed up in contract language? We evaluate what you have against what your pilot agreement likely requires.",
                },
                {
                  title: "Trust and Liability Exposure",
                  text: "If your product influences a clinical decision that leads to a bad outcome, who owns it? Does your current risk architecture reflect that answer?",
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

            {/* How It Works */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-8 sm:mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              How It Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-6">
              {[
                { step: "1", icon: ClipboardList, title: "Days 1 to 2: Structured Intake", text: "We review your product, pilot terms, and integration documentation before any assessment begins." },
                { step: "2", icon: Search, title: "Days 3 to 10: Active Evaluation", text: "Assessment across all five domains, with targeted async questions as findings develop." },
                { step: "3", icon: FileText, title: "Days 11 to 12: Report Preparation", text: "Written report and prioritized remediation roadmap prepared." },
                { step: "4", icon: Send, title: "Days 12 to 14: Report Delivered", text: "Clinical Readiness Report delivered. A document you can share with your board, investors, or health system counterparts." },
                { step: "5", icon: Video, title: "Within 48 Hours: Live Presentation", text: "60-minute live findings presentation with both practitioners, clinical and systems perspective in the same room, with full Q&A." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl"
                    style={{
                      background: 'white',
                      border: '1.5px solid rgba(243,218,115,0.3)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-inter font-bold"
                        style={{ background: 'rgba(243,218,115,0.2)', color: '#1A2A3A' }}
                      >
                        {item.step}
                      </span>
                      <Icon size={20} style={{ color: '#718DA9' }} />
                      <h3 className="text-base font-inter font-bold" style={{ color: '#1A2A3A' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p
              className="text-base font-inter text-center mb-16"
              style={{ color: '#718DA9', lineHeight: '1.7' }}
            >
              Fourteen days. Five domains. A deliverable your entire leadership team can act on.
            </p>

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
                  "Signed enterprise pilot or health system contract with a go-live date on the calendar",
                  "First enterprise deployment where the cost of a failed pilot is measured in relationship capital, not just dollars",
                  "Product operating in OB/GYN, maternal health, reproductive care, or women's digital health, where clinical trust and documentation accuracy are non-negotiable",
                  "Leadership team that needs to walk into go-live knowing the most predictable failure points have been identified and addressed",
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
              <p className="text-base font-inter max-w-2xl mx-auto mb-6" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                The Clinical Clarity Session is where fast triage happens: 90 minutes in, findings in your hands within 48 hours. The Clinical Readiness Assessment is what comes next when the stakes are too high for triage alone. Same team. Deeper scope. Fourteen days to comprehensive de-risking before your go-live date arrives.
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
                For companies whose assessment surfaces risks requiring ongoing oversight, across implementation, physician adoption, or clinical systems architecture, we offer a structured path to a deeper operating partnership. The Readiness Assessment is where that conversation begins.
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
                  Fourteen days to know exactly where your pilot is exposed. Before go-live, not after.
                </p>
              </div>

              <div>
                <Button
                  onClick={handleBooking}
                  className="text-sm sm:text-base font-semibold rounded-lg px-5 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                    color: '#2A3B4F',
                    borderColor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Book Your Clinical Readiness Assessment
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

export default ClinicalReadinessAssessment;
