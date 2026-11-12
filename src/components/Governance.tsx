import { SectionHeading } from "./Section";
import { delay } from "@/lib/useReveal";

const features = [
  { title: "Security & access", body: "Role-based permissions and permission-aware responses.", accent: "#2ad4e8" },
  { title: "Traceability", body: "Audit trails, source references, and full data lineage.", accent: "#a78bfa" },
  { title: "Cost visibility", body: "Usage analytics, token monitoring, and model cost tracking.", accent: "#34d399" },
  { title: "Human control", body: "Approval workflows for sensitive or high-impact actions.", accent: "#f59e0b" },
  { title: "Central management", body: "Consistent policies across agents, users, and systems.", accent: "#2ad4e8" },
];

export function Governance() {
  return (
    <section id="governance" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Trust layer"
        title="Enterprise governance, built in"
        intro="Enterprise AI requires more than intelligence. It requires control, visibility, and accountability."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15"
            style={delay((i % 3) * 90)}
          >
            <span
              className="absolute inset-y-0 left-0 w-1 transition-all duration-500 group-hover:w-1.5"
              style={{ background: f.accent }}
            />
            <h3 className="font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
        <div className="reveal flex flex-col justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-transparent p-6" style={delay(180)}>
          <p className="font-display text-2xl font-bold leading-tight">
            AI you can trust — <span className="text-gradient">and prove.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
