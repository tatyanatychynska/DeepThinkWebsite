import { SectionHeading } from "./Section";
import { delay } from "@/lib/useReveal";

const stalls = [
  { title: "No strategy", body: "AI ambition without a roadmap to execution.", accent: "#2ad4e8" },
  { title: "Skills gap", body: "Teams that can't operationalise AI on their own.", accent: "#a78bfa" },
  { title: "Random experiments", body: "Disconnected pilots that never reach production.", accent: "#34d399" },
  { title: "Disconnected data", body: "Knowledge trapped across siloed systems.", accent: "#f59e0b" },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="The problem"
        title="Why AI adoption stalls"
        intro={
          <>
            Most organisations don't have an AI problem. They have an{" "}
            <span className="text-foreground">adoption problem.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stalls.map((s, i) => (
          <div
            key={s.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15"
            style={delay(i * 90)}
          >
            <span
              className="absolute inset-y-0 left-0 w-1 transition-all duration-500 group-hover:w-1.5"
              style={{ background: s.accent }}
            />
            <div
              className="mb-4 h-8 w-8 rounded-lg opacity-80 transition-transform duration-500 group-hover:scale-110"
              style={{ background: `radial-gradient(circle at 30% 30%, ${s.accent}, transparent 70%)` }}
            />
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="reveal mx-auto mt-14 max-w-3xl text-center font-display text-2xl font-semibold leading-snug sm:text-3xl">
        DeepThink provides the strategy, platform, and expertise to help
        organisations become <span className="text-gradient">AI-first.</span>
      </p>
    </section>
  );
}
