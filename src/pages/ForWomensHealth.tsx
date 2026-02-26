import { useEffect, useRef, useState } from "react";
import { Building2, ClipboardCheck, TrendingUp, ArrowRight, Compass, CircleDollarSign, Activity, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
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
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const valueRef = useRef<HTMLElement>(null);
  const calloutRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const pairs: [React.RefObject<HTMLElement>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible], [valueRef, setValueVisible], [calloutRef, setCalloutVisible],
      [toolsRef, setToolsVisible], [faqRef, setFaqVisible], [ctaRef, setCtaVisible],
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

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">

        {/* ===== HERO ===== */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-dark-gray to-primary" style={{ paddingTop: 'calc(180px + env(safe-area-inset-top, 0px))' }}>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(243,218,115,0.12) 0%, transparent 60%)',
            filter: 'blur(80px)'
          }} />

          <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-8 sm:pt-16 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-8 px-6 py-2 rounded-full" style={{
              background: 'rgba(243,218,115,0.2)', border: '1.5px solid rgba(243,218,115,0.5)', backdropFilter: 'blur(10px)'
            }}>
              <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>For Women's Health Innovators</span>
            </div>

            <h1 className="mb-4 sm:mb-6 font-playfair font-bold text-white" style={{
              fontSize: 'clamp(24px, 5vw, 60px)', letterSpacing: '-0.02em', lineHeight: '1.1',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              For Women's Health.{' '}
              <span className="block mt-2" style={{ color: '#F3DA73' }}>Against Every System That Holds It Back.</span>
            </h1>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-xl lg:text-2xl max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3 rounded-lg" style={{
              color: 'rgb(255,255,255)', textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)',
              backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)'
            }}>
              The Faulkner Group equips women's health tech founders, operators, and innovators with the strategy, tools, and system fluency to break through and scale.
            </p>

            <div className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-white/90 px-2 sm:px-4">
              {["Reimbursement Strategy", "Health System Fluency", "Funding Intelligence"].map(badge => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F3DA73' }} />
                  <span className="text-xs sm:text-sm md:text-base font-inter font-bold px-2 sm:px-3 py-1 rounded whitespace-nowrap" style={{
                    textShadow: '0 2px 12px rgba(0,0,0,0.8)', color: 'rgb(255,255,255)',
                    backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)'
                  }}>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-base sm:text-lg rounded-lg group transition-all duration-300 font-semibold px-6 sm:px-8 md:px-12 py-4 sm:py-6"
                style={{
                  backgroundColor: 'rgba(243,218,115,0.9)', color: '#5882A1',
                  boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(243,218,115,0.6), 0 0 40px rgba(243,218,115,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'; }}
              >
                Access Free Resources <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button onClick={handleMeet}
                className="text-base sm:text-lg rounded-lg group transition-all duration-300 font-semibold px-6 sm:px-8 py-4 sm:py-6"
                style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid rgba(243,218,115,0.5)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(243,218,115,0.15)'; e.currentTarget.style.borderColor = '#F3DA73'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(243,218,115,0.5)'; }}
              >
                Let's Meet
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="h-12 w-8 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="h-2 w-1 bg-white/60 rounded-full" />
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
                    className="text-base sm:text-lg rounded-lg group/btn transition-all duration-300 font-semibold px-8 py-6 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)', color: '#1A2A3A',
                      boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)',
                      border: '2px solid rgba(255,255,255,0.3)'
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
                  { micro: "Payer Readiness", title: "Reimbursement Readiness Scorecard", body: "Assess whether your product is payer-ready before entering costly sales cycles.", result: "10 questions. Instant clarity on your reimbursement readiness.", cta: "Take the Scorecard", href: "/for-womens-health/reimbursement-scorecard", external: false },
                  { micro: "Health System Entry", title: "Hospital Partnership Fit Checker", body: "Map your startup's stage to realistic health system entry points.", result: "6 questions. Know which partnership type fits your stage.", cta: "Check Your Fit", href: "/for-womens-health/hospital-fit-checker", external: false },
                  { micro: "Funding Intelligence", title: "Femtech Funding Gap Benchmarker", body: "See how your raise compares to peers by stage and founding team.", result: "6 questions. Benchmark data and gap analysis in seconds.", cta: "See Your Benchmark", href: "/for-womens-health/funding-benchmarker", external: false },
                  { micro: "Fundraising Pipeline", title: "Women's Health Fundraising Tracker", body: "Track your investor pipeline, get femtech-specific fit scores, and manage warm intros — all private and browser-based.", result: "Private pipeline tracker built for pre-seed and seed femtech founders.", cta: "Open Tracker", href: "https://womenshealthfundraisingtracker.lovable.app/", external: true },
                  { micro: "Market Intelligence", title: "The Global Femtech Directory", body: "Explore 887+ innovative companies transforming women's health across 27 categories — from fertility to precision medicine.", result: "Searchable directory of femtech companies, investors, and resources worldwide.", cta: "Explore Directory", href: "https://femtechdb.com/", external: true },
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
                          {card.external && <ExternalLink className="h-4 w-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />}
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
                          <Button onClick={() => card.external ? window.open(card.href, '_blank') : window.location.href = card.href}
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

        {/* ===== CLOSING CTA (matches FinalCTA exactly) ===== */}
        <section ref={ctaRef} id="contact" className="relative py-20 sm:py-40 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark-gray to-primary" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'
          }} />
          <div className={`relative z-10 max-w-5xl mx-auto text-center space-y-12 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-2 px-6 py-2 rounded-full" style={{
              background: 'rgba(243,218,115,0.2)', border: '1.5px solid rgba(243,218,115,0.5)', backdropFilter: 'blur(10px)'
            }}>
              <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>Take the Next Step</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold tracking-wide text-white leading-tight" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)', letterSpacing: '-0.02em'
            }}>Ready to Stop Fighting the System Alone?</h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-inter font-light text-white/95 max-w-4xl mx-auto leading-relaxed" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>Book a strategy call with The Faulkner Group and get a clear path forward.</p>
            <p className="text-lg sm:text-xl font-inter font-light text-white/85 max-w-3xl mx-auto leading-relaxed italic" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>No pitch decks. No fluff. Just a real conversation about what is working and what is not.</p>
            <div className="pt-4">
              <Button onClick={handleMeet}
                className="text-lg sm:text-xl md:text-2xl px-8 sm:px-16 py-6 sm:py-10 rounded-2xl group transition-all duration-500 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)', color: '#1A2A3A',
                  boxShadow: '0 12px 40px rgba(243,218,115,0.5), 0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}>
                Let's Meet <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </div>
            <div className="pt-8 space-y-6 max-w-3xl mx-auto">
              <div className="h-px w-20 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.6), transparent)' }} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForWomensHealth;
