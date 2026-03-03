import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
  url: "https://thrive-beacon-studio.lovable.app",
  logo: "https://thrive-beacon-studio.lovable.app/favicon.png",
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
  ],
};

const johnFaulknerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Faulkner",
  alternateName: "Johnathon Faulkner",
  jobTitle: "CEO & Healthcare IT Architect",
  description: "CEO of The Faulkner Group. 15+ years designing and optimizing healthcare IT infrastructure and EHR systems nationwide. Former Marine Corps Officer Candidate trained at Quantico, VA. Specializes in women's health technology clinical adoption strategy, EHR integration, and pilot-to-enterprise deployment.",
  url: "https://thrive-beacon-studio.lovable.app",
  sameAs: [
    "https://www.linkedin.com/in/johnathonfaulkner/",
    "https://www.youtube.com/@YourHealthcareITexpert"
  ],
  worksFor: {
    "@type": "Organization",
    name: "The Faulkner Group",
    url: "https://thrive-beacon-studio.lovable.app"
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
  url: "https://thrive-beacon-studio.lovable.app",
  sameAs: [
    "https://www.linkedin.com/in/nicole-faulkner-d-o-1136a4370/"
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "The Faulkner Group",
      url: "https://thrive-beacon-studio.lovable.app"
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

const Index = () => {
  return (
    <>
      <SEOHead
        title="Women's Health Tech Adoption | John Faulkner & Dr. Nicole Faulkner"
        description="John Faulkner (Healthcare IT Architect) and Dr. Nicole Faulkner (Board-Certified OB/GYN) help women's health tech founders drive physician adoption and scale from pilot to enterprise."
        canonical="https://thrive-beacon-studio.lovable.app/"
        jsonLd={[orgSchema, johnFaulknerSchema, nicholeFaulknerSchema]}
      />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Suspense fallback={null}>
          <OnStage />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Mission />
          <Problem />
          <Approach />
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
