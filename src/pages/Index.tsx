import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import Transformation from "@/components/Transformation";
import Results from "@/components/Results";
import Partners from "@/components/Partners";
import BottomVideo from "@/components/BottomVideo";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Mission />
        <Problem />
        <Approach />
        <Transformation />
        <Testimonials />
        <Results />
        <Partners />
        <BottomVideo />
      </main>
      <StickyCTA />
    </>
  );
};

export default Index;
