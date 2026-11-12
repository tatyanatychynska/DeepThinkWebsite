import whtReport from "@/imports/CleanShot_2026-08-27_at_13.48.32_2x.png";
import { BrowserFrame } from "./BrowserFrame";
import { FloatingBadge } from "./FloatingBadge";
import { Eyebrow } from "./Section";
import { delay } from "@/lib/useReveal";

const steps = [
  { n: "01", title: "Upload a contract", body: "Add your contract and supporting documents." },
  { n: "02", title: "Answer a few questions", body: "The agent asks clarifying questions to understand the details." },
  { n: "03", title: "Get the treatment", body: "DeepThink calculates the WHT treatment with a clear recommendation." },
];

export function WhtSpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-stretch gap-14 lg:grid-cols-2">
        <div className="reveal group relative order-2 min-h-[520px] lg:order-1" style={delay(120)}>
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/15 via-primary/20 to-transparent opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

          <FloatingBadge accent="amber" className="-left-3 top-6 sm:-left-6" delayMs={0}>
            PE risk flagged
          </FloatingBadge>
          <FloatingBadge accent="accent" className="-right-3 bottom-16 sm:-right-6" delayMs={1800}>
            5% WHT · treaty-checked
          </FloatingBadge>

          <BrowserFrame className="relative flex h-full flex-col" url="app.getdeepthink.ai/agents/wht">
            <div className="relative flex-1 overflow-hidden bg-white">
              <img
                src={whtReport}
                alt="DeepThink WHT Agent producing a withholding-tax determination report for Trinidad and Tobago to Sweden, with invoice breakdown and recommended action"
                className="absolute inset-0 h-full w-full origin-top object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.14]"
              />
            </div>
          </BrowserFrame>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Agent spotlight</Eyebrow>
          <h2 className="reveal mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]" style={delay(60)}>
            Do real work with the <span className="text-gradient">WHT Agent</span>
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg" style={delay(120)}>
            Your AI assistant for withholding-tax tasks — fast, accurate, and always
            compliant. From contract to determination in three steps.
          </p>

          <div className="mt-8 space-y-3">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                style={delay(160 + i * 90)}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
