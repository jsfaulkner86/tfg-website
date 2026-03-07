import { useEffect, useRef, useState, useCallback } from "react";
import { Building2, ClipboardCheck, TrendingUp, ArrowRight, Compass, CircleDollarSign, Activity, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import StickyCTA from "@/components/StickyCTA";
import BottomVideo from "@/components/BottomVideo";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who is The Faulkner Group's For Women's Health program designed for?",
    answer: "This program is built for women's health tech founders, operators, and innovators who are navigating the complexities of health system partnerships, payer strategy, and clinical adoption. Whether you are pre-seed or scaling post-Series A, if you are building technology that touches women's health, this is for you."
  },
  {
    question: "How is this different from a typical accelerator or advisory firm?",
    answer: "We are not a generic accelerator. We bring direct healthcare IT architecture experience, board-certified OB/GYN clinical credibility, and deep fluency in health system procurement, EHR integration, and payer strategy. We embed alongside your team - not from the outside looking in."
  },
  {
    question: "What stage does my company need to be at to work with you?",
    answer: "We work with companies from pre-seed through Series B and beyond. Our tools are designed to meet you where you are - whether you are preparing for your first health system conversation or scaling across multiple systems."
  },
  {
    question: "Are the interactive tools really free?",
    answer: "Yes. The Reimbursement Readiness Scorecard, Hospital Partnership Fit Checker, and Femtech Funding Gap Benchmarker are all free to use. They are designed to give you immediate, actionable clarity on where you stand and what to focus on next."
  },
  {
    question: "What happens on a strategy call?",
    answer: "A strategy call is a focused conversation with The Faulkner Group to understand your current challenges, assess your readiness across clinical adoption, payer strategy, and health system entry, and map out a clear path forward. No pitch decks. No fluff. Just a real conversation about what is working and what is not."
  },
];

const ForWomensHealth = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [valueVisible, setValueVisible] = useState(false);
  const [calloutVisible, setCalloutVisible] = useState(false);
  const [toolsVisible, setToolsVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [founderVisible, setFounderVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  

  const heroRef = useRef<HTMLElement>(null);
  const valueRef = useRef<HTMLElement>(null);
  const calloutRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const founderRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const pairs: [React.RefObject<HTMLElement>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible], [valueRef, setValueVisible], [calloutRef, setCalloutVisible],
      [toolsRef, setToolsVisible], [faqRef, setFaqVisible], [founderRef, setFounderVisible], [ctaRef, setCtaVisible],
    ];
    pairs.forEach(([ref, setter]) => {
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.1, rootMargin: '50px' });
      if (ref.current) obs.observe(ref.current);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleMeet = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  const handleToolClick = useCallback((card: { title: string; href: string; external: boolean; gated?: boolean }) => {
    if (card.external) {
      window.open(card.href, '_blank');
    } else {
      window.location.href = card.href;
    }
  }, []);

  return (
    <>
      <SEOHead
        title="For Women's Health Tech Founders | The Faulkner Group"
        description="Strategy and system fluency for women's health tech founders ready to break through and scale. The Faulkner Group brings clinical depth and operational expertise to every engagement."
        canonical="https://thrive-beacon-studio.lovable.app/for-womens-health"
      />
      <Header />
      <main className="overflow-x-hidden">

        {/* ===== HERO ===== */}
        <section ref={heroRef} className="relative w-full overflow-hidden pt-[160px] pb-[80px] md:pt-[200px] md:pb-[140px]">
          {/* Background Image */}
          <img
            src="/hero-boardroom.jpg"
            alt="The Faulkner Group women's health tech advisory team in a strategy session"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }} />

          {/* Content */}
          <div className={`relative z-10 flex items-center justify-center px-6 text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-[820px]">
              {/* Eyebrow */}
              <p
                className="mb-6 font-inter font-medium uppercase"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  color: 'hsl(45, 62%, 56%)',
                }}
              >
                For Women's Health Innovators
              </p>

              {/* Headline */}
              <h1
                className="mb-6 font-display font-bold text-white text-center mx-auto"
                style={{
                  fontSize: 'clamp(24px, 3.2vw, 44px)',
                  lineHeight: 1.15,
                  maxWidth: '800px',
                }}
              >
                For Women's Health.<br />
                Against Every Broken System.
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
                Strategy, tools, and system fluency for women's health tech founders who are ready to break through and scale. <Link to="/services" className="underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: 'rgba(243,218,115,0.9)' }}>Explore our engagement models</Link>.
              </p>

              {/* CTA */}
              <Button
                onClick={handleMeet}
                className="text-base font-semibold rounded-lg px-9 py-5 border group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                  color: '#2A3B4F',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Let's Meet
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* ===== VALUE PROPS (matches Problem section layout) ===== */}
        <section ref={valueRef} className="px-4 sm:px-6 relative overflow-hidden" style={{
          paddingTop: '60px', paddingBottom: '60px',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #E9EEF3 100%)'
        }}>
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{
            height: '80px', background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)'
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.03) 100%)'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
              {/* Left - Headline */}
              <div className={`space-y-8 transition-all duration-1000 ${valueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ maxWidth: '650px', transitionDelay: '0.2s' }}>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4" style={{
                    color: '#2A3B4F', letterSpacing: '-0.02em', lineHeight: '1.1', textShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>What We Give You That No One Else Does</h2>
                  <p className="text-lg sm:text-xl font-inter font-light mb-6" style={{ color: '#718DA9', letterSpacing: '0.03em' }}>
                    The tools, fluency, and clinical credibility to navigate the healthcare system on your terms.
                  </p>
                  <div className="relative overflow-hidden rounded-full" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #F3DA73, #D4B65D)' }}>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)', animation: 'shimmer 3s linear infinite' }} />
                  </div>
                </div>

                <div className="space-y-6 font-inter" style={{ lineHeight: '1.75', color: '#222', letterSpacing: '0.01em' }}>
                  <p className="text-base sm:text-lg">
                    Most women's health startups don't fail because of bad tech. They fail because <strong style={{ color: '#718DA9', fontWeight: 600 }}>the system is complicated</strong> - procurement cycles, payer strategy, regulatory pathways, and clinical governance are all barriers that require a different kind of expertise.
                  </p>
                  <p className="text-base sm:text-lg">
                    We bring <strong style={{ color: '#718DA9', fontWeight: 600 }}>health system fluency, reimbursement intelligence, and funding strategy</strong> directly to founders who are too busy building to decode a system designed to slow them down.
                  </p>

                  <div className="w-full h-px my-6" style={{ background: 'rgba(243,218,115,0.3)' }} />

                  <div className={`mt-8 p-8 rounded-xl relative overflow-hidden transition-all duration-700 ${valueVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #EAF0F6 100%)',
                      border: '2px solid #F3DA73', borderRadius: '16px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.05)', transitionDelay: '0.6s'
                    }}>
                    <p className="text-xl sm:text-2xl font-inter leading-relaxed relative z-10" style={{ color: '#2A3B4F', letterSpacing: '-0.01em' }}>
                      <strong className="font-bold" style={{ color: '#718DA9', fontSize: '1.15em' }}>Only 3% of venture funding goes to women's health</strong> - and the founders building in this space face a system that was not designed for them. <span className="text-base font-normal" style={{ color: '#718DA9' }}>(Rock Health, Femtech Funding Report)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Value prop cards (matches Problem section right column) */}
              <div className={`relative transition-all duration-1000 ${valueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '0.4s', marginTop: '0px' }}>
                <div className="absolute left-6 top-0 bottom-0" style={{
                  width: '1px', background: 'linear-gradient(180deg, transparent 0%, rgba(243,218,115,0.3) 15%, rgba(243,218,115,0.3) 85%, transparent 100%)'
                }} />
                <div className="space-y-10">
                  {[
                    { icon: Building2, text: "Hospital & Health System Fluency - Know exactly how to walk into a health system conversation and walk out with a partnership." },
                    { icon: ClipboardCheck, text: "Reimbursement & Regulatory Roadmaps - We translate payer strategy, CPT coding, and FDA pathways into founder-ready action plans." },
                    { icon: TrendingUp, text: "Funding Gap Intelligence - Benchmark your raise against femtech peers and close the knowledge gap before your next pitch." },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className={`group relative transition-all duration-700 ${valueVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                        style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                        <div className="relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-1 bg-white"
                          style={{ border: '1.5px solid #F3DA73', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
                          <div className="flex items-center gap-5 relative z-10">
                            <div className="relative flex-shrink-0">
                              <Icon size={28} strokeWidth={1.5} style={{ color: '#F3DA73' }}
                                className="transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <p className="text-base sm:text-lg font-inter font-medium leading-relaxed"
                              style={{ color: '#2A3B4F', letterSpacing: '0.01em' }}>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom callout */}
            <div className={`mt-12 sm:mt-24 transition-all duration-1000 ${valueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '1.2s' }}>
              <div className="relative py-6 px-4 sm:py-12 sm:px-12 rounded-2xl sm:rounded-[32px] overflow-hidden mx-auto"
                style={{ background: '#FBF8F1', border: '2.5px solid #C9B882', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', maxWidth: '1400px' }}>
                <div className="relative z-10 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-playfair font-bold"
                    style={{ color: '#718DA9', letterSpacing: '-0.02em', lineHeight: '1.4' }}>
                    We don't just identify the gaps. We give you the tools and strategy to close them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CALLOUT BAND (matches Approach section cards style) ===== */}
        <section ref={calloutRef} className="px-4 sm:px-6 relative overflow-hidden" style={{
          paddingTop: '60px', paddingBottom: '60px',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #F9F6EC 100%)'
        }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.1) 0%, transparent 70%)', filter: 'blur(60px)'
          }} />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(243,218,115,0.05) 0%, transparent 30%), radial-gradient(circle at 80% 60%, rgba(243,218,115,0.04) 0%, transparent 25%)'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center mb-10 transition-all duration-1000 ${calloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.12), rgba(243,218,115,0.06))',
                border: '1.5px solid rgba(243,218,115,0.25)', boxShadow: '0 4px 12px rgba(243,218,115,0.08)'
              }}>
                <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>The Reality</span>
              </div>

              <div className="flex items-center justify-center gap-3 mb-8">
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4))' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#F3DA73', boxShadow: '0 0 8px rgba(243,218,115,0.4)' }} />
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(243,218,115,0.4), transparent)' }} />
              </div>
            </div>

            {/* Single large card (matches Approach card style) */}
            <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${calloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, rgba(243,218,115,0.4), rgba(243,218,115,0.2))', filter: 'blur(16px)'
                }} />
                <div className="relative rounded-2xl sm:rounded-[24px] p-6 sm:p-10 md:p-14 text-center overflow-hidden" style={{
                  background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                  border: '2.5px solid #F3DA73',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                  }} />
                  <blockquote className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6 sm:mb-10 relative z-10" style={{
                    color: '#F3DA73', textShadow: '0 2px 8px rgba(0,0,0,0.2)', letterSpacing: '-0.02em'
                  }}>
                    "Most women's health startups don't fail because of bad tech. They fail because the system is complicated. We know the system."
                  </blockquote>
                  <Button onClick={handleMeet}
                    className="text-base font-semibold rounded-lg px-9 py-5 border group/btn transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)] relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                      color: '#2A3B4F',
                      borderColor: 'rgba(255,255,255,0.25)',
                      boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                      backdropFilter: 'blur(8px)',
                    }}>
                    Let's Meet <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                  <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'linear-gradient(90deg, transparent, #F3DA73, transparent)'
                  }} />
                </div>
              </div>
            </div>

            {/* Bottom statement */}
            <div className={`mt-20 transition-all duration-1000 ${calloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="relative py-5 px-4 sm:py-8 sm:px-8 md:py-12 md:px-12 rounded-2xl sm:rounded-3xl mx-auto max-w-5xl" style={{
                background: '#FBF8F1', border: '2px solid #D4B65D', boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}>
                <div className="text-center">
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-playfair font-bold" style={{
                    color: '#718DA9', letterSpacing: '-0.02em', lineHeight: '1.5'
                  }}>This is where women's health founders stop guessing and start moving.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== RESOURCE TOOLS (matches Transformation section cards) ===== */}
        <section id="resources" ref={toolsRef} className="px-4 sm:px-6 relative overflow-hidden" style={{
          paddingTop: '60px', paddingBottom: '60px',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #F9F6EC 100%)'
        }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(113,141,169,0.08) 0%, transparent 70%)', filter: 'blur(60px)'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center mb-10 transition-all duration-1000 ${toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.12), rgba(113,141,169,0.06))',
                border: '1.5px solid rgba(113,141,169,0.25)', boxShadow: '0 4px 12px rgba(113,141,169,0.08)'
              }}>
                <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>Free Resources</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-8" style={{
                color: '#1A2A3A', letterSpacing: '-0.04em', lineHeight: '1', textShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>Tools Built for This Fight</h2>
              <div className="flex items-center justify-center gap-3">
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(113,141,169,0.4))' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#718DA9', boxShadow: '0 0 8px rgba(113,141,169,0.4)' }} />
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(113,141,169,0.4), transparent)' }} />
              </div>
            </div>

            <div className={`mb-16 transition-all duration-1000 delay-300 ${toolsVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { micro: "Payer Readiness", title: "Reimbursement Readiness Scorecard", body: "Assess whether your product is payer-ready before entering costly sales cycles.", result: "10 questions. Instant clarity on your reimbursement readiness.", cta: "Take the Scorecard", href: "/for-womens-health/reimbursement-scorecard", external: false, gated: true },
                  { micro: "Health System Entry", title: "Hospital Partnership Fit Checker", body: "Map your startup's stage to realistic health system entry points.", result: "6 questions. Know which partnership type fits your stage.", cta: "Check Your Fit", href: "/for-womens-health/hospital-fit-checker", external: false, gated: true },
                  { micro: "Funding Intelligence", title: "Femtech Funding Gap Benchmarker", body: "See how your raise compares to peers by stage and founding team.", result: "6 questions. Benchmark data and gap analysis in seconds.", cta: "See Your Benchmark", href: "/for-womens-health/funding-benchmarker", external: false, gated: true },
                  { micro: "Fundraising Pipeline", title: "Women's Health Fundraising Tracker", body: "Track your investor pipeline, get femtech-specific fit scores, and manage warm intros — all private and browser-based.", result: "Private pipeline tracker built for pre-seed and seed femtech founders.", cta: "Open Tracker", href: "https://womenshealthfundraisingtracker.lovable.app/", external: true, gated: false },
                  { micro: "Market Intelligence", title: "The Global Femtech Directory", body: "Explore 887+ innovative companies transforming women's health across 27 categories — from fertility to precision medicine.", result: "Searchable directory of femtech companies, investors, and resources worldwide.", cta: "Explore Directory", href: "https://femtechdb.com/", external: true, gated: false },
                ].map((card, index) => (
                  <div key={index} className={`group relative transition-all duration-700 ${toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                    <div className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      background: 'linear-gradient(135deg, #D4B65D, #718DA9)', filter: 'blur(8px)'
                    }} />
                    <div className="relative p-6 sm:p-10 rounded-2xl sm:rounded-[24px] transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col overflow-hidden" style={{
                      background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                      border: '2.5px solid #F3DA73',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)',
                      minHeight: '320px', backdropFilter: 'blur(10px)'
                    }}>
                      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                        background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)'
                      }} />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm font-inter font-bold tracking-wider uppercase" style={{
                            color: '#F3DA73', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                          }}>{card.micro}</p>
                          <div className="flex items-center gap-2">
                            {card.gated && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-inter font-bold tracking-wider uppercase" style={{
                                background: 'rgba(243,218,115,0.2)',
                                color: '#F3DA73',
                                border: '1px solid rgba(243,218,115,0.4)',
                                letterSpacing: '0.08em',
                              }}>Free Access</span>
                            )}
                            {card.external && <ExternalLink className="h-4 w-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />}
                          </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4" style={{
                          color: 'rgba(255,255,255,0.98)', letterSpacing: '-0.01em', lineHeight: '1.3', textShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}>{card.title}</h3>
                        <p className="text-base font-inter mb-6 flex-grow" style={{
                          color: 'rgba(248,248,248,0.85)', letterSpacing: '0.02em', lineHeight: '1.6'
                        }}>{card.body}</p>
                        <div className="pt-4 mt-auto" style={{ borderTop: '1px solid rgba(243,218,115,0.3)' }}>
                          <p className="text-sm font-inter font-semibold mb-5" style={{ color: 'rgba(255,255,255,0.9)' }}>
                            <span style={{ color: '#F3DA73', fontWeight: 700 }}>What you get:</span>{' '}{card.result}
                          </p>
                          <Button onClick={() => handleToolClick(card)}
                            className="w-full text-base rounded-lg group/btn transition-all duration-300 font-semibold py-5"
                            style={{
                              background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)', color: '#1A2A3A',
                              boxShadow: '0 4px 16px rgba(243,218,115,0.3)', border: 'none'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(243,218,115,0.5)'; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(243,218,115,0.3)'; }}
                          >{card.cta} {card.external ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}</Button>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        background: 'linear-gradient(90deg, transparent, #F3DA73, transparent)'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-900 ${toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative py-6 px-6 sm:py-8 sm:px-8 md:py-12 md:px-12 rounded-3xl mx-auto max-w-5xl" style={{
                background: '#FBF8F1', border: '2px solid #D4B65D', boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}>
                <div className="text-center">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-playfair font-bold" style={{
                    color: '#718DA9', letterSpacing: '-0.02em', lineHeight: '1.5'
                  }}>Every tool is free. Every insight is actionable. Start here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOUNDER IN THE ROOM ===== */}
        <section ref={founderRef} className="px-4 sm:px-6 relative overflow-hidden" style={{
          paddingTop: '60px', paddingBottom: '60px',
          background: 'linear-gradient(180deg, #F5F0E4 0%, #FDFCF9 100%)'
        }}>
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(243,218,115,0.08) 0%, transparent 40%), radial-gradient(circle at 70% 50%, rgba(113,141,169,0.06) 0%, transparent 35%)'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column — Text */}
              <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${founderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '0.2s' }}>
                <span className="text-xs font-inter font-semibold tracking-[0.2em] uppercase" style={{ color: '#718DA9' }}>
                  LIVE MONTHLY SESSION
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold" style={{
                  color: '#1A2A3A', letterSpacing: '-0.02em', lineHeight: '1.1'
                }}>Founder in the Room</h2>

                <p className="text-lg sm:text-xl font-inter font-medium" style={{ color: '#718DA9', letterSpacing: '0.01em' }}>
                  Real questions. Real answers. No pitch deck required.
                </p>

                <p className="text-base sm:text-lg font-inter leading-relaxed" style={{ color: '#4A5568', lineHeight: '1.75' }}>
                  Once a month, we open the room to women's health tech founders for 20 focused minutes. Submit your question ahead of time about reimbursement, health system entry, or fundraising strategy. Dr. Nicole Faulkner &amp; John Faulkner answer the top questions live. Free to attend.
                </p>

                <div className="space-y-3 sm:space-y-4 pt-2">
                  {[
                    "20 minutes, no fluff, no sales pitch",
                    "Free live access with simple email registration",
                    "Replay sent automatically to all registrants"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#D4B65D' }} />
                      <span className="text-base font-inter" style={{ color: '#2A3B4F' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column — Registration Card */}
              <div className={`transition-all duration-1000 ${founderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '0.4s' }}>
                <div className="p-6 sm:p-8 md:p-10 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F0E4 100%)',
                  border: '2px solid #D4B65D',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(243,218,115,0.1)'
                }}>
                  <span className="text-xs font-inter font-semibold tracking-[0.2em] uppercase" style={{ color: '#718DA9' }}>
                    NEXT SESSION
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold mt-3 mb-2" style={{
                    color: '#1A2A3A', letterSpacing: '-0.02em'
                  }}>March 2026 — Date TBD</h3>

                  <p className="text-sm sm:text-base font-inter mb-6 sm:mb-8" style={{ color: '#4A5568', lineHeight: '1.6' }}>
                    20 minutes. Top founder questions answered live.
                  </p>

                  <div className="flex items-start sm:items-center justify-center gap-3 py-3 sm:py-4 px-3 sm:px-4 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.1), rgba(243,218,115,0.05))',
                    border: '1.5px solid rgba(243,218,115,0.25)'
                  }}>
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 sm:mt-0" style={{ color: '#D4B65D' }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <p className="text-xs sm:text-sm font-inter text-center sm:text-left" style={{ color: '#4A5568' }}>
                      Details will be released on LinkedIn by{' '}
                      <a href="https://www.linkedin.com/in/johnathonfaulkner/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: '#718DA9' }}>John</a>
                      {' '}&amp;{' '}
                      <a href="https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: '#718DA9' }}>Nicole</a>
                      . Follow to stay in the loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ (matches FAQ section exactly) ===== */}
        <section ref={faqRef} className="px-4 sm:px-6 relative overflow-hidden" style={{
          paddingTop: '60px', paddingBottom: '60px',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)'
        }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
                background: 'linear-gradient(135deg, rgba(113,141,169,0.12), rgba(113,141,169,0.06))',
                border: '1.5px solid rgba(113,141,169,0.25)', boxShadow: '0 4px 12px rgba(113,141,169,0.08)'
              }}>
                <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6" style={{
                color: '#1A2A3A', letterSpacing: '-0.04em', lineHeight: '1.1'
              }}>Frequently Asked Questions</h2>
              <div className="flex items-center justify-center gap-3">
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(113,141,169,0.4))' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#718DA9', boxShadow: '0 0 8px rgba(113,141,169,0.4)' }} />
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(113,141,169,0.4), transparent)' }} />
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-200 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-0 rounded-2xl overflow-hidden"
                    style={{ background: 'white', border: '1.5px solid rgba(243,218,115,0.3)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                    <AccordionTrigger className="px-4 sm:px-8 py-4 sm:py-6 text-left hover:no-underline font-playfair font-bold text-base sm:text-lg md:text-xl"
                      style={{ color: '#1A2A3A', letterSpacing: '-0.01em' }}>{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-8 pb-4 sm:pb-6">
                      <p className="text-base font-inter leading-relaxed" style={{ color: '#4A5568', lineHeight: '1.8' }}>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ===== BOTTOM CTA BANNER ===== */}
        <section className="px-4 sm:px-6 relative" style={{
          paddingTop: '40px', paddingBottom: '40px',
          background: '#0A1628',
          borderTop: '3px solid #F3DA73',
        }}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-white mb-1" style={{ lineHeight: '1.3' }}>
                Not sure which tool to start with?
              </p>
              <p className="font-inter text-sm sm:text-base text-white/60">
                Book a free 15-min call — we'll tell you exactly where your biggest gap is.
              </p>
            </div>
            <Button
              onClick={handleMeet}
              className="text-base font-semibold rounded-lg px-8 py-5 border group flex-shrink-0 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
              style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)',
                color: '#2A3B4F',
                borderColor: 'rgba(255,255,255,0.25)',
                boxShadow: '0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Book the Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <BottomVideo />
        <StickyCTA />

      </main>
    </>
  );
};

export default ForWomensHealth;
