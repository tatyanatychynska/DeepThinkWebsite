import { Mark } from "./Logo";
import { Eyebrow } from "./Section";
import { delay } from "@/lib/useReveal";

const petals = [
  { key: "Speed", body: "Automated sequencing & reminders", pos: "left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 text-center", color: "#2ad4e8" },
  { key: "Accuracy", body: "Structured data → mapped documents", pos: "left-[68%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center", color: "#7c5cff" },
  { key: "Trust", body: "Audit trails, KYC/AML, custodians", pos: "left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 text-center", color: "#34d399" },
  { key: "Control", body: "Role-based permissions, human-in-the-loop", pos: "left-[32%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center", color: "#a78bfa" },
];

// circle centres in the 560×560 viewBox
const circles = [
  { cx: 280, cy: 182 },
  { cx: 378, cy: 280 },
  { cx: 280, cy: 378 },
  { cx: 182, cy: 280 },
];

export function ValuePetals() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Eyebrow>Why agents deliver</Eyebrow>
          <h2 className="reveal mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]" style={delay(60)}>
            Four forces working <span className="text-gradient">as one</span>
          </h2>
          <p className="reveal mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg" style={delay(120)}>
            Every DeepThink agent balances speed, accuracy, trust, and control at once —
            so automation moves fast without ever outrunning your governance.
          </p>

          <dl className="reveal mt-8 grid gap-5 sm:grid-cols-2" style={delay(180)}>
            {petals.map((p) => (
              <div key={p.key} className="flex gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full shadow-[0_0_10px]" style={{ background: p.color, color: p.color }} />
                <div>
                  <dt className="font-display text-sm font-semibold">{p.key}</dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">{p.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Petal diagram */}
        <div className="reveal group relative mx-auto aspect-square w-full max-w-[520px]" style={delay(120)}>
          <svg viewBox="0 0 560 560" className="absolute inset-0 h-full w-full">
            <defs>
              {circles.map((_, i) => (
                <radialGradient key={i} id={`petal-${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(124,92,255,0.28)" />
                  <stop offset="60%" stopColor="rgba(124,92,255,0.10)" />
                  <stop offset="100%" stopColor="rgba(124,92,255,0.02)" />
                </radialGradient>
              ))}
            </defs>
            {circles.map((c, i) => (
              <circle
                key={i}
                cx={c.cx}
                cy={c.cy}
                r={150}
                fill={`url(#petal-${i})`}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={1}
                className="origin-center animate-pulse-glow"
                style={{ animationDelay: `${i * 800}ms`, transformBox: "fill-box" }}
              />
            ))}
          </svg>

          {/* labels */}
          {petals.map((p) => (
            <div key={p.key} className={`absolute w-28 ${p.pos}`}>
              <p className="font-display text-base font-semibold" style={{ color: p.color }}>
                {p.key}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{p.body}</p>
            </div>
          ))}

          {/* centre hub */}
          <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white shadow-2xl shadow-primary/40 transition-transform duration-700 group-hover:scale-110">
            <Mark className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
