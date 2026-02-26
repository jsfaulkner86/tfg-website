import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import MetaPixelTracker from "@/components/MetaPixelTracker";

const ClinicalClaritySession = lazy(() => import("./pages/ClinicalClaritySession"));
const Investors = lazy(() => import("./pages/Investors"));
const ForWomensHealth = lazy(() => import("./pages/ForWomensHealth"));
const ReimbursementScorecard = lazy(() => import("./pages/ReimbursementScorecard"));
const HospitalFitChecker = lazy(() => import("./pages/HospitalFitChecker"));
const FundingBenchmarker = lazy(() => import("./pages/FundingBenchmarker"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaPixelTracker />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-womens-health" element={<ForWomensHealth />} />
            <Route path="/for-womens-health/reimbursement-scorecard" element={<ReimbursementScorecard />} />
            <Route path="/for-womens-health/hospital-fit-checker" element={<HospitalFitChecker />} />
            <Route path="/for-womens-health/funding-benchmarker" element={<FundingBenchmarker />} />
            <Route path="/clinical-clarity-session" element={<ClinicalClaritySession />} />
            <Route path="/investors" element={<Investors />} />
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
