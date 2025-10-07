import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Mission />
      <Approach />
      <Results />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default Index;
