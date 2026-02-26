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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'hsl(210, 14%, 19%)' }}>
          {/* Abstract grid overlay */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `
              linear-gradient(hsla(45,62%,56%,0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsla(45,62%,56%,0.3) 1px, transparent 1px),
              radial-gradient(circle at 70% 30%, hsla(45,62%,56%,0.15) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, hsla(45,62%,56%,0.1) 0%, transparent 40%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 100% 100%, 100% 100%'
          }} />
          {/* Accent glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, hsl(45,62%,56%) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }} />

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center pt-32 pb-20">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
              For Women's Health.{' '}
              <span className="block mt-2" style={{ color: '#F3DA73' }}>
                Against Every System That Holds It Back.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-inter text-white/75">
              The Faulkner Group equips women's health tech founders, operators, and innovators with the strategy, tools, and system fluency to break through and scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: '#F3DA73', color: 'hsl(210, 14%, 19%)', border: 'none' }}
              >
                Access Free Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleMeet}
                variant="outline"
                className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#F3DA73'; e.currentTarget.style.color = '#F3DA73'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                Let's Meet
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Value Props */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 bg-background">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-inter font-bold tracking-[0.2em] uppercase text-center mb-4 text-accent">
              What We Give You That No One Else Does
            </p>
            <div className="w-12 h-0.5 mx-auto mb-16 bg-accent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {[
                {
                  icon: <Building2 className="h-8 w-8 text-primary" />,
                  title: "Hospital & Health System Fluency",
                  body: "Know exactly how to walk into a health system conversation and walk out with a partnership."
                },
                {
                  icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
                  title: "Reimbursement & Regulatory Roadmaps",
                  body: "We translate payer strategy, CPT coding, and FDA pathways into founder-ready action plans."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-primary" />,
                  title: "Funding Gap Intelligence",
                  body: "Benchmark your raise against femtech peers and close the knowledge gap before your next pitch."
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-xl transition-all duration-300 hover:shadow-lg group border border-border">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="font-inter text-base leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Bold Callout Band */}
        <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: 'hsl(210, 14%, 19%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-0.5 mx-auto mb-10" style={{ background: '#F3DA73' }} />
            <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-10 italic text-white">
              "Most women's health startups don't fail because of bad tech. They fail because the system is complicated. We know the system."
            </blockquote>
            <Button
              onClick={handleMeet}
              className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: '#F3DA73', color: 'hsl(210, 14%, 19%)', border: 'none' }}
            >
              Let's Meet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* SECTION 4 — Resource Teasers */}
        <section id="resources" className="py-20 sm:py-28 px-6 sm:px-10 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Tools Built for This Fight
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-16 bg-accent" />

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
                <div key={i} className="flex flex-col p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background border border-border">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-primary/10">
                    <span className="font-inter font-bold text-lg text-primary">{i + 1}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">{card.title}</h3>
                  <p className="font-inter text-base leading-relaxed mb-8 flex-1 text-muted-foreground">{card.body}</p>
                  <Button
                    variant="outline"
                    className="w-full py-5 text-sm font-semibold rounded-lg transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {card.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Closing CTA Band */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden" style={{ background: 'hsl(210, 14%, 19%)' }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(45,62%,56%) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Stop Fighting the System Alone?
            </h2>
            <p className="font-inter text-lg sm:text-xl mb-10 leading-relaxed text-white/70">
              Book a strategy call with The Faulkner Group and get a clear path forward.
            </p>
            <Button
              onClick={handleMeet}
              className="px-10 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: '#F3DA73', color: 'hsl(210, 14%, 19%)', border: 'none', boxShadow: '0 0 40px hsla(45,62%,56%,0.3)' }}
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
