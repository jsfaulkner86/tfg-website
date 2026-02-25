import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Why do most women's health tech pilots fail to scale?",
    answer:
      "90% of health tech pilots fail to convert to full-scale implementation without clinical alignment (Accenture Health, Digital Health Scaling Report). The gap between a promising women's health platform and real-world clinical adoption isn't about the technology. It's about trust, workflow fit, and physician buy-in. Without a clinical and operational strategy from day one, even the best platforms get stuck in endless pilots, face governance roadblocks from health systems and payers, and never reach the scale they were built for. The Faulkner Group embeds directly inside women's health tech companies to close these gaps permanently.",
  },
  {
    question: "How do you get physicians to adopt new health technology?",
    answer:
      "Physicians don't adopt technology because it's good. They adopt it because a trusted colleague told them it works. The Faulkner Group builds physician adoption through peer-to-peer advocacy, KOL engagement, CMIO engagement strategies, and internal champion development that drives adoption from the inside out. Dr. Nicole Faulkner, a board-certified OB/GYN and Medical Director at BackTable, speaks the language of clinicians and holds direct physician relationships through BackTable and WHIS conferences. This is the physician-first strategy that converts skepticism into advocacy.",
  },
  {
    question: "What clinical governance frameworks do health systems require before approving new tech?",
    answer:
      "Health systems and payers require governance and risk frameworks before approving new women's health technology. This includes clinical environment audits, integration barrier identification, controlled rollback protocols, escalation pathways, and compliance documentation. The Faulkner Group builds these governance protocols, CMIO engagement strategies, and risk frameworks so that health system leadership has the confidence to approve enterprise-wide deployment. Without these frameworks, even clinically validated platforms stall at the pilot stage.",
  },
  {
    question: "What is The 4 Pillars of Clinical Adoption framework?",
    answer:
      "The 4 Pillars of Clinical Adoption is a framework developed by The Faulkner Group for scaling women's health technology from pilot to enterprise deployment. The four pillars are: (1) Clinical Readiness and Governance, which covers environment audits, integration barrier identification, and risk frameworks for health systems and payers. (2) Physician Adoption and Champion Development, which includes CMIO engagement, peer-to-peer advocacy, KOL strategy, and building internal champions. (3) Training, Education, and Change Management, covering structured programs from front-desk staff to attending physicians. (4) Sales, Customer Success, and Deployment, which brings clinical credibility to the sales process and manages the full pilot-to-enterprise lifecycle. The Faulkner Group offers a Clinical Clarity Session to assess which pillars are most at risk for your specific product.",
  },
  {
    question: "How do VC and PE firms reduce clinical adoption risk in health tech portfolios?",
    answer:
      "Clinical adoption risk is the leading cause of post-investment stalls in women's health tech portfolios. Venture capital and private equity firms reduce this risk through clinical and operational diligence that evaluates physician sentiment, governance readiness, EHR integration viability, and workflow alignment before a Series B, add-on acquisition, or board review. The Faulkner Group provides this clinical readiness assessment by embedding directly inside portfolio companies to identify adoption barriers, build governance frameworks, and accelerate physician buy-in. A Clinical Clarity Session is the fastest way to surface the specific failure points before they become board-level problems.",
  },
  {
    question: "What is a Clinical Clarity Session and who is it for?",
    answer:
      "A Clinical Clarity Session is a 90-minute virtual diagnostic with a board-certified OB/GYN and a Healthcare IT Architect. It's designed for women's health tech founders in active health system conversations, approaching a pilot, preparing for investor due diligence, or recovering from a pilot that didn't go as planned. The session identifies the 1-3 highest-risk failure points across workflow fit, governance, adoption barriers, EHR integration, and clinical trust - and delivers a written Clinical Clarity Summary within 48 hours with findings, risks, and recommended actions shareable with your team or investors. It costs $1,500 and includes a pre-session product review so we arrive informed, not orienting.",
  },
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 relative overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
        background: "linear-gradient(180deg, #FDFCF9 0%, #F5F0E4 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="inline-block mb-6 px-6 py-2 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(113,141,169,0.12), rgba(113,141,169,0.06))",
              border: "1.5px solid rgba(113,141,169,0.25)",
              boxShadow: "0 4px 12px rgba(113,141,169,0.08)",
            }}
          >
            <span
              className="text-xs font-inter font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#718DA9" }}
            >
              Common Questions
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
            style={{
              color: "#1A2A3A",
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div
              style={{
                width: "40px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(113,141,169,0.4))",
              }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#718DA9",
                boxShadow: "0 0 8px rgba(113,141,169,0.4)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(113,141,169,0.4), transparent)",
              }}
            />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(243,218,115,0.3)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                }}
              >
                <AccordionTrigger
                  className="px-8 py-6 text-left hover:no-underline font-playfair font-bold text-lg sm:text-xl"
                  style={{
                    color: "#1A2A3A",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p
                    className="text-base font-inter leading-relaxed"
                    style={{
                      color: "#4A5568",
                      lineHeight: "1.8",
                    }}
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQ;
