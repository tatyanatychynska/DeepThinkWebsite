import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { closeDemo, getDemoOpen, subscribeDemo } from "@/lib/demo";

type Errors = {
  name?: string;
  email?: string;
  captcha?: string;
  consent?: string;
};

function newChallenge() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  return { a, b };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DemoModal() {
  const open = useSyncExternalStore(subscribeDemo, getDemoOpen, getDemoOpen);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [challenge, setChallenge] = useState(newChallenge);

  const answer = useMemo(() => challenge.a + challenge.b, [challenge]);

  // Reset the form each time the modal opens.
  useEffect(() => {
    if (!open) return;
    setName("");
    setEmail("");
    setCompany("");
    setCaptcha("");
    setConsent(false);
    setErrors({});
    setSubmitted(false);
    setChallenge(newChallenge());
  }, [open]);

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Please enter a valid email address.";
    if (!captcha.trim()) next.captcha = "Please answer the question.";
    else if (Number(captcha.trim()) !== answer) next.captcha = "Incorrect answer — please try again.";
    if (!consent) next.consent = "Please accept how your data will be used.";

    setErrors(next);

    if (Object.keys(next).length > 0) {
      if (next.captcha) {
        setChallenge(newChallenge());
        setCaptcha("");
      }
      return;
    }

    // No backend in this project — surface a confirmation state.
    setSubmitted(true);
  };

  const fieldBase =
    "w-full rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:bg-white/10";

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md"
      onClick={closeDemo}
      role="dialog"
      aria-modal="true"
      aria-label="Book a demo"
    >
      <div
        className="relative my-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50 ring-1 ring-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeDemo}
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-background/70 text-foreground transition-colors hover:bg-background"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {submitted ? (
          <div className="px-7 py-10 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary/15 text-primary">
              <svg viewBox="0 0 24 24" className="size-7 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <h2 className="mt-5 font-display text-xl font-bold tracking-tight">Thanks, {name.trim().split(" ")[0]}!</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We've received your request and someone from the DeepThink team will reach
              out at <span className="text-foreground">{email.trim()}</span> to schedule your demo.
            </p>
            <button
              onClick={closeDemo}
              className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Done
            </button>
          </div>
        ) : (
          <form className="px-7 pb-7 pt-8" onSubmit={handleSubmit} noValidate>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Get started</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">Book a demo</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us a little about yourself and we'll set up a walkthrough of DeepThink.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="demo-name" className="mb-1.5 block text-xs font-medium text-foreground/90">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="demo-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldBase}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="demo-email" className="mb-1.5 block text-xs font-medium text-foreground/90">
                  Work email <span className="text-primary">*</span>
                </label>
                <input
                  id="demo-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldBase}
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="demo-company" className="mb-1.5 block text-xs font-medium text-foreground/90">
                  Company <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="demo-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={fieldBase}
                  placeholder="Acme Inc."
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor="demo-captcha" className="mb-1.5 block text-xs font-medium text-foreground/90">
                  Quick check: what is {challenge.a} + {challenge.b}? <span className="text-primary">*</span>
                </label>
                <input
                  id="demo-captcha"
                  type="text"
                  inputMode="numeric"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className={`${fieldBase} max-w-[8rem]`}
                  placeholder="Answer"
                  autoComplete="off"
                />
                {errors.captcha && <p className="mt-1.5 text-xs text-red-400">{errors.captcha}</p>}
              </div>

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 size-4 shrink-0 rounded border-border bg-white/5 accent-primary"
                />
                <span>
                  I agree that the personal data I've provided will be stored and used by
                  DeepThink to contact me about this demo.
                </span>
              </label>
              {errors.consent && <p className="-mt-1 text-xs text-red-400">{errors.consent}</p>}
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/50"
            >
              Request demo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
