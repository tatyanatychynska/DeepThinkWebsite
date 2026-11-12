import { SectionHeading } from "./Section";
import { delay } from "@/lib/useReveal";

const pillars = [
  {
    key: "Connect",
    title: "Connect your enterprise",
    body: "Securely integrate ERP, CRM, finance, HR, data warehouses and the tools your teams already use — unifying knowledge into one source of truth.",
    icon: (
      <path d="M12 5a3 3 0 1 0-2.83 4M12 5a3 3 0 1 1 2.83 4M9.17 9L6 15m-.17-6a3 3 0 1 0 0 6m0 0a3 3 0 1 0 0 .01M14.83 9L18 15m.17 0a3 3 0 1 1 0 .01M18 15a3 3 0 1 1 0-6M9 18h6" />
    ),
  },
  {
    key: "Think",
    title: "Ask your business anything",
    body: "Natural-language business intelligence. Executives and teams get answers with evidence, charts, and source traceability in seconds — no dashboards to hunt.",
    icon: <path d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3ZM9 22h6M10 19v3M14 19v3" />,
  },
  {
    key: "Automate",
    title: "Deploy a digital workforce",
    body: "Specialised AI agents that understand enterprise context and work alongside teams — orchestrating workflows and executing real business tasks.",
    icon: <path d="M9 3h6l1 3H8l1-3ZM6 9h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9ZM9.5 13h.01M14.5 13h.01M9 17h6" />,
  },
  {
    key: "Govern",
    title: "Govern with confidence",
    body: "Role-based access, audit trails, approval workflows and cost visibility — enterprise AI you can trust, and prove.",
    icon: <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3ZM9 12l2 2 4-4" />,
  },
];

export function Platform() {
  return (
    <section id="platform" className="relative border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The solution"
          title={<>Meet DeepThink — one platform, four capabilities</>}
          intro="Integration, intelligence, automation, and governance. Everything enterprise AI adoption needs, from a single platform."
          align="center"
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.key}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
              style={delay(i * 90)}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-gradient-to-b from-white/[0.08] to-transparent transition-colors duration-500 group-hover:border-primary/40">
                  <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-accent" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                    {p.key}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
