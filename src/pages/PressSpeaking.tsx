import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Mic, Video, Newspaper } from "lucide-react";
import whisPanel from "@/assets/whis-boston-panel.png";
import backtableIcon from "@/assets/backtable-obgyn-icon.png";
import nicoleHeadshot from "@/assets/nicole-headshot.jpeg";
import johnHeadshot from "@/assets/john-headshot.jpg";

const speakingEvents = [
  {
    type: "Conference",
    title: "Women's Health Innovation Summit (WHIS) — Boston 2025",
    speaker: "Dr. Nicole Faulkner",
    role: "Panelist",
    description: "Dr. Nicole Faulkner joined leading women's health innovators to discuss bridging clinical validation gaps in femtech and accelerating physician adoption of emerging platforms.",
    image: whisPanel,
    link: "https://whisusa.com",
    linkLabel: "Visit WHIS",
  },
];

const mediaRoles = [
  {
    icon: Mic,
    title: "BackTable OB/GYN — Medical Director",
    person: "Dr. Nicole Faulkner",
    description: "As Medical Director of BackTable's OB/GYN vertical, Dr. Faulkner shapes clinical content and hosts discussions on practice-changing topics in women's health.",
    link: "https://www.backtable.com/shows/obgyn",
    linkLabel: "Listen on BackTable",
  },
  {
    icon: Video,
    title: "Smarter Systems, Better Care Podcast",
    person: "John Faulkner",
    description: "John hosts the Smarter Systems, Better Care podcast, breaking down healthcare IT infrastructure, EHR optimization, and the systems reality behind clinical adoption.",
    link: "https://podcasts.apple.com/us/podcast/smarter-systems-better-care-podcast/id1835554141",
    linkLabel: "Listen on Apple Podcasts",
  },
];

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Press & Speaking — The Faulkner Group",
  description: "Speaking engagements, media appearances, and podcast roles featuring John Faulkner and Dr. Nicole Faulkner.",
  url: "https://thefaulknergroupadvisors.com/press-speaking",
  mainEntity: [
    {
      "@type": "Event",
      name: "Women's Health Innovation Summit (WHIS) — Boston 2025",
      location: { "@type": "Place", name: "Boston, MA" },
      performer: {
        "@type": "Person",
        name: "Dr. Nicole Faulkner",
        jobTitle: "Chief Clinical Officer",
      },
      organizer: {
        "@type": "Organization",
        name: "WHIS",
        url: "https://whisusa.com",
      },
    },
  ],
};

const PressSpeaking = () => {
  const handleBooking = () => {
    window.open("https://calendly.com/d/cx9v-b5q-nhp/let-s-meet-john-dr-nicole-faulkner", "_blank");
  };

  return (
    <>
      <SEOHead
        title="Press & Speaking | John Faulkner & Dr. Nicole Faulkner"
        description="Speaking engagements, podcast appearances, and media roles from John Faulkner and Dr. Nicole Faulkner — leaders in women's health tech advisory."
        canonical="https://thefaulknergroupadvisors.com/press-speaking"
        ogImage="https://thefaulknergroupadvisors.com/og-image.jpg"
        jsonLd={pressSchema}
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full overflow-hidden pt-[calc(120px+env(safe-area-inset-top,0px))] pb-[60px] md:pt-[200px] md:pb-[140px]">
          <img
            src="/hero-boardroom.jpg"
            alt="The Faulkner Group women's health tech advisory team in a strategy session"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }} />

          <div className="relative z-10 flex items-center justify-center px-5 sm:px-6 text-center">
            <div className="max-w-[820px] w-full">
              <p
                className="mb-6 font-inter font-medium uppercase"
                style={{ fontSize: "13px", letterSpacing: "0.2em", color: "hsl(45, 62%, 56%)" }}
              >
                Press & Speaking
              </p>
              <h1
                className="mb-6 font-display font-bold text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 52px)", lineHeight: 1.1 }}
              >
                <span className="block">Shaping the Women's Health</span>
                <span className="block">Conversation</span>
              </h1>
              <p
                className="mb-10 font-inter"
                style={{ fontSize: "clamp(16px, 1.6vw, 20px)", color: "rgba(255,255,255,0.85)", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
              >
                Conference stages, clinical podcasts, and industry media — where John and Dr. Faulkner bring clinical adoption strategy to the forefront.
              </p>
            </div>
          </div>
        </section>

        {/* Speaking Events */}
        <section
          className="w-full py-12 md:py-20"
          style={{ background: "hsl(210 14% 96%)" }}
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <p
              className="text-center mb-3 font-inter font-medium uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.18em", color: "hsl(var(--accent))" }}
            >
              On Stage
            </p>
            <h2
              className="text-center mb-8 md:mb-12 font-display font-bold"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "hsl(var(--foreground))" }}
            >
              Speaking Engagements
            </h2>

            {speakingEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-xl overflow-hidden flex flex-col md:flex-row"
                style={{ background: "hsl(210 14% 19%)" }}
              >
                <div className="md:w-1/2">
                  <img
                    src={event.image}
                    alt={`${event.speaker} speaking at ${event.title}`}
                    className="w-full h-48 sm:h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                  <span
                    className="inline-block mb-3 text-xs font-inter font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit"
                    style={{
                      background: "hsl(45 62% 56% / 0.15)",
                      color: "hsl(45, 62%, 56%)",
                    }}
                  >
                    {event.type}
                  </span>
                  <h3
                    className="text-left mb-2 font-display font-bold text-base sm:text-lg md:text-xl text-white"
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-left mb-1 font-inter font-semibold text-sm"
                    style={{ color: "hsl(45, 62%, 56%)" }}
                  >
                    {event.speaker} — {event.role}
                  </p>
                  <p
                    className="text-left mb-4 sm:mb-6 font-inter text-sm sm:text-[15px]"
                    style={{ lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}
                  >
                    {event.description}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold font-inter transition-colors duration-300 hover:opacity-80"
                    style={{ color: "hsl(45, 62%, 56%)" }}
                  >
                    {event.linkLabel}
                    <ExternalLink className="ml-1.5 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media & Podcasts */}
        <section
          className="w-full py-12 md:py-20"
          style={{ background: "linear-gradient(180deg, hsl(210 25% 18%) 0%, hsl(210 20% 24%) 100%)" }}
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <p
              className="text-center mb-3 font-inter font-medium uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.18em", color: "hsl(45, 62%, 56%)" }}
            >
              Media & Podcasts
            </p>
            <h2
              className="text-center mb-8 md:mb-12 font-display font-bold text-white"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
            >
              Regular Roles & Appearances
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {mediaRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl p-5 sm:p-8 flex flex-col"
                  style={{ background: "hsl(210 20% 15%)", border: "1px solid hsl(210 20% 28%)" }}
                >
                  <div
                    className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg"
                    style={{ background: "hsl(45 62% 56% / 0.12)" }}
                  >
                    <role.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "hsl(45, 62%, 56%)" }} />
                  </div>
                  <h3
                    className="text-left mb-1 font-display font-semibold text-base sm:text-lg text-white"
                  >
                    {role.title}
                  </h3>
                  <p
                    className="text-left mb-1 font-inter font-semibold text-sm"
                    style={{ color: "hsl(45, 62%, 56%)" }}
                  >
                    {role.person}
                  </p>
                  <p
                    className="text-left mb-4 sm:mb-6 font-inter flex-1 text-sm sm:text-[15px]"
                    style={{ lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}
                  >
                    {role.description}
                  </p>
                  <a
                    href={role.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold font-inter transition-colors duration-300 hover:opacity-80"
                    style={{ color: "hsl(45, 62%, 56%)" }}
                  >
                    {role.linkLabel}
                    <ExternalLink className="ml-1.5 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section
          className="w-full py-12 md:py-20"
          style={{ background: "hsl(210 14% 96%)" }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <h2
              className="mb-8 md:mb-10 font-display font-bold"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "hsl(var(--foreground))" }}
            >
              Meet the Voices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={johnHeadshot}
                  alt="John Faulkner — CEO & Healthcare IT Architect"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-2"
                  style={{ borderColor: "hsl(var(--accent))" }}
                />
                <h3 className="font-display font-semibold text-lg" style={{ color: "hsl(var(--foreground))" }}>
                  John Faulkner
                </h3>
                <p className="font-inter text-sm mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                  CEO & Healthcare IT Architect
                </p>
                <p className="font-inter text-sm mb-3 max-w-xs" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                  15+ years designing healthcare IT infrastructure. Host of the Smarter Systems, Better Care podcast.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={nicoleHeadshot}
                  alt="Dr. Nicole Faulkner — Chief Clinical Officer, Board-Certified OB/GYN"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-2"
                  style={{ borderColor: "hsl(var(--accent))" }}
                />
                <h3 className="font-display font-semibold text-lg" style={{ color: "hsl(var(--foreground))" }}>
                  Dr. Nicole Faulkner
                </h3>
                <p className="font-inter text-sm mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Chief Clinical Officer — Board-Certified OB/GYN
                </p>
                <p className="font-inter text-sm mb-3 max-w-xs" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                  WHIS speaker, BackTable Medical Director, and clinical governance expert for women's health tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section
          className="w-full py-12 md:py-20"
          style={{ background: "linear-gradient(135deg, hsl(210 30% 14%) 0%, hsl(210 25% 22%) 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <Newspaper className="mx-auto mb-4 w-7 h-7 sm:w-8 sm:h-8" style={{ color: "hsl(45, 62%, 56%)" }} />
            <h2
              className="mb-4 font-display font-bold text-white"
              style={{ fontSize: "clamp(20px, 2.8vw, 32px)" }}
            >
              Interested in Booking John or Dr. Faulkner?
            </h2>
            <p
              className="mb-6 sm:mb-8 font-inter text-sm sm:text-base"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Available for keynotes, panels, podcast guest spots, and expert commentary on women's health technology adoption.
            </p>
            <Button
              onClick={handleBooking}
              variant="glassy"
              className="text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
      <StickyCTA />
    </>
  );
};

export default PressSpeaking;
