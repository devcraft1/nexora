import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";
import { PageHead } from "@/components/Blocks";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Nixora what you want to automate, monitor, secure, or connect.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Let's build something intelligent"
        lede="Tell us what you want to automate, monitor, secure, or connect."
      />
      <section className="section">
        <div className="wrap split">
          <aside className="contact-aside">
            <h2 style={{ fontSize: "1.6rem" }}>Other ways to reach us</h2>
            <dl>
              <dt>WhatsApp</dt>
              <dd><a href={whatsappLink()}>Chat with us</a></dd>
              <dt>Phone</dt>
              <dd><a href={`tel:+${site.whatsappNumber}`}>{site.phoneDisplay}</a></dd>
              <dt>Email</dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </dl>
          </aside>
          <ConsultForm kind="contact" />
        </div>
      </section>
    </>
  );
}
