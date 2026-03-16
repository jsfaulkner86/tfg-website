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
      <p>Over 58% of healthcare IT professionals say EHR integration challenges are a primary cause of care delays. Femtech vendors often sign health system agreements without a confirmed integration pathway into Epic, Oracle Health, or whatever platform the system runs. The result is a disconnected solution that clinicians cannot trust and will not use.</p>

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
      <p>More than 80% of women report feeling unheard by healthcare professionals. When a femtech tool is deployed into an unprepared system, that experience does not improve. It gets digitized and scaled.</p>

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
      <p style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="/clinical-clarity-session" style="display: inline-block; background: #F3DA73; color: #1a2332; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none;">Schedule a Clinical Clarity Session</a>
        <a href="/clinical-readiness-roadmap" style="display: inline-block; border: 1px solid #F3DA73; color: #F3DA73; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none;">Explore the Clinical Readiness Roadmap</a>
      </p>
    `,
  },
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
                prose-p:text-white/80 prose-li:text-white/80 prose-ol:text-white/80 prose-ul:text-white/80
                prose-strong:text-white prose-a:text-[#F3DA73]
                [&_*]:text-white/80 [&_h2]:text-[#F3DA73] [&_strong]:text-white"
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
