import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";

// Lazy load components that aren't immediately visible
const Mission = lazy(() => import("@/components/Mission"));
const Problem = lazy(() => import("@/components/Problem"));
const Approach = lazy(() => import("@/components/Approach"));
const Transformation = lazy(() => import("@/components/Transformation"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Results = lazy(() => import("@/components/Results"));
const BottomVideo = lazy(() => import("@/components/BottomVideo"));
const Partners = lazy(() => import("@/components/Partners"));

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Mission />
          <Problem />
          <Approach />
          <Transformation />
          <Testimonials />
          <Results />
          <BottomVideo />
          <Partners />
        </Suspense>
      </main>
      <StickyCTA />
    </>
  );
};

export default Index;
