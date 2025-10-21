import vantaBadge from "@/assets/vanta-partner-badge.png";

const Partners = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-inter text-muted-foreground uppercase tracking-wider">
            Trusted Partners
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <img 
              src={vantaBadge} 
              alt="Vanta Managed Service Provider Partner" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
