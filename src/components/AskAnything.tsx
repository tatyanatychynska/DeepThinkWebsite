import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "./Section";
import { delay } from "@/lib/useReveal";

const returns = [
  "Answer with evidence",
  "Relevant charts and narrative",
  "Full source traceability",
  "Next-best recommendations",
];

const steps = [
  "Dataset identification",
  "Query augmentation",
  "Query analysis",
  "Tool-call planning",
  "Executing tools",
];

export function AskAnything() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>Natural-language BI</Eyebrow>
          <h2 className="reveal mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]" style={delay(60)}>
            Ask your business anything
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg" style={delay(120)}>
            From executive questions to operational analysis, DeepThink retrieves,
            analyses, and explains answers in seconds — with the reasoning shown.
          </p>

          <div className="reveal mt-8 rounded-2xl border border-border bg-card p-6" style={delay(180)}>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">CEO asks</p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">
              "What was our best-performing product over the last six months, and why?"
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              No dashboard hunting. No report queue. No technical interface.
            </p>
          </div>

          <ul className="reveal mt-6 grid gap-3 sm:grid-cols-2" style={delay(240)}>
            {returns.map((r) => (
              <li key={r} className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/15">
                  <svg viewBox="0 0 24 24" className="size-3 fill-none stroke-primary" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal group relative" style={delay(120)}>
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
          <ChatMock />
        </div>
      </div>
    </section>
  );
}

function ChatMock() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(0);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const timers: number[] = [];
    steps.forEach((_, i) => {
      timers.push(window.setTimeout(() => setDone(i + 1), 500 + i * 420));
    });
    timers.push(window.setTimeout(() => setAnswer(true), 500 + steps.length * 420 + 250));
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50 ring-1 ring-white/5"
    >
      <div className="flex items-center justify-between border-b border-border bg-white/[0.02] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
          <span className="font-mono text-xs text-muted-foreground">DeepThink · General Assistant</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Live</span>
      </div>

      <div className="space-y-4 p-5">
        {/* user question */}
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
            What is the most popular data bundle over the last 6 months?
          </p>
        </div>

        {/* reasoning steps */}
        <div className="rounded-xl border border-border bg-background/60 p-3">
          <ul className="space-y-2">
            {steps.map((s, i) => {
              const isDone = done > i;
              const isRunning = done === i && !answer;
              return (
                <li key={s} className="flex items-center gap-2.5 text-sm">
                  <span
                    className={`grid size-4 place-items-center rounded-full transition-colors duration-300 ${
                      isDone ? "bg-primary/20" : "bg-white/5"
                    }`}
                  >
                    {isDone ? (
                      <svg viewBox="0 0 24 24" className="size-2.5 fill-none stroke-primary" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    ) : isRunning ? (
                      <span className="size-1.5 animate-ping rounded-full bg-accent" />
                    ) : (
                      <span className="size-1 rounded-full bg-white/20" />
                    )}
                  </span>
                  <span className={isDone ? "text-foreground/90" : "text-muted-foreground"}>{s}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* answer */}
        <div
          className={`transition-all duration-700 ${
            answer ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <p className="text-sm leading-relaxed text-foreground/90">
            The most popular one-time data bundle over the last 6 months is:
          </p>
          <p className="mt-2 font-display text-lg font-semibold">
            <span className="text-accent">25GB</span> My 1&nbsp;Day Plan ·{" "}
            <span className="text-accent">$30</span>
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Purchased <span className="font-semibold text-foreground">468,238</span> times —
            aggregated across all markets, with source lineage attached.
          </p>
        </div>
      </div>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5">
          <span className="text-sm text-muted-foreground">Ask anything about your business data…</span>
          <span className="ml-auto grid size-7 place-items-center rounded-full bg-primary">
            <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-primary-foreground" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
