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
          Strategy and system fluency for health systems and women's health tech founders.
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
            We help health systems, women's health tech founders, and operational leaders align their people, processes, and vision before a single tool is selected or configured.
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

/* ───────────────────────── 3. SPRINT TIERS ───────────────────────── */
const tiers = [
  {
    badge: 'Starter',
    badgeBg: 'hsl(45, 62%, 56%, 0.15)',
    badgeColor: 'hsl(45, 62%, 56%)',
    name: 'Sprint Starter',
    tagline: 'Clarity in 30 Days',
    items: [
      'Focused 30-day diagnostic engagement',
      'Workflow assessment and priority mapping',
      'One actionable roadmap, ready to execute',
      'One 90-minute strategy session with TFG leadership',
      'Ideal for CAHs, community hospitals, and early-stage women\'s health tech teams',
    ],
    cta: 'Book Your Sprint Starter',
    popular: false,
    cardBg: 'hsl(0 0% 98%)',
  },
  {
    badge: 'Most Popular',
    badgeBg: 'hsl(210, 25%, 55%)',
    badgeColor: '#fff',
    name: 'Sprint Pro',
    tagline: 'Build. Optimize. Operate.',
    items: [
      'Full engagement across strategy and execution',
      'EHR integration, clinical workflow design, and optimization across women\'s health service lines',
      'Clinical collaboration with board-certified OB/GYN advisor',
      'Adoption strategy and change management support',
      'Weekly check-ins plus ongoing support between sessions',
    ],
    cta: 'Schedule a Discovery Call',
    popular: true,
    cardBg: 'hsl(0 0% 98%)',
  },
  {
    badge: 'Elite',
    badgeBg: 'hsl(210, 14%, 19%)',
    badgeColor: '#fff',
    name: 'Sprint Elite',
    tagline: 'End-to-End. Enterprise-Grade.',
    items: [
      'Full Dual Brain engagement from strategy through launch',
      'Deep EHR integration expertise across inpatient, outpatient, and specialty women\'s health service lines',
      'AI readiness assessment and intelligent workflow integration across women\'s health operations',
      'Executive advisory access to both co-founders',
      'Priority response, dedicated project lead, quarterly business reviews',
    ],
    cta: 'Let\'s Talk',
    popular: false,
    cardBg: 'hsl(0 0% 98%)',
  },
];

const SprintTiers = () => (
  <section className="py-12 md:py-20 px-6" style={{ background: 'hsl(210, 14%, 95%)' }}>
    <div className="max-w-6xl mx-auto text-center">
      <Eyebrow>Engagement Models</Eyebrow>
      <SectionHeading>The Right Level of Support. No Fluff. No Bloat.</SectionHeading>
      <p className="font-inter mb-12" style={{ color: 'hsl(0,0%,35%)', fontSize: '16px' }}>
        Choose the sprint that fits where you are and scale when you are ready.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-lg p-8 text-left border flex flex-col ${
              tier.popular ? 'border-accent shadow-lg scale-[1.02]' : 'border-border'
            }`}
            style={{ background: tier.cardBg }}
          >
            {/* Badge */}
            <span
              className="inline-block self-start px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-wider mb-4"
              style={{ backgroundColor: tier.badgeBg, color: tier.badgeColor }}
            >
              {tier.badge}
            </span>

            <h3 className="text-2xl font-display font-bold mb-1" style={{ color: 'hsl(210, 14%, 19%)' }}>
              {tier.name}
            </h3>
            <p className="font-inter mb-6" style={{ color: 'hsl(45, 62%, 56%)', fontSize: '15px', fontWeight: 500 }}>
              {tier.tagline}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.items.map((item) => (
                <li key={item} className="flex items-start gap-2 font-inter text-sm" style={{ color: 'hsl(0,0%,35%)' }}>
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'hsl(45, 62%, 56%)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>




            <Button
              onClick={handleBooking}
              className="w-full text-sm font-semibold rounded-md py-5 border-0 group transition-all duration-300"
              style={{ backgroundColor: '#F3DA73', color: '#5882A1' }}
            >
              {tier.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        ))}
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
        <SectionHeading light>Partnership. Not a Retainer. A Relationship.</SectionHeading>
        <p className="font-inter text-white/85 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '16px' }}>
          Some of the most important work we do does not fit inside a sprint timeline. Our Partnership Model is designed for health tech companies and health systems who want The Faulkner Group embedded in their work, not just consulting from the outside.
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
  'Your Epic environment was built for compliance, not for clinicians',
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
    <SprintTiers />
    <Partnership />
    <IsThisYou />
    <ClosingCTA />
  </div>
);

export default Services;
