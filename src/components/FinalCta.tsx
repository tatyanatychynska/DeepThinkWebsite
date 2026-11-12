import { DemoButton } from "./DemoButton";
import { delay } from "@/lib/useReveal";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="reveal font-mono text-xs uppercase tracking-[0.16em] text-accent">Vision</p>
        <h2 className="reveal mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl" style={delay(60)}>
          The future isn't more software.
          <br />
          <span className="text-gradient">It's smarter work.</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={delay(120)}>
          Every employee with an AI assistant. Every department with intelligent agents.
          Every decision backed by trusted intelligence. This is the intelligent
          enterprise. This is DeepThink.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={delay(180)}>
          <DemoButton className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50 sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
