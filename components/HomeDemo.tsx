"use client";

import { useState, type KeyboardEvent } from "react";

type Zone = "living" | "bedroom" | "kitchen" | "hall" | "compound";

type HomeState = {
  lights: Record<Zone, number>; // 0 = off, 1 = full
  curtainsClosed: { living: boolean; bedroom: boolean };
  ac: { living: number | null; bedroom: number | null };
  tv: boolean;
  locked: boolean;
  armed: boolean;
};

const ZONE_NAMES: Record<Zone, string> = {
  living: "Living room",
  bedroom: "Bedroom",
  kitchen: "Kitchen",
  hall: "Hallway",
  compound: "Compound",
};

const SCENES: { id: string; label: string; state: HomeState }[] = [
  {
    id: "morning",
    label: "Good Morning",
    state: {
      lights: { living: 0, bedroom: 0.6, kitchen: 1, hall: 0, compound: 0 },
      curtainsClosed: { living: false, bedroom: false },
      ac: { living: null, bedroom: 25 },
      tv: false,
      locked: true,
      armed: false,
    },
  },
  {
    id: "movie",
    label: "Movie",
    state: {
      lights: { living: 0.3, bedroom: 0, kitchen: 0, hall: 0, compound: 0 },
      curtainsClosed: { living: true, bedroom: false },
      ac: { living: 23, bedroom: null },
      tv: true,
      locked: true,
      armed: false,
    },
  },
  {
    id: "leaving",
    label: "Leaving Home",
    state: {
      lights: { living: 0, bedroom: 0, kitchen: 0, hall: 0, compound: 0 },
      curtainsClosed: { living: true, bedroom: true },
      ac: { living: null, bedroom: null },
      tv: false,
      locked: true,
      armed: true,
    },
  },
  {
    id: "night",
    label: "Night",
    state: {
      lights: { living: 0, bedroom: 0, kitchen: 0, hall: 0.25, compound: 1 },
      curtainsClosed: { living: true, bedroom: true },
      ac: { living: null, bedroom: 24 },
      tv: false,
      locked: true,
      armed: true,
    },
  },
];

const INITIAL: HomeState = {
  lights: { living: 1, bedroom: 0, kitchen: 1, hall: 1, compound: 0 },
  curtainsClosed: { living: false, bedroom: true },
  ac: { living: 24, bedroom: null },
  tv: false,
  locked: false,
  armed: false,
};

const lightFill = (level: number) =>
  level > 0 ? `rgba(245, 184, 61, ${0.14 + level * 0.42})` : "rgba(255,255,255,0)";

function onActivate(fn: () => void) {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };
}

function Curtain({ x1, x2, y, closed }: { x1: number; x2: number; y: number; closed: boolean }) {
  const waves = Math.round((x2 - x1) / 10);
  let d = `M${x1},${y}`;
  for (let i = 0; i < waves; i++) {
    const sx = x1 + i * 10;
    d += ` Q${sx + 5},${y + (i % 2 ? -5 : 5)} ${sx + 10},${y}`;
  }
  return (
    <g>
      <path className="curtain" d={d} style={{ opacity: closed ? 1 : 0, transition: "opacity .5s" }} />
      <g style={{ opacity: closed ? 0 : 1, transition: "opacity .5s" }}>
        <path className="curtain" d={`M${x1},${y} q4,5 8,0 q4,-5 8,0`} />
        <path className="curtain" d={`M${x2 - 16},${y} q4,5 8,0 q4,-5 8,0`} />
      </g>
    </g>
  );
}

export default function HomeDemo() {
  const [state, setState] = useState<HomeState>(INITIAL);
  const [scene, setScene] = useState<string | null>(null);

  const toggleLight = (zone: Zone) => {
    setScene(null);
    setState((s) => ({ ...s, lights: { ...s.lights, [zone]: s.lights[zone] > 0 ? 0 : 1 } }));
  };

  const toggleLock = () => {
    setScene(null);
    setState((s) => ({ ...s, locked: !s.locked }));
  };

  const room = (zone: Zone, x: number, y: number, w: number, h: number) => (
    <rect
      className="room"
      x={x}
      y={y}
      width={w}
      height={h}
      fill={lightFill(state.lights[zone])}
      role="button"
      tabIndex={0}
      aria-pressed={state.lights[zone] > 0}
      aria-label={`${ZONE_NAMES[zone]} lights`}
      onClick={() => toggleLight(zone)}
      onKeyDown={onActivate(() => toggleLight(zone))}
    />
  );

  const lightsOn = Object.values(state.lights).filter((l) => l > 0).length;
  const acOn = [state.ac.living, state.ac.bedroom].filter((t): t is number => t !== null);

  return (
    <div className="demo">
      <div className="demo__bar">
        <span>Try it: tap a room or pick a scene</span>
        <span>Demonstration</span>
      </div>

      <div className="demo__plan">
        <svg viewBox="0 0 600 460" role="group" aria-label="Floor plan of a connected home">
          {/* Compound */}
          <rect x="6" y="6" width="588" height="448" fill="none" stroke="#8a95a5" strokeWidth="1.5" strokeDasharray="6 5" />
          <g className="glow" style={{ opacity: state.lights.compound }}>
            <circle cx="22" cy="438" r="70" fill="url(#lamp)" />
            <circle cx="578" cy="438" r="70" fill="url(#lamp)" />
            <circle cx="22" cy="22" r="50" fill="url(#lamp)" />
            <circle cx="578" cy="22" r="50" fill="url(#lamp)" />
          </g>
          <rect
            className="room"
            x="20"
            y="316"
            width="420"
            height="124"
            fill="rgba(255,255,255,0)"
            role="button"
            tabIndex={0}
            aria-pressed={state.lights.compound > 0}
            aria-label="Compound security lights"
            onClick={() => toggleLight("compound")}
            onKeyDown={onActivate(() => toggleLight("compound"))}
          />
          <text className="plan-label" x="36" y="344">Compound</text>
          <text className="plan-sub" x="36" y="362">
            Security lights {state.lights.compound > 0 ? "on" : "off"}
          </text>
          {/* Gate */}
          <path d="M240,454 H360" stroke="#e8ebee" strokeWidth="4" />
          <path d="M240,454 L268,436 M360,454 L332,436" className="plan-thin" />
          <text className="plan-sub" x="300" y="430" textAnchor="middle">Gate</text>

          {/* Water tank */}
          <rect x="486" y="334" width="64" height="92" rx="3" fill="#f3f5f7" className="plan-thin" />
          <rect x="487" y={334 + 92 * 0.28} width="62" height={92 * 0.72 - 1} fill="#9fc3d6" />
          <text className="plan-label" x="518" y="388" textAnchor="middle">72%</text>
          <text className="plan-sub" x="518" y="446" textAnchor="middle">Tank</text>

          {/* Rooms (light fills) */}
          {room("living", 22, 22, 298, 198)}
          {room("bedroom", 320, 22, 258, 148)}
          {room("kitchen", 320, 170, 258, 128)}
          {room("hall", 22, 220, 298, 78)}

          {/* Walls */}
          <path className="plan-wall" d="M120,300 H20 V20 H580 V300 H175" />
          <path className="plan-wall" d="M320,20 V105 M320,148 V226 M320,262 V300" />
          <path className="plan-wall" d="M20,220 H190 M250,220 H320" />
          <path className="plan-wall" d="M320,170 H410 M455,170 H580" />

          {/* Windows */}
          <path d="M70,20 H210 M390,20 H530" stroke="#f3f5f7" strokeWidth="5" />
          <path d="M70,17 H210 M70,23 H210 M390,17 H530 M390,23 H530" className="plan-thin" strokeWidth="1" />
          <Curtain x1={72} x2={208} y={32} closed={state.curtainsClosed.living} />
          <Curtain x1={392} x2={528} y={32} closed={state.curtainsClosed.bedroom} />

          {/* Front door + lock */}
          <path d="M120,300 A55,55 0 0 1 175,245" className="plan-thin" strokeDasharray="3 3" />
          <path d="M175,300 V245" className="plan-thin" strokeWidth="2.5" />
          <g
            role="button"
            tabIndex={0}
            aria-pressed={state.locked}
            aria-label="Front door lock"
            onClick={toggleLock}
            onKeyDown={onActivate(toggleLock)}
            style={{ cursor: "pointer" }}
          >
            <circle cx="148" cy="300" r="13" fill={state.locked ? "#2f8a66" : "#e8ebee"} stroke="#1c2533" strokeWidth="2" />
            <path
              d={state.locked ? "M143,300 l4,4 l7,-8" : "M143,300 h10"}
              stroke={state.locked ? "#fff" : "#1c2533"}
              strokeWidth="2.2"
              fill="none"
            />
          </g>

          {/* TV */}
          <rect x="26" y="70" width="8" height="70" fill={state.tv ? "#f5b83d" : "#1c2533"} />
          {/* AC units */}
          <rect x="250" y="26" width="56" height="10" rx="2" fill={state.ac.living ? "#f5b83d" : "#c3c9d2"} />
          <rect x="508" y="26" width="56" height="10" rx="2" fill={state.ac.bedroom ? "#f5b83d" : "#c3c9d2"} />

          {/* Labels */}
          <text className="plan-label" x="48" y="190">Living room</text>
          <text className="plan-sub" x="48" y="206">
            {state.tv ? "TV on" : "TV off"}, AC {state.ac.living ? `${state.ac.living}°C` : "off"}
          </text>
          <text className="plan-label" x="340" y="140">Bedroom</text>
          <text className="plan-sub" x="340" y="156">AC {state.ac.bedroom ? `${state.ac.bedroom}°C` : "off"}</text>
          <text className="plan-label" x="340" y="280">Kitchen</text>
          <text className="plan-label" x="210" y="268">Hallway</text>

          <defs>
            <radialGradient id="lamp">
              <stop offset="0" stopColor="#f5b83d" stopOpacity="0.7" />
              <stop offset="1" stopColor="#f5b83d" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="demo__scenes" role="group" aria-label="Scenes">
        {SCENES.map((s) => (
          <button
            key={s.id}
            className="scene-btn"
            aria-pressed={scene === s.id}
            onClick={() => {
              setScene(s.id);
              setState(s.state);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="demo__status" aria-live="polite">
        <div className="stat">
          Lights on<b>{lightsOn} of 5</b>
        </div>
        <div className="stat">
          Front door<b>{state.locked ? "Locked" : "Unlocked"}</b>
        </div>
        <div className="stat">
          Security<b>{state.armed ? "Armed" : "Off"}</b>
        </div>
        <div className="stat">
          Cooling<b>{acOn.length ? `${acOn.length} AC on` : "Off"}</b>
        </div>
      </div>
    </div>
  );
}
