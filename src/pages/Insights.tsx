import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import StickyCTA from "@/components/StickyCTA";
import BottomVideo from "@/components/BottomVideo";

// ─── ARTICLE DATA ─────────────────────────────────────────────
// To add a new article, simply add an object to this array.
// The most recent article should be first.
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // e.g. "March 15, 2026"
  readTime: string; // e.g. "5 min read"
  image?: string; // optional hero image URL
  content: string; // full article body (supports basic HTML)
}

const articles: Article[] = [
  {
    slug: "why-physician-adoption-fails",
    title: "Why Physician Adoption Fails — And What Founders Can Do About It",
    excerpt:
      "Most health tech companies lose their first health system deal not because of bad technology, but because they never built a physician adoption strategy. Here is what separates winners from the rest.",
    category: "Clinical Strategy",
    date: "March 14, 2026",
    readTime: "6 min read",
    content: `
      <p>Most health tech companies lose their first health system deal not because of bad technology, but because they never built a physician adoption strategy.</p>
      <p>The assumption is simple: build a great product, show it to hospital leadership, and physicians will adopt it. But that is not how health systems work.</p>
      <h2>The Real Barrier</h2>
      <p>Physician adoption is not a feature problem — it is a workflow problem. Clinicians do not resist technology because they are luddites. They resist technology that adds friction to an already overwhelming day.</p>
      <p>The companies that win understand this. They design their implementation around existing clinical workflows, not against them.</p>
      <h2>Three Things Founders Can Do Today</h2>
      <ol>
        <li><strong>Map the clinical workflow first.</strong> Before you pitch, understand exactly where your product fits in the physician's day. Not the IT team's day — the physician's day.</li>
        <li><strong>Get a clinical champion early.</strong> One physician who believes in your product is worth more than ten IT approvals. Find them, partner with them, and build your case study together.</li>
        <li><strong>Design for the 2-minute test.</strong> If a physician cannot see value within 2 minutes of interaction, adoption will fail. Period.</li>
      </ol>
      <p>At The Faulkner Group, we help founders build physician adoption strategies that actually work — because we have sat on both sides of the table.</p>
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
      <p>Investors increasingly want to see a clear path to reimbursement before they write a check. Health systems want to know that your product will not become a cost center. And payers want evidence — real evidence — that your solution improves outcomes.</p>
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
      "Selling to health systems is not like selling to startups. Here are the five most common mistakes we see founders make — and how to avoid them.",
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

// ─── CATEGORIES ───────────────────────────────────────────────
const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

// ─── COMPONENT ────────────────────────────────────────────────
const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  if (selectedArticle) {
    return (
      <>
        <SEOHead
          title={`${selectedArticle.title} | The Faulkner Group Insights`}
          description={selectedArticle.excerpt}
          canonical={`https://thefaulknergroupadvisors.com/insights#${selectedArticle.slug}`}
        />
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-[#2C3E50] to-[#1a2332]">
          <div className="max-w-3xl mx-auto px-6 pt-44 pb-24">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-[#F3DA73] font-inter text-sm mb-8 hover:underline flex items-center gap-1"
            >
              ← Back to Insights
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#F3DA73]/15 text-[#F3DA73] text-xs font-semibold px-3 py-1 rounded-full font-inter">
                {selectedArticle.category}
              </span>
              <span className="text-white/50 text-sm font-inter flex items-center gap-1">
                <Calendar size={14} /> {selectedArticle.date}
              </span>
              <span className="text-white/50 text-sm font-inter flex items-center gap-1">
                <Clock size={14} /> {selectedArticle.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-playfair text-white leading-tight mb-10 text-left">
              {selectedArticle.title}
            </h1>
            <article
              className="prose prose-invert prose-lg max-w-none font-inter
                prose-headings:font-playfair prose-headings:text-[#F3DA73] prose-headings:text-left
                prose-p:text-white/80 prose-li:text-white/80
                prose-strong:text-white prose-a:text-[#F3DA73]"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
          </div>
        </main>
        <BottomVideo />
        <StickyCTA />
      </>
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
      <main className="min-h-screen bg-gradient-to-b from-[#2C3E50] to-[#1a2332]">
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
                  ? "bg-[#F3DA73] text-[#1a2332]"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
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
              className="group text-left bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#F3DA73]/30 transition-all duration-300"
            >
              <span className="inline-block bg-[#F3DA73]/15 text-[#F3DA73] text-xs font-semibold px-3 py-1 rounded-full font-inter mb-4">
                {article.category}
              </span>
              <h2 className="text-xl font-playfair text-white mb-3 group-hover:text-[#F3DA73] transition-colors duration-300 text-left">
                {article.title}
              </h2>
              <p className="text-white/60 font-inter text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-xs font-inter flex items-center gap-1">
                  <Calendar size={12} /> {article.date}
                </span>
                <span className="text-[#F3DA73] text-sm font-inter flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read <ArrowRight size={14} />
                </span>
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
