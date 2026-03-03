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

const sessionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Clinical Clarity Session",
    provider: {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com",
    },
    description:
      "A 90-minute virtual diagnostic with a board-certified OB/GYN and Healthcare IT Architect that identifies the highest-risk failure points in your health tech product's clinical adoption strategy.",
    serviceType: "Healthcare Advisory",
    areaServed: "US",
    offers: {
      "@type": "Offer",
      price: "1500",
      priceCurrency: "USD",
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
    question: "What is the Clinical Clarity Session?",
    answer:
      "A 90-minute live diagnostic led by a practicing OB/GYN and a Healthcare IT Architect designed to surface the highest-risk failure points before a pilot launches or stalls. It covers physician adoption, governance and risk exposure, EHR integration, trust and credibility gaps, and deployment readiness. You receive a written Clinical Clarity Summary within 48 hours.",
  },
  {
    question: "Who runs the session?",
    answer:
      "Nicole Faulkner, D.O., a practicing OB/GYN who brings frontline clinical credibility. Johnathon Faulkner, a healthcare IT architect with deep experience in enterprise health system environments and EHR ecosystems. Our team is in the room for the full 90 minutes.",
  },
  {
    question: "Who is this for?",
    answer:
      "Health tech founders and GTM leaders approaching a pilot, managing an in-flight pilot, recovering from a stalled deployment, or preparing for investor due diligence. It is especially relevant for products entering women's health workflows.",
  },
  {
    question: "What happens in the 90 minutes?",
    answer:
      "We interrogate your product's risks across four domains: clinical readiness and governance, physician adoption, EHR integration and training, and sales/CSM/deployment. You leave with specific failure points identified and prioritized next steps tied to your product.",
  },
  {
    question: "What do I get afterward?",
    answer:
      "A written Clinical Clarity Summary delivered within 48 hours. It includes findings, prioritized risks, and recommended actions across all four domains. It is designed to be shared with your team, board, or investors as a standalone artifact.",
  },
  {
    question: "When is the right time to book this?",
    answer:
      "Before a pilot launches, before an investor meeting, when a pilot feels fragile, or after a deployment underperforms. The session is designed to surface risks early enough to act on them, not after they become board-level problems.",
  },
  {
    question: "Is this tied to a longer engagement?",
    answer:
      "No. The Clinical Clarity Session is a standalone diagnostic. There is no hidden upsell. If deeper work is needed, we will tell you, but the session delivers a complete, actionable deliverable on its own.",
  },
];

const ClinicalClaritySession = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9r-9x8-gbf/clinical-clarity-session', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Clinical Clarity Session | The Faulkner Group"
        description="90-minute diagnostic with a board-certified OB/GYN and Healthcare IT Architect. Identify your top clinical adoption risks before your next pilot."
        canonical="https://thefaulknergroupadvisors.com/clinical-clarity-session"
        jsonLd={sessionSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero — matches homepage hero pattern */}
        <section className="relative w-full overflow-hidden pt-[160px] pb-[80px] md:pt-[200px] md:pb-[140px]">
          {/* Background Image */}
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center px-6 text-center">
            <div className="max-w-[820px]">
              {/* Small caps label */}
              <p
                className="mb-6 font-inter font-medium uppercase"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  color: 'hsl(45, 62%, 56%)',
                }}
              >
                90-Minute Diagnostic
              </p>

              {/* Headline */}
              <h1
                className="mb-6 font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 52px)',
                  lineHeight: 1.1,
                }}
              >
                The Reality
              </h1>

              {/* Subheadline */}
              <p
                className="mb-10 font-inter"
                style={{
                  fontSize: 'clamp(16px, 1.6vw, 20px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                You built something women actually need. That does not mean the health system is ready for it.
              </p>

              {/* CTA */}
              <Button
                onClick={handleBooking}
                className="text-base font-semibold rounded-lg px-9 py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                  color: '#2A3B4F',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Book Your Clinical Clarity Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* What Makes This Different */}
        <section
          className="px-4 sm:px-6"
          style={{
            paddingTop: '60px',
            paddingBottom: '40px',
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What Makes This Different
            </h2>
            <p
              className="text-base sm:text-lg font-inter text-center mb-10 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              Every advisory firm will give you a strategy. We give you clinical truth. You get 90 minutes with a practicing Board-Certified OB/GYN who is a Medical Advisor for several startups and the Women's Health Medical Director for BackTable. You also get a Healthcare IT Architect with 14+ years and 40+ Epic implementations, including Epic Women's Health, the most clinically complex Women's Health workflow environment in enterprise healthcare, who has seen exactly how health systems respond when a new product tries to integrate into the systems your pilot depends on. A team that has lived on both sides of the table you are about to sit across from, telling you exactly what they see.
            </p>
          </div>
        </section>

        {/* What We Cover + What You Walk Away With + Who It's For + How It Works + Risk + FAQ + CTA */}
        <section
          className="px-4 sm:px-6"
          style={{
            paddingTop: '20px',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #F5F0E4 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* What We Cover */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What We Cover
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                {
                  title: "Physician Adoption Reality Check",
                  text: "Where does your product actually fit in a physician's day? Have you tested it with tired, overwhelmed clinicians, not just enthusiastic champions?",
                },
                {
                  title: "Governance and Risk Exposure",
                  text: "If something goes wrong in your pilot, who owns it? Do you have escalation pathways, a kill-switch protocol, and KPIs the health system can defend?",
                },
                {
                  title: "EHR Integration Truth",
                  text: "Is your integration real, or is it a separate portal with SSO dressed up in contract language?",
                },
                {
                  title: "Trust and Credibility Gaps",
                  text: "Would a physician trust this tool with a patient they actually care about? Why or why not?",
                },
                {
                  title: "The One Thing Most Likely to Kill Your Pilot",
                  text: "We name it directly.",
                },
              ].map((pain, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'white',
                    border: '1.5px solid rgba(243,218,115,0.3)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  }}
                >
                  <h3 className="text-base font-inter font-bold mb-2" style={{ color: '#1A2A3A' }}>
                    {pain.title}
                  </h3>
                  <p className="text-base font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                    {pain.text}
                  </p>
                </div>
              ))}
            </div>

            {/* What You Walk Away With */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What You Walk Away With
            </h2>

            <div className="space-y-5 mb-16">
              {[
                { icon: FileText, text: "Pre-session product review so we arrive informed, not orienting" },
                { icon: Users, text: "90-minute live diagnostic with both clinical and systems perspective" },
                { icon: Shield, text: "Unfiltered identification of your highest-risk failure points" },
                { icon: CheckCircle2, text: "Specific, prioritized next steps tied to your product and your pilot, not generic frameworks" },
                { icon: FileText, text: "Clinical Clarity Summary delivered within 48 hours: written findings, priority risks, and recommended next moves you can share with your team or investors" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <Icon size={22} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-base sm:text-lg font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Who It's For */}
            <div
              className="p-8 rounded-2xl mb-16"
              style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.06), rgba(113,141,169,0.02))',
                border: '1.5px solid rgba(113,141,169,0.2)',
              }}
            >
              <h3
                className="text-2xl font-playfair font-bold mb-6"
                style={{ color: '#1A2A3A' }}
              >
                Who This Is For
              </h3>
              <div className="space-y-3">
                {[
                  "Signed LOI or enterprise pilot starting in the next 30 to 90 days",
                  "About to enter a health system sales conversation where a physician will be in the room",
                  "Preparing for an enterprise conversation where clinical credibility will be tested",
                  "Heard \"physicians just aren't adopting it\" and don't know why",
                  "Want to walk into your pilot knowing the most predictable failure points are closed",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base font-inter mt-5" style={{ color: '#718DA9', lineHeight: '1.7', fontStyle: 'italic' }}>
                This session is purpose-built for founders in women's health, reproductive care, maternal health, and women's digital health, the clinical environment we know most precisely and where the trust stakes are highest.
              </p>
            </div>

            {/* How It Works */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              How It Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {[
                { step: "1", icon: ClipboardList, title: "Short Intake Form", text: "Takes 5 minutes. Gives us signal on your product, pipeline, and current risks so we can prepare, not orient." },
                { step: "2", icon: Search, title: "Pre-Session Product Review", text: "We review your materials before the call. When the session starts, we are already informed and ready to diagnose." },
                { step: "3", icon: Video, title: "90-Minute Live Diagnostic", text: "Nicole (OB/GYN) and John (healthcare IT architect) interrogate your risks across clinical readiness, physician adoption, EHR integration, and deployment." },
                { step: "4", icon: Send, title: "Clinical Clarity Summary", text: "Written findings, prioritized risks, and recommended actions delivered within 48 hours. Designed to share with your team, board, or investors." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl"
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
              Time-boxed. No hidden upsell. Designed to plug directly into your ongoing sales, product, and fundraising work.
            </p>

            {/* Risk Framing */}
            <div
              className="p-8 rounded-2xl mb-8"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D',
              }}
            >
              <h3
                className="text-2xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A' }}
              >
                The Cost of Waiting
              </h3>
              <p className="text-base font-inter max-w-2xl mx-auto mb-6" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                One governance gap discovered after go-live costs your team ten times this in a single afternoon.
              </p>
              <p className="text-base font-inter text-center" style={{ color: '#718DA9', lineHeight: '1.7', fontStyle: 'italic' }}>
                This session exists so that does not happen to you.
              </p>
            </div>

            {/* What Comes Next */}
            <div className="mb-16">
              <h2
                className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
              >
                What Comes Next
              </h2>
              <p
                className="text-base sm:text-lg font-inter text-center max-w-3xl mx-auto"
                style={{ color: '#4A5568', lineHeight: '1.7' }}
              >
                For founders whose session surfaces risks that require deeper engagement, across integration strategy, physician adoption planning, or ongoing clinical and systems oversight, we offer a structured path to partnership. The session is where that conversation starts.
              </p>
            </div>

            {/* FAQ */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
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
                      className="px-8 py-6 text-left hover:no-underline font-playfair font-bold text-lg sm:text-xl"
                      style={{ color: '#1A2A3A', letterSpacing: '-0.01em' }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <p className="text-base font-inter leading-relaxed" style={{ color: '#4A5568', lineHeight: '1.8' }}>
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
                className="inline-block p-6 rounded-2xl mb-10"
                style={{
                  background: '#FBF8F1',
                  border: '2px solid #D4B65D',
                }}
              >
                <p className="text-lg font-inter font-medium italic" style={{ color: '#718DA9', lineHeight: '1.7' }}>
                  We guarantee to deliver a clinical adoption strategy that accelerates physician buy-in, or we keep working until we do.
                </p>
              </div>

              <div>
                <Button
                  onClick={handleBooking}
                  className="text-base font-semibold rounded-lg px-9 py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                    color: '#2A3B4F',
                    borderColor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Book Your Clinical Clarity Session
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

export default ClinicalClaritySession;
