import productPlatform from "@/imports/product-platform.png";
import { BrowserFrame } from "./BrowserFrame";
import { FloatingBadge } from "./FloatingBadge";
import { DemoButton } from "./DemoButton";
import { delay } from "@/lib/useReveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
            <span className="font-mono uppercase tracking-[0.14em]">Enterprise AI Platform</span>
          </div>

          <h1 className="reveal font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={delay(60)}>
            The Enterprise
            <br />
            AI Platform
          </h1>

          <p className="reveal mx-auto mt-5 max-w-2xl font-display text-xl font-semibold sm:text-2xl" style={delay(120)}>
            <span className="text-gradient">Connect. Think. Automate. Govern.</span>
          </p>

          <p className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={delay(180)}>
            DeepThink transforms disconnected enterprise systems into a unified AI
            ecosystem — so your organisation can adopt AI securely, rapidly, and at scale.
          </p>

          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={delay(240)}>
            <DemoButton className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50 sm:w-auto" />
          </div>
        </div>

        {/* Hero product screenshot */}
        <div className="reveal group relative mx-auto mt-16 max-w-5xl" style={delay(300)}>
          <div className="pointer-events-none absolute -inset-x-10 -top-6 bottom-0 rounded-[2rem] bg-gradient-to-b from-primary/25 via-accent/10 to-transparent blur-2xl transition-opacity duration-700 group-hover:opacity-100 opacity-70" />

          <FloatingBadge accent="emerald" className="-left-4 top-24 sm:-left-8" delayMs={0}>
            12 systems connected
          </FloatingBadge>
          <FloatingBadge accent="accent" className="-right-3 top-40 sm:-right-6" delayMs={1400}>
            Answer in 1.8s
          </FloatingBadge>
          <FloatingBadge accent="primary" className="-left-2 bottom-10 sm:-left-6" delayMs={2600}>
            Governed & audit-ready
          </FloatingBadge>

          <BrowserFrame className="relative h-full">
            <div className="overflow-hidden">
              <img
                src={productPlatform}
                alt="The DeepThink AI Platform dashboard showing integrated systems and platform capabilities"
                className="w-[105%] max-w-none origin-top scale-100 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]"
              />
            </div>
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
