import { ArrowRight, Stethoscope, Calendar, FileCheck } from "lucide-react";

const pathways = [
  {
    icon: Stethoscope,
    title: "Resources",
    description: "Clinical strategy, physician adoption, and reimbursement clarity for your platform.",
    href: "/for-womens-health",
    cta: "Explore Resources",
  },
  {
    icon: Calendar,
    title: "Clinical Clarity Session",
    description: "A focused 90-minute strategy session to uncover your biggest clinical adoption gaps.",
    href: "/clinical-clarity-session",
    cta: "Book a Session",
  },
  {
    icon: FileCheck,
    title: "Services We Offer",
    description: "From single assessments to embedded operating partnerships — find your fit.",
    href: "/services",
    cta: "View Services",
  },
];

const ServicePathways = () => {
  return (
    <section className="w-full py-8 sm:py-10 bg-muted/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <p
          className="text-center mb-3 font-inter font-medium uppercase"
          style={{ fontSize: "12px", letterSpacing: "0.18em", color: "hsl(var(--accent))" }}
        >
          Where to Start
        </p>
        <h2
          className="text-center mb-12 font-display font-bold"
          style={{
            fontSize: "clamp(22px, 2.8vw, 32px)",
            color: "hsl(var(--foreground))",
          }}
        >
          Choose Your Path Forward
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
            >
              <div>
                <div
                  className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-lg"
                  style={{ background: "hsl(var(--accent) / 0.12)" }}
                >
                  <p.icon className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />
                </div>
                <h3
                  className="text-left mb-2 font-display font-semibold"
                  style={{ fontSize: "18px", color: "hsl(var(--foreground))" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-left font-inter mb-6"
                  style={{ fontSize: "15px", lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}
                >
                  {p.description}
                </p>
              </div>
              <span
                className="inline-flex items-center text-sm font-semibold font-inter transition-colors duration-300 group-hover:text-accent-foreground"
                style={{ color: "hsl(var(--accent))" }}
              >
                {p.cta}
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePathways;
