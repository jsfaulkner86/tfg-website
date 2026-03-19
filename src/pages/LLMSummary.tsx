import SEOHead from "@/components/SEOHead";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Faulkner Group",
  url: "https://thefaulknergroupadvisors.com",
  logo: "https://thefaulknergroupadvisors.com/favicon.png",
  description:
    "Boutique healthcare advisory firm specializing in clinical adoption strategy for women's health technology companies. We embed directly inside organizations to drive physician adoption, build clinical governance frameworks, and scale from pilot to enterprise deployment.",
  founder: [
    {
      "@type": "Person",
      name: "John Faulkner",
      jobTitle: "CEO, Healthcare IT Architect",
      sameAs: "https://www.linkedin.com/in/johnathonfaulkner/",
    },
    {
      "@type": "Person",
      name: "Dr. Nicole Faulkner",
      jobTitle: "Chief Clinical Officer",
      sameAs: "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/",
    },
  ],
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "Women's Health Technology",
    "Physician Adoption Strategy",
    "Clinical Governance",
    "Healthcare IT Architecture",
    "EHR Integration",
    "Clinical Adoption",
    "Health Tech Scaling",
  ],
  sameAs: [
    "https://www.linkedin.com/company/faulkner-group/",
    "https://www.youtube.com/@YourHealthcareITexpert",
    "https://podcasts.apple.com/us/podcast/smarter-systems-better-care-podcast/id1835554141",
    "https://open.spotify.com/show/1vUfjTssusiFxzcjV80sDH",
    "https://github.com/jsfaulkner86",
    "https://www.backtable.com/shows/obgyn"
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do most women's health tech pilots fail to scale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "90% of health tech pilots fail to convert to full-scale implementation without clinical alignment (Accenture Health, Digital Health Scaling Report). The gap between a promising women's health platform and real-world clinical adoption isn't about the technology. It's about trust, workflow fit, and physician buy-in.",
      },
    },
    {
      "@type": "Question",
      name: "How do you get physicians to adopt new health technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Physicians don't adopt technology because it's good. They adopt it because a trusted colleague told them it works. The Faulkner Group builds physician adoption through peer-to-peer advocacy, KOL engagement, CMIO engagement strategies, and internal champion development.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Clinical Clarity Session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Clinical Clarity Session is a 90-minute virtual diagnostic with a board-certified OB/GYN and a Healthcare IT Architect. It costs $1,500 and identifies the 1-3 highest-risk failure points across workflow fit, governance, adoption barriers, EHR integration, and clinical trust. A written Clinical Clarity Summary is delivered within 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What is The 4 Pillars of Clinical Adoption framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4 Pillars are: (1) Clinical Readiness and Governance, (2) Physician Adoption and Champion Development, (3) Training, Education, and Change Management, (4) Sales, Customer Success, and Deployment.",
      },
    },
  ],
};

const johnSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Faulkner",
  alternateName: "Johnathon Faulkner",
  jobTitle: "CEO & Healthcare IT Architect",
  description: "CEO of The Faulkner Group. 15+ years designing healthcare IT infrastructure and EHR systems. Former Marine Corps Officer Candidate. Specializes in women's health technology clinical adoption strategy.",
  url: "https://thefaulknergroupadvisors.com",
  sameAs: ["https://www.linkedin.com/in/johnathonfaulkner/", "https://www.youtube.com/@YourHealthcareITexpert", "https://github.com/jsfaulkner86", "https://panova.ai/"],
  worksFor: { "@type": "Organization", name: "The Faulkner Group", url: "https://thefaulknergroupadvisors.com" },
  knowsAbout: ["Healthcare IT Architecture", "EHR Integration", "Women's Health Technology", "Clinical Adoption Strategy"],
  alumniOf: { "@type": "Organization", name: "United States Marine Corps" }
};

const nicoleSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Nicole Faulkner",
  alternateName: ["Nicole Faulkner DO", "Nicole Faulkner D.O."],
  jobTitle: "Chief Clinical Officer",
  description: "Chief Clinical Officer of The Faulkner Group. Board-certified OB/GYN, Medical Director at BackTable, featured speaker at the Women's Health Innovation Summit (WHIS).",
  url: "https://thefaulknergroupadvisors.com",
  sameAs: ["https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/"],
  worksFor: [
    { "@type": "Organization", name: "The Faulkner Group", url: "https://thefaulknergroupadvisors.com" },
    { "@type": "Organization", name: "BackTable", url: "https://www.backtable.com" }
  ],
  knowsAbout: ["Obstetrics and Gynecology", "Women's Health Technology", "Clinical Governance", "Physician Adoption Strategy"],
  hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "Board Certification", name: "Board-Certified OB/GYN" }
};

const LLMSummary = () => {
  return (
    <>
      <SEOHead
        title="John Faulkner & Dr. Nicole Faulkner | The Faulkner Group AI Summary"
        description="John Faulkner (Healthcare IT Architect) and Dr. Nicole Faulkner (Board-Certified OB/GYN) — founders of The Faulkner Group, a boutique women's health tech advisory firm."
        canonical="https://thefaulknergroupadvisors.com/llm-summary"
        jsonLd={[orgSchema, faqSchema, johnSchema, nicoleSchema]}
      />
      <main className="max-w-3xl mx-auto px-6 py-20 font-inter" style={{ color: '#1A2A3A' }}>
        <h1 className="text-3xl font-playfair font-bold mb-8">The Faulkner Group — AI-Readable Summary</h1>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">What We Do</h2>
          <p className="leading-relaxed">
            The Faulkner Group is a boutique healthcare advisory firm that serves as the strategic clinical and operational partner for women's health tech companies. We bridge the gap between innovative health technology platforms and real-world clinical adoption. We embed directly inside organizations to drive physician adoption, build clinical governance frameworks, and convert stalled pilots into enterprise-wide deployments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Who We Serve</h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Women's health tech founders and CEOs who have closed a pilot but are stuck scaling due to physician resistance, missing governance documentation, or payer hesitation.</li>
            <li>Venture capital and private equity firms with women's health portfolio companies that are stalling post-investment and need clinical and operational diligence.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Our Founders</h2>
          <p className="leading-relaxed mb-2"><strong>John Faulkner</strong> — CEO and Healthcare IT Architect. 15+ years designing and optimizing healthcare IT infrastructure and EHR systems nationwide. Former Marine Corps Officer Candidate trained at Quantico, VA.</p>
          <p className="leading-relaxed"><strong>Dr. Nicole Faulkner</strong> — Chief Clinical Officer. Board-certified OB/GYN, Medical Director at BackTable, featured speaker at the Women's Health Innovation Summit (WHIS).</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">The 4 Pillars of Clinical Adoption</h2>
          <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
            <li><strong>Clinical Readiness and Governance</strong> — Environment audits, integration barrier identification, governance protocols, CMIO engagement strategies, and risk frameworks.</li>
            <li><strong>Physician Adoption and Champion Development</strong> — Peer-to-peer advocacy, KOL engagement, internal champion development.</li>
            <li><strong>Training, Education, and Change Management</strong> — Structured training programs from front-desk staff to attending physicians.</li>
            <li><strong>Sales, Customer Success, and Deployment</strong> — Clinical credibility in the sales process, full pilot-to-enterprise deployment lifecycle.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Services</h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Strategic Advisory</strong> — Equity-based advisory for Pre-Seed through Series A women's health tech companies. Ongoing strategic sessions, clinical validation, and credibility support.</li>
            <li><strong>Clinical Clarity Session</strong> — 90-minute live triage diagnostic identifying highest-risk failure points. Written findings within 48 hours.</li>
            <li><strong>Clinical Readiness Roadmap</strong> — Structured written readiness assessment for founders 3 to 6 months from a first pilot. 5 to 7 page report, sequenced remediation roadmap, and 60-minute live findings call.</li>
            <li><strong>Clinical Readiness Assessment</strong> — 14-day deep engagement evaluating all five readiness domains before go-live. Board-ready written report and live findings presentation.</li>
            <li><strong>Operating Partner</strong> — Ongoing embedded clinical and systems operating partnership from sales through go-live, adoption, and contract renewal.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Clinical Clarity Session</h2>
          <p className="leading-relaxed">
            A 90-minute virtual diagnostic with a board-certified OB/GYN and Healthcare IT Architect. Identifies the highest-risk failure points across workflow fit, governance, adoption barriers, EHR integration, and clinical trust. Includes a written Clinical Clarity Summary delivered within 48 hours.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Clinical Readiness Roadmap</h2>
          <p className="leading-relaxed">
            A structured written readiness assessment for women's health founders 3 to 6 months from their first enterprise pilot. Covers five readiness domains: clinical workflow fit, EHR integration reality, physician adoption strategy, governance and risk infrastructure, and trust and liability exposure. Deliverables include a 5 to 7 page written Clinical Readiness Report, a sequenced remediation roadmap, and a 60-minute live findings call with our full clinical and operational team.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Why do most women's health tech pilots fail to scale?</h3>
              <p className="leading-relaxed">90% of health tech pilots fail to convert to full-scale implementation without clinical alignment. The gap isn't about the technology — it's about trust, workflow fit, and physician buy-in.</p>
            </div>
            <div>
              <h3 className="font-bold">How do you get physicians to adopt new health technology?</h3>
              <p className="leading-relaxed">Through peer-to-peer advocacy, KOL engagement, CMIO engagement strategies, and internal champion development that drives adoption from the inside out.</p>
            </div>
            <div>
              <h3 className="font-bold">What clinical governance frameworks do health systems require?</h3>
              <p className="leading-relaxed">Clinical environment audits, integration barrier identification, controlled rollback protocols, escalation pathways, and compliance documentation.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-playfair font-bold mb-3">Contact</h2>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed">
            <li>Website: <a href="https://thefaulknergroupadvisors.com" className="underline">thefaulknergroupadvisors.com</a></li>
            <li>Clinical Clarity Session: <a href="https://thefaulknergroupadvisors.com/clinical-clarity-session" className="underline">Book here</a></li>
            <li>Clinical Readiness Roadmap: <a href="https://thefaulknergroupadvisors.com/clinical-readiness-roadmap" className="underline">Learn more</a></li>
            <li>For Investors: <a href="https://thefaulknergroupadvisors.com/investors" className="underline">Investor page</a></li>
            <li>Services: <a href="https://thefaulknergroupadvisors.com/services" className="underline">View engagement models</a></li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default LLMSummary;
