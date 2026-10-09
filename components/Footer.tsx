import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__tag">{site.tagline}</p>
            <p>Nixora builds intelligent connected environments for homes, businesses, and infrastructure.</p>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/smart-home">Smart Home</Link></li>
              <li><Link href="/solutions#security">Security</Link></li>
              <li><Link href="/solutions#energy">Energy</Link></li>
              <li><Link href="/solutions#water">Water &amp; environment</Link></li>
              <li><Link href="/solutions#automation">Automation</Link></li>
              <li><Link href="/solutions#iot">Custom IoT</Link></li>
              <li><Link href="/solutions#business">Business</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Nixora</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/consultation">Request a consultation</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Talk to us</h4>
            <ul>
              <li><a href={whatsappLink()}>WhatsApp</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>{site.location}</li>
              {site.social.map((s) => (
                <li key={s.label}><a href={s.href}>{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__base">
          <span>© Nixora. All rights reserved.</span>
          <span>Nixora is building the connected future.</span>
        </div>
      </div>
    </footer>
  );
}
