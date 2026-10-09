import type { Metadata } from "next";
import { CtaBand, PageHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "About Nixora",
  description:
    "Nixora is an IoT and intelligent-technology company building connected environments for homes, businesses, and infrastructure.",
};

const BUILD = [
  "IoT systems",
  "Smart-home automation",
  "Security systems",
  "Energy monitoring",
  "Environmental monitoring",
  "Access control",
  "Intelligent sensors",
  "Automation systems",
  "IoT software",
  "Device management platforms",
];

const GIVES = ["Greater control", "Better security", "Improved efficiency", "Automation", "Useful information", "Convenience", "Peace of mind"];

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="Technology that connects the things that matter"
        lede="Nixora is an IoT and intelligent-technology company building connected environments for homes, businesses, and infrastructure."
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="big-quote">Technology shouldn&apos;t just give people more devices.</p>
          </div>
          <div>
            <p className="lede">
              It should connect systems, understand environments, and help people make better decisions. From lighting
              and security to energy, water, and climate, Nixora brings disconnected technologies together into one
              ecosystem.
            </p>
            <p className="muted">What it should give people instead:</p>
            <ul className="tags">{GIVES.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="wrap two-col">
          <div>
            <h2>Our mission</h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              To design practical, reliable, and intelligent technology that improves how people live, work, and interact
              with their environments.
            </p>
          </div>
          <div>
            <h2>Our vision</h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              A connected future where homes, businesses, and infrastructure can intelligently respond to the people and
              environments around them.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>What we build</h2>
            <p className="lede">
              We start with smart homes. The bigger goal is intelligent infrastructure for Africa — homes, offices, farms,
              estates, energy, and water systems sharing one intelligence layer.
            </p>
          </div>
          <ul className="rule-list">
            {BUILD.map((b) => <li key={b}>{b}</li>)}
            <li>
              AI-powered intelligent environments <span className="muted small">(in development)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>How we work</h2>
            <p className="lede">We sell a complete solution, not a box of hardware. An installation is the start of a long-term relationship.</p>
          </div>
          <ol className="process">
            {[
              ["Consultation", "We learn what you want to achieve"],
              ["Site assessment", "We visit and survey your property"],
              ["System design", "We plan devices, wiring, and automation"],
              ["Quotation", "A clear, itemised quote"],
              ["Installation", "Hardware installed by our engineers"],
              ["Configuration & testing", "Rooms, scenes, and rules set up and checked"],
              ["Training", "We show you and your household how it works"],
              ["Support & expansion", "Maintenance, upgrades, and new rooms as you grow"],
            ].map(([t, d]) => (
              <li key={t}><b>{t}</b><span>{d}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
