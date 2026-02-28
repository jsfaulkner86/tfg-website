import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const STORAGE_KEY = "fwh-email-captured";

interface EmailGateModalProps {
  toolName: string;
  onUnlocked: () => void;
  onClose: () => void;
}

/** Returns true if the user has already submitted their email this session */
export function isEmailCaptured(): boolean {
  return !!localStorage.getItem(STORAGE_KEY);
}

/** Append a lead row to localStorage CSV blob */
function saveLead(name: string, email: string, tool: string) {
  const existing = localStorage.getItem("fwh-leads") || "Name,Email,Tool,Date\n";
  const row = `"${name}","${email}","${tool}","${new Date().toISOString()}"\n`;
  localStorage.setItem("fwh-leads", existing + row);
  localStorage.setItem(STORAGE_KEY, "1");
}

/** Call this from a hidden admin button or console to download all leads */
export function downloadLeadsCSV() {
  const csv = localStorage.getItem("fwh-leads");
  if (!csv) return;
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fwh-leads.csv";
  a.click();
  URL.revokeObjectURL(url);
}

const EmailGateModal = ({ toolName, onUnlocked, onClose }: EmailGateModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimName = name.trim();
    const trimEmail = email.trim();
    if (!trimName) { setError("Please enter your name."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimEmail)) { setError("Please enter a valid email."); return; }
    saveLead(trimName, trimEmail, toolName);
    onUnlocked();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4" style={{ backgroundColor: "rgba(10,22,40,0.75)", backdropFilter: "blur(6px)" }}>
      <div
        className="relative w-full max-w-md rounded-2xl p-6 sm:p-8"
        style={{
          background: "linear-gradient(180deg, #7A97B3 0%, #6A859E 100%)",
          border: "2.5px solid #F3DA73",
          boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          animation: "slideUpCTA 300ms ease-out forwards",
        }}
      >
        <style>{`@keyframes slideUpCTA { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`}</style>

        <button onClick={onClose} className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:opacity-70 transition-opacity" aria-label="Close">
          <X size={16} className="text-white" />
        </button>

        <div className="text-center mb-6">
          <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-inter font-bold tracking-[0.15em] uppercase" style={{ background: "rgba(243,218,115,0.2)", color: "#F3DA73", border: "1px solid rgba(243,218,115,0.4)" }}>
            Free Access
          </span>
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
            {toolName}
          </h3>
          <p className="font-inter text-sm text-white/70">Enter your info below for instant access.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => { setName(e.target.value); setError(""); }}
            className="w-full px-4 py-3 rounded-lg font-inter text-sm outline-none transition-all focus:ring-2"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.2)" }}
            maxLength={100}
          />
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(""); }}
            className="w-full px-4 py-3 rounded-lg font-inter text-sm outline-none transition-all focus:ring-2"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.2)" }}
            maxLength={255}
          />
          {error && <p className="text-xs font-inter" style={{ color: "#F87171" }}>{error}</p>}
          <Button
            type="submit"
            className="w-full text-base font-semibold rounded-lg py-5 group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(243,218,115,0.35)]"
            style={{
              background: "linear-gradient(135deg, rgba(243,218,115,0.95) 0%, rgba(212,182,93,0.9) 100%)",
              color: "#2A3B4F",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 4px 24px rgba(243,218,115,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Get Instant Access
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EmailGateModal;
