import Link from "next/link";
import HomeDemo from "@/components/HomeDemo";
import { CtaBand } from "@/components/Blocks";

const AREAS = [
  {
    title: "Smart Home",
    text: "Automate lighting, climate, entertainment, curtains, appliances, and everyday routines.",
    href: "/smart-home",
  },
  {
    title: "Security",
    text: "Connect cameras, access control, sensors, alarms, doors, and surveillance systems.",
    href: "/solutions#security",
  },
  {
    title: "Energy",
    text: "Monitor electricity, solar, batteries, inverters, generators, and power consumption.",
    href: "/solutions#energy",
  },
  {
    title: "Water",
    text: "Monitor tanks, pumps, leaks, flooding, and water infrastructure.",
    href: "/solutions#water",
  },
  {
    title: "IoT",
    text: "Connect sensors, devices, controllers, and physical systems — or build a custom one.",
    href: "/solutions#iot",
  },
  {
    title: "AI",
    text: "We're building toward turning connected data into insights, automation, and natural-language control.",
    href: "/technology#ai",
  },
];

const CONDITIONS = [
  "Power interruptions.",
  "Connectivity challenges.",
  "Security concerns.",
  "Solar systems.",
  "Generators.",
  "Water pumps.",
  "Large compounds.",
  "Multiple buildings.",
];

const STEPS = [
  { title: "Connect", text: "We connect your devices and systems." },
  { title: "Control", text: "Manage them from one interface." },
  { title: "Automate", text: "Create routines that run on their own." },
  { title: "Understand", text: "See what is happening across your space." },
  { title: "Optimize", text: "Use that information to improve safety, comfort, and energy use." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <h1>
              <span>Intelligent Living.</span>
              <span>Connected Spaces.</span>
              <span>Smarter Future.</span>
            </h1>
            <p className="lede">
              Nixora connects your home, security, energy, water, and everyday systems into one intelligent ecosystem.
            </p>
            <div className="actions">
              <Link href="/consultation" className="btn">
                Request a consultation
              </Link>
              <Link href="/smart-home" className="btn btn--ghost">
                Explore Nixora Smart Home
              </Link>
            </div>
          </div>
          <HomeDemo />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>One platform. Everything connected.</h2>
            <p className="lede">
              Most homes run ten separate systems with ten separate controls. Nixora brings them together so they work
              as one.
            </p>
          </div>
          <div className="areas">
            {AREAS.map((a) => (
              <div className="area" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <Link href={a.href}>Learn about {a.title === "AI" ? "Nixora AI" : a.title === "IoT" ? "IoT" : a.title.toLowerCase()}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="wrap">
          <h2>Built for the way we live</h2>
          <ul className="conditions">
            {CONDITIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="lede">
            Nixora is designed around real-world conditions — to make connected environments practical, resilient,
            and intelligent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Start with one room. Build your intelligent environment.</h2>
            <p className="lede">
              You don&apos;t need to automate your entire property at once. Start small, then add what you need. Nixora
              grows with you.
            </p>
            <div className="actions">
              <Link href="/smart-home#packages" className="btn btn--ghost">
                See packages
              </Link>
            </div>
          </div>
          <ol className="ladder">
            {["One room", "Lighting", "Climate", "Security", "Energy", "Water", "Automation", "The entire property"].map(
              (s) => (
                <li key={s}>{s}</li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>From devices to intelligence</h2>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>From smart homes to intelligent infrastructure</h2>
          </div>
          <div>
            <p className="lede">
              Nixora starts with connected homes. Our vision extends to the places where Africa lives and works.
            </p>
            <ul className="tags">
              {[
                "Offices",
                "Hotels",
                "Estates",
                "Agriculture",
                "Commercial buildings",
                "Industrial environments",
                "Connected infrastructure",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p style={{ marginTop: "1.5rem" }}>
              <Link href="/solutions#business">Business solutions</Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
