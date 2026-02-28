import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Brain, Cpu, Users, Shield, Lightbulb, Handshake } from "lucide-react";
import BottomVideo from "@/components/BottomVideo";
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
        className="text-base font-semibold rounded-md px-8 py-5 min-h-[48px] border-0 group transition-all duration-300"
        style={{ backgroundColor: '#F3DA73', color: '#5882A1' }}>

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
  name: 'Sprint Starter',
  tagline: 'Clarity in 48 Hours',
  paragraph: 'For founders who know something is not working but are not sure where to start. We conduct a focused 48-hour diagnostic across your product workflows, go-to-market operations, and clinical positioning, and deliver a single clear roadmap your team can act on immediately. Engagement includes a 90-minute strategy session with both co-founders.',
  cta: 'Book Your Sprint Starter',
  href: 'https://calendly.com/d/cx9r-9x8-gbf/clinical-clarity-session',
  external: true
},
{
  numeral: 'II',
  name: 'Sprint Pro',
  tagline: 'Build. Optimize. Operate.',
  paragraph: 'For women\'s health tech companies in active build or optimization phases. We embed across your strategy and execution layers, leading EHR integration, clinical workflow design, and physician adoption strategy across your <a href="/for-womens-health" class="underline underline-offset-2 hover:opacity-80 transition-opacity" style="color: hsl(45, 62%, 46%)">women\'s health technology platform</a> and clinical partnerships. Includes clinical collaboration with our board-certified OB/GYN advisor and weekly advisory sessions throughout the engagement.',
  cta: 'Schedule a Discovery Call',
  href: 'https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner',
  external: true
},
{
  numeral: 'III',
  name: 'Sprint Elite',
  tagline: 'End-to-End. Enterprise-Grade.',
  paragraph: 'For women\'s health tech companies moving from pilot to enterprise deployment and ready to scale with confidence. We lead from strategy through launch, bringing deep EHR integration expertise, AI readiness assessment, and intelligent workflow integration built for women\'s health technology platforms. Both co-founders are engaged directly and continuously throughout.',
  cta: 'Let\'s Talk',
  href: 'https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner',
  external: true
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
              <div className="py-8 md:py-16">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
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
                className="font-inter leading-relaxed mb-5 md:mb-6"
                style={{ fontSize: '14px', color: 'hsl(0, 0%, 35%)', maxWidth: '640px' }}>

                    <span dangerouslySetInnerHTML={{ __html: eng.paragraph }} />
                  </p>
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
      "text": "The Faulkner Group offers three engagement models: Sprint Starter, a 30-day diagnostic and roadmap engagement; Sprint Pro, a full strategy and execution engagement including EHR integration and clinical collaboration; and Sprint Elite, an end-to-end enterprise engagement from strategy through launch. We also offer a Partnership model for long-term embedded advisory relationships."
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

const serviceSchemas = [
  servicesFaqSchema,
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprint Starter - Healthcare Advisory",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "48-hour focused diagnostic across product workflows, go-to-market operations, and clinical positioning with a clear roadmap.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprint Pro - Healthcare Advisory",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "Full strategy and execution engagement including EHR integration, clinical workflow design, and physician adoption strategy for women's health tech platforms.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprint Elite - Healthcare Advisory",
    provider: { "@type": "Organization", name: "The Faulkner Group" },
    description: "End-to-end enterprise engagement from strategy through launch with AI readiness assessment and intelligent workflow integration for women's health technology.",
  },
];

const Services = () =>
<div className="min-h-screen bg-background" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
    <SEOHead
    title="Women's Health Tech Advisory Services | Faulkner Group"
    description="Boutique advisory for women's health tech founders. From 48-hour diagnostics to enterprise partnerships with EHR integration and clinical expertise."
    canonical="https://thrive-beacon-studio.lovable.app/services"
    jsonLd={serviceSchemas}
    />

    <Header />
    <ServicesHero />
    <DualBrain />
    <EngagementModels />
    <Partnership />
    <IsThisYou />
    <BottomVideo />
  </div>;


export default Services;