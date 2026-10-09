import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Solutions — Security, Energy, Water, Automation & IoT",
  description:
    "Smart security, energy monitoring, water tank monitoring, automation and custom IoT development for homes and businesses in Nigeria.",
};

const LINKS = [
  ["security", "Security"],
  ["energy", "Energy"],
  ["water", "Water & environment"],
  ["automation", "Automation"],
  ["iot", "Custom IoT"],
  ["business", "Business"],
];

const BUSINESS = [
  { name: "Offices", items: ["Lighting", "Climate", "Access", "Security", "Energy", "Occupancy"] },
  { name: "Hotels", items: ["Room automation", "Access", "Energy management", "Occupancy", "Security"] },
  { name: "Estates", items: ["Gates", "CCTV", "Security", "Lighting", "Water", "Power"] },
  { name: "Schools & institutions", items: ["Security", "Energy", "Environmental monitoring", "Access"] },
  { name: "Agriculture", items: ["Soil moisture", "Irrigation", "Weather", "Water tanks", "Pumps", "Greenhouses"], future: true },
  { name: "Industrial IoT", items: ["Machine monitoring", "Environmental monitoring", "Energy monitoring"], future: true },
];

function Rule({ rows }: { rows: [string, string][] }) {
  return (
    <div className="rule">
      {rows.map(([k, v], i) => (
        <div className={`rule__row${k === "Then" ? " rule__row--then" : ""}`} key={i}>
          <div className="rule__key">{k}</div>
          <div className="rule__val">{v}</div>
        </div>
      ))}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHead
        title="Nixora solutions"
        lede="Security, energy, water, and automation designed as one system — for homes, estates, and businesses."
      >
        <nav className="jump" aria-label="Solutions on this page">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </PageHead>

      <div className="wrap">
        <section className="detail split" id="security">
          <div>
            <h2>Security &amp; surveillance</h2>
          </div>
          <div>
            <p className="lede">
              Connect CCTV, access control, sensors, alarms, and smart locks — and see them together in one view where
              the equipment allows it.
            </p>
            <ul className="tags">
              {["IP CCTV", "NVR systems", "Smart doorbells", "Motion sensors", "Door & window sensors", "Alarms", "Smart locks", "Access control"].map((t) => <li key={t}>{t}</li>)}
            </ul>
            <h3 style={{ margin: "2.5rem 0 1rem" }}>Fire and safety monitoring</h3>
            <p>Smoke, heat, gas, and carbon-monoxide sensors can raise a local alarm, notify you, and alert the contacts you choose.</p>
            <ol className="process">
              <li><b>Smoke detected</b><span>Sensor triggers</span></li>
              <li><b>Local alarm sounds</b><span>On site, without waiting for the internet</span></li>
              <li><b>Nixora notification</b><span>To your phone</span></li>
              <li><b>Configured actions run</b><span>For example, emergency lighting</span></li>
              <li><b>Designated contacts alerted</b><span>Family, staff, or security</span></li>
            </ol>
            <p className="note">
              Safety-critical systems are professionally engineered and installed with appropriate fail-safes and in line
              with applicable regulations.
            </p>
          </div>
        </section>
      </div>

      <section className="section night" id="energy" style={{ scrollMarginTop: 80 }}>
        <div className="wrap split">
          <div>
            <h2>Energy intelligence</h2>
            <p className="lede">
              Mains, generator, inverter, solar, and batteries — most properties run all of them. Nixora is building
              monitoring that shows them in one place.
            </p>
            <ul className="tags">
              {["Grid power", "Generator", "Inverter", "Solar", "Batteries", "Voltage & current", "Appliance consumption"].map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="note note--future" style={{ background: "transparent", color: "#aeb7c4" }}>
              Energy monitoring depends on your equipment and is assessed per site. Deeper inverter, solar, and generator
              integrations are in development.
            </p>
          </div>
          <div className="energy" aria-label="Concept energy dashboard">
            {[
              ["Mains", "Off", false],
              ["Solar", "2.4 kW", true],
              ["Battery", "78%", true],
              ["Generator", "Off", false],
              ["House load", "1.1 kW", true],
            ].map(([k, v, on]) => (
              <div className="energy__row" key={k as string}>
                <span>{k}</span>
                <b className={on ? "is-on" : "is-off"}>{v}</b>
              </div>
            ))}
            <div className="energy__runtime">
              <span className="muted">Estimated battery runtime</span>
              <b>6h 42m</b>
            </div>
            <div className="energy__note">Concept dashboard. Values are illustrative.</div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="detail split" id="water">
          <div>
            <h2>Water &amp; environmental monitoring</h2>
          </div>
          <div>
            <p className="lede">
              Know your tank level without climbing up to check. Let the pump look after itself, and hear about leaks and
              flooding early.
            </p>
            <ul className="tags">
              {["Overhead tanks", "Underground tanks", "Water pumps", "Leaks", "Flooding", "Drainage", "Temperature", "Humidity", "Air quality", "Smoke & gas"].map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="rules" style={{ marginTop: "2rem" }}>
              <Rule rows={[["If", "Tank level is below 20%"], ["Then", "Turn the pump on"]]} />
              <Rule rows={[["If", "Tank level reaches 90%"], ["Then", "Turn the pump off and send a notification"]]} />
            </div>
          </div>
        </section>

        <section className="detail split" id="automation">
          <div>
            <h2>Automation</h2>
          </div>
          <div>
            <p className="lede">
              Simple rules let your space respond on its own — for homes, offices, hotels, estates, and commercial
              buildings.
            </p>
            <Rule
              rows={[
                ["When", "Motion is detected in the compound"],
                ["And", "It is after 7:00 PM"],
                ["Then", "Turn the compound lights on and send a notification"],
              ]}
            />
          </div>
        </section>

        <section className="detail split" id="iot">
          <div>
            <h2>Custom IoT development</h2>
          </div>
          <div>
            <p className="lede">
              When an off-the-shelf product doesn&apos;t solve the problem, we design one: sensors, controllers,
              gateways, and the software that ties them together.
            </p>
            <p>Tell us what you need to measure, control, or connect, and we&apos;ll scope a solution.</p>
            <Link href="/consultation" className="btn btn--ghost" style={{ marginTop: "0.5rem" }}>Discuss a custom project</Link>
          </div>
        </section>

        <section className="detail" id="business">
          <h2>Business solutions</h2>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            Connected environments for organisations. Enterprise deployments are designed and priced per site.
          </p>
          <div className="areas" style={{ marginTop: "2.5rem" }}>
            {BUSINESS.map((b) => (
              <div className="area" key={b.name}>
                <h3>{b.name}{b.future && <span className="small muted" style={{ fontWeight: 400 }}> (future)</span>}</h3>
                <ul className="tags">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBand title="Let's look at your site." text="Every property is different. A site assessment is the first step to a system that fits." />
    </>
  );
}
