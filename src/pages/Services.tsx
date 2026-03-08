import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Brain, Cpu, Users, Shield, Lightbulb, Handshake } from "lucide-react";
import BottomVideo from "@/components/BottomVideo";
import OnStage from "@/components/OnStage";
import StickyCTA from "@/components/StickyCTA";
import { Link } from "react-router-dom";

const handleBooking = () => {
  window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
};

const Eyebrow = ({ children }: {children: React.ReactNode;}) =>
<p
  className="mb-4 font-inter font-medium uppercase"
  style={{
    fontSize: '13px',
    letterSpacing: '0.2em',
    color: 'hsl(45, 62%, 56%)'
  }}>

    {children}
  </p>;


const SectionHeading = ({ children, light = false }: {children: React.ReactNode;light?: boolean;}) =>
<h2
  className={`font-display font-bold mb-6 ${light ? 'text-white' : ''}`}
  style={{
    fontSize: 'clamp(26px, 3.2vw, 44px)',
    lineHeight: 1.15,
    color: light ? undefined : 'hsl(210, 14%, 19%)'
  }}>

    {children}
  </h2>;


/* ───────────────────────── 1. HERO ───────────────────────── */
const ServicesHero = () =>
<section className="relative w-full overflow-hidden pt-[calc(120px+env(safe-area-inset-top,0px))] pb-[60px] md:pt-[200px] md:pb-[140px]">
    <img
    src="/hero-boardroom.jpg"
    alt="The Faulkner Group women's health tech advisory team in a strategy session"
    className="absolute inset-0 w-full h-full object-cover" />

    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }} />

    <div className="relative z-10 flex items-center justify-center px-6 text-center">
      <div className="max-w-[820px]">
        <Eyebrow>Healthcare Advisory Services</Eyebrow>

        <h1
        className="mb-4 md:mb-6 font-display font-bold text-white"
        style={{ fontSize: 'clamp(26px, 3.8vw, 52px)', lineHeight: 1.1 }}>

          <span className="block">Two Brains. One Mission.</span>
          <span className="block">Zero Wasted Time.</span>
        </h1>

        <p
        className="mb-8 md:mb-10 font-inter px-2"
        style={{
          fontSize: 'clamp(15px, 1.6vw, 20px)',
          color: 'rgba(255,255,255,0.85)',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)'
        }}>

          Strategy and system fluency for women's health tech founders.
        </p>

        <Button
        onClick={handleBooking}
        className="text-base font-semibold rounded-lg px-9 py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
        style={{
          background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
          color: '#2A3B4F',
          borderColor: 'rgba(255,255,255,0.25)',
          boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
          backdropFilter: 'blur(8px)',
        }}>
          Let's Meet
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </section>;


/* ───────────────────────── 2. DUAL BRAIN ───────────────────────── */
const DualBrain = () =>
<section className="py-10 md:py-20 px-5 md:px-6 bg-background">
    <div className="max-w-5xl mx-auto text-center">
      <Eyebrow>Our Approach</Eyebrow>
      <SectionHeading>      Clinical with Health Technology     

    </SectionHeading>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-12">
        {/* Advisory Brain */}
        <div className="rounded-lg p-5 md:p-8 text-left border border-border" style={{ background: 'hsl(0 0% 98%)' }}>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(45, 62%, 56%, 0.15)' }}>
              <Brain className="h-6 w-6" style={{ color: 'hsl(45, 62%, 56%)' }} />
            </div>
            <h3 className="text-xl font-display font-bold" style={{ color: 'hsl(210, 14%, 19%)' }}>The Medical Brain

          </h3>
          </div>
          <p className="font-inter leading-relaxed" style={{ color: 'hsl(0, 0%, 35%)', fontSize: '15px' }}>We help women's health tech founders, operators, and product leaders align their people, processes, and vision before a single tool is selected or configured. We believe clinicians and physicians are crucial to your success.

        </p>
        </div>

        {/* MedTech Brain */}
        <div
        className="rounded-lg p-5 md:p-8 text-left border border-border"
        style={{ background: 'hsl(0 0% 98%)' }}>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(45, 62%, 56%, 0.15)' }}>
              <Cpu className="h-6 w-6" style={{ color: 'hsl(45, 62%, 56%)' }} />
            </div>
            <h3 className="text-xl font-display font-bold" style={{ color: 'hsl(210, 14%, 19%)' }}>The Health Technology Brain

          </h3>
          </div>
          <p className="font-inter leading-relaxed" style={{ color: 'hsl(0, 0%, 35%)', fontSize: '15px' }}>
            We get into the weeds: EHR integrations, clinical workflow build, AI-ready infrastructure, and the operational mechanics that make technology actually work at the bedside.
          </p>
        </div>
      </div>

      <p
      className="mt-10 font-inter font-medium text-lg"
      style={{ color: 'hsl(210, 14%, 19%)' }}>

        Together, they eliminate the gap between vision and execution.
      </p>
    </div>
  </section>;


/* ───────────────────────── 3. ENGAGEMENT MODELS ───────────────────────── */
const engagements = [
{
  numeral: 'I',
  name: 'Strategic Advisory',
  tagline: 'Equity-Based. Long-Term.',
  paragraph: 'A selective, equity-based advisory partnership for early-stage companies where we believe in the mission, the founders, and the long-term potential. We bring clinical and systems credibility that can materially change your trajectory before the high-stakes moments arrive. We take a small number of these partnerships.',
  cta: 'Explore the Partnership',
  href: '/advisory-partnership',
  external: false
},
{
  numeral: 'II',
  name: 'Clinical Clarity Session',
  tagline: '90-Minute Diagnostic',
  paragraph: 'A 90-minute diagnostic led by Nicole Faulkner, D.O. (practicing OB/GYN) and Johnathon Faulkner (enterprise healthcare IT architect). We identify your highest-risk failure points across clinical readiness and governance, physician adoption, EHR integration and training, and sales/CSM and deployment before your pilot, your deal, or your investor meeting depends on it.',
  price: '$1,500',
  cta: 'Book a Clinical Clarity Session',
  href: '/clinical-clarity-session',
  external: false
},
{
  numeral: 'III',
  name: 'Clinical Readiness Roadmap',
  tagline: 'Structured Readiness Engagement',
  paragraph: 'A focused written assessment for women\'s health founders building toward their first enterprise conversation. Five readiness domains. A sequenced remediation roadmap. A 60-minute live findings call with both practitioners. Built for founders who need more than triage and less than a full 14-day engagement.',
  price: '$5,000',
  cta: 'Learn More',
  href: '/clinical-readiness-roadmap',
  external: false
},
{
  numeral: 'IV',
  name: 'Clinical Readiness Assessment',
  tagline: '14-Day Deep Engagement',
  paragraph: 'A structured 14-day readiness engagement that evaluates clinical workflow fit, governance infrastructure, physician adoption strategy, EHR integration, and liability exposure before your enterprise pilot goes live. Same team, deeper scope, comprehensive de-risking before your go-live date.',
  price: 'Investment upon inquiry',
  cta: 'Learn About the Assessment',
  href: '/clinical-readiness-assessment',
  external: false
},
{
  numeral: 'V',
  name: 'Operating Partner',
  tagline: 'Embedded. Ongoing. Operational.',
  paragraph: 'An ongoing clinical and systems operating partnership across the full lifecycle of your enterprise health system relationship — from the sales conversation through go-live, adoption, and contract renewal. Our team embedded in your organization for the duration. We take a small number of partners at a time.',
  cta: 'Start a Conversation',
  href: '/operating-partner-retainer',
  external: false
}];


const EngagementModels = () =>
<section className="py-10 md:py-20 px-5 md:px-6 bg-background">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <Eyebrow>Engagement Models</Eyebrow>
        <SectionHeading>The Right Level of Support. No Fluff. No Bloat.</SectionHeading>
        <p className="font-inter" style={{ color: 'hsl(0,0%,35%)', fontSize: '16px' }}>
          Choose the engagement that fits where you are and scale when you are ready.
        </p>
      </div>

      <div>
        {engagements.map((eng) =>
      <div key={eng.numeral}>
            <div className="h-px w-full" style={{ background: 'hsl(0, 0%, 85%)' }} />
              <div className="py-6 md:py-16">
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-12">
                <span
              className="font-display font-light flex-shrink-0"
              style={{ fontSize: '36px', lineHeight: 1, color: 'hsl(45, 62%, 56%)', minWidth: '60px' }}>

                  {eng.numeral}
                </span>
                <div className="flex-1">
                  <h3
                className="font-display font-bold mb-1"
                style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.2, color: 'hsl(210, 14%, 19%)' }}>

                    {eng.name}
                  </h3>
                  <p className="font-display italic font-bold mb-5" style={{ fontSize: '16px', color: 'hsl(45, 62%, 56%)' }}>
                    {eng.tagline}
                  </p>
                  <p
                className="font-inter leading-relaxed mb-4 md:mb-6"
                style={{ fontSize: '14px', color: 'hsl(0, 0%, 35%)', maxWidth: '640px' }}>

                    <span dangerouslySetInnerHTML={{ __html: eng.paragraph }} />
                  </p>
                  {eng.price && (
                    <p
                      className="font-playfair font-bold mb-4"
                      style={{ fontSize: '18px', color: 'hsl(210, 14%, 19%)' }}
                    >
                      {eng.price}
                    </p>
                  )}
                  <a
                href={eng.href}
                target={eng.external ? '_blank' : undefined}
                rel={eng.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-inter font-semibold text-sm min-h-[44px] transition-all duration-300 hover:gap-3"
                style={{ color: 'hsl(45, 62%, 46%)' }}>

                    {eng.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
      )}
        <div className="h-px w-full" style={{ background: 'hsl(0, 0%, 85%)' }} />
      </div>
    </div>
  </section>;


/* ───────────────────────── 4. PARTNERSHIP ───────────────────────── */
const partnershipItems = [
{ icon: Shield, text: 'Ongoing clinical advisory and technical oversight' },
{ icon: Users, text: 'Fractional Chief Clinical Systems Officer support' },
{ icon: Lightbulb, text: 'Strategic guidance on product-market fit and physician adoption' },
{ icon: Handshake, text: 'Access to our OB/GYN, operator, and health tech leader network' },
{ icon: Cpu, text: 'Co-development support for femtech and women\'s health innovations' },
{ icon: Brain, text: 'Executive advisory access to both co-founders' }];


const Partnership = () =>
<section className="py-10 md:py-20 px-5 md:px-6 relative overflow-hidden" style={{ background: 'hsl(210, 25%, 35%)' }}>
    <div className="absolute inset-0 opacity-10" style={{
    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
    backgroundSize: '40px 40px'
  }} />
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <Eyebrow>For the Long Game</Eyebrow>
        <h2 className="font-display font-bold mb-6 text-white" style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.15 }}>Partnership. Not a Retainer. A Relationship.</h2>
        <p className="font-inter text-white/85 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '16px' }}>
          Some of the most important work we do does not fit inside a sprint timeline. Our Partnership Model is designed for women's health tech companies who want The Faulkner Group embedded in their work, not just consulting from the outside.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
        {partnershipItems.map(({ icon: Icon, text }) =>
      <div key={text} className="flex items-start gap-3">
            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(45, 62%, 56%)' }} />
            <span className="font-inter text-white/90" style={{ fontSize: '15px' }}>{text}</span>
          </div>
      )}
      </div>

      <blockquote
      className="text-center font-display italic text-xl mb-10"
      style={{ color: 'hsl(45, 62%, 70%)' }}>

        "We do not just consult. We build with you until it works."
      </blockquote>

      <div className="text-center">
        <Button
        onClick={handleBooking}
        className="text-base font-semibold rounded-md px-8 py-5 min-h-[48px] border-0 group transition-all duration-300"
        style={{ backgroundColor: '#F3DA73', color: '#5882A1' }}>

          Explore Partnership
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </section>;


/* ───────────────────────── 5. IS THIS YOU? ───────────────────────── */
const fitChecks = [
'You are running a women\'s health tech company and physicians are not adopting your product',
'Your EHR integration was built for compliance, not for clinicians',
'You are scaling and need someone who understands both the boardroom and the build environment',
'You want a partner, not a vendor'];


const IsThisYou = () =>
<section className="py-10 md:py-20 px-5 md:px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <Eyebrow>Who We Serve</Eyebrow>
      <SectionHeading>The Faulkner Group Is Right For You If...</SectionHeading>

      <div className="mt-8 md:mt-10 space-y-4 md:space-y-5 text-left max-w-2xl mx-auto">
        {fitChecks.map((item) =>
      <div key={item} className="flex items-start gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(45, 62%, 56%)' }} />
            <span className="font-inter" style={{ color: 'hsl(0,0%,25%)', fontSize: '16px' }}>{item}</span>
          </div>
      )}
      </div>
    </div>
  </section>;


/* ───────────────────────── PAGE ───────────────────────── */
const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "What does The Faulkner Group do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Faulkner Group is a boutique advisory firm for women's health tech founders. We combine strategic advisory expertise with deep clinical and EHR integration knowledge to help women's health technology companies scale, achieve physician adoption, and build lasting clinical partnerships."
    }
  },
  {
    "@type": "Question",
    "name": "Who does The Faulkner Group serve?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We serve women's health tech founders and operators who are ready to move from traction to scale. Our clients are building technology platforms in women's health and need both strategic guidance and clinical credibility to succeed."
    }
  },
  {
    "@type": "Question",
    "name": "What is the Dual Brain model?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Dual Brain model is The Faulkner Group's core approach. It combines an Advisory Brain focused on strategy, stakeholders, and go-to-market positioning with a MedTech Brain focused on EHR integration, clinical workflow design, and operational execution. Together they eliminate the gap between vision and execution."
    }
  },
  {
    "@type": "Question",
    "name": "What advisory services does The Faulkner Group offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Faulkner Group offers four engagement models: the Clinical Clarity Session, a 90-minute diagnostic that surfaces your highest-risk failure points; the Clinical Readiness Assessment, a structured 14-day deep engagement before your enterprise pilot goes live; the Strategic Advisory, an equity-based long-term advisory relationship for early-stage companies; and the Operating Partner, an ongoing clinical and systems operating partnership for companies navigating enterprise pilots."
    }
  },
  {
    "@type": "Question",
    "name": "How is The Faulkner Group different from other healthcare consultants?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Faulkner Group is exclusively focused on women's health technology. Our team includes both operational systems architects and board-certified OB/GYN clinical advisors, giving us a unique dual capability that most advisory firms cannot offer. We do not serve hospitals or general health systems. We work only with women's health tech companies."
    }
  }]

};

const johnFaulknerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Faulkner",
  alternateName: "Johnathon Faulkner",
  jobTitle: "CEO & Healthcare IT Architect",
  description: "CEO of The Faulkner Group. 15+ years designing healthcare IT infrastructure and EHR systems. Former Marine Corps Officer Candidate. Specializes in women's health technology clinical adoption.",
  url: "https://thrive-beacon-studio.lovable.app",
  sameAs: ["https://www.linkedin.com/in/johnathonfaulkner/"],
  worksFor: { "@type": "Organization", name: "The Faulkner Group", url: "https://thrive-beacon-studio.lovable.app" },
};

const nicholeFaulknerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Nicole Faulkner",
  alternateName: ["Nicole Faulkner DO", "Nicole Faulkner D.O."],
  jobTitle: "Chief Clinical Officer",
  description: "Chief Clinical Officer of The Faulkner Group. Board-certified OB/GYN, Medical Director at BackTable, featured speaker at WHIS.",
  url: "https://thrive-beacon-studio.lovable.app",
  sameAs: ["https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/"],
  worksFor: { "@type": "Organization", name: "The Faulkner Group", url: "https://thrive-beacon-studio.lovable.app" },
};

const serviceSchemas = [
  servicesFaqSchema,
  johnFaulknerSchema,
  nicholeFaulknerSchema,
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Clinical Clarity Session",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "A 90-minute virtual diagnostic with a board-certified OB/GYN and Healthcare IT Architect that identifies the highest-risk failure points in your health tech product's clinical adoption strategy.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Clinical Readiness Assessment",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "A structured 14-day readiness engagement that evaluates clinical workflow fit, governance infrastructure, physician adoption strategy, EHR integration, and liability exposure before your enterprise pilot goes live.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Strategic Advisory",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "A selective, equity-based advisory partnership for early-stage women's health tech companies where clinical and systems credibility can materially change your trajectory.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operating Partner",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "An ongoing clinical and systems operating partnership for women's health tech companies navigating enterprise pilots, physician adoption, and contract renewals.",
  },
];

const Services = () =>
<div className="min-h-screen bg-background" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
    <SEOHead
    title="Women's Health Tech Advisory Services | John Faulkner & Dr. Nicole Faulkner"
    description="John Faulkner and Dr. Nicole Faulkner offer boutique women's health tech advisory — from 48-hour diagnostics to enterprise partnerships with EHR integration and clinical expertise."
    canonical="https://thrive-beacon-studio.lovable.app/services"
    jsonLd={serviceSchemas}
    />

    <Header />
    <ServicesHero />
    <DualBrain />
    <EngagementModels />
    <OnStage />
    <Partnership />
    <IsThisYou />
    <BottomVideo />
    <StickyCTA />
  </div>;


export default Services;