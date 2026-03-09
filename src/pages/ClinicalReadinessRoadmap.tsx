import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Users, Shield, ClipboardList, Search, MessageSquare, Phone } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const roadmapSchema = [
{
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clinical Readiness Roadmap",
  provider: {
    "@type": "Organization",
    name: "The Faulkner Group",
    url: "https://thefaulknergroupadvisors.com"
  },
  description:
  "A structured written readiness assessment for women's health founders 3 to 6 months from their first enterprise pilot. Covers clinical workflow fit, EHR integration reality, physician adoption strategy, governance and risk infrastructure, and trust and liability exposure. Includes a 5 to 7 page written report, sequenced remediation roadmap, and 60-minute live findings call.",
  serviceType: "Healthcare Advisory",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Clinical Readiness Roadmap Deliverables",
    itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structured Intake and Product Review" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "5 to 7 Page Written Clinical Readiness Report" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sequenced Remediation Roadmap" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "60-Minute Live Findings Call" } }]

  }
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
  sameAs: "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/"
},
{
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johnathon Faulkner",
  jobTitle: "CEO and Healthcare IT Architect",
  worksFor: { "@type": "Organization", name: "The Faulkner Group" },
  description: "Healthcare IT Architect with 14+ years and 40+ Epic implementations specializing in women's health technology enterprise integration.",
  sameAs: "https://www.linkedin.com/in/johnathonfaulkner/"
}];


const faqData = [
{
  question: "What is the Clinical Readiness Roadmap?",
  answer:
  "A structured written readiness assessment built for women's health founders who are 3 to 6 months from their first enterprise pilot conversation. It covers clinical workflow fit, EHR integration reality, physician adoption strategy, governance and risk infrastructure, and trust and liability exposure. You receive a 5 to 7 page written report, a sequenced remediation roadmap, and a 60-minute live findings call with both practitioners."
},
{
  question: "Who runs the assessment?",
  answer:
  "Nicole Faulkner, D.O., a practicing OB/GYN who brings frontline clinical credibility, and Johnathon Faulkner, a Healthcare IT Architect with 14+ years and 40+ Epic implementations including Epic Women's Health. Both practitioners are involved in the full engagement."
},
{
  question: "How is this different from the Clinical Clarity Session?",
  answer:
  "The Clinical Clarity Session is a 90-minute live triage diagnostic. The Clinical Readiness Roadmap is a deeper structured engagement that produces a written report and sequenced action plan. Many founders complete a Clinical Clarity Session first, then move to the Roadmap for a comprehensive remediation plan."
},
{
  question: "What do I receive at the end?",
  answer:
  "A 5 to 7 page Written Clinical Readiness Report covering all five readiness domains, a Sequenced Remediation Roadmap with prioritized next steps, and a 60-minute Live Findings Call with both practitioners for full Q&A."
},
{
  question: "When is the right time to do this?",
  answer:
  "When you are 3 to 6 months from your first enterprise pilot conversation and want a clear, sequenced path to readiness. Also ideal after completing a Clinical Clarity Session when deeper structured planning is needed."
},
{
  question: "What are the five readiness domains?",
  answer:
  "Clinical workflow fit, EHR integration reality, physician adoption strategy, governance and risk infrastructure, and trust and liability exposure. These are the same five areas health systems evaluate before approving a new clinical product."
},
{
  question: "Is this tied to a longer engagement?",
  answer:
  "No. The Clinical Readiness Roadmap is a standalone engagement with a clear deliverable. For founders whose roadmap surfaces risks requiring deeper evaluation before a go-live date, the Clinical Readiness Assessment is the natural next step."
}];


const ClinicalReadinessRoadmap = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Clinical Readiness Roadmap | The Faulkner Group"
        description="A structured written assessment for women's health founders building toward their first enterprise conversation. Clinical workflow fit, EHR integration, physician adoption, governance, and liability exposure."
        canonical="https://thefaulknergroupadvisors.com/clinical-readiness-roadmap"
        jsonLd={roadmapSchema} />
      
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full overflow-hidden pt-[180px] pb-[60px] md:pt-[240px] md:pb-[140px]" style={{ paddingTop: 'max(180px, calc(180px + env(safe-area-inset-top, 0px)))' }}>
          <img
            src="/hero-boardroom.jpg"
            alt="Healthcare leadership team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async" />
          
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }} />
          

          <div className="relative z-10 flex items-center justify-center px-5 sm:px-6 text-center">
            <div className="max-w-[820px] w-full">
              <p
                className="mb-6 font-inter font-medium uppercase"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  color: 'hsl(45, 62%, 56%)'
                }}>
                
                Structured Readiness Engagement
              </p>

              <h1
                className="mb-6 font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 52px)',
                  lineHeight: 1.1
                }}>think you're ready? 
Let's find out

              </h1>

              <p
                className="mb-8 sm:mb-10 font-inter max-w-lg mx-auto"
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 20px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  lineHeight: '1.6'
                }}>
                
                The Clinical Readiness Roadmap is a focused written assessment built for women's health founders who are building toward their first enterprise conversation and need a clear, sequenced path to get there.
              </p>

              <Button
                onClick={handleBooking}
                className="text-sm sm:text-base font-semibold rounded-lg px-5 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                  color: '#2A3B4F',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(8px)'
                }}>
                
                Get Your Roadmap
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* This Is For You If */}
        <section
          className="px-5 sm:px-6"
          style={{
            paddingTop: '48px',
            paddingBottom: '32px',
            background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)'
          }}>
          
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-8 sm:mb-10 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}>
              
              This Is For You If
            </h2>
            <div className="space-y-3">
              {[
              "You are 3 to 6 months from your first pilot conversation and want to close the gaps before they close the deal",
              "You have completed a Clinical Clarity Session and need a deeper structured plan to act on your findings",
              "You know your product is strong but you are not confident it will survive the scrutiny of a health system's clinical and compliance teams",
              "You want a written document your leadership team, investors, or advisors can review and act on",
              "You are done guessing at what \"ready\" means and want a credible answer from people who have been on both sides of the table"].
              map((item, i) =>
              <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: '#D4B65D' }} />
                  <p className="text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                    {item}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What You Receive + Five Domains + What Comes Next + Why This Team + CTA */}
        <section
          className="px-5 sm:px-6"
          style={{
            paddingTop: '20px',
            paddingBottom: '48px',
            background: 'linear-gradient(180deg, #F5F0E4 0%, #F5F0E4 100%)'
          }}>
          
          <div className="max-w-4xl mx-auto">
            {/* What You Receive */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}>
              
              What You Receive
            </h2>
            <p
              className="text-sm sm:text-lg font-inter text-left mb-8 sm:mb-10 mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7', maxWidth: '680px', textWrap: 'balance' }}>
              
              This is not a call. It is a structured engagement with a clear deliverable at the end.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-16">
              {[
              { step: "1", icon: ClipboardList, title: "Structured Intake", text: "You submit your product documentation, integration details, and current health system conversations before the assessment begins." },
              { step: "2", icon: MessageSquare, title: "Async Q&A", text: "Targeted questions from our team as findings develop, so the final report reflects your actual situation, not a generic framework." },
              { step: "3", icon: FileText, title: "5 to 7 Page Written Clinical Readiness Report", text: "A prioritized assessment across all five readiness domains covering clinical workflow fit, EHR integration reality, physician adoption strategy, governance and risk infrastructure, and trust and liability exposure." },
              { step: "4", icon: Search, title: "Sequenced Remediation Roadmap", text: "A clear, ordered action plan so you know what to fix first and why." },
              { step: "5", icon: Phone, title: "60-Minute Live Findings Call", text: "Both practitioners on the call, clinical and systems perspective together, with full Q&A so you leave with zero ambiguity about next steps." }].
              map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl"
                    style={{
                      background: 'white',
                      border: '1.5px solid rgba(243,218,115,0.3)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                    }}>
                    
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                      <span
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-inter font-bold flex-shrink-0"
                        style={{ background: 'rgba(243,218,115,0.2)', color: '#1A2A3A' }}>
                        
                        {item.step}
                      </span>
                      <Icon size={18} className="flex-shrink-0 hidden sm:block" style={{ color: '#718DA9' }} />
                      <h3 className="text-sm sm:text-base font-inter font-bold" style={{ color: '#1A2A3A' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base font-inter" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                  </div>);

              })}
            </div>

            {/* The Five Readiness Domains */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}>
              
              The Five Readiness Domains
            </h2>
            <p
              className="text-sm sm:text-lg font-inter text-left mb-8 sm:mb-10 mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7', maxWidth: '680px', textWrap: 'balance' }}>
              
              Every assessment covers the same five areas that health systems evaluate before saying yes to a new clinical product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-16">
              {[
              {
                title: "Clinical Workflow Fit",
                text: "Where your product lives in a physician's actual day and whether that interaction is sustainable at scale."
              },
              {
                title: "EHR Integration Reality",
                text: "What your integration actually is versus what your pilot agreement will likely require."
              },
              {
                title: "Physician Adoption Strategy",
                text: "Whether your champion plan is realistic and how you will identify resistance before it becomes quiet non-adoption."
              },
              {
                title: "Governance and Risk Infrastructure",
                text: "Whether you have escalation pathways, defined KPIs, and incident language your health system's legal team can defend."
              },
              {
                title: "Trust and Liability Exposure",
                text: "Who owns the outcome if your product influences a clinical decision that goes wrong, and whether your current architecture reflects that answer."
              }].
              map((item, i) =>
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl"
                style={{
                  background: 'white',
                  border: '1.5px solid rgba(243,218,115,0.3)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                }}>
                
                  <h3 className="text-base font-inter font-bold mb-2" style={{ color: '#1A2A3A' }}>
                    {item.title}
                  </h3>
                  <p className="text-base font-inter" style={{ color: '#2A3B4F', lineHeight: '1.7' }}>
                    {item.text}
                  </p>
                </div>
              )}
            </div>

            {/* What Comes Next */}
            <div className="mb-12 sm:mb-16">
              <h2
                className="text-2xl sm:text-4xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}>
                
                What Comes Next
              </h2>
              <p
                className="text-sm sm:text-lg font-inter text-left mb-6 mx-auto"
                style={{ color: '#4A5568', lineHeight: '1.7', maxWidth: '680px', textWrap: 'balance' }}>
                
                For founders whose roadmap surfaces risks requiring deeper evaluation before a go-live date, the Clinical Readiness Assessment is the natural next step. A 14-day engagement. Five domains. A board-ready deliverable your entire leadership team can act on.
              </p>
              <p
                className="text-sm sm:text-lg font-inter font-bold text-left mb-8 mx-auto"
                style={{ color: '#1A2A3A', lineHeight: '1.7', maxWidth: '680px' }}>
                
                You do not need a signed contract to get started. You need the clarity to get one.
              </p>
              <div className="text-center">
                <Button
                  onClick={() => window.location.href = '/clinical-readiness-assessment'}
                  className="text-sm sm:text-base font-semibold rounded-lg px-5 sm:px-9 py-4 sm:py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                    color: '#2A3B4F',
                    borderColor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)'
                  }}>
                  
                  Learn About the Clinical Readiness Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Why This Team */}
            <h2
              className="text-2xl sm:text-4xl font-playfair font-bold mb-6 text-center"
              style={{ color: '#1A2A3A', letterSpacing: '-0.02em' }}>
              
              Why This Team
            </h2>
            <p
              className="text-sm sm:text-lg font-inter text-left mb-4 mx-auto"
              style={{ color: '#4A5568', lineHeight: '1.7', maxWidth: '680px', textWrap: 'balance' }}>
              
              There is no other advisory team in women's digital health that brings a practicing OB/GYN and an EHR Women's Health Architect to the same engagement. Nicole still sees patients. John has built and optimized the most clinically complex OB/GYN workflow environments in enterprise healthcare across 40+ Epic implementations. Together, they see what your product documentation does not show and what your health system counterpart will not tell you until it is too late.
            </p>
            <p
              className="text-sm sm:text-lg font-inter font-bold text-left mb-12 sm:mb-16 mx-auto"
              style={{ color: '#1A2A3A', lineHeight: '1.7', maxWidth: '680px' }}>
              
              You are building for women. Build it so it actually reaches them.
            </p>

            {/* The Investment */}
            <div
              className="p-5 sm:p-8 rounded-2xl mb-12 sm:mb-16"
              style={{
                background: '#FBF8F1',
                border: '2px solid #D4B65D'
              }}>
              
              <h3
                className="text-2xl font-playfair font-bold mb-4 text-center"
                style={{ color: '#1A2A3A' }}>
                
                The Investment
              </h3>
              <p className="text-sm sm:text-base font-inter text-center max-w-2xl mx-auto mb-6" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                Structured intake, async Q&A, a 5 to 7 page written report, sequenced remediation roadmap, and a 60-minute live findings call with both practitioners.
              </p>
              <p
                className="text-3xl sm:text-4xl font-playfair font-bold text-center mb-6 sm:mb-8"
                style={{ color: '#1A2A3A' }}>
                
                $5,000
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
                    backdropFilter: 'blur(8px)'
                  }}>
                  
                  Get Your Roadmap
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
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
                  backdropFilter: 'blur(8px)'
                }}>
                
                Get Your Roadmap
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
                text: faq.answer
              }
            }))
          })
        }} />
      
    </>);

};

export default ClinicalReadinessRoadmap;