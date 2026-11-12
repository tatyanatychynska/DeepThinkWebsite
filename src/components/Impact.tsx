import { delay } from "@/lib/useReveal";

const outcomes = [
  { stat: "Search time", head: "down sharply", body: "Information lookup effort falls materially, freeing employees for higher-value work." },
  { stat: "Manual work", head: "automated", body: "A substantial share of repetitive workflows leaves human queues through intelligent automation." },
  { stat: "Decisions", head: "faster", body: "Real-time insight delivery accelerates decision cycles across active business functions." },
  { stat: "Time-to-insight", head: "cut", body: "The gap between asking a question and getting usable intelligence shrinks dramatically." },
  { stat: "ROI", head: "in weeks", body: "Organisations realise measurable economic value quickly, strengthening the case to scale." },
];

export function Impact() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="reveal font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Quantified outcomes
        </span>
        <h2 className="reveal mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]" style={delay(60)}>
          Real business impact — fast
        </h2>

        <div className="mt-14 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <div
              key={o.stat}
              className="reveal rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
              style={delay((i % 3) * 90)}
            >
              <p className="font-display text-2xl font-bold leading-tight">
                {o.stat}{" "}
                <span className="text-gradient">{o.head}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </div>
          ))}
          <div className="reveal flex items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-transparent p-7 text-center" style={delay(180)}>
            <p className="font-display text-lg font-semibold leading-snug">
              Smarter AI. Better outcomes. Within enterprise controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
