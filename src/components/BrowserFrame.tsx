import type { ReactNode } from "react";

/**
 * A macOS-style browser chrome around a product screenshot. Sits well on the
 * dark ground and frames the (light-themed) real product UI. `cropRight`
 * trims a fraction off the right edge via overflow — handy for screenshots
 * that captured an extra strip.
 */
export function BrowserFrame({
  children,
  url = "app.getdeepthink.ai",
  className = "",
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0c0e1a] shadow-2xl shadow-black/60 ring-1 ring-white/5 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted-foreground">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
