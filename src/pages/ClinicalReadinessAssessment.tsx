import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Stethoscope, Shield, Users, Cpu, Scale, ClipboardList, Search, FileText, Send, Video } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

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
    description: "Healthcare IT Architect with 15+ years and 40+ Epic implementations specializing in women's health technology enterprise integration.",
    sameAs: "https://www.linkedin.com/in/johnathonfaulkner/",
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
        <section className="relative w-full overflow-hidden pt-[180px] pb-[60px] md:pt-[200px] md:pb-[80px]" style={{ paddingTop: 'max(180px, calc(180px + env(safe-area-inset-top, 0px)))' }}>
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
                Signing the LOI is not the hard part.<br />
                What comes next is.
              </h1>

              <p
                className="mb-8 sm:mb-10 font-inter max-w-2xl mx-auto"
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 20px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  lineHeight: '1.6',
                  textWrap: 'balance',
                }}
              >
                A structured 14-day readiness engagement built around your product, your integration, and your pilot before your go-live date arrives.
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
                Book Your Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 1 — The Problem */}
        <section
          className="px-5 sm:px-6 pt-10 pb-8 sm:pt-14 sm:pb-10"
          style={{
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-6 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Most pilots don't fail because the product was wrong.
            </h2>
            <div className="max-w-[680px] mx-auto">
              <p
                className="text-base sm:text-lg font-inter mb-6"
                style={{ color: '#4A5568', lineHeight: '1.8', textWrap: 'balance' }}
              >
                They fail because no one mapped the product to actual clinical workflows. No one stress-tested the integration before go-live. No one built the governance a health system needs when something goes sideways.
              </p>
              <p
                className="text-base sm:text-lg font-inter mb-6"
                style={{ color: '#4A5568', lineHeight: '1.8', textWrap: 'balance' }}
              >
                By the time those gaps surface, your champion is exposed and the relationship is already fragile.
              </p>
              <p
                className="text-base sm:text-lg font-inter font-semibold"
                style={{ color: '#1A2A3A', lineHeight: '1.8' }}
              >
                This assessment closes those gaps. In 14 days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Who This Is For */}
        <section
          className="px-5 sm:px-6 py-8 sm:py-10"
          style={{ background: '#F5F0E4' }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-8 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              This is built for you if:
            </h2>
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.06), rgba(113,141,169,0.02))',
                border: '1.5px solid rgba(113,141,169,0.2)',
              }}
            >
              <div className="space-y-4">
                {[
                  "You have a signed pilot or LOI with a go-live date on the calendar",
                  "This is your first enterprise deployment and a failed pilot costs more than money",
                  "You are operating in OB/GYN, maternal health, reproductive care, or women's digital health where clinical trust is non-negotiable",
                  "Your leadership team needs to walk into go-live knowing the most predictable failure points have been found and addressed",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                    <p className="text-base sm:text-lg font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — What We Evaluate */}
        <section
          className="px-5 sm:px-6 py-8 sm:py-10"
          style={{ background: '#F5F0E4' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-8 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Five domains. Every health system checks all of them.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Stethoscope,
                  title: "Clinical Workflow Fit",
                  text: "Where your product lives in a physician's actual day at 6:47 AM when your champion is three charts behind and a nurse is waiting.",
                },
                {
                  icon: Shield,
                  title: "Governance & Risk Infrastructure",
                  text: "Escalation pathways, kill-switch protocol, defined KPIs, and incident language your legal and compliance teams can defend.",
                },
                {
                  icon: Users,
                  title: "Physician Adoption Strategy",
                  text: "Whether your champion plan is realistic, how you track utilization, and how you catch quiet non-adoption before it becomes a contract non-renewal.",
                },
                {
                  icon: Cpu,
                  title: "Technology Integration Reality",
                  text: "What your integration actually is versus what your pilot agreement likely requires. Not what's in the deck, what's real.",
                },
                {
                  icon: Scale,
                  title: "Trust & Liability Exposure",
                  text: "Who owns the outcome if your product influences a clinical decision that goes wrong and whether your current architecture reflects that answer.",
                },
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
                      <Icon size={24} style={{ color: '#718DA9' }} />
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
          </div>
        </section>

        {/* Section 4 — How It Works */}
        <section
          className="px-5 sm:px-6 py-8 sm:py-10"
          style={{ background: '#F5F0E4' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-8 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              14 days. Five domains. One deliverable.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "1", icon: ClipboardList, title: "Days 1 to 2: Structured Intake", text: "We review your product, pilot terms, and integration documentation before any assessment begins." },
                { step: "2", icon: Search, title: "Days 3 to 10: Active Evaluation", text: "Assessment across all five domains with targeted async questions as findings develop." },
                { step: "3", icon: FileText, title: "Days 11 to 12: Report Preparation", text: "Written report and prioritized remediation roadmap prepared." },
                { step: "4", icon: Send, title: "Days 12 to 14: Report Delivered", text: "A document you can share with your board, investors, or health system counterparts." },
                { step: "5", icon: Video, title: "Within 48 Hours: Live Presentation", text: "60-minute findings call with both practitioners, clinical and operational perspective in the same conversation. Full Q&A. Zero ambiguity about next steps." },
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
          </div>
        </section>

        {/* Section 5 — Why Us */}
        <section
          className="px-5 sm:px-6 py-16 sm:py-20"
          style={{ background: '#F5F0E4' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-6"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              A Board-Certified OB/GYN and a Healthcare IT Architect who have been in the room where these decisions are made.
            </h2>
            <div className="max-w-[680px] mx-auto">
              <p
                className="text-base sm:text-lg font-inter mb-4"
                style={{ color: '#4A5568', lineHeight: '1.8', textWrap: 'balance' }}
              >
                Nicole still sees patients. John has spent 15+ years building and optimizing the most clinically complex women's health workflow environments in enterprise healthcare.
              </p>
              <p
                className="text-base sm:text-lg font-inter font-semibold"
                style={{ color: '#1A2A3A', lineHeight: '1.8' }}
              >
                We don't assess in the abstract. We assess against what health systems actually require.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 — How This Fits */}
        <section
          className="px-5 sm:px-6 py-16 sm:py-20"
          style={{ background: '#F5F0E4' }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-6 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}
            >
              Not sure where to start?
            </h2>
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D',
              }}
            >
              <p className="text-base sm:text-lg font-inter mb-4" style={{ color: '#4A5568', lineHeight: '1.8', textWrap: 'balance' }}>
                The Clinical Clarity Session is where fast triage happens: 90 minutes in, findings within 48 hours. The Clinical Readiness Assessment is what comes next when the stakes are too high for triage alone.
              </p>
              <p className="text-base sm:text-lg font-inter font-semibold" style={{ color: '#1A2A3A', lineHeight: '1.8' }}>
                Same team. Deeper scope. 14 days to comprehensive de-risking before your go-live date arrives.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 — Bottom CTA */}
        <section
          className="px-5 sm:px-6 py-16 sm:py-24"
          style={{ background: '#F5F0E4' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-block p-6 sm:p-8 rounded-2xl mb-8"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D',
              }}
            >
              <p className="text-lg sm:text-xl font-inter font-bold" style={{ color: '#1A2A3A', lineHeight: '1.6', textWrap: 'balance' }}>
                "Fourteen days to know exactly where your pilot is exposed. Before go-live, not after."
              </p>
            </div>

            <div className="mb-4">
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

            <p className="text-sm font-inter" style={{ color: '#718DA9' }}>
              14 days. Five domains. A board-ready deliverable your entire team can act on.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClinicalReadinessAssessment;
