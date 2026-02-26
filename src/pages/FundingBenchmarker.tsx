import { useState } from "react";
import { ArrowRight, ArrowLeft, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const steps = [
  {
    title: "About Your Company",
    questions: [
      {
        label: "Funding Stage",
        question: "What is your current funding stage?",
        options: ["Pre-seed", "Seed", "Series A", "Series B", "Bootstrapped"],
      },
      {
        label: "Founding Team",
        question: "What is the gender composition of your founding team?",
        options: ["All women", "Majority women", "Mixed", "Majority men"],
      },
      {
        label: "Focus Area",
        question: "What is your primary focus area?",
        options: ["Reproductive health", "Maternal health", "Menopause", "Mental health", "Oncology", "General women's health", "Other"],
      },
    ],
  },
  {
    title: "Your Raise",
    questions: [
      {
        label: "Amount Raised",
        question: "How much have you raised to date?",
        options: ["Under $500K", "$500K to $2M", "$2M to $5M", "$5M to $10M", "Over $10M"],
      },
      {
        label: "Timeline",
        question: "How long did your last raise take?",
        options: ["Under 3 months", "3 to 6 months", "6 to 12 months", "Over 12 months"],
      },
      {
        label: "Biggest Challenge",
        question: "What is your biggest fundraising challenge right now?",
        options: ["Investor awareness of femtech", "Valuation disagreements", "Finding lead investors", "Demonstrating clinical ROI", "Other"],
      },
    ],
  },
];

const allQuestions = steps.flatMap((step, stepIdx) =>
  step.questions.map((q) => ({ ...q, stepTitle: step.title, stepIdx }))
);

// Static benchmark data
const benchmarkData: Record<string, { avg_female: string; avg_mixed: string; median_time: string; pct_funded: string }> = {
  "Pre-seed": { avg_female: "$850K", avg_mixed: "$1.4M", median_time: "5 months", pct_funded: "12%" },
  "Seed": { avg_female: "$2.1M", avg_mixed: "$4.6M", median_time: "6 months", pct_funded: "18%" },
  "Series A": { avg_female: "$4.6M", avg_mixed: "$9.2M", median_time: "8 months", pct_funded: "8%" },
  "Series B": { avg_female: "$12M", avg_mixed: "$22M", median_time: "10 months", pct_funded: "4%" },
  "Bootstrapped": { avg_female: "N/A", avg_mixed: "N/A", median_time: "N/A", pct_funded: "N/A" },
};

function getGapAnalysis(answers: (number | null)[]): string[] {
  const gaps: string[] = [];
  const team = answers[1]; // 0=All women, 1=Majority women, 2=Mixed, 3=Majority men
  const challenge = answers[5]; // 0=Awareness, 1=Valuation, 2=Lead investors, 3=Clinical ROI, 4=Other
  const raised = answers[3]; // 0=Under $500K, 1=$500K-$2M, etc.
  const stage = answers[0]; // 0=Pre-seed, 1=Seed, 2=Series A, 3=Series B, 4=Bootstrapped

  if (team === 0 || team === 1) {
    gaps.push("Female-led teams statistically raise less per round. A strong HEOR narrative and clinical ROI story can help close this gap with institutional investors.");
  }
  if (challenge === 0) {
    gaps.push("Investor awareness of femtech is growing but still lags behind other health tech verticals. Target investors with explicit women's health or digital health theses.");
  }
  if (challenge === 3) {
    gaps.push("Demonstrating clinical ROI is a common sticking point. Consider partnering with an academic institution or health system to generate credible outcomes data before your next raise.");
  }
  if (challenge === 1) {
    gaps.push("Valuation disagreements often stem from a lack of comparable exits in femtech. Build your case with revenue multiples from adjacent digital health categories.");
  }
  if (challenge === 2) {
    gaps.push("Finding a lead investor is the hardest part. Focus on building conviction with one or two aligned funds rather than spreading across dozens of introductory meetings.");
  }
  if (stage !== null && stage <= 1 && raised !== null && raised === 0) {
    gaps.push("At your stage, raising under $500K may limit runway for clinical validation. Consider non-dilutive grants (NIH SBIR, NSF) to extend your runway without giving up equity.");
  }

  return gaps.slice(0, 2);
}

const FundingBenchmarker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(allQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
  const current = allQuestions[currentQuestion];
  const currentStepIdx = current.stepIdx;

  const handleSelect = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
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
    window.location.href = "/clinical-clarity-session";
  };

  // Build result data
  const stageName = answers[0] !== null ? steps[0].questions[0].options[answers[0]] : "Seed";
  const benchmarks = benchmarkData[stageName] || benchmarkData["Seed"];
  const gaps = getGapAnalysis(answers);
  const teamLabel = answers[1] !== null ? steps[0].questions[1].options[answers[1]] : "";
  const focusLabel = answers[2] !== null ? steps[0].questions[2].options[answers[2]] : "";

  if (showResults) {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <section
            className="min-h-screen pt-36 pb-20 px-6 sm:px-10"
            style={{ background: "linear-gradient(135deg, hsl(210,25%,45%), hsl(210,25%,55%))" }}
          >
            <div className="max-w-3xl mx-auto">
              {/* Headline */}
              <div className="text-center mb-10">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{ background: "rgba(243,218,115,0.15)", border: "2px solid #F3DA73" }}
                >
                  <TrendingUp className="h-10 w-10" style={{ color: "#F3DA73" }} />
                </div>
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                  Here is how you compare.
                </h1>
                <p className="font-inter text-lg text-white/70">
                  {teamLabel} team in {focusLabel.toLowerCase()} at the {stageName.toLowerCase()} stage.
                </p>
              </div>

              {/* Benchmark card */}
              <div
                className="rounded-xl p-8 sm:p-10 mb-6"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-xs font-inter font-bold tracking-[0.15em] uppercase mb-6" style={{ color: "#F3DA73" }}>
                  Benchmark Snapshot - {stageName} Stage
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-xs font-inter text-white/50 mb-1">Avg raise (female-led)</p>
                    <p className="font-playfair text-2xl font-bold text-white">{benchmarks.avg_female}</p>
                  </div>
                  <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-xs font-inter text-white/50 mb-1">Avg raise (mixed/male-led)</p>
                    <p className="font-playfair text-2xl font-bold text-white">{benchmarks.avg_mixed}</p>
                  </div>
                  <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-xs font-inter text-white/50 mb-1">Median raise timeline</p>
                    <p className="font-playfair text-2xl font-bold text-white">{benchmarks.median_time}</p>
                  </div>
                  <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-xs font-inter text-white/50 mb-1">% of femtech deals funded</p>
                    <p className="font-playfair text-2xl font-bold text-white">{benchmarks.pct_funded}</p>
                  </div>
                </div>
              </div>

              {/* Gap analysis */}
              {gaps.length > 0 && (
                <div
                  className="rounded-xl p-8 sm:p-10 mb-10"
                  style={{
                    background: "rgba(243,218,115,0.08)",
                    border: "1px solid rgba(243,218,115,0.25)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0" style={{ color: "#F3DA73" }} />
                    <p className="text-xs font-inter font-bold tracking-[0.15em] uppercase" style={{ color: "#F3DA73" }}>
                      Gap Analysis
                    </p>
                  </div>
                  <div className="space-y-4">
                    {gaps.map((gap, i) => (
                      <p key={i} className="font-inter text-base leading-relaxed text-white/85">
                        {gap}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleMeet}
                  className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ background: "#F3DA73", color: "#5882A1", border: "none" }}
                >
                  Let's Meet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => (window.location.href = "/for-womens-health")}
                  variant="outline"
                  className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
                  style={{ background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#F3DA73"; e.currentTarget.style.color = "#F3DA73"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#FFFFFF"; }}
                >
                  Explore More Resources
                </Button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section
          className="pt-36 pb-10 px-6 sm:px-10"
          style={{ background: "linear-gradient(135deg, hsl(210,25%,45%), hsl(210,25%,55%))" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Femtech Funding Gap Benchmarker
            </h1>
            <p className="font-inter text-lg text-white/75 mb-8">
              6 questions. See how your raise compares to femtech peers by stage and team.
            </p>
          </div>
        </section>

        <section className="pb-20 px-6 sm:px-10" style={{ background: "linear-gradient(135deg, hsl(210,25%,45%), hsl(210,25%,55%))" }}>
          <div className="max-w-3xl mx-auto">
            {/* Step indicator */}
            <div className="flex gap-2 mb-6">
              {steps.map((step, i) => (
                <div key={i} className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-inter font-semibold tracking-wide uppercase ${currentStepIdx === i ? "text-white" : "text-white/40"}`}>
                      {step.title}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: currentStepIdx > i ? "100%" : currentStepIdx === i ? `${((currentQuestion - (i === 0 ? 0 : steps[0].questions.length)) / step.questions.length) * 100}%` : "0%",
                        background: currentStepIdx === i ? "#F3DA73" : "rgba(243,218,115,0.4)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Overall progress */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: "#F3DA73" }} />
              </div>
              <span className="text-sm font-inter font-medium text-white/60 whitespace-nowrap">
                {currentQuestion + 1} of {allQuestions.length}
              </span>
            </div>

            {/* Question card */}
            <div
              className="rounded-xl p-8 sm:p-10 mb-8"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-xs font-inter font-bold tracking-[0.15em] uppercase mb-6" style={{ color: "#F3DA73" }}>
                {current.label}
              </p>
              <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-white leading-snug mb-8">
                {current.question}
              </h2>

              <div className="flex flex-col gap-3">
                {current.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className="text-left py-4 px-5 rounded-lg font-inter text-base transition-all duration-300 hover:scale-[1.01]"
                    style={{
                      background: answers[currentQuestion] === idx ? "#F3DA73" : "rgba(255,255,255,0.08)",
                      color: answers[currentQuestion] === idx ? "#5882A1" : "rgba(255,255,255,0.75)",
                      border: answers[currentQuestion] === idx ? "2px solid #F3DA73" : "2px solid rgba(255,255,255,0.15)",
                      fontWeight: answers[currentQuestion] === idx ? 600 : 400,
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                variant="ghost"
                className="text-white/60 hover:text-white disabled:opacity-30 px-4 py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={answers[currentQuestion] === null}
                className="px-8 py-5 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                style={{
                  background: answers[currentQuestion] !== null ? "#F3DA73" : "rgba(243,218,115,0.3)",
                  color: "#5882A1",
                  border: "none",
                }}
              >
                {currentQuestion === allQuestions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FundingBenchmarker;
