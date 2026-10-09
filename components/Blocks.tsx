import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/site";

export function PageHead({
  title,
  lede,
  crumb,
  children,
}: {
  title: string;
  lede?: string;
  crumb?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section className="page-head">
      <div className="wrap">
        {crumb && (
          <Link href={crumb.href} className="crumb">
            ← {crumb.label}
          </Link>
        )}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to make your space smarter?",
  text = "Whether you're building a new home, upgrading an existing property, or developing an intelligent technology solution for your business, Nixora can help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section night on-night cta">
      <div className="wrap">
        <h2>{title}</h2>
        <p className="lede">{text}</p>
        <div className="actions">
          <Link href="/consultation" className="btn btn--lamp">
            Request a consultation
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact Nixora
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppButton() {
  return (
    <a className="wa" href={whatsappLink("Hello Nixora, I'd like to learn more about your solutions.")}>
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
      </svg>
      WhatsApp us
    </a>
  );
}
