import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";
import { PageHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Request a smart home, security, energy or IoT consultation with Nixora. We assess your site, design your system and send a quotation.",
};

export default function ConsultationPage() {
  return (
    <>
      <PageHead
        title="Request a consultation"
        lede="Share a few details and we'll arrange a conversation, then a site visit. There's no obligation until you approve a quote."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>What happens next</h2>
            <ol className="process">
              <li><b>Your details</b><span>Fill in this form</span></li>
              <li><b>Project requirements</b><span>We call to understand what you need</span></li>
              <li><b>Site assessment</b><span>We visit your property</span></li>
              <li><b>Nixora design</b><span>We plan the right system for your space</span></li>
              <li><b>Quotation</b><span>You receive a clear, itemised quote</span></li>
            </ol>
          </div>
          <ConsultForm kind="consultation" />
        </div>
      </section>
    </>
  );
}
