"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.nav}`}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true" />
          Tempo
        </a>

        <nav>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navActions}>
          <a
            className="btn btn-amber"
            href="#signup"
            data-event="nav_cta_start_trial"
          >
            Start free
          </a>
          <button
            className={styles.navToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
