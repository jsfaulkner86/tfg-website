import { Building2, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const ForWomensHealth = () => {
  const handleMeet = () => {
    window.location.href = '/clinical-clarity-session';
  };

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* SECTION 1 — Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0A1628' }}>
          {/* Abstract grid overlay */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `
              linear-gradient(rgba(10,191,188,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10,191,188,0.3) 1px, transparent 1px),
              radial-gradient(circle at 70% 30%, rgba(10,191,188,0.15) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(10,191,188,0.1) 0%, transparent 40%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 100% 100%, 100% 100%'
          }} />
          {/* Accent glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #0ABFBC 0%, transparent 70%)',
            filter: 'blur(80px)'
          }} />

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center pt-32 pb-20">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8" style={{ color: '#FFFFFF' }}>
              For Women's Health.{' '}
              <span className="block mt-2" style={{ color: '#0ABFBC' }}>
                Against Every System That Holds It Back.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-inter" style={{ color: 'rgba(255,255,255,0.75)' }}>
              The Faulkner Group equips women's health tech founders, operators, and innovators with the strategy, tools, and system fluency to break through and scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: '#0ABFBC', color: '#0A1628', border: 'none' }}
              >
                Access Free Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleMeet}
                variant="outline"
                className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABFBC'; e.currentTarget.style.color = '#0ABFBC'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                Let's Meet
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Value Props */}
        <section className="py-20 sm:py-28 px-6 sm:px-10" style={{ background: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-inter font-bold tracking-[0.2em] uppercase text-center mb-4" style={{ color: '#0ABFBC' }}>
              What We Give You That No One Else Does
            </p>
            <div className="w-12 h-0.5 mx-auto mb-16" style={{ background: '#0ABFBC' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {[
                {
                  icon: <Building2 className="h-8 w-8" style={{ color: '#0ABFBC' }} />,
                  title: "Hospital & Health System Fluency",
                  body: "Know exactly how to walk into a health system conversation and walk out with a partnership."
                },
                {
                  icon: <ClipboardCheck className="h-8 w-8" style={{ color: '#0ABFBC' }} />,
                  title: "Reimbursement & Regulatory Roadmaps",
                  body: "We translate payer strategy, CPT coding, and FDA pathways into founder-ready action plans."
                },
                {
                  icon: <TrendingUp className="h-8 w-8" style={{ color: '#0ABFBC' }} />,
                  title: "Funding Gap Intelligence",
                  body: "Benchmark your raise against femtech peers and close the knowledge gap before your next pitch."
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-xl transition-all duration-300 hover:shadow-lg group" style={{ border: '1px solid #E5E7EB' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(10,191,188,0.08)' }}>
                    {item.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-4" style={{ color: '#0A1628' }}>{item.title}</h3>
                  <p className="font-inter text-base leading-relaxed" style={{ color: '#4B5563' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Bold Callout Band */}
        <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: '#0A1628' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-0.5 mx-auto mb-10" style={{ background: '#0ABFBC' }} />
            <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-10 italic" style={{ color: '#FFFFFF' }}>
              "Most women's health startups don't fail because of bad tech. They fail because the system is complicated. We know the system."
            </blockquote>
            <Button
              onClick={handleMeet}
              className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: '#0ABFBC', color: '#0A1628', border: 'none' }}
            >
              Let's Meet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* SECTION 4 — Resource Teasers */}
        <section id="resources" className="py-20 sm:py-28 px-6 sm:px-10" style={{ background: '#F9FAFB' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#0A1628' }}>
              Tools Built for This Fight
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-16" style={{ background: '#0ABFBC' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Reimbursement Readiness Scorecard",
                  body: "Assess whether your product is payer-ready before entering costly sales cycles.",
                  cta: "Coming Soon"
                },
                {
                  title: "Hospital Partnership Fit Checker",
                  body: "Map your startup's stage to realistic health system entry points.",
                  cta: "Coming Soon"
                },
                {
                  title: "Femtech Funding Gap Benchmarker",
                  body: "See how your raise compares to peers by stage and founding team.",
                  cta: "Get Access"
                }
              ].map((card, i) => (
                <div key={i} className="flex flex-col p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6" style={{ background: 'rgba(10,191,188,0.1)' }}>
                    <span className="font-inter font-bold text-lg" style={{ color: '#0ABFBC' }}>{i + 1}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-3" style={{ color: '#0A1628' }}>{card.title}</h3>
                  <p className="font-inter text-base leading-relaxed mb-8 flex-1" style={{ color: '#4B5563' }}>{card.body}</p>
                  <Button
                    variant="outline"
                    className="w-full py-5 text-sm font-semibold rounded-lg transition-all duration-300"
                    style={{
                      border: '2px solid #0ABFBC',
                      color: '#0ABFBC',
                      background: 'transparent'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#0ABFBC'; e.currentTarget.style.color = '#0A1628'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0ABFBC'; }}
                  >
                    {card.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Closing CTA Band */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden" style={{ background: '#0A1628' }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #0ABFBC 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Ready to Stop Fighting the System Alone?
            </h2>
            <p className="font-inter text-lg sm:text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Book a strategy call with The Faulkner Group and get a clear path forward.
            </p>
            <Button
              onClick={handleMeet}
              className="px-10 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: '#0ABFBC', color: '#0A1628', border: 'none', boxShadow: '0 0 40px rgba(10,191,188,0.3)' }}
            >
              Let's Meet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForWomensHealth;
