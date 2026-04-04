import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../components/marketing.module.css";

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
            <li>Replace the address above with your production support email.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
}
