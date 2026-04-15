"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./marketing.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <Image
            src="https://zsyghzovbafkpxabhktz.supabase.co/storage/v1/object/public/email_assets/logo_mail.png"
            alt="Vraur logo"
            width={46}
            height={46}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>Vraur</span>
        </Link>

        <div className={styles.headerActions}>
          <nav className={styles.navDesktop} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://apps.apple.com/cz/app/vraur/id6758308623"
            target="_blank"
            rel="noreferrer"
            className={styles.downloadCta}
          >
            Download
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu} id="mobile-navigation">
          <nav className={styles.navMobile} aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://apps.apple.com/cz/app/vraur/id6758308623"
            target="_blank"
            rel="noreferrer"
            className={styles.mobileDownloadCta}
            onClick={closeMenu}
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
}
