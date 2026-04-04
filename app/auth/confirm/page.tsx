import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/app/components/marketing.module.css";

export default function ConfirmPage() {
  return (
    <div className={styles.authPage}>
      <Header />
      <main className={styles.authMain}>
        <section className={styles.authCard}>
          <h1 className={styles.authTitle}>Email confirmed</h1>
          <p className={`${styles.authStatus} ${styles.authStatusStrong}`}>
            Your email is verified.
          </p>
          <p className={styles.authStatus}>
            You can return to the app and sign in with your account.
          </p>
          <p className={styles.authFootnote}>
            If you didn&apos;t request this, you can safely close this page.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
