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

const Index = () => {
  return (
    <>
      <SEOHead
        title="Women's Health Tech Adoption | Faulkner Group"
        description="We help women's health tech founders drive physician adoption, build clinical governance frameworks, and scale from pilot to enterprise deployment."
        canonical="https://thrive-beacon-studio.lovable.app/"
        jsonLd={orgSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Mission />
          <Problem />
          <Approach />
          <Transformation />
          
          <Results />
          <OnStage />
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
