import { useState } from "react";
import { ArrowRight, ArrowLeft, Building2, FlaskConical, UserCheck, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const questions = [
  {
    label: "Company Stage",
    question: "What is your current company stage?",
    options: ["Pre-seed", "Seed", "Series A", "Series B+"],
  },
  {
    label: "Solution Type",
    question: "What type of solution do you offer?",
    options: ["Digital therapeutic", "Diagnostic", "Care navigation", "Remote monitoring", "Other"],
  },
  {
    label: "Clinical Validation",
    question: "Do you have existing clinical validation or pilot data?",
    options: ["Yes", "In progress", "No"],
  },
  {
    label: "Health System Experience",
    question: "Have you worked with a hospital or health system before?",
    options: ["Yes", "No", "In conversations"],
  },
  {
    label: "Revenue Model",
    question: "What is your primary revenue model?",
    options: ["SaaS", "Per member per month", "Fee for service", "Enterprise license", "Other"],
  },
  {
    label: "Biggest Barrier",
    question: "What is your biggest barrier to health system entry right now?",
    options: ["Procurement cycles", "Legal and contracting", "Clinical champion", "Budget", "Awareness"],
  },
];

type Outcome = {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
};

const outcomes: Outcome[] = [
  {
    id: "pilot-ready",
    title: "Pilot Ready",
    icon: <Rocket className="h-10 w-10" style={{ color: "#F3DA73" }} />,
    summary:
      "You have what it takes to start a conversation with a health system innovation team. Your clinical validation and prior experience position you well. Focus on identifying the right innovation or digital health lead at your target system and come with a clear, outcomes-driven pitch. Your next move is getting in the room.",
  },
  {
    id: "build-evidence",
    title: "Build Your Evidence First",
    icon: <FlaskConical className="h-10 w-10" style={{ color: "#F3DA73" }} />,
    summary:
      "Health systems will want outcomes data before committing resources to a partnership. This does not mean you need a full RCT - but you do need credible evidence that your solution moves a metric they care about. Start with a small-scale pilot, a case study, or published outcomes data that speaks to cost, quality, or patient experience.",
  },
  {
    id: "find-champion",
    title: "Find Your Internal Champion",
    icon: <UserCheck className="h-10 w-10" style={{ color: "#F3DA73" }} />,
    summary:
      "Your product fits a real clinical or operational need, but health systems do not buy from the outside in. You need a physician, nurse leader, or operations executive on the inside who believes in what you are building and is willing to sponsor your solution through procurement. Start by mapping clinical leadership at your target systems and building relationships before pitching.",
  },
  {
    id: "enterprise-ready",
    title: "Enterprise Ready",
    icon: <Building2 className="h-10 w-10" style={{ color: "#F3DA73" }} />,
    summary:
      "You are past the pilot phase. You have evidence, relationships, and a revenue model that works. The next challenge is scaling - across departments, across systems, and across geographies. Let us talk about enterprise contracting strategy, system-wide deployment, and how to turn one partnership into five.",
  },
];

function getOutcome(answers: (number | null)[]): Outcome {
  const stage = answers[0]; // 0=Pre-seed, 1=Seed, 2=Series A, 3=Series B+
  const validation = answers[2]; // 0=Yes, 1=In progress, 2=No
  const experience = answers[3]; // 0=Yes, 1=No, 2=In conversations
  const barrier = answers[5]; // 0=Procurement, 1=Legal, 2=Clinical champion, 3=Budget, 4=Awareness

  // Enterprise Ready: later stage + validation + experience
  if (stage !== null && stage >= 2 && validation === 0 && experience === 0) {
    return outcomes[3];
  }

  // Pilot Ready: has validation and some experience
  if (validation === 0 && (experience === 0 || experience === 2)) {
    return outcomes[0];
  }

  // Find Champion: barrier is clinical champion or awareness, has some validation
  if (barrier === 2 || barrier === 4) {
    return outcomes[2];
  }

  // Build Evidence: no validation or in progress
  if (validation === 2 || validation === 1) {
    return outcomes[1];
  }

  // Default to Find Champion
  return outcomes[2];
}

const HospitalFitChecker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const current = questions[currentQuestion];

  const handleSelect = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const handleMeet = () => {
    window.location.href = "/clinical-clarity-session";
  };

  const outcome = getOutcome(answers);

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
              <div className="text-center mb-12">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{ background: "rgba(243,218,115,0.15)", border: "2px solid #F3DA73" }}
                >
                  {outcome.icon}
                </div>
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                  {outcome.title}
                </h1>
              </div>

              <div
                className="rounded-xl p-8 sm:p-10 mb-10"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="font-inter text-lg leading-relaxed text-white/90">
                  {outcome.summary}
                </p>
              </div>

              {/* Answer summary */}
              <div
                className="rounded-xl p-6 sm:p-8 mb-10"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-xs font-inter font-bold tracking-[0.15em] uppercase mb-4" style={{ color: "#F3DA73" }}>
                  Your Inputs
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {questions.map((q, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs font-inter text-white/40">{q.label}</span>
                      <span className="text-sm font-inter text-white/80">
                        {answers[i] !== null ? q.options[answers[i]!] : "-"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

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
                  onClick={handleRestart}
                  variant="outline"
                  className="px-8 py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
                  style={{ background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#F3DA73"; e.currentTarget.style.color = "#F3DA73"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#FFFFFF"; }}
                >
                  Retake Assessment
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
              Hospital Partnership Fit Checker
            </h1>
            <p className="font-inter text-lg text-white/75 mb-8">
              6 questions. Find out which type of health system partnership fits your stage.
            </p>
          </div>
        </section>

        <section className="pb-20 px-6 sm:px-10" style={{ background: "linear-gradient(135deg, hsl(210,25%,45%), hsl(210,25%,55%))" }}>
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: "#F3DA73" }} />
              </div>
              <span className="text-sm font-inter font-medium text-white/60 whitespace-nowrap">
                {currentQuestion + 1} of {questions.length}
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
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HospitalFitChecker;
