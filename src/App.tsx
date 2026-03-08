import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";


const ClinicalClaritySession = lazy(() => import("./pages/ClinicalClaritySession"));
const Investors = lazy(() => import("./pages/Investors"));
const ForWomensHealth = lazy(() => import("./pages/ForWomensHealth"));
const ReimbursementScorecard = lazy(() => import("./pages/ReimbursementScorecard"));
const HospitalFitChecker = lazy(() => import("./pages/HospitalFitChecker"));
const FundingBenchmarker = lazy(() => import("./pages/FundingBenchmarker"));
const Services = lazy(() => import("./pages/Services"));
const LLMSummary = lazy(() => import("./pages/LLMSummary"));
const ClinicalReadinessAssessment = lazy(() => import("./pages/ClinicalReadinessAssessment"));
const AdvisoryPartnership = lazy(() => import("./pages/AdvisoryPartnership"));
const OperatingPartnerRetainer = lazy(() => import("./pages/OperatingPartnerRetainer"));
const ClinicalReadinessRoadmap = lazy(() => import("./pages/ClinicalReadinessRoadmap"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-womens-health" element={<ForWomensHealth />} />
            <Route path="/for-womens-health/reimbursement-scorecard" element={<ReimbursementScorecard />} />
            <Route path="/for-womens-health/hospital-fit-checker" element={<HospitalFitChecker />} />
            <Route path="/for-womens-health/funding-benchmarker" element={<FundingBenchmarker />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clinical-clarity-session" element={<ClinicalClaritySession />} />
            <Route path="/clinical-readiness-assessment" element={<ClinicalReadinessAssessment />} />
            <Route path="/clinical-readiness-roadmap" element={<ClinicalReadinessRoadmap />} />
            <Route path="/advisory-partnership" element={<AdvisoryPartnership />} />
            <Route path="/operating-partner-retainer" element={<OperatingPartnerRetainer />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/llm-summary" element={<LLMSummary />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
