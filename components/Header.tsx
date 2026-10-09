"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header" data-open={open}>
      <div className="wrap header__inner">
        <Logo />
        <nav className="nav" id="site-nav" aria-label="Main" onClick={() => setOpen(false)}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/consultation" className="btn nav__consult">
            Request a consultation
          </Link>
        </nav>
        <div className="header__cta">
          <Link href="/consultation" className="btn">
            Request a consultation
          </Link>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
