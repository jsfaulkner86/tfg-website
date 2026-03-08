import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Users, Shield, ClipboardList, Search, Video, Send, MapPin, FileCheck, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import OnStage from "@/components/OnStage";
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
                90-Minute Triage Session
              </p>

              <h1
                className="mb-6 font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 52px)',
                  lineHeight: 1.1,
                }}
              >
                Find Your Gaps Before Your Health System Does
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
                Most women's health founders are more ready than they think. This session finds the critical gaps standing between your product and a confident health system conversation.
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
                Book Your Clinical Clarity Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* This Is For You If */}
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
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              This Is For You If
            </h2>
            <div className="space-y-3 mb-12 sm:mb-16">
              {[
                "You are in active conversations with a health system and want to walk in prepared, not reactive",
                "You have heard \"not yet\" from a health system and do not fully know why",
                "You are preparing your first pilot proposal and want it pressure-tested by people who know what is on the other side of that table",
                "You have a go-live date approaching and need fast clarity on your most critical gaps",
                "You are post-raise and building toward enterprise and you want to know what \"ready\" actually looks like before you are in the room",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                  <p
                    className="text-base font-inter"
                    style={{ color: '#4A5568', lineHeight: '1.7', textWrap: 'balance' }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Happens in the Session + What Comes Next + The Investment + Why This Team + FAQ + CTA */}
        <section
          className="px-4 sm:px-6"
          style={{
            paddingTop: '20px',
            paddingBottom: '60px',
            background: 'linear-gradient(180deg, #F5F0E4 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* What Happens in the Session */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What Happens in the Session
            </h2>
            <p
              className="text-base sm:text-lg font-inter text-left mb-10 mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7', maxWidth: '680px', textWrap: 'balance' }}
            >
              You bring your product, your current health system conversations, and your biggest unknowns. We bring 90 minutes of focused, honest evaluation across the areas that determine whether a pilot succeeds or quietly fails.
            </p>

            <div className="space-y-5 mb-6 max-w-[680px] mx-auto">
              {[
                { icon: Users, text: "Clinical workflow fit: where your product lives in a physician's actual day" },
                { icon: Shield, text: "EHR integration reality: what you have versus what a contract will require" },
                { icon: CheckCircle2, text: "Physician adoption risk: whether your champion strategy will hold" },
                { icon: FileText, text: "Governance and liability exposure: the questions your health system's legal team will ask" },
                { icon: ClipboardList, text: "Readiness gaps: what to fix first and in what order" },
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

            <p
              className="text-base font-inter text-center mb-16"
              style={{ color: '#718DA9', lineHeight: '1.7', fontStyle: 'italic' }}
            >
              Within 48 hours of your session, findings are in your hands. Written. Prioritized. Actionable.
            </p>

            {/* What Comes Next */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              What Comes Next
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-6 items-stretch">
              {[
                {
                  icon: CheckCircle2,
                  title: "You are closer than you think",
                  body: "A few targeted adjustments and you are ready to move.",
                },
                {
                  icon: MapPin,
                  title: "You need a structured roadmap",
                  body: "Our Clinical Readiness Roadmap is a focused written assessment that maps your exact gaps and sequenced remediation steps, built for founders 3 to 6 months from their first pilot.",
                },
                {
                  icon: Briefcase,
                  title: "Your stakes are too high for triage alone",
                  body: "The Clinical Readiness Assessment is a 14-day engagement that produces a board-ready deliverable you can share with investors, your health system counterpart, and your leadership team before go-live.",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col p-6 rounded-2xl"
                    style={{
                      background: 'white',
                      border: '1.5px solid rgba(243,218,115,0.3)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div className="flex flex-row items-start gap-3 mb-3">
                      <Icon size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#D4B65D' }} />
                      <h3 className="text-base font-inter font-bold text-left" style={{ color: '#1A2A3A' }}>
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-base font-inter flex-1" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <p
              className="text-base font-inter text-center mb-16"
              style={{ color: '#718DA9', lineHeight: '1.7', fontStyle: 'italic' }}
            >
              You do not have to know which path you are on before the session. That is what the session is for.
            </p>

            {/* The Investment */}
            <div
              className="p-5 sm:p-8 rounded-2xl mb-12 sm:mb-16"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D',
              }}
            >
              <h3
                className="text-2xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A' }}
              >
                The Investment
              </h3>
              <p className="text-sm sm:text-base font-inter text-center max-w-2xl mx-auto mb-6" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                90-minute live session with both practitioners, clinical and systems perspective in the same room. Written findings delivered within 48 hours.
              </p>
              <p
                className="text-3xl sm:text-4xl font-playfair font-bold text-center mb-6 sm:mb-8"
                style={{ color: '#1A2A3A' }}
              >
                $1,500
              </p>
              <div className="text-center">
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
                  Book Your Clinical Clarity Session
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Why This Team */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Why This Team
            </h2>
            <p
              className="text-base sm:text-lg font-inter text-left mb-4 mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7', maxWidth: '680px', textWrap: 'balance' }}
            >
              There is no other advisory team in women's digital health that brings a practicing OB/GYN and an EHR Women's Health Architect to the same conversation. Nicole still sees patients. John has built and optimized the most clinically complex OB/GYN workflow environments in enterprise healthcare across 40+ Epic implementations. Together, they see what your product documentation does not show and what your health system counterpart will not tell you until it is too late.
            </p>
            <p
              className="text-base sm:text-lg font-inter font-bold text-left mb-16 mx-auto"
              style={{ color: '#1A2A3A', lineHeight: '1.7', maxWidth: '680px' }}
            >
              You are building for women. Build it so it actually reaches them.
            </p>

            {/* FAQ */}
            <h2
              className="text-3xl sm:text-4xl font-playfair font-bold mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="mb-12 sm:mb-16">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
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
            <div className="text-center" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
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
                Book Your Clinical Clarity Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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

export default ClinicalClaritySession;
