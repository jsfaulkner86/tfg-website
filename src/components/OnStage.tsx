import { useEffect, useRef, useState } from "react";
import whisPanel from "@/assets/whis-boston-panel.png";

const OnStage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(10,22,40,0.97) 0%, rgba(20,35,55,0.98) 100%)",
      }}
    >
      {/* Subtle gold accent line at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: "60%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(243,218,115,0.3) 30%, rgba(243,218,115,0.3) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-inter font-medium uppercase mb-3"
            style={{
              fontSize: "13px",
              letterSpacing: "0.2em",
              color: "hsl(45, 62%, 56%)",
            }}
          >
            On Stage
          </p>
          <h2
            className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl"
            style={{ lineHeight: 1.15 }}
          >
            Shaping the Conversation
          </h2>
        </div>

        {/* Image */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div
            className="rounded-lg overflow-hidden mx-auto"
            style={{
              border: "1px solid rgba(243,218,115,0.2)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(243,218,115,0.05)",
            }}
          >
            <img
              src={whisPanel}
              alt="Dr. Nicole Faulkner speaking on the Emerging Technologies for Maternal Health Management panel at WHIS Boston, alongside Dr. Asima Ahmad of Carrot Fertility, Dr. Thomas Dardarian of Axia Women's Health, and Ann Holder of Marani Health"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Caption */}
          <p
            className="text-center mt-6 font-inter text-sm md:text-base max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "hsl(45, 62%, 56%)" }}>WHIS Boston</span>{" "}
            — Dr. Nicole Faulkner on the{" "}
            <em>Emerging Technologies for Maternal Health Management</em> panel
            with leaders from Carrot Fertility, Axia Women's Health, and Marani
            Health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnStage;
