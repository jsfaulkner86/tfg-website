import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Meta Pixel removed
  }, []);

  return (
    <>
      <SEOHead
        title="Thank You | The Faulkner Group"
        description="Your consultation is booked. The Faulkner Group team will be in touch shortly."
        canonical="https://thrive-beacon-studio.lovable.app/thank-you"
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <CheckCircle className="w-20 h-20 text-primary animate-scale-in" />
          </div>
          
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Thank you, your consultation is booked!
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              We've received your information and sent you a confirmation email. 
              A member of our team will reach out shortly.
            </p>
          </div>

          <Button
            onClick={() => navigate("/")}
            variant="glassy"
            size="lg"
            className="mt-8 group"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
