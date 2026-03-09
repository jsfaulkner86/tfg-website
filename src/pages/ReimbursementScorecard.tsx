import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

const categories = [
  {
    name: "Product Readiness",
    questions: [
      "Do you have published clinical evidence or outcomes data supporting your product?",
      "Have you identified the specific CPT, ICD-10, or HCPCS codes that apply to your solution?",
      "Does your product have FDA clearance, de novo authorization, or a defined regulatory pathway?",
    ],
  },
  {
    name: "Payer Strategy",
    questions: [
      "Have you mapped which payer types (commercial, Medicare, Medicaid, self-insured employers) are most relevant to your go-to-market?",
      "Have you had any prior authorization or coverage policy conversations with a payer?",
      "Do you have a health economics and outcomes research (HEOR) strategy or model?",
      "Have you documented your product's cost-offset or ROI for a payer audience?",
    ],
  },
  {
    name: "Market Access",
    questions: [
      "Do you have a reimbursement or market access advisor on your team or advisory board?",
      "Have you submitted or reviewed any payer dossiers or coverage requests?",
      "Do you know the difference between coverage, coding, and payment as they apply to your product?",
    ],
  },
];

const allQuestions = categories.flatMap((cat) =>
  cat.questions.map((q) => ({ question: q, category: cat.name }))
);

const tiers = [
  {
    range: [0, 3],
    label: "Early Stage",
    summary:
      "You have foundational work to do before payer conversations. That is completely normal at this stage - most founders start here. The key is knowing where to focus first: clinical evidence, coding strategy, and regulatory clarity. We can help you build that foundation so your first payer conversation is a strong one.",
  },
  {
    range: [4, 6],
    label: "Getting There",
    summary:
      "You have momentum, but key gaps remain that could slow you down when it matters most. Whether it is tightening your HEOR model, locking in the right codes, or preparing a payer-ready narrative - closing these gaps now saves months later. Let us show you exactly what to prioritize next.",
  },
  {
    range: [7, 9],
    label: "Payer Ready",
    summary:
      "You are positioned to have real reimbursement conversations. Your clinical foundation is solid and your market access thinking is maturing. Now it is about execution - the right introductions, the right materials, and the right timing. Let us help you accelerate from readiness to revenue.",
  },
  {
    range: [10, 10],
    label: "Advanced",
    summary:
      "You are ahead of most women's health tech founders when it comes to reimbursement readiness. That is rare - and valuable. At this level, the conversation shifts to scaling payer relationships, optimizing contracts, and expanding coverage. Let us talk strategy.",
  },
];

const ReimbursementScorecard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    new Array(allQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
  const current = allQuestions[currentQuestion];
  const score = answers.filter((a) => a === true).length;
  const tier = tiers.find((t) => score >= t.range[0] && score <= t.range[1])!;

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < allQuestions.length - 1) setCurrentQuestion(currentQuestion + 1);
    else setShowResults(true);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(allQuestions.length).fill(null));
    setShowResults(false);
  };

  const handleMeet = () => {
    window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank');
  };

  const getCategoryProgress = () => {
    let idx = 0;
    return categories.map((cat) => {
      const start = idx;
      const end = idx + cat.questions.length;
      idx = end;
      const answered = answers.slice(start, end).filter((a) => a !== null).length;
      const isActive = currentQuestion >= start && currentQuestion < end;
      return { name: cat.name, total: cat.questions.length, answered, isActive, start, end };
    });
  };

  if (showResults) {
    return (
      <>
        <SEOHead
          title="Reimbursement Readiness Scorecard | Faulkner Group"
          description="Free 10-question assessment to evaluate your women's health tech product's payer readiness across clinical evidence, coding, and market access."
          canonical="https://thefaulknergroupadvisors.com/for-womens-health/reimbursement-scorecard"
        />
        <Header />
        <main className="overflow-x-hidden">
          <section className="min-h-screen pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-gradient-to-br from-primary via-dark-gray to-primary" style={{ paddingTop: 'calc(180px + env(safe-area-inset-top, 0px))' }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{
                  background: 'rgba(243,218,115,0.15)',
                  border: '2.5px solid #F3DA73',
                  boxShadow: '0 0 30px rgba(243,218,115,0.2)'
                }}>
                  <CheckCircle2 className="h-10 w-10" style={{ color: '#F3DA73' }} />
                </div>
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                  Your Score: {score}/10
                </h1>
                <p className="font-inter text-xl sm:text-2xl font-semibold" style={{ color: '#F3DA73' }}>{tier.label}</p>
              </div>

              <div className="rounded-[24px] p-8 sm:p-10 mb-10" style={{
                background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
                border: '2.5px solid #F3DA73',
                boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}>
                <p className="font-inter text-lg leading-relaxed" style={{ color: 'rgba(248,248,248,0.95)', letterSpacing: '0.3px' }}>{tier.summary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {categories.map((cat, catIdx) => {
                  let startIdx = 0;
                  for (let i = 0; i < catIdx; i++) startIdx += categories[i].questions.length;
                  const catAnswers = answers.slice(startIdx, startIdx + cat.questions.length);
                  const catScore = catAnswers.filter((a) => a === true).length;
                  return (
                    <div key={catIdx} className="rounded-xl p-5 text-center" style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(243,218,115,0.2)'
                    }}>
                      <p className="text-sm font-inter font-medium text-white/60 mb-1">{cat.name}</p>
                      <p className="font-playfair text-2xl font-bold text-white">{catScore}/{cat.questions.length}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={handleMeet} variant="glassy" className="px-8 py-6 text-base sm:text-lg group">
                  Let's Meet <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button onClick={handleRestart} variant="outline" className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
                  style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid rgba(243,218,115,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(243,218,115,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Retake Scorecard
                </Button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  const catProgress = getCategoryProgress();

  return (
    <>
      <SEOHead
        title="Reimbursement Readiness Scorecard | Faulkner Group"
        description="Free 10-question assessment to evaluate your women's health tech product's payer readiness across clinical evidence, coding, and market access."
        canonical="https://thrive-beacon-studio.lovable.app/for-womens-health/reimbursement-scorecard"
      />
      <Header />
      <main className="overflow-x-hidden">
        <section className="min-h-screen pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-gradient-to-br from-primary via-dark-gray to-primary" style={{ paddingTop: 'calc(180px + env(safe-area-inset-top, 0px))' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(243,218,115,0.1) 0%, transparent 60%)', filter: 'blur(80px)'
          }} />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{
                background: 'rgba(243,218,115,0.2)', border: '1.5px solid rgba(243,218,115,0.5)', backdropFilter: 'blur(10px)'
              }}>
                <span className="text-sm font-inter font-medium tracking-wider uppercase" style={{ color: '#F3DA73' }}>Reimbursement Readiness</span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                Reimbursement Readiness Scorecard
              </h1>
              <p className="font-inter text-lg text-white/80">10 questions. 3 categories. Find out if your product is ready for payer conversations.</p>
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 mb-6">
              {catProgress.map((cat, i) => (
                <div key={i} className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-inter font-semibold tracking-wide uppercase ${cat.isActive ? 'text-white' : 'text-white/40'}`}>{cat.name}</span>
                    <span className="text-xs font-inter text-white/40">{cat.answered}/{cat.total}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{
                      width: `${(cat.answered / cat.total) * 100}%`,
                      background: cat.isActive ? 'linear-gradient(90deg, #F3DA73, #D4B65D)' : 'rgba(243,218,115,0.3)'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Overall progress */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #F3DA73, #D4B65D)' }} />
              </div>
              <span className="text-sm font-inter font-medium text-white/60 whitespace-nowrap">{currentQuestion + 1} of {allQuestions.length}</span>
            </div>

            {/* Question card */}
            <div className="rounded-2xl sm:rounded-[24px] p-5 sm:p-8 md:p-10 mb-8" style={{
              background: 'linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)',
              border: '2.5px solid #F3DA73',
              boxShadow: '0 12px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}>
              <p className="text-xs font-inter font-bold tracking-[0.15em] uppercase mb-6" style={{ color: '#F3DA73' }}>{current.category}</p>
              <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-white leading-snug mb-8" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                {current.question}
              </h2>
              <div className="flex gap-4">
                {[true, false].map((val) => (
                  <button key={String(val)} onClick={() => handleAnswer(val)}
                    className="flex-1 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: answers[currentQuestion] === val
                        ? 'linear-gradient(135deg, #F3DA73, #D4B65D)'
                        : 'rgba(255,255,255,0.1)',
                      color: answers[currentQuestion] === val ? '#1A2A3A' : 'rgba(255,255,255,0.8)',
                      border: answers[currentQuestion] === val ? '2px solid #F3DA73' : '2px solid rgba(255,255,255,0.2)',
                      boxShadow: answers[currentQuestion] === val ? '0 4px 16px rgba(243,218,115,0.3)' : 'none'
                    }}
                  >
                    {val ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button onClick={handlePrev} disabled={currentQuestion === 0} variant="ghost" className="text-white/60 hover:text-white disabled:opacity-30 px-4 py-3">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext} disabled={answers[currentQuestion] === null}
                variant="glassy"
                className="px-8 py-5 text-base disabled:opacity-40"
              >
                {currentQuestion === allQuestions.length - 1 ? 'See Results' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReimbursementScorecard;
