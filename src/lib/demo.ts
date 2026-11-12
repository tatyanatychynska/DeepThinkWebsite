/**
 * Tiny external store that controls the "Book a demo" modal.
 * Any DemoButton can trigger the modal without prop drilling — mount
 * <DemoModal /> once near the root and call openDemo() from anywhere.
 */
type Listener = () => void;

let open = false;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((l) => l());
}

export function openDemo() {
  if (open) return;
  open = true;
  emit();
}

export function closeDemo() {
  if (!open) return;
  open = false;
  emit();
}

export function getDemoOpen() {
  return open;
}

export function subscribeDemo(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
