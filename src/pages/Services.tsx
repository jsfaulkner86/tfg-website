import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Brain, Cpu, Users, Shield, Lightbulb, Handshake } from "lucide-react";

const handleBooking = () => {
  window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p
    className="mb-4 font-inter font-medium uppercase"
    style={{
      fontSize: '13px',
      letterSpacing: '0.2em',
      color: 'hsl(45, 62%, 56%)',
    }}
  >
    {children}
  </p>
);

const SectionHeading = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2
    className={`font-display font-bold mb-6 ${light ? 'text-white' : ''}`}
    style={{
      fontSize: 'clamp(26px, 3.2vw, 44px)',
      lineHeight: 1.15,
      color: light ? undefined : 'hsl(210, 14%, 19%)',
    }}
  >
    {children}
  </h2>
);

/* ───────────────────────── 1. HERO ───────────────────────── */
const ServicesHero = () => (
  <section className="relative w-full overflow-hidden pt-[160px] pb-[80px] md:pt-[200px] md:pb-[140px]">
    <img
      src="/hero-boardroom.jpg"
      alt="Healthcare advisory services"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }} />

    <div className="relative z-10 flex items-center justify-center px-6 text-center">
      <div className="max-w-[820px]">
        <Eyebrow>Healthcare Advisory Services</Eyebrow>

        <h1
          className="mb-6 font-display font-bold text-white"
          style={{ fontSize: 'clamp(28px, 3.8vw, 52px)', lineHeight: 1.1 }}
        >
          <span className="block">Two Brains. One Mission.</span>
          <span className="block">Zero Wasted Time.</span>
        </h1>

        <p
          className="mb-10 font-inter"
          style={{
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            color: 'rgba(255,255,255,0.85)',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          Strategy and system fluency for women's health tech founders.
        </p>

        <Button
          onClick={handleBooking}
          className="text-base font-semibold rounded-md px-8 py-5 border-0 group transition-all duration-300"
          style={{ backgroundColor: '#F3DA73', color: '#5882A1' }}
        >
          Let's Meet
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </section>
);

/* ───────────────────────── 2. DUAL BRAIN ───────────────────────── */
const DualBrain = () => (
  <section className="py-12 md:py-20 px-6 bg-background">
    <div className="max-w-5xl mx-auto text-center">
      <Eyebrow>Our Approach</Eyebrow>
      <SectionHeading>Advisory Plus MedTech. Not Either/Or.</SectionHeading>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Advisory Brain */}
        <div
          className="rounded-lg p-8 text-left border border-border"
          style={{ background: 'hsl(0 0% 98%)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(45, 62%, 56%, 0.15)' }}>
              <Brain className="h-6 w-6" style={{ color: 'hsl(45, 62%, 56%)' }} />
            </div>
            <h3 className="text-xl font-display font-bold" style={{ color: 'hsl(210, 14%, 19%)' }}>
              The Advisory Brain
            </h3>
          </div>
          <p className="font-inter leading-relaxed" style={{ color: 'hsl(0, 0%, 35%)', fontSize: '15px' }}>
            We help women's health tech founders, operators, and product leaders align their people, processes, and vision before a single tool is selected or configured.
          </p>
        </div>

        {/* MedTech Brain */}
        <div
          className="rounded-lg p-8 text-left border border-border"
          style={{ background: 'hsl(0 0% 98%)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(45, 62%, 56%, 0.15)' }}>
              <Cpu className="h-6 w-6" style={{ color: 'hsl(45, 62%, 56%)' }} />
            </div>
            <h3 className="text-xl font-display font-bold" style={{ color: 'hsl(210, 14%, 19%)' }}>
              The MedTech Brain
            </h3>
          </div>
          <p className="font-inter leading-relaxed" style={{ color: 'hsl(0, 0%, 35%)', fontSize: '15px' }}>
            We get into the weeds: EHR integrations, clinical workflow build, AI-ready infrastructure, and the operational mechanics that make technology actually work at the bedside.
          </p>
        </div>
      </div>

      <p
        className="mt-10 font-inter font-medium text-lg"
        style={{ color: 'hsl(210, 14%, 19%)' }}
      >
        Together, they eliminate the gap between vision and execution.
      </p>
    </div>
  </section>
);

/* ───────────────────────── 3. ENGAGEMENT MODELS ───────────────────────── */
const engagements = [
  {
    numeral: 'I',
    name: 'Sprint Starter',
    tagline: 'Clarity in 30 Days',
    paragraph: 'For founders who know something is not working but are not sure where to start. We conduct a focused 30-day diagnostic across your product workflows, go-to-market operations, and clinical positioning, and deliver a single clear roadmap your team can act on immediately. Engagement includes a 90-minute strategy session with both co-founders.',
    cta: 'Book Your Sprint Starter',
  },
  {
    numeral: 'II',
    name: 'Sprint Pro',
    tagline: 'Build. Optimize. Operate.',
    paragraph: 'For women\'s health tech companies in active build or optimization phases. We embed across your strategy and execution layers, leading EHR integration, clinical workflow design, and physician adoption strategy across your platform and clinical partnerships. Includes clinical collaboration with our board-certified OB/GYN advisor and weekly advisory sessions throughout the engagement.',
    cta: 'Schedule a Discovery Call',
  },
  {
    numeral: 'III',
    name: 'Sprint Elite',
    tagline: 'End-to-End. Enterprise-Grade.',
    paragraph: 'For women\'s health tech companies moving from pilot to enterprise deployment and ready to scale with confidence. We lead from strategy through launch, bringing deep EHR integration expertise, AI readiness assessment, and intelligent workflow integration built for women\'s health technology platforms. Both co-founders are engaged directly and continuously throughout.',
    cta: 'Let\'s Talk',
  },
];

const EngagementModels = () => (
  <section className="py-12 md:py-20 px-6 bg-background">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <Eyebrow>Engagement Models</Eyebrow>
        <SectionHeading>The Right Level of Support. No Fluff. No Bloat.</SectionHeading>
        <p className="font-inter" style={{ color: 'hsl(0,0%,35%)', fontSize: '16px' }}>
          Choose the engagement that fits where you are and scale when you are ready.
        </p>
      </div>

      <div>
        {engagements.map((eng) => (
          <div key={eng.numeral}>
            <div className="h-px w-full" style={{ background: 'hsl(0, 0%, 85%)' }} />
            <div className="py-12 md:py-16">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <span
                  className="font-display font-light flex-shrink-0"
                  style={{ fontSize: '48px', lineHeight: 1, color: 'hsl(45, 62%, 56%)', minWidth: '60px' }}
                >
                  {eng.numeral}
                </span>
                <div className="flex-1">
                  <h3
                    className="font-display font-bold mb-1"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.2, color: 'hsl(210, 14%, 19%)' }}
                  >
                    {eng.name}
                  </h3>
                  <p className="font-display italic mb-5" style={{ fontSize: '16px', color: 'hsl(45, 62%, 56%)' }}>
                    {eng.tagline}
                  </p>
                  <p
                    className="font-inter leading-relaxed mb-6"
                    style={{ fontSize: '15px', color: 'hsl(0, 0%, 35%)', maxWidth: '640px' }}
                  >
                    {eng.paragraph}
                  </p>
                  <a
                    href="https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-inter font-semibold text-sm transition-all duration-300 hover:gap-3"
                    style={{ color: 'hsl(45, 62%, 46%)' }}
                  >
                    {eng.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="h-px w-full" style={{ background: 'hsl(0, 0%, 85%)' }} />
      </div>
    </div>
  </section>
);

/* ───────────────────────── 4. PARTNERSHIP ───────────────────────── */
const partnershipItems = [
  { icon: Shield, text: 'Ongoing clinical advisory and technical oversight' },
  { icon: Users, text: 'Fractional Chief Clinical Systems Officer support' },
  { icon: Lightbulb, text: 'Strategic guidance on product-market fit and physician adoption' },
  { icon: Handshake, text: 'Access to our OB/GYN, operator, and health tech leader network' },
  { icon: Cpu, text: 'Co-development support for femtech and women\'s health innovations' },
  { icon: Brain, text: 'Executive advisory access to both co-founders' },
];

const Partnership = () => (
  <section className="py-12 md:py-20 px-6 relative overflow-hidden" style={{ background: 'hsl(210, 25%, 35%)' }}>
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
      backgroundSize: '40px 40px',
    }} />
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <Eyebrow>For the Long Game</Eyebrow>
        <h2 className="font-display font-bold mb-6 text-white md:whitespace-nowrap" style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', lineHeight: 1.15 }}>Partnership. Not a Retainer. A Relationship.</h2>
        <p className="font-inter text-white/85 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '16px' }}>
          Some of the most important work we do does not fit inside a sprint timeline. Our Partnership Model is designed for women's health tech companies who want The Faulkner Group embedded in their work, not just consulting from the outside.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {partnershipItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(45, 62%, 56%)' }} />
            <span className="font-inter text-white/90" style={{ fontSize: '15px' }}>{text}</span>
          </div>
        ))}
      </div>

      <blockquote
        className="text-center font-display italic text-xl mb-10"
        style={{ color: 'hsl(45, 62%, 70%)' }}
      >
        "We do not just consult. We build with you until it works."
      </blockquote>

      <div className="text-center">
        <Button
          onClick={handleBooking}
          className="text-base font-semibold rounded-md px-8 py-5 border-0 group transition-all duration-300"
          style={{ backgroundColor: '#F3DA73', color: '#5882A1' }}
        >
          Explore Partnership
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </section>
);

/* ───────────────────────── 5. IS THIS YOU? ───────────────────────── */
const fitChecks = [
  'You are running a women\'s health tech company and physicians are not adopting your product',
  'Your EHR integration was built for compliance, not for clinicians',
  'You are scaling and need someone who understands both the boardroom and the build environment',
  'You want a partner, not a vendor',
];

const IsThisYou = () => (
  <section className="py-12 md:py-20 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <Eyebrow>Who We Serve</Eyebrow>
      <SectionHeading>The Faulkner Group Is Right For You If...</SectionHeading>

      <div className="mt-10 space-y-5 text-left max-w-2xl mx-auto">
        {fitChecks.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(45, 62%, 56%)' }} />
            <span className="font-inter" style={{ color: 'hsl(0,0%,25%)', fontSize: '16px' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────────────────────── 6. CLOSING CTA ───────────────────────── */
const ClosingCTA = () => (
  <section className="relative py-12 md:py-20 px-6 overflow-hidden">
    <img
      src="/hero-boardroom.jpg"
      alt="Healthcare advisory"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.7)' }} />

    <div className="relative z-10 max-w-3xl mx-auto text-center py-16">
      <h2
        className="font-display font-bold text-white mb-6"
        style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.15 }}
      >
        Ready to Stop Fighting Your Systems?
      </h2>
      <p className="font-inter text-white/85 mb-10" style={{ fontSize: '18px' }}>
        Let us find the right engagement for where you are.
      </p>
      <Button
        onClick={handleBooking}
        className="text-base font-semibold rounded-md px-8 py-5 border-0 group transition-all duration-300"
        style={{ backgroundColor: '#F3DA73', color: '#5882A1' }}
      >
        Let's Meet
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  </section>
);

/* ───────────────────────── PAGE ───────────────────────── */
const Services = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServicesHero />
    <DualBrain />
    <EngagementModels />
    <Partnership />
    <IsThisYou />
    <ClosingCTA />
  </div>
);

export default Services;
