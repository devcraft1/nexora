import type { Metadata } from "next";
import { CtaBand, PageHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The technology behind Nixora: IoT, edge computing, cloud, automation, AI and APIs — and the roadmap for the Nixora platform.",
};

const PILLARS = [
  { name: "IoT", text: "Connected physical devices and sensors." },
  { name: "Edge computing", text: "Local intelligence designed to keep working when cloud connectivity is unavailable." },
  { name: "Cloud", text: "Remote access, synchronisation, analytics, and central management." },
  { name: "Automation", text: "Rules that let systems respond on their own." },
  { name: "AI", text: "Analysis, natural-language interaction, recommendations, and anomaly detection." },
  { name: "APIs", text: "Integration with third-party applications and services." },
];

const ROADMAP = [
  { phase: "Phase 1", now: true, title: "Brand & website", text: "Identity, service structure, consultation system, and portfolio." },
  { phase: "Phase 2", now: true, title: "Smart-home installation", text: "Lighting, sockets, curtains, CCTV, smart locks, sensors, voice integration, and basic automation." },
  { phase: "Phase 3", title: "Nixora Gateway", text: "A local gateway for device communication, MQTT, local rules, sensor processing, and cloud sync." },
  { phase: "Phase 4", title: "Nixora Platform", text: "Accounts, device management, rooms, scenes, automation, notifications, dashboards, and APIs." },
  { phase: "Phase 5", title: "Energy & water", text: "Deeper integrations for inverters, solar, batteries, generators, tanks, pumps, and leaks." },
  { phase: "Phase 6", title: "Nixora AI", text: "Natural-language commands, recommendations, anomaly detection, and an AI assistant." },
  { phase: "Phase 7", title: "Enterprise", text: "Hotels, offices, estates, agriculture, commercial buildings, and industrial IoT." },
];

const AI_QUESTIONS = [
  "Why did my electricity use go up this week?",
  "Which appliance is using the most power?",
  "Why is my water pump running so often?",
  "Are all the doors locked?",
  "I'm going to bed.",
];

export default function TechnologyPage() {
  return (
    <>
      <PageHead
        title="The technology behind Nixora"
        lede="Connect, control, automate, understand, optimise. Here is how the pieces fit together, what works today, and what we're building next."
      />

      <section className="section">
        <div className="wrap">
          <div className="areas">
            {PILLARS.map((p) => (
              <div className="area" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="wrap split">
          <div>
            <h2>Designed to keep working offline</h2>
            <p className="lede">
              Internet connections drop. The Nixora architecture puts a local gateway at the centre, so core automation
              can keep running on site and sync with the cloud when the connection returns.
            </p>
            <ol className="process" style={{ marginTop: "2rem" }}>
              <li><b>Internet goes down</b><span>The gateway stays active</span></li>
              <li><b>Local automation continues</b><span>Lights, sensors, and configured systems keep running</span></li>
              <li><b>Internet returns</b><span>Events sync to the cloud</span></li>
            </ol>
            <p className="small muted" style={{ marginTop: "1.5rem" }}>
              Offline behaviour depends on the devices and setup at each site. The Nixora Gateway is in development.
            </p>
          </div>
          <div className="arch" aria-label="Nixora architecture diagram">
            <div className="arch__layer"><b>Nixora App</b><span>Web, Android, iOS</span></div>
            <div className="arch__link" />
            <div className="arch__layer">
              <b>Nixora Cloud</b>
              <div className="arch__parts" style={{ marginTop: 10 }}>
                <div>Accounts</div><div>Automation</div><div>Devices</div>
              </div>
            </div>
            <div className="arch__link" />
            <div className="arch__layer arch__layer--gw">
              <b>Nixora Gateway</b>
              <div className="arch__parts" style={{ marginTop: 10 }}>
                <div>Wi-Fi</div><div>MQTT</div><div>BLE</div>
              </div>
            </div>
            <div className="arch__link" />
            <div className="arch__layer"><b>IoT controllers</b><span>ESP32 and dedicated controllers</span></div>
            <div className="arch__link" />
            <div className="arch__parts">
              <div>Sensors</div><div>Relays</div><div>Actuators</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ai" style={{ scrollMarginTop: 80 }}>
        <div className="wrap split">
          <div>
            <h2>Nixora AI</h2>
            <p className="lede">
              Our long-term goal is a home you can talk to in plain language — one that understands what you mean, not
              just which switch to flip.
            </p>
            <p className="note note--future">Nixora AI is a future capability and is not part of current installations.</p>
          </div>
          <div>
            <p className="muted">Questions we want Nixora to answer:</p>
            <ul className="rule-list">
              {AI_QUESTIONS.map((q) => (
                <li key={q} style={{ fontSize: "1.2rem", fontWeight: 600 }}>“{q}”</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Developer platform</h2>
            <p className="lede">
              Over time, Nixora will open APIs so developers and partners can build on the platform.
            </p>
            <p className="note note--future">Planned. Not yet available.</p>
          </div>
          <div>
            <div className="rule">
              {["GET /devices", "GET /rooms", "GET /sensors", "GET /energy", "GET /events", "POST /devices/{id}/command", "POST /automations"].map((e) => {
                const [m, path] = e.split(" ");
                return (
                  <div className="rule__row" key={e}>
                    <div className="rule__key">{m}</div>
                    <div className="rule__val">{path}</div>
                  </div>
                );
              })}
            </div>
            <ul className="tags" style={{ marginTop: "1.5rem" }}>
              {["API keys", "Webhooks", "SDKs", "Documentation", "Device certification", "Integration marketplace"].map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Roadmap</h2>
            <p className="lede">We&apos;re starting with what customers need now and building the platform around real installations.</p>
          </div>
          <ol className="roadmap">
            {ROADMAP.map((r) => (
              <li key={r.phase}>
                <span className={`phase${r.now ? " phase--now" : ""}`}>{r.phase}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
