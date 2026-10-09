import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nixora installations: smart homes, security, energy and automation projects.",
};

// Add real installations here as they are completed. Don't invent results.
const PROJECTS: {
  name: string;
  location: string;
  customer: string;
  challenge: string;
  solution: string;
  technologies: string[];
  result: string;
}[] = [];

export default function ProjectsPage() {
  return (
    <>
      <PageHead
        title="Projects"
        lede="Real installations, documented honestly: the problem, what we installed, and what changed."
      />

      <section className="section">
        <div className="wrap">
          {PROJECTS.length === 0 ? (
            <div className="empty two-col">
              <div>
                <h2>Our first case studies are on the way</h2>
                <p className="lede" style={{ marginTop: "1rem" }}>
                  We&apos;re documenting our first installations now. Want your home or business to be one of them?
                </p>
                <div className="actions">
                  <Link href="/consultation" className="btn">Request a consultation</Link>
                </div>
              </div>
              <div>
                <p className="muted">Each case study will cover</p>
                <ul className="rule-list">
                  {["Project and location", "Customer type", "The problem", "The solution", "Technologies used", "Before and after photographs", "Results"].map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
          ) : (
            PROJECTS.map((p) => (
              <article className="detail split" key={p.name}>
                <div>
                  <h2>{p.name}</h2>
                  <p className="muted">{p.location}. {p.customer}.</p>
                </div>
                <div>
                  <h3>Challenge</h3><p>{p.challenge}</p>
                  <h3>Solution</h3><p>{p.solution}</p>
                  <h3>Result</h3><p>{p.result}</p>
                  <ul className="tags">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
