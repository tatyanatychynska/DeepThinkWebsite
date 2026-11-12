import { SectionHeading } from "./Section";
import { delay } from "@/lib/useReveal";

const rows = [
  ["Generic answers", "Enterprise-specific intelligence"],
  ["Requires manual prompting", "Structured workflows + AI agents"],
  ["No business context", "Connected to your systems and data"],
  ["Insights only", "Insights + execution"],
  ["Fragmented tools", "One integrated AI platform"],
  ["Difficult to scale securely", "Enterprise-ready governance and security"],
  ["Relies on technical users", "Natural language for every team"],
  ["Experiments and pilots", "Operational AI at scale"],
];

export function Comparison() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Platform advantage"
        title="Why DeepThink?"
        intro="Move beyond generic AI tools to enterprise-grade AI execution — one implementation, one strategy, one governed AI foundation."
        align="center"
      />

      <div className="reveal mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border" style={delay(80)}>
        <div className="grid grid-cols-2 text-sm font-semibold">
          <div className="bg-muted/60 px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            The old way
          </div>
          <div className="bg-primary/15 px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary">
            The DeepThink way
          </div>
        </div>
        {rows.map(([oldWay, newWay], i) => (
          <div
            key={i}
            className="grid grid-cols-2 border-t border-border transition-colors hover:bg-white/[0.02]"
          >
            <div className="flex items-center gap-3 px-6 py-4 text-sm text-muted-foreground">
              <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-none stroke-muted-foreground/70" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              <span>{oldWay}</span>
            </div>
            <div className="flex items-center gap-3 border-l border-border px-6 py-4 text-sm text-foreground">
              <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-none stroke-accent" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4 10-10" />
              </svg>
              {newWay}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
