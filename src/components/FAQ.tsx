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
      "90% of health tech pilots fail to convert to full-scale implementation without clinical alignment. The gap between a promising platform and real-world adoption isn't about the technology. It's about trust, workflow fit, and physician buy-in. Without a clinical and operational strategy from day one, even the best platforms get stuck in endless pilots, face governance roadblocks, and never reach the scale they were built for.",
  },
  {
    question: "How do you get physicians to adopt new health technology?",
    answer:
      "Physicians don't adopt technology because it's good. They adopt it because a trusted colleague told them it works. We build that trust through peer-to-peer advocacy, KOL engagement, and internal champions who drive adoption from the inside out. Dr. Nicole Faulkner, a board-certified OB/GYN, speaks the language of clinicians and holds direct physician relationships through BackTable and WHIS conferences.",
  },
  {
    question: "What clinical governance frameworks do health systems require before approving new tech?",
    answer:
      "Health systems and payers require governance and risk frameworks before approving new technology. We audit your clinical environment, including health systems, payer networks, and practice workflows, to identify every integration barrier. Then we build the governance protocols, CMIO engagement strategies, controlled rollback protocols, and compliance documentation that give leadership the confidence to say yes.",
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
                <AccordionContent
                  className="px-8 pb-6"
                >
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
