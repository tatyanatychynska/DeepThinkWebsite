import { Mark } from "./Logo";
import { DemoButton } from "./DemoButton";
import { openLegal } from "@/lib/legal";

const linkCols = [
  {
    title: "Platform",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "AI agents", href: "#agents" },
      { label: "Governance", href: "#governance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Acceleration Framework", href: "#framework" },
      { label: "Why DeepThink", href: "#why" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="max-w-sm">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-white">
              <Mark className="h-6" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Deep<span className="text-primary">Think</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The enterprise AI platform. Connect, think, automate, and govern — all from
            a single platform.
          </p>
          <DemoButton className="mt-6 w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90" />
        </div>

        <div className="grid grid-cols-2 gap-10 sm:gap-16">
          {linkCols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-10">
          <p>© {year} DeepThink. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => openLegal("privacy")}
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => openLegal("terms")}
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
