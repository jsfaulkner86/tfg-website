import { Building2, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const ForWomensHealth = () => {
  const handleMeet = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* SECTION 1 — Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-dark-gray to-primary">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          {/* Gold glow */}
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(243,218,115,0.12) 0%, transparent 60%)',
            filter: 'blur(80px)'
          }} />

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center pt-32 pb-20">
            {/* Premium badge */}
            <div className="inline-block mb-8 px-6 py-2 rounded-full" style={{
              background: 'rgba(243,218,115,0.2)',
              border: '1.5px solid rgba(243,218,115,0.5)',
              backdropFilter: 'blur(10px)'
            }}>
              <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>
                For Women's Health Innovators
              </span>
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}>
              For Women's Health.{' '}
              <span className="block mt-2" style={{ color: '#F3DA73' }}>
                Against Every System That Holds It Back.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-inter font-light text-white/90" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              The Faulkner Group equips women's health tech founders, operators, and innovators with the strategy, tools, and system fluency to break through and scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-base sm:text-lg rounded-lg group transition-all duration-500 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                  color: '#1A2A3A',
                  boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(243,218,115,0.6), 0 0 40px rgba(243,218,115,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'; }}
              >
                Access Free Resources
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={handleMeet}
                variant="outline"
                className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
                style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid rgba(243,218,115,0.5)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(243,218,115,0.15)'; e.currentTarget.style.borderColor = '#F3DA73'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(243,218,115,0.5)'; }}
              >
                Let's Meet
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Value Props */}
        <section className="px-6 sm:px-10 relative overflow-hidden" style={{
          paddingTop: '120px',
          paddingBottom: '100px',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #F9F6EC 100%)'
        }}>
          {/* Gold glow at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }} />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Badge */}
            <div className="text-center mb-10">
              <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
                background: 'linear-gradient(135deg, rgba(243,218,115,0.12), rgba(243,218,115,0.06))',
                border: '1.5px solid rgba(243,218,115,0.25)',
                boxShadow: '0 4px 12px rgba(243,218,115,0.08)'
              }}>
                <span className="text-xs font-inter font-semibold tracking-[0.15em] uppercase" style={{ color: '#718DA9' }}>
                  What We Give You That No One Else Does
                </span>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-16">
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4))' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#F3DA73', boxShadow: '0 0 8px rgba(243,218,115,0.4)' }} />
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(243,218,115,0.4), transparent)' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="h-7 w-7" style={{ color: '#F3DA73' }} />,
                  title: "Hospital & Health System Fluency",
                  body: "Know exactly how to walk into a health system conversation and walk out with a partnership."
                },
                {
                  icon: <ClipboardCheck className="h-7 w-7" style={{ color: '#F3DA73' }} />,
                  title: "Reimbursement & Regulatory Roadmaps",
                  body: "We translate payer strategy, CPT coding, and FDA pathways into founder-ready action plans."
                },
                {
                  icon: <TrendingUp className="h-7 w-7" style={{ color: '#F3DA73' }} />,
                  title: "Funding Gap Intelligence",
                  body: "Benchmark your raise against femtech peers and close the knowledge gap before your next pitch."
                }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-1 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.4), rgba(243,218,115,0.2))',
                    filter: 'blur(16px)'
                  }} />
                  <div className="relative rounded-[24px] p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-2 h-full" style={{
                    background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                    border: '2.5px solid #F3DA73',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 group-hover:scale-110" style={{
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1.5px solid rgba(255,255,255,0.25)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                    }}>
                      {item.icon}
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-4" style={{ color: '#F3DA73', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>{item.title}</h3>
                    <p className="font-inter text-base leading-relaxed" style={{ color: 'rgba(248,248,248,0.95)', letterSpacing: '0.3px' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Bold Callout Band */}
        <section className="relative py-24 px-6 sm:px-10 overflow-hidden bg-gradient-to-br from-primary via-dark-gray to-primary">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.6))' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#F3DA73', boxShadow: '0 0 8px rgba(243,218,115,0.4)' }} />
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(243,218,115,0.6), transparent)' }} />
            </div>
            <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-10 text-white" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}>
              "Most women's health startups don't fail because of bad tech. They fail because the system is complicated. We know the system."
            </blockquote>
            <Button
              onClick={handleMeet}
              className="px-8 py-6 text-base sm:text-lg rounded-lg group transition-all duration-500 font-semibold"
              style={{
                background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                color: '#1A2A3A',
                boxShadow: '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(243,218,115,0.6), 0 0 40px rgba(243,218,115,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(243,218,115,0.4), 0 4px 12px rgba(0,0,0,0.2)'; }}
            >
              Let's Meet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* SECTION 4 — Resource Teasers */}
        <section id="resources" className="px-6 sm:px-10 relative overflow-hidden" style={{
          paddingTop: '120px',
          paddingBottom: '100px',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #F9F6EC 100%)'
        }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(243,218,115,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-8" style={{
                color: '#1A2A3A',
                letterSpacing: '-0.04em',
                lineHeight: '1',
                textShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                Tools Built for This Fight
              </h2>
            </div>

            <div className="flex items-center justify-center gap-3 mb-16">
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,218,115,0.4))' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#F3DA73', boxShadow: '0 0 8px rgba(243,218,115,0.4)' }} />
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(243,218,115,0.4), transparent)' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Reimbursement Readiness Scorecard",
                  body: "Assess whether your product is payer-ready before entering costly sales cycles.",
                  cta: "Take the Scorecard",
                  href: "/for-womens-health/reimbursement-scorecard"
                },
                {
                  title: "Hospital Partnership Fit Checker",
                  body: "Map your startup's stage to realistic health system entry points.",
                  cta: "Check Your Fit",
                  href: "/for-womens-health/hospital-fit-checker"
                },
                {
                  title: "Femtech Funding Gap Benchmarker",
                  body: "See how your raise compares to peers by stage and founding team.",
                  cta: "See Your Benchmark",
                  href: "/for-womens-health/funding-benchmarker"
                }
              ].map((card, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-1 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'linear-gradient(135deg, rgba(243,218,115,0.4), rgba(243,218,115,0.2))',
                    filter: 'blur(16px)'
                  }} />
                  <div className="relative flex flex-col rounded-[24px] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 h-full" style={{
                    background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                    border: '2.5px solid #F3DA73',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}>
                    {/* Number badge */}
                    <div className="flex justify-center mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                      }}>
                        <span className="text-xl font-playfair font-bold" style={{ color: '#F3DA73', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>{i + 1}</span>
                      </div>
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-4 text-center" style={{ color: '#F3DA73', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>{card.title}</h3>
                    <p className="font-inter text-base leading-relaxed mb-8 flex-1 text-center" style={{ color: 'rgba(248,248,248,0.95)', letterSpacing: '0.3px' }}>{card.body}</p>
                    <Button
                      className="w-full py-5 text-sm font-semibold rounded-lg transition-all duration-500 group/btn"
                      style={{
                        background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                        color: '#1A2A3A',
                        boxShadow: '0 4px 16px rgba(243,218,115,0.3)',
                        border: 'none'
                      }}
                      onClick={() => card.href && (window.location.href = card.href)}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(243,218,115,0.5)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(243,218,115,0.3)'; }}
                    >
                      {card.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Closing CTA Band */}
        <section className="relative py-40 px-6 overflow-hidden bg-gradient-to-br from-primary via-dark-gray to-primary">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
            <div className="inline-block mb-2 px-6 py-2 rounded-full" style={{
              background: 'rgba(243,218,115,0.2)',
              border: '1.5px solid rgba(243,218,115,0.5)',
              backdropFilter: 'blur(10px)'
            }}>
              <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>
                Take the Next Step
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-wide text-white leading-tight" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}>
              Ready to Stop Fighting the System Alone?
            </h2>
            <p className="text-xl sm:text-2xl font-inter font-light text-white/95 max-w-4xl mx-auto leading-relaxed" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Book a strategy call with The Faulkner Group and get a clear path forward.
            </p>
            <div className="pt-4">
              <Button
                onClick={handleMeet}
                className="text-xl sm:text-2xl px-16 py-10 rounded-2xl group transition-all duration-500 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #F3DA73 0%, #D4B65D 100%)',
                  color: '#1A2A3A',
                  boxShadow: '0 12px 40px rgba(243,218,115,0.5), 0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}
              >
                Let's Meet
                <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForWomensHealth;
