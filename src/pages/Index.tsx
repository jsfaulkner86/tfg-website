import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicePathways from "@/components/ServicePathways";
import StickyCTA from "@/components/StickyCTA";
import SEOHead from "@/components/SEOHead";

// Lazy load components that aren't immediately visible
const Mission = lazy(() => import("@/components/Mission"));
const Problem = lazy(() => import("@/components/Problem"));
const Approach = lazy(() => import("@/components/Approach"));
const Transformation = lazy(() => import("@/components/Transformation"));

const Results = lazy(() => import("@/components/Results"));
const OnStage = lazy(() => import("@/components/OnStage"));
const FAQ = lazy(() => import("@/components/FAQ"));
const BottomVideo = lazy(() => import("@/components/BottomVideo"));
const Partners = lazy(() => import("@/components/Partners"));

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Faulkner Group",
  url: "https://thefaulknergroupadvisors.com",
  logo: "https://thefaulknergroupadvisors.com/favicon.png",
  description:
    "Boutique healthcare advisory firm specializing in clinical adoption strategy for women's health technology companies.",
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

const johnFaulknerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Faulkner",
  alternateName: "Johnathon Faulkner",
  jobTitle: "CEO & Healthcare IT Architect",
  description: "CEO of The Faulkner Group. 15+ years designing and optimizing healthcare IT infrastructure and EHR systems nationwide. Former Marine Corps Officer Candidate trained at Quantico, VA. Specializes in women's health technology clinical adoption strategy, EHR integration, and pilot-to-enterprise deployment.",
  url: "https://thefaulknergroupadvisors.com",
  sameAs: [
    "https://www.linkedin.com/in/johnathonfaulkner/",
    "https://www.youtube.com/@YourHealthcareITexpert",
    "https://github.com/jsfaulkner86",
    "https://panova.ai/"
  ],
  worksFor: {
    "@type": "Organization",
    name: "The Faulkner Group",
    url: "https://thefaulknergroupadvisors.com"
  },
  knowsAbout: [
    "Healthcare IT Architecture",
    "EHR Integration",
    "Women's Health Technology",
    "Clinical Adoption Strategy",
    "Physician Adoption",
    "Health Tech Scaling",
    "Enterprise Deployment"
  ],
  alumniOf: {
    "@type": "Organization",
    name: "United States Marine Corps"
  }
};

const nicholeFaulknerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Nicole Faulkner",
  alternateName: ["Nicole Faulkner DO", "Nicole Faulkner D.O."],
  jobTitle: "Chief Clinical Officer",
  description: "Chief Clinical Officer of The Faulkner Group. Board-certified OB/GYN, Medical Director at BackTable, and featured speaker at the Women's Health Innovation Summit (WHIS). Expert in clinical governance frameworks, physician adoption strategy, and women's health technology advisory.",
  url: "https://thefaulknergroupadvisors.com",
  sameAs: [
    "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/"
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thefaulknergroupadvisors.com"
    },
    {
      "@type": "Organization",
      name: "BackTable",
      url: "https://www.backtable.com"
    }
  ],
  knowsAbout: [
    "Obstetrics and Gynecology",
    "Women's Health Technology",
    "Clinical Governance",
    "Physician Adoption Strategy",
    "Clinical Readiness Assessment",
    "Maternal Health Management"
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Board Certification",
    name: "Board-Certified OB/GYN"
  }
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
        text: "90% of health tech pilots fail to convert to full-scale implementation without clinical alignment. The gap isn't about the technology — it's about trust, workflow fit, and physician buy-in. Without a clinical and operational strategy from day one, even the best platforms get stuck in endless pilots."
      }
    },
    {
      "@type": "Question",
      name: "How do you get physicians to adopt new health technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Physicians don't adopt technology because it's good. They adopt it because a trusted colleague told them it works. The Faulkner Group builds physician adoption through peer-to-peer advocacy, KOL engagement, CMIO engagement strategies, and internal champion development."
      }
    },
    {
      "@type": "Question",
      name: "What clinical governance frameworks do health systems require before approving new tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Health systems and payers require governance and risk frameworks including clinical environment audits, integration barrier identification, controlled rollback protocols, escalation pathways, and compliance documentation."
      }
    },
    {
      "@type": "Question",
      name: "What is The 4 Pillars of Clinical Adoption framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The four pillars are: (1) Clinical Readiness and Governance, (2) Physician Adoption and Champion Development, (3) Training, Education, and Change Management, (4) Sales, Customer Success, and Deployment."
      }
    },
    {
      "@type": "Question",
      name: "What is a Clinical Clarity Session and who is it for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Clinical Clarity Session is a 90-minute virtual diagnostic with a board-certified OB/GYN and a Healthcare IT Architect. It costs $1,500 and identifies the 1-3 highest-risk failure points in your clinical adoption strategy. A written Clinical Clarity Summary is delivered within 48 hours."
      }
    },
    {
      "@type": "Question",
      name: "How do VC and PE firms reduce clinical adoption risk in health tech portfolios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through clinical and operational diligence that evaluates physician sentiment, governance readiness, EHR integration viability, and workflow alignment before a Series B, add-on acquisition, or board review."
      }
    }
  ]
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Women's Health Tech Adoption | John Faulkner & Dr. Nicole Faulkner"
        description="John Faulkner (Healthcare IT Architect) and Dr. Nicole Faulkner (Board-Certified OB/GYN) help women's health tech founders drive physician adoption and scale from pilot to enterprise."
        canonical="https://thefaulknergroupadvisors.com/"
        ogImage="https://thefaulknergroupadvisors.com/og-image.jpg"
        jsonLd={[orgSchema, johnFaulknerSchema, nicholeFaulknerSchema, faqSchema]}
      />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <OnStage />
          <Mission />
        </Suspense>
        <div className="flex flex-col items-center py-6 sm:py-8 gap-3" style={{ background: 'hsl(var(--muted))' }}>
          <p className="text-lg sm:text-xl font-display font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
            Do you want a quick intro call?
          </p>
          <Button
            onClick={() => window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank')}
            variant="glassy"
            className="text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 group"
          >
            Let's Meet
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        <ServicePathways />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Problem />
          <Approach />
        </Suspense>
        <div className="flex flex-col items-center py-6 sm:py-8 gap-3" style={{ background: 'hsl(var(--muted))' }}>
          <p className="text-lg sm:text-xl font-display font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
            Ready to get started?
          </p>
          <Button
            onClick={() => window.open('https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner', '_blank')}
            variant="glassy"
            className="text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 group"
          >
            Let's Meet
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Transformation />
          
          <Results />
          <FAQ />
          <BottomVideo />
          <Partners />
        </Suspense>
      </main>
      <StickyCTA />
    </>
  );
};

export default Index;
