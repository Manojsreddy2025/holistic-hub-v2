"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/physical-treatment", label: "Physical Treatment" },
  { href: "/psychological-treatment", label: "Psychological Treatment" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const current = (href: string) =>
    (href === "/" ? pathname === "/" : pathname.startsWith(href))
      ? "page"
      : undefined;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark} aria-label="Holistic Heal Hub — home">
          <span className={styles.wordmarkName}>
            Holistic Heal Hub<span className={styles.wordmarkDot}>.</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {LINKS.slice(0, 5).map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={styles.bookBtn}>
          Book a consultation
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Primary, mobile">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
