const systems = [
  "ERP", "CRM", "Finance", "HR", "Data Warehouse", "Microsoft 365",
  "Google Workspace", "SharePoint", "Email", "Documents", "APIs", "Custom Apps",
];

export function Integrations() {
  const row = [...systems, ...systems];
  return (
    <section className="border-y border-border bg-surface/60 py-12">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center lg:px-10">
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Connect the systems you already run — no rip-and-replace
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4">
          {row.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80"
            >
              <span className="size-1.5 rounded-full bg-accent/80" />
              {s}
            </div>
          ))}
        </div>
      </div>
      <p className="reveal mt-8 text-center text-sm text-muted-foreground">
        One intelligent source of truth for your entire enterprise.
      </p>
    </section>
  );
}
