import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import StickyCTA from "@/components/StickyCTA";
import BottomVideo from "@/components/BottomVideo";
import johnHeadshot from "@/assets/john-headshot.jpg";
import nicoleHeadshot from "@/assets/nicole-headshot.jpeg";
import defaultHeroImage from "@/assets/insights-hero-default.jpg";

// ─── ARTICLE DATA ─────────────────────────────────────────────
// To add a new article, simply add an object to this array.
// The most recent article should be first.
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  author?: { name: string; title: string; bio: string; headshot: string };
  content: string;
}

const defaultAuthor = {
  name: "John Faulkner",
  title: "Founder & CEO, The Faulkner Group",
  bio: "John brings over two decades of healthcare IT architecture and clinical strategy experience. He advises femtech founders and health systems on bridging the gap between technology and clinical adoption.",
  headshot: johnHeadshot,
};

const articles: Article[] = [
  {
    slug: "5-reasons-femtech-pilots-fail",
    title: "The 5 Reasons Femtech Pilots Fail",
    excerpt:
      "Understanding failure at the system level is the first step toward preventing it. Here are the five most common reasons femtech pilots stall before they scale.",
    category: "Clinical Strategy",
    date: "March 16, 2026",
    readTime: "8 min read",
    content: `
      <p>Understanding failure at the system level is the first step toward preventing it. Here are the five most common reasons femtech pilots stall before they scale.</p>

      <h2>1. No Clinical Champion With Operational Authority</h2>
      <p>A pilot needs more than a supportive physician. It needs someone with the positional authority to change workflows, update documentation protocols, and hold teams accountable. Without that, even the best technology sits unused after the kickoff call.</p>

      <h2>2. EHR Integration Was Not Scoped Before the Agreement Was Signed</h2>
      <blockquote>Over 58% of healthcare IT professionals say EHR integration challenges are a primary cause of care delays.</blockquote>
      <p>Femtech vendors often sign health system agreements without a confirmed integration pathway into Epic, Oracle Health, or whatever platform the system runs. The result is a disconnected solution that clinicians cannot trust and will not use.</p>

      <h2>3. Clinical Workflows Were Not Mapped in Advance</h2>
      <p>Disruption to clinical workflow is one of the four primary barriers to digital health adoption in practice settings. When a new femtech tool requires clinicians to log into a separate portal, download reports manually, or reenter data, adoption drops immediately. Workflow design has to happen before go-live, not after.</p>

      <h2>4. Staff Were Not Trained for the Specific Clinical Use Case</h2>
      <p>Generic onboarding is not enough. A women's health coordinator using a PCOS management platform has different needs than an OB/GYN using a maternal monitoring tool. Role-specific training tied to real clinical scenarios is what separates a launched product from a used one.</p>

      <h2>5. Success Metrics Were Never Defined</h2>
      <p>If a pilot begins without agreed-upon outcomes, it ends without proof. Health systems renew what they can justify to their CFO. Femtech founders need to enter every pilot with a defined measurement framework tied to clinical outcomes, workflow efficiency, or cost reduction.</p>

      <h2>The Clinical Readiness Gap</h2>
      <p>Clinical readiness is not a buzzword. It is the operational state a health system must reach before a new digital health solution can be deployed safely and effectively.</p>
      <p>It includes workflow mapping, EHR integration planning, staff training, change management, and outcome measurement. When any one of those elements is missing, the pilot is already at risk before the first patient encounter.</p>
      <p>This is the gap The Faulkner Group was built to close. Our work sits at the intersection of clinical expertise and operational strategy. We assess whether a health system is truly ready to adopt, launch, and sustain women's health technology before the agreement is signed. And for femtech founders, we prepare the health system side of the equation so their solution has the environment it needs to perform.</p>
      <blockquote>More than 80% of women report feeling unheard by healthcare professionals. When a femtech tool is deployed into an unprepared system, that experience does not improve. It gets digitized and scaled.</blockquote>

      <h2>What Clinical Readiness Actually Looks Like</h2>
      <p>A clinically ready health system can answer yes to all of the following before a femtech go-live:</p>
      <ul>
        <li>The clinical champion has workflow authority, not just enthusiasm</li>
        <li>The EHR integration pathway is scoped, tested, and approved by IT</li>
        <li>Role-specific training has been delivered to every end user</li>
        <li>A go-live support plan covers the first 30 to 90 days</li>
        <li>Success metrics are documented and aligned with leadership</li>
        <li>Patient communication about the new tool is ready to deploy</li>
      </ul>
      <p>If a health system cannot answer yes to each of those questions, the pilot is not ready to launch. Launching anyway does not accelerate adoption. It accelerates failure.</p>

      <h2>From Pilot to Platform: The Path Forward</h2>
      <p>The femtech sector is maturing fast. By 2026, the era of early-stage pilots and experimental deployments is giving way to a demand for enterprise-grade, reimbursable, scalable platforms. Health system leaders, CMIOs, and femtech founders are all operating under higher scrutiny, tighter budgets, and increasing regulatory complexity.</p>
      <p>The companies that will move from pilot to platform are not necessarily the ones with the most advanced technology. They are the ones that built clinical readiness into their go-to-market strategy from day one.</p>
      <p>That means investing in operational infrastructure, not just product features. It means partnering with advisors who understand both the clinical environment and the implementation process. And it means treating health system readiness as a prerequisite, not an afterthought.</p>

      <h2>Work With The Faulkner Group</h2>
      <p>The Faulkner Group is a boutique advisory firm focused on clinical readiness and operational strategy for women's health technology adoption. We work with health systems to prepare their clinical environment, and with femtech founders to ensure their solution lands in a system that is ready to use it.</p>
      <p>If your pilot has stalled, or you want to make sure your next one does not, start with our Clinical Readiness Assessment. It is the fastest way to identify the gaps before they cost you the contract.</p>
    `,
  },
  {
    slug: "why-physician-adoption-fails",
    title: "Why Physician Adoption Fails and What Founders Can Do About It",
    excerpt:
      "Most health tech companies lose their first health system deal not because of bad technology, but because they never built a physician adoption strategy. Here is what separates winners from the rest.",
    category: "Clinical Strategy",
    date: "March 14, 2026",
    readTime: "6 min read",
    content: `
      <p>Most health tech companies lose their first health system deal not because of bad technology, but because they never built a physician adoption strategy.</p>
      <p>The assumption is simple: build a great product, show it to hospital leadership, and physicians will adopt it. But that is not how health systems work.</p>
      <h2>The Real Barrier</h2>
      <p>Physician adoption is not a feature problem, it is a workflow problem. Clinicians do not resist technology because they are luddites. They resist technology that adds friction to an already overwhelming day.</p>
      <p>The companies that win understand this. They design their implementation around existing clinical workflows, not against them.</p>
      <h2>Three Things Founders Can Do Today</h2>
      <ol>
        <li><strong>Map the clinical workflow first.</strong> Before you pitch, understand exactly where your product fits in the physician's day. Not the IT team's day, the physician's day.</li>
        <li><strong>Get a clinical champion early.</strong> One physician who believes in your product is worth more than ten IT approvals. Find them, partner with them, and build your case study together.</li>
        <li><strong>Design for the 2-minute test.</strong> If a physician cannot see value within 2 minutes of interaction, adoption will fail. Period.</li>
      </ol>
      <p>At The Faulkner Group, we help founders build physician adoption strategies that actually work, because our team has sat on both sides of the table.</p>
    `,
  },
  {
    slug: "reimbursement-readiness-checklist",
    title: "The Reimbursement Readiness Checklist Every Femtech Founder Needs",
    excerpt:
      "Reimbursement is not a post-launch problem. If you are not building your payer strategy before you go to market, you are already behind.",
    category: "Payer Strategy",
    date: "March 10, 2026",
    readTime: "4 min read",
    content: `
      <p>Reimbursement is not a post-launch problem. If you are not building your payer strategy before you go to market, you are already behind.</p>
      <h2>Why This Matters Now</h2>
      <p>Investors increasingly want to see a clear path to reimbursement before they write a check. Health systems want to know that your product will not become a cost center. And payers want evidence, real evidence, that your solution improves outcomes.</p>
      <h2>The Checklist</h2>
      <ul>
        <li>Do you have a CPT or HCPCS code strategy?</li>
        <li>Have you identified which payers cover your category?</li>
        <li>Do you have clinical evidence that supports reimbursement?</li>
        <li>Have you modeled the total cost of care impact?</li>
        <li>Is your pricing aligned with existing reimbursement rates?</li>
      </ul>
      <p>If you answered "no" to more than two of these, it is time to get serious about reimbursement strategy. Our free Reimbursement Readiness Scorecard can help you benchmark where you stand.</p>
    `,
  },
  {
    slug: "health-system-sales-mistakes",
    title: "5 Health System Sales Mistakes That Kill Deals Before They Start",
    excerpt:
      "Selling to health systems is not like selling to startups. Here are the five most common mistakes we see founders make, and how to avoid them.",
    category: "Health System Strategy",
    date: "March 5, 2026",
    readTime: "5 min read",
    content: `
      <p>Selling to health systems is not like selling to startups or even enterprise SaaS. The sales cycle is longer, the stakeholders are more complex, and the consequences of getting it wrong are severe.</p>
      <h2>Mistake #1: Leading With Features</h2>
      <p>Health system buyers do not care about your feature list. They care about outcomes, cost savings, and risk mitigation. Lead with the business case.</p>
      <h2>Mistake #2: Ignoring the Physician</h2>
      <p>If physicians do not want your product, it does not matter what the CIO thinks. Build physician champions early.</p>
      <h2>Mistake #3: Underestimating Procurement</h2>
      <p>Health system procurement is a 6-18 month process. Plan accordingly and budget for it.</p>
      <h2>Mistake #4: No EHR Integration Strategy</h2>
      <p>If your product does not integrate with Epic, Cerner, or the system's EHR, you are dead on arrival. Have a clear integration roadmap.</p>
      <h2>Mistake #5: Skipping the Pilot</h2>
      <p>Health systems want proof before they scale. Offer a structured pilot with clear success metrics and a path to enterprise deployment.</p>
    `,
  },
];

// ─── HELPERS ──────────────────────────────────────────────────
const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

function extractHeadings(html: string): { id: string; text: string }[] {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    headings.push({ id, text });
  }
  return headings;
}

function injectHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_match, attrs, inner) => {
    const text = inner.replace(/<[^>]*>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
}

// ─── ARTICLE VIEW ─────────────────────────────────────────────
const ArticleView = ({
  article,
  onBack,
}: {
  article: Article;
  onBack: () => void;
}) => {
  const [activeHeading, setActiveHeading] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const headings = extractHeadings(article.content);
  const processedContent = injectHeadingIds(article.content);
  const author = article.author || defaultAuthor;
  const heroImage = article.image || defaultHeroImage;

  // Related articles (exclude current, max 3)
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // Scroll spy for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );

    const els = contentRef.current?.querySelectorAll("h2[id]");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [article.slug]);

  const scrollToHeading = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  }, []);

  return (
    <>
      <SEOHead
        title={`${article.title} | The Faulkner Group Insights`}
        description={article.excerpt}
        canonical={`https://thefaulknergroupadvisors.com/insights#${article.slug}`}
      />
      <Header />
      <main className="min-h-screen" style={{ background: "#0f1a2e" }}>
        {/* Hero Image */}
        <div className="relative w-full" style={{ height: "420px" }}>
          <img
            src={heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,26,46,0.3) 0%, rgba(15,26,46,0.85) 70%, rgba(15,26,46,1) 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
            <div className="max-w-[720px] mx-auto">
              <button
                onClick={onBack}
                className="text-[#C9A84C] font-inter text-sm mb-6 hover:underline flex items-center gap-1"
              >
                ← Back to Insights
              </button>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full font-inter">
                  {article.category}
                </span>
                <span className="text-white/50 text-sm font-inter flex items-center gap-1">
                  <Calendar size={14} /> {article.date}
                </span>
                <span className="text-white/50 text-sm font-inter flex items-center gap-1">
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>
              <h1
                className="text-3xl md:text-[2.75rem] font-playfair text-white leading-tight text-left"
                style={{
                  textShadow:
                    "0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)",
                }}
              >
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Mobile TOC */}
        {headings.length > 0 && (
          <div className="lg:hidden max-w-[720px] mx-auto px-6 mt-8">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-inter text-sm font-medium text-white/80"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span>Table of Contents</span>
              {tocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {tocOpen && (
              <nav className="mt-2 rounded-lg p-4 space-y-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                {headings.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => scrollToHeading(h.id)}
                    className={`block w-full text-left text-sm font-inter py-1.5 px-3 rounded transition-colors duration-200 ${
                      activeHeading === h.id
                        ? "text-[#C9A84C] bg-[#C9A84C]/10"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {h.text}
                  </button>
                ))}
              </nav>
            )}
          </div>
        )}

        {/* Content + Desktop TOC */}
        <div className="max-w-[1100px] mx-auto px-6 pt-10 pb-16 flex gap-12">
          {/* Article Content */}
          <div className="flex-1 min-w-0 max-w-[720px] mx-auto lg:mx-0">
            <div
              ref={contentRef}
              className="article-content font-inter"
              style={{ fontSize: "17px", lineHeight: "1.8", color: "#D1D5DB" }}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Gold divider */}
            <div className="my-12 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C40, transparent)" }} />

            {/* Author Bio */}
            <div
              className="rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src={author.headshot}
                alt={author.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                style={{ border: "2px solid #C9A84C" }}
              />
              <div>
                <h3 className="text-white font-playfair text-lg font-bold mb-1 text-left">
                  {author.name}
                </h3>
                <p className="text-[#C9A84C] font-inter text-sm mb-3">
                  {author.title}
                </p>
                <p className="text-white/60 font-inter text-sm leading-relaxed">
                  {author.bio}
                </p>
              </div>
            </div>

            {/* Gold divider */}
            <div className="my-12 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C40, transparent)" }} />

            {/* Continue Reading */}
            {related.length > 0 && (
              <section>
                <h2 className="text-2xl font-playfair text-white mb-8 text-left">
                  Continue Reading
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <button
                      key={r.slug}
                      onClick={() => {
                        onBack();
                        setTimeout(() => {
                          window.scrollTo(0, 0);
                          // We re-select from parent
                        }, 0);
                      }}
                      className="group text-left rounded-xl p-5 transition-all duration-300 hover:border-[#C9A84C]/30"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="inline-block bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold px-2.5 py-0.5 rounded-full font-inter mb-3">
                        {r.category}
                      </span>
                      <h3 className="text-white font-playfair text-base mb-2 group-hover:text-[#C9A84C] transition-colors text-left">
                        {r.title}
                      </h3>
                      <span className="text-white/40 text-xs font-inter">
                        {r.date}
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Desktop TOC Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-[240px] flex-shrink-0 sticky top-36 self-start">
              <p className="text-white/40 font-inter text-xs uppercase tracking-widest mb-4">
                On this page
              </p>
              <nav className="space-y-1.5">
                {headings.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => scrollToHeading(h.id)}
                    className={`block w-full text-left text-[13px] font-inter py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                      activeHeading === h.id
                        ? "border-[#C9A84C] text-[#C9A84C]"
                        : "border-transparent text-white/40 hover:text-white/70 hover:border-white/20"
                    }`}
                  >
                    {h.text}
                  </button>
                ))}
              </nav>
            </aside>
          )}
        </div>

        {/* Full-width CTA Banner */}
        <section
          className="py-20 px-6"
          style={{
            background:
              "linear-gradient(135deg, #0a1628 0%, #142238 50%, #0a1628 100%)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-4">
              Ready to Close the Clinical Readiness Gap?
            </h2>
            <p className="text-white/60 font-inter text-lg mb-8 max-w-xl mx-auto">
              Whether your pilot has stalled or you are preparing your first health system partnership, our team can help you build the clinical foundation for success.
            </p>
            <a
              href="/clinical-clarity-session"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "#C9A84C",
                color: "#0f1a2e",
                boxShadow: "0 0 30px rgba(201,168,76,0.25)",
              }}
            >
              Schedule a Clinical Clarity Session
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <BottomVideo />
      <StickyCTA />
    </>
  );
};

// ─── LISTING VIEW ─────────────────────────────────────────────
const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  if (selectedArticle) {
    return (
      <ArticleView
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <>
      <SEOHead
        title="Insights | The Faulkner Group — Clinical Strategy Articles"
        description="Expert insights on clinical strategy, physician adoption, reimbursement, and health system partnerships from The Faulkner Group."
        canonical="https://thefaulknergroupadvisors.com/insights"
      />
      <Header />
      <main className="min-h-screen" style={{ background: "#0f1a2e" }}>
        {/* Hero */}
        <section className="pt-44 pb-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-white mb-4">
            Insights
          </h1>
          <p className="text-white/70 font-inter text-lg max-w-2xl mx-auto">
            Expert perspectives on clinical strategy, health system partnerships, and building health tech that scales.
          </p>
        </section>

        {/* Category Filter */}
        <div className="max-w-5xl mx-auto px-6 mb-12 flex flex-wrap justify-center gap-3">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-inter font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "text-[#0f1a2e]"
                  : "text-white/70 hover:text-white"
              }`}
              style={{
                background:
                  selectedCategory === cat
                    ? "#C9A84C"
                    : "rgba(255,255,255,0.08)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="max-w-5xl mx-auto px-6 pb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <button
              key={article.slug}
              onClick={() => {
                setSelectedArticle(article);
                window.scrollTo(0, 0);
              }}
              className="group text-left rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={article.image || defaultHeroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full font-inter mb-3">
                  {article.category}
                </span>
                <h2 className="text-lg font-playfair text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300 text-left leading-snug">
                  {article.title}
                </h2>
                <p className="text-white/50 font-inter text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/30 text-xs font-inter flex items-center gap-1">
                    <Calendar size={12} /> {article.date}
                  </span>
                  <span className="text-[#C9A84C] text-sm font-inter flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/50 font-inter pb-24">
            No articles in this category yet. Check back soon.
          </p>
        )}
      </main>
      <BottomVideo />
      <StickyCTA />
    </>
  );
};

export default Insights;
