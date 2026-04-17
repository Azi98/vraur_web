import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../components/marketing.module.css";
import { canonicalUrl } from "../seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Vraur privacy policy.",
  alternates: {
    canonical: canonicalUrl("/privacy"),
  },
};

async function readPolicyHtml(): Promise<string> {
  const policyPath = path.join(process.cwd(), "legal", "privacy-policy.html");

  try {
    return await fs.readFile(policyPath, "utf8");
  } catch {
    return `
      <h1>Privacy Policy</h1>
      <p><strong>Missing source file:</strong> <code>legal/privacy-policy.html</code></p>
      <p>Paste your full generator HTML into that file and this page will render it exactly as-is.</p>
    `;
  }
}

export default async function PrivacyPage() {
  const rawHtml = await readPolicyHtml();

  return (
    <div className={styles.legalPage}>
      <Header />
      <main className={styles.legalMain}>
        <article className={`${styles.legalCard} ${styles.legalRawHtml}`}>
          <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
