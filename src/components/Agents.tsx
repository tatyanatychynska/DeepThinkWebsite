import { SectionHeading } from "./Section";
import { delay } from "@/lib/useReveal";

const agents = [
  { name: "Withholding Tax Agent", body: "Laws, treaties, and withholding amounts — accurate and compliant.", tag: "Finance" },
  { name: "Corporate Sales Agent", body: "Meeting prep, tailored decks, and account research on demand.", tag: "Revenue" },
  { name: "Finance Analyst", body: "Variance analysis, reporting, and investigation across the ledger.", tag: "Finance" },
  { name: "HR Assistant", body: "Policies, onboarding, and everyday employee support.", tag: "People" },
  { name: "Churn Detection", body: "Trends, insights, and proactive action before customers leave.", tag: "Revenue" },
  { name: "Operations Coordinator", body: "Status checks, tasks, and process automation across teams.", tag: "Ops" },
];

export function Agents() {
  return (
    <section id="agents" className="relative border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="AI agents"
          title="Build your digital workforce"
          intro="Deploy specialised AI agents that work alongside teams and understand enterprise context — grounded in your data, workflows, and approval rules."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <div
              key={a.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              style={delay((i % 3) * 90)}
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-gradient-to-b from-primary/20 to-transparent transition-transform duration-500 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-accent" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="8" width="16" height="12" rx="2.5" />
                    <path d="M9 3h6l1 3H8l1-3ZM9.5 13h.01M14.5 13h.01M9 17h6M12 6v2" />
                  </svg>
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-muted-foreground">
          Custom agents can be created around your company's workflows, data, and approval rules.
        </p>
      </div>
    </section>
  );
}
