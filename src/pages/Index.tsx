import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Transformation from "@/components/Transformation";
import Results from "@/components/Results";
import BottomVideo from "@/components/BottomVideo";
import FinalCTA from "@/components/FinalCTA";

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
        <Results />
        <BottomVideo />
        <FinalCTA />
      </main>
    </>
  );
};

export default Index;
