import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Smart Home Automation in Nigeria",
  description:
    "Nixora Smart Home: smart lighting, sockets, climate control, curtains, smart locks, CCTV, sensors and voice control — designed, installed and supported in Nigeria.",
};

const FEATURES = [
  {
    title: "Smart lighting",
    text: "Indoor, outdoor, security, and decorative lighting on smart bulbs, switches, and sockets.",
    examples: ["Turn on the compound lights at sunset.", "Turn the living-room lights on when motion is detected."],
  },
  {
    title: "Sockets and appliances",
    text: "Control TVs, fans, chargers, entertainment systems, water pumps, office equipment, and selected kitchen appliances remotely or on a schedule.",
  },
  {
    title: "Climate",
    text: "Air conditioners, fans, ventilation, and temperature and humidity sensors working together.",
    examples: ["If the room is above your set temperature, start cooling.", "If nobody is in the room for a while, turn the AC off."],
  },
  {
    title: "Curtains and blinds",
    text: "Scheduled opening and closing, sunrise and sunset routines, and privacy mode.",
  },
  {
    title: "Doors and access",
    text: "Smart locks, access codes, remote locking, temporary access, access logs, door sensors, and smart doorbells.",
  },
  {
    title: "Voice control",
    text: "Use compatible voice assistants such as Alexa. Say “Alexa, turn off the bedroom” and every device in that room responds.",
  },
];

const ROOMS = [
  { name: "Living room", items: ["Lights", "TV", "AC", "Curtains", "Fan", "Sockets"] },
  { name: "Bedroom", items: ["Lights", "AC", "Curtains", "Fan", "Sockets"] },
  { name: "Kitchen", items: ["Lights", "Sensors", "Appliances"] },
  { name: "Compound", items: ["CCTV", "Gates", "Security lights", "Motion sensors", "Water systems"] },
];

const SCENES = [
  { name: "Good Morning", items: ["Open curtains", "Turn on selected lights", "Adjust AC", "Disable night security"] },
  { name: "Movie", items: ["Dim lights", "Close curtains", "Turn on the entertainment system", "Adjust AC"] },
  { name: "Leaving Home", items: ["Turn off lights and AC", "Turn off selected appliances", "Lock doors", "Arm security"] },
  { name: "Night", items: ["Lock doors", "Close curtains", "Arm security", "Turn on security lighting"] },
];

const PACKAGES = [
  {
    name: "Basic",
    text: "For customers starting their smart-space journey.",
    includes: null,
    items: ["Smart lighting", "Smart sockets", "Voice-assistant integration", "Mobile control", "Basic automation", "Installation"],
  },
  {
    name: "Standard",
    text: "A more complete smart home.",
    includes: "Everything in Basic, plus",
    items: ["Smart curtains", "AC and fan control", "Sensors", "Automation routines", "Expanded device control"],
  },
  {
    name: "Premium",
    text: "Security, safety and energy in one system.",
    includes: "Everything in Standard, plus",
    items: ["CCTV", "Access control and smart locks", "Fire and smoke monitoring", "Environmental monitoring", "Energy monitoring", "Advanced automation"],
  },
  {
    name: "Enterprise",
    text: "Custom-designed for offices, hotels, estates, schools, churches, warehouses, and developers.",
    includes: "Priced per site",
    items: ["Site assessment", "Custom system design", "Multi-building deployments", "Ongoing support"],
  },
];

export default function SmartHomePage() {
  return (
    <>
      <PageHead
        title="An intelligent home, not a box of gadgets"
        lede="Nixora Smart Home brings your lighting, climate, curtains, doors, appliances, and security together — designed for your property and installed by our team."
      >
        <div className="actions">
          <Link href="/consultation" className="btn">Request a consultation</Link>
          <a href="#packages" className="btn btn--ghost">See packages</a>
        </div>
      </PageHead>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>What you can control</h2>
            <p className="lede">Every device works with the others, so one action or one rule can change the whole house.</p>
          </div>
          <div className="areas">
            {FEATURES.map((f) => (
              <div className="area" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                {f.examples && (
                  <ul className="small muted" style={{ margin: "0.75rem 0 0", paddingLeft: "1.1em" }}>
                    {f.examples.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Organised by room</h2>
            <p className="lede">Your devices are grouped the way you think about your home, so “turn off the bedroom” just works.</p>
          </div>
          <div className="areas">
            {ROOMS.map((r) => (
              <div className="area" key={r.name}>
                <h3>{r.name}</h3>
                <ul className="tags">{r.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="wrap split">
          <div>
            <h2>One tap. The whole house responds.</h2>
            <p className="lede">Scenes group many actions into one. We set them up around your routines, and you can change them any time.</p>
          </div>
          <div className="areas">
            {SCENES.map((s) => (
              <div className="area" key={s.name}>
                <h3>{s.name}</h3>
                <ul className="rule-list small" style={{ marginTop: "0.75rem" }}>
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="wrap">
          <h2>Packages</h2>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            Every installation starts with a site assessment, so your quote matches your property. These packages are a
            starting point.
          </p>
          <div className="packages">
            {PACKAGES.map((p) => (
              <div className="package" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                {p.includes && <p className="includes">{p.includes}</p>}
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <Link href="/consultation" className={p.name === "Enterprise" ? "btn btn--lamp" : "btn btn--ghost"}>
                  {p.name === "Enterprise" ? "Talk to us" : `Ask about ${p.name}`}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Start with one room." text="Tell us about your home and we'll recommend where to begin." />
    </>
  );
}
