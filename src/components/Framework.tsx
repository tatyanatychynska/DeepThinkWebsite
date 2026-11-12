import { SectionHeading } from "./Section";
import { delay } from "@/lib/useReveal";

const steps = [
  { n: "1", name: "Discover", items: ["C-level workshops", "AI vision & priorities", "Success metrics"], color: "#2ad4e8" },
  { n: "2", name: "Assess", items: ["Staff interviews", "Process mapping", "Data & systems review"], color: "#a78bfa" },
  { n: "3", name: "Prioritise", items: ["AI opportunity map", "Quick wins vs big bets", "ROI recommendations"], color: "#34d399" },
  { n: "4", name: "Deploy", items: ["Platform integration", "Agents & automations", "Enablement & training"], color: "#3b82f6" },
  { n: "5", name: "Optimise", items: ["Usage analytics", "Governed feedback loops", "Scale AI-first culture"], color: "#f59e0b" },
];

export function Framework() {
  return (
    <section id="framework" className="relative border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Transformation framework"
          title="The DeepThink AI Acceleration Framework"
          intro={
            <>
              We don't start with technology.{" "}
              <span className="text-foreground">We start with your business.</span> A
              consulting-led path to becoming an AI-first organisation — rapidly, safely,
              and with measurable impact.
            </>
          }
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15"
              style={delay(i * 80)}
            >
              <span
                className="grid size-10 place-items-center rounded-full font-display text-base font-bold text-background transition-transform duration-500 group-hover:scale-110"
                style={{ background: s.color }}
              >
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full" style={{ background: s.color }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
