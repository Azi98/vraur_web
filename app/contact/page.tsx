import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../components/marketing.module.css";
import { canonicalUrl } from "../seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Vraur support for help, feedback, or partnership requests.",
  alternates: {
    canonical: canonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className={styles.legalPage}>
      <Header />
      <main className={styles.legalMain}>
        <article className={styles.legalCard}>
          <p className={styles.legalMeta}>Support</p>
          <h1>Contact Us</h1>
          <p>
            For support and partnership requests, contact us at{" "}
            <a href="mailto:support@vraur.com">support@vraur.com</a>.
          </p>
          <ul className={styles.legalList}>
            <li>Bug reports and issue screenshots are welcome.</li>
            <li>Feedback and feature suggestions help us prioritize updates.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
}
