import Link from "next/link";
import styles from "./marketing.module.css";

const footerLinks = [
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.footerLink}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={styles.footerLink}
          >
            Follow us on Instagram
          </a>
        </nav>
        <p className={styles.footerCopy}>© {new Date().getFullYear()} Vraur</p>
      </div>
    </footer>
  );
}
