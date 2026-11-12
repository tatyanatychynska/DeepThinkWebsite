import type { ReactNode } from "react";

/**
 * A glassy floating callout that hovers over a product screenshot. Gently
 * bobs, and drifts in a touch further on parent-group hover for depth.
 */
export function FloatingBadge({
  children,
  className = "",
  accent = "primary",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  accent?: "primary" | "accent" | "emerald" | "amber";
  delayMs?: number;
}) {
  const dot =
    accent === "accent"
      ? "bg-accent shadow-accent"
      : accent === "emerald"
        ? "bg-emerald-400 shadow-emerald-400"
        : accent === "amber"
          ? "bg-amber-400 shadow-amber-400"
          : "bg-primary shadow-primary";

  return (
    <div
      className={`animate-floaty pointer-events-none absolute z-20 flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#0c0e1a]/85 px-3.5 py-2.5 text-xs font-medium text-foreground shadow-2xl shadow-black/50 backdrop-blur-md transition-transform duration-700 ${className}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className={`size-2 shrink-0 rounded-full shadow-[0_0_8px] ${dot}`} />
      {children}
    </div>
  );
}
