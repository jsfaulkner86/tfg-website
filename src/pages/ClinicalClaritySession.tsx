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

const sessionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clinical Clarity Session",
  provider: {
    "@type": "Organization",
    name: "The Faulkner Group",
  },
  description:
    "A 90-minute virtual diagnostic with a board-certified OB/GYN and Healthcare IT Architect that identifies the highest-risk failure points in your health tech product's clinical adoption strategy.",
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "USD",
  },
};

const faqData = [
  {
    question: "What is the Clinical Clarity Session?",
    answer:
      "A 90-minute virtual diagnostic that identifies the 1 to 3 highest-risk failure points in your health tech product's clinical adoption strategy. It covers clinical readiness, physician adoption, EHR integration, and sales/deployment readiness. You receive a written Clinical Clarity Summary within 48 hours.",
  },
  {
    question: "Who runs the session?",
    answer:
      "Nicole Faulkner, D.O., a practicing OB/GYN who brings frontline clinical credibility. Johnathon Faulkner, a healthcare IT architect with deep experience in enterprise health system environments and EHR ecosystems. Both are in the room for the full 90 minutes.",
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
        description="90-minute diagnostic with a board-certified OB/GYN and Healthcare IT Architect. Identify your top clinical adoption risks for $1,500."
        canonical="https://thefaulknergroupadvisors.com/clinical-clarity-session"
        jsonLd={sessionSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section
          className="relative px-4 sm:px-6 overflow-hidden"
          style={{
            paddingTop: 'calc(180px + env(safe-area-inset-top, 0px))',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #3A5A73 0%, #5A7D99 100%)',
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.1) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p
              className="text-xs sm:text-sm font-inter font-semibold tracking-[0.15em] uppercase mb-4"
              style={{ color: 'rgba(243,218,115,0.9)' }}
            >
              90-Minute Diagnostic · $1,500
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 sm:mb-8"
              style={{
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
              }}
            >
              Find the Failure Points<br />Before Your Pilot Does
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl font-inter font-light mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
              style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.7' }}
            >
              A practicing OB/GYN and an enterprise healthcare IT architect diagnose your product's risks across clinical readiness, physician adoption, EHR integration, and deployment, in one session, before your next pilot, renewal, or investor conversation depends on it.
            </p>

            <Button
              onClick={handleBooking}
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl group transition-all duration-300 font-semibold w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                color: '#1A2A3A',
                boxShadow: '0 8px 32px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)',
                border: '2px solid rgba(255,255,255,0.2)',
              }}
            >
              Book Your Clinical Clarity Session
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </div>
        </section>

        {/* Problem / Context */}
        <section
          className="px-4 sm:px-6"
          style={{
            paddingTop: '60px',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Most Pilots Are Already Failing Before the First Physician Logs In
            </h2>
            <p
              className="text-base sm:text-lg font-inter text-center mb-10 max-w-3xl mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              The gap between a product that works in demo and one that survives a real clinical environment is where most health tech companies lose. It shows up in four places.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                {
                  title: "Clinical Readiness & Governance",
                  text: "No clinical champion identified. Decision rights are unclear. The health system's governance process will stall your timeline and no one on your team has mapped it.",
                },
                {
                  title: "Physician Adoption",
                  text: "Workflows that break clinic rhythm. No answer for \"what do I stop doing?\" Physicians are polite in the demo and absent after go-live.",
                },
                {
                  title: "EHR Integration & Training",
                  text: "A build that doesn't reflect real workflows. Fragile, one-off integrations. Training plans that assume physicians will learn on their own time.",
                },
                {
                  title: "Sales, CSM & Deployment",
                  text: "Sales promises that operations cannot keep. Under-resourced launches. Success metrics that measure logins instead of clinical outcomes.",
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

            <p
              className="text-base sm:text-lg font-inter text-center max-w-3xl mx-auto mb-16"
              style={{ color: '#4A5568', lineHeight: '1.7' }}
            >
              These risks are hard to see from inside the company or the health system. A neutral diagnostic, led by a clinician and a systems architect who have no stake in your internal politics, surfaces what internal teams cannot.
            </p>

            {/* What You Walk Away With */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What You Walk Away With
            </h2>

            <div className="space-y-5 mb-16">
              {[
                { icon: FileText, text: "Pre-session product review, so the 90 minutes are spent on diagnosis and decision-making, not demo and orientation." },
                { icon: Users, text: "Live diagnostic with Nicole Faulkner, D.O. (practicing OB/GYN) and Johnathon Faulkner (healthcare IT architect), so clinical truth and enterprise systems reality are in the same room, not in separate meetings." },
                { icon: Shield, text: "Identification of your 1 to 3 highest-risk failure points, mapped across clinical readiness and governance, physician adoption, EHR integration and training, and sales/CSM/deployment." },
                { icon: CheckCircle2, text: "Specific, prioritized next steps tied to your product and your pipeline, not generic frameworks or theoretical models." },
                { icon: FileText, text: "Written Clinical Clarity Summary delivered within 48 hours: findings, risks, and recommended actions designed to be shared directly with your team, your board, or your investors." },
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
                  "Approaching your first or next health system pilot and need to know what will break before it does.",
                  "Running an in-flight pilot that feels fragile, with adoption plateauing or stakeholders going quiet.",
                  "Post-pilot, trying to recover credibility or redesign your approach before the next attempt.",
                  "Preparing for investor due diligence or board conversations where clinical traction will be questioned.",
                  "GTM or revenue leaders who own sales, CSM, or deployment into health systems and need a clinical reality check.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base font-inter mt-5" style={{ color: '#718DA9', lineHeight: '1.7' }}>
                This session is valuable even if your product works technically, you have early champions, or revenue numbers look okay but feel brittle. The risks we surface are the ones that compound quietly.
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

            {/* Pricing & Risk Framing */}
            <div
              className="p-8 rounded-2xl mb-16"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D',
              }}
            >
              <h3
                className="text-2xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A' }}
              >
                The Clinical Clarity Session Is $1,500
              </h3>
              <p className="text-base font-inter text-center mb-6" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                Consider what you are protecting:
              </p>
              <div className="space-y-3 max-w-2xl mx-auto mb-6">
                {[
                  "A failed or stalled pilot costs 6 to 12 months and the credibility needed to win the next one.",
                  "A lost health system deal costs the pipeline it took a year to build.",
                  "A skeptical investor conversation costs leverage you cannot recover in the same round.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight size={16} className="flex-shrink-0 mt-1.5" style={{ color: '#D4B65D' }} />
                    <p className="text-base font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base font-inter text-center" style={{ color: '#718DA9', lineHeight: '1.7', fontStyle: 'italic' }}>
                $1,500 buys you 90 minutes with a clinician and a systems architect who will tell you what is actually at risk, and what to do about it, before the stakes get higher.
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
                  className="text-lg px-10 py-7 rounded-xl group transition-all duration-300 font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #5A7D99 0%, #4A6B85 100%)',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 32px rgba(90,125,153,0.3)',
                    border: '2px solid rgba(243,218,115,0.4)',
                  }}
                >
                  Book Your Clinical Clarity Session
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
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
