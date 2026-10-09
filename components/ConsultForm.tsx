"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/lib/site";

const PROPERTY_TYPES = ["Residential", "Office", "Hotel", "Estate", "Commercial", "Industrial", "Other"];
const INTERESTS = [
  "Smart Home",
  "Security",
  "Energy",
  "Water",
  "Automation",
  "IoT Development",
  "Business Solutions",
  "Custom Project",
];

type Errors = Partial<Record<"name" | "phone" | "email" | "interests", string>>;

export default function ConsultForm({ kind = "consultation" }: { kind?: "consultation" | "contact" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const interests = data.getAll("interests").map(String);

    const next: Errors = {};
    if (!get("name")) next.name = "Enter your full name.";
    if (!get("phone")) next.phone = "Enter a phone number we can call or WhatsApp.";
    if (get("email") && !/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Enter a valid email address, or leave it blank.";
    if (interests.length === 0) next.interests = "Choose at least one area.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      kind === "consultation" ? "Consultation request — Nixora" : "Enquiry — Nixora",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      get("email") && `Email: ${get("email")}`,
      get("location") && `Location: ${get("location")}`,
      `Property type: ${get("property")}`,
      `Interested in: ${interests.join(", ")}`,
      get("details") && `\nProject details:\n${get("details")}`,
    ]
      .filter(Boolean)
      .join("\n");

    setMessage(text);
    window.open(whatsappLink(text), "_blank", "noopener");
  };

  if (message) {
    const subject = kind === "consultation" ? "Consultation request" : "Enquiry from website";
    return (
      <div className="form__done" role="status">
        <h3>Your request is ready to send</h3>
        <p>
          We opened WhatsApp with your details filled in. Press send there and a Nixora engineer will get back to you to
          arrange the next step.
        </p>
        <div className="actions" style={{ marginTop: "1rem" }}>
          <a className="btn" href={whatsappLink(message)} target="_blank" rel="noopener">
            Open WhatsApp again
          </a>
          <a
            className="btn btn--ghost"
            href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
          >
            Send by email instead
          </a>
          <button className="btn btn--ghost" onClick={() => setMessage(null)}>
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-err" />
        {errors.name && <span id="name-err" className="error">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="phone-err" />
        {errors.phone && <span id="phone-err" className="error">{errors.phone}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Email <span className="hint">(optional)</span></label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-err" />
        {errors.email && <span id="email-err" className="error">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="location">Location</label>
        <input id="location" name="location" placeholder="e.g. New Owerri" autoComplete="address-level2" />
      </div>
      <div className="field field--full">
        <label htmlFor="property">Property type</label>
        <select id="property" name="property" defaultValue="Residential">
          {PROPERTY_TYPES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <fieldset className="field field--full" aria-describedby="interests-err">
        <legend>What are you interested in?</legend>
        <div className="checks">
          {INTERESTS.map((i) => (
            <label key={i} className="check">
              <input type="checkbox" name="interests" value={i} />
              <span>{i}</span>
            </label>
          ))}
        </div>
        {errors.interests && <span id="interests-err" className="error">{errors.interests}</span>}
      </fieldset>
      <div className="field field--full">
        <label htmlFor="details">Tell us about your project</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="What would you like to automate, monitor, secure, or connect?"
        />
      </div>
      <div className="form__actions">
        <button type="submit" className="btn">
          {kind === "consultation" ? "Request consultation" : "Send request"}
        </button>
        <span className="small muted">Sends your details to us on WhatsApp. No account needed.</span>
      </div>
    </form>
  );
}
