/**
 * Tiny external store that controls the legal modal (Privacy Policy /
 * Terms of Service). Same pattern as demo.ts — mount <LegalModal /> once
 * near the root and call openLegal("privacy" | "terms") from anywhere.
 */
export type LegalKind = "privacy" | "terms";

type Listener = () => void;

let current: LegalKind | null = null;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((l) => l());
}

export function openLegal(kind: LegalKind) {
  current = kind;
  emit();
}

export function closeLegal() {
  if (current === null) return;
  current = null;
  emit();
}

export function getLegalKind() {
  return current;
}

export function subscribeLegal(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
