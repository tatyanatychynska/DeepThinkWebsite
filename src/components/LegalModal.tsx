import { useEffect, useSyncExternalStore } from "react";
import { closeLegal, getLegalKind, subscribeLegal, type LegalKind } from "@/lib/legal";

type Section = { heading: string; body?: string[]; bullets?: string[] };
type Doc = { title: string; updated: string; intro: string; sections: Section[] };

const UPDATED = "Last updated: September 2026";

const DOCS: Record<LegalKind, Doc> = {
  privacy: {
    title: "Privacy Policy",
    updated: UPDATED,
    intro:
      "This Privacy Policy explains how DeepThink, referred to here as we or us, collects, uses, and protects personal data when you visit this website or request a demo.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Information you provide: when you submit the Book a demo form or otherwise contact us, we collect your name, work email, company name where provided, and the contents of your message.",
          "Technical information: standard server logs, and where applicable cookies or similar technologies used to operate and secure the site.",
        ],
      },
      {
        heading: "How we use your information",
        body: ["We use the personal data you provide to:"],
        bullets: [
          "respond to demo requests and enquiries",
          "provide, maintain, and improve this website and our services",
          "send information about DeepThink products and services you have asked about",
          "detect, prevent, and address security or technical issues",
          "comply with applicable legal obligations",
        ],
      },
      {
        heading: "Legal bases for processing",
        body: [
          "Where data protection law applies, we rely on your consent, our legitimate interest in responding to your enquiry and promoting our services, and compliance with legal obligations. You can withdraw consent at any time.",
        ],
      },
      {
        heading: "How we share information",
        body: [
          "We share personal data only with service providers who process it on our behalf under contract, with professional advisers, or where required by law or in connection with a corporate transaction. We do not sell personal data.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "We keep personal data only for as long as necessary to fulfil the purposes described in this policy, and afterwards as required to meet legal, accounting, or reporting obligations.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on your location, you may have the right to access, correct, delete, or port your personal data, and to object to or restrict its processing. To exercise these rights, contact us at privacy@getdeepthink.ai.",
        ],
      },
      {
        heading: "Security and international transfers",
        body: [
          "We use reasonable technical and organisational measures to protect personal data. Where data is transferred across borders, we rely on appropriate safeguards such as standard contractual clauses.",
        ],
      },
      {
        heading: "Changes and contact",
        body: [
          "We may update this policy from time to time. Material changes will be posted on this page with a revised date. Questions can be sent to privacy@getdeepthink.ai.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: UPDATED,
    intro:
      "These Terms of Service govern your use of the DeepThink website. By accessing or using this site, you agree to these terms.",
    sections: [
      {
        heading: "Use of the site",
        body: [
          "You may use this website for lawful, informational purposes only. You agree not to misuse the site, attempt to gain unauthorised access, interfere with its operation, or scrape or harvest content without permission.",
        ],
      },
      {
        heading: "Demo requests and communications",
        body: [
          "Submitting a demo request or enquiry does not create a contract or an obligation to provide services. If you provide your contact details, you agree that DeepThink may contact you about your request.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this site, including text, graphics, logos, and product imagery, is owned by DeepThink or its licensors and is protected by intellectual property laws. You may view and share it for personal, non-commercial reference only.",
        ],
      },
      {
        heading: "Third-party links",
        body: [
          "This site may link to third-party websites or resources. We are not responsible for the content, products, or practices of any third party.",
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          "The website and its content are provided on an as-is and as-available basis, without warranties of any kind, whether express or implied, including as to accuracy, availability, or fitness for a particular purpose.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the fullest extent permitted by law, DeepThink will not be liable for any indirect, incidental, or consequential damages, or any loss of data, revenue, or profit, arising from your use of the website.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may modify the website or these terms at any time. Continued use of the site after changes take effect means you accept the revised terms.",
        ],
      },
      {
        heading: "Governing law and contact",
        body: [
          "These terms are governed by the laws of the jurisdiction in which DeepThink is established, without regard to conflict-of-law rules. Questions can be sent to legal@getdeepthink.ai.",
        ],
      },
    ],
  },
};

export function LegalModal() {
  const kind = useSyncExternalStore(subscribeLegal, getLegalKind, getLegalKind);

  useEffect(() => {
    if (!kind) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLegal();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [kind]);

  if (!kind) return null;
  const doc = DOCS[kind];

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md"
      onClick={closeLegal}
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
    >
      <div
        className="relative my-auto flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50 ring-1 ring-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-7 py-5">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">{doc.title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{doc.updated}</p>
          </div>
          <button
            onClick={closeLegal}
            className="grid size-9 shrink-0 place-items-center rounded-full bg-background/70 text-foreground transition-colors hover:bg-background"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-7 py-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{doc.intro}</p>
          <div className="mt-6 space-y-6">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h3 className="font-display text-sm font-semibold text-foreground">{s.heading}</h3>
                {s.body?.map((p, i) => (
                  <p key={i} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
