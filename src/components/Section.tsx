import type { ReactNode } from "react";
import { delay } from "@/lib/useReveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="reveal inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
      <span className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="reveal mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
        style={delay(60)}
      >
        {title}
      </h2>
      {intro && (
        <p className="reveal mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg" style={delay(120)}>
          {intro}
        </p>
      )}
    </div>
  );
}
