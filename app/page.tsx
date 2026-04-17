import Image from "next/image";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./components/marketing.module.css";
import { canonicalUrl, siteDescription, siteName } from "./seo";

export const metadata: Metadata = {
  title: "Smart Vocabulary App",
  description: siteDescription,
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: canonicalUrl("/"),
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section id="product" className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Smart Vocabulary app</h1>
              <p className={`${styles.heroText} ${styles.heroTextDesktop}`}>
                Vraur is an innovative AI-based way to learn English through active practice in context — an approach research suggests can help you remember vocabulary more effectively.
              </p>
              <p className={`${styles.heroText} ${styles.heroTextMobile}`}>
                Vraur is an innovative AI-based way to learn English through active practice in context — an approach research suggests can help you remember vocabulary more effectively.
              </p>
              <a
                className={styles.heroStoreButton}
                href="https://apps.apple.com/cz/app/vraur/id6758308623"
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/images/appstore.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className={styles.heroStoreBadge}
                />
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <Image
              src="/images/hero-hand-iphone_v3.webp"
              alt="Vraur app shown on iPhone"
              width={800}
              height={800}
              className={styles.heroImage}
              priority
            />
          </div> 
        </section>

        <section
          id="features"
          className={`${styles.section} ${styles.featureOne} ${styles.practiceSection}`}
        >
          <div className={styles.practiceInner}>
            <div className={styles.practiceRight}>
              <div className={styles.practiceContent}>
                <h2 className={styles.practiceTitle}>Learn to express yourself naturally in English</h2>
                <p className={styles.practiceText}>
                  Vraur uses AI to generate sentences in your language that push
                  you to express the idea in a way that sounds natural in English.
                  You learn how vocabulary is truly used in context, not just what
                  it means.
                </p>
              </div>
            </div>

            <div className={styles.practiceLeft}>
              <Image
                src="/images/practice_image.webp"
                alt="Practice feature illustration"
                width={620}
                height={440}
                className={styles.practiceImage}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.featureTwo} ${styles.beginnerSection}`}>
          <div className={styles.beginnerInner}>
            <div className={styles.beginnerLeft}>
              <div className={styles.beginnerContent}>
                <h2 className={styles.beginnerTitle}>
                  Build vocabulary that matters to you
                </h2>
                <p className={styles.beginnerText}>
                  Unlike apps that push fixed vocabulary lists, Vraur lets you choose what you want to learn. Hear a useful phrase in a movie, conversation, or real-life situation? Add it instantly and practice the language that actually feels relevant to you.
                </p>
              </div>
            </div>

            <div className={styles.beginnerRight}>
              <Image
                src="/images/not_for_beginners.webp"
                alt="Intermediate learners illustration"
                width={433}
                height={350}
                className={styles.beginnerImage}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sortSection}`}>
          <div className={styles.sortInner}>
            <div className={styles.sortRight}>
              <div className={styles.sortContent}>
                <h2 className={styles.sortTitle}>
                  Keep learned words active
                </h2>
                <p className={styles.sortText}>
                  See when you added a word or phrase and when you last practiced
                  it, so older vocabulary does not quietly fade away. Vraur helps
                  you keep track of what needs a refresh before you forget it.
                </p>
              </div>
            </div>

            <div className={styles.sortLeft}>
              <Image
                src="/images/sort-words.webp"
                alt="Sort words exercise illustration"
                width={269}
                height={557}
                className={styles.sortImage}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.beginnerSection}`}>
          <div className={styles.beginnerInner}>
            <div className={styles.beginnerLeft}>
              <div className={styles.beginnerContent}>
                <h2 className={styles.beginnerTitle}>
                  Strengthen your grammar
                </h2>
                <p className={styles.beginnerText}>
                  Receive instant feedback on both the grammar and the wording of
                  your translation. Vraur helps you see not only whether your
                  sentence is correct, but also whether it sounds natural in
                  English.
                </p>
              </div>
            </div>

            <div className={styles.beginnerRight}>
              <Image
                src="/images/instant-feedback.webp"
                alt="Instant feedback feature illustration"
                width={433}
                height={350}
                className={styles.beginnerImage}
              />
            </div>
          </div>
        </section>

        <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
          <h2 className={styles.faqHeading}>FAQ</h2>

          <div className={styles.faqAccordion}>
            <details className={styles.faqAccordionItem} id="faq-research-sources">
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  What sources support the idea that this learning approach is
                  more effective?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Vraur is informed by language-learning research suggesting that
                  vocabulary and language forms can be learned more effectively
                  when they are encountered in meaningful context, revisited in
                  connected text, and practiced through active output such as
                  translation. Examples include:
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>
                        Meaningful context can support learning new word meanings
                      </strong>
                    </p>
                    <p>
                      Elgort, I., Perfetti, C. A., Rickles, B., &amp; Stafura, J.
                      Z. (2015). Contextual learning of L2 word meanings: Second
                      language proficiency modulates behavioural and ERP indicators
                      of learning. Language, Cognition and Neuroscience, 30(5),
                      506-528.{" "}
                      <a
                        href="https://doi.org/10.1080/23273798.2014.942673"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://doi.org/10.1080/23273798.2014.942673
                      </a>
                    </p>
                    <p>
                      This study found that learners showed evidence of learning
                      unfamiliar word meanings through reading in context.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Words revisited in meaningful text can be remembered
                        better
                      </strong>
                    </p>
                    <p>
                      van den Broek, G. S. E., Wesseling, E., Huijssen, L.,
                      Lettink, M., &amp; van Gog, T. (2022). Vocabulary Learning
                      During Reading: Benefits of Contextual Inferences Versus
                      Retrieval Opportunities. Cognitive Science, 46(4), e13135.{" "}
                      <a
                        href="https://doi.org/10.1111/cogs.13135"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://doi.org/10.1111/cogs.13135
                      </a>
                    </p>
                    <p>
                      This study found that reading words again in meaningful
                      context improved retention, and in one experiment rich
                      context outperformed retrieval-focused exposure.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Active translation can support noticing and learning of
                        language forms
                      </strong>
                    </p>
                    <p>
                      Song, Z. (2010). An empirical study of the role of output in
                      promoting the acquisition of linguistic forms. English
                      Language Teaching, 3(4), 109-114.
                    </p>
                    <p>
                      This study found that translation-based output helped
                      learners notice and acquire target lexical phrases more
                      actively.
                    </p>
                  </li>
                </ul>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>Is there a free version?</span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Yes. New users currently get 30 free practice attempts every
                  month, so you can try Vraur and see if it works for you before
                  subscribing.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Are there ads in the app?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  No. There is no advertising in Vraur, so you can stay focused
                  on learning without distractions.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Does the app work offline?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  No. Vraur depends on online services such as translation tools
                  and language models, so an internet connection is required.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Can I cancel my subscription anytime?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Yes. You can manage or cancel your subscription at any time
                  through your App Store or Google Play account settings.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Is Vraur available on Android?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Not yet. Vraur is currently available on iOS only, but Android
                  support is planned for the future.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Which languages are supported?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>The app interface is currently available in English only.</p>
                <p>
                  At the moment, Vraur can generate translation exercises into
                  English from the following languages:
                </p>
                <p>
                  Spanish, French, German, Italian, Portuguese (Brazil),
                  Portuguese (Portugal), Dutch, Swedish, Danish, Norwegian,
                  Polish, Czech, Russian, Ukrainian, Turkish, Romanian, Greek,
                  Arabic (MSA), Indonesian, Vietnamese, Chinese (Simplified),
                  Chinese (Traditional), Japanese, and Korean.
                </p>
                <p>
                  Supported languages may change over time as Vraur continues to
                  improve and expand.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Who is Vraur best for?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Vraur is designed for learners who want to build vocabulary,
                  improve grammar, and sound more natural in English - especially
                  if simple vocabulary apps no longer feel enough.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  How can I get help, report a bug, or share feedback?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  You can contact us using the support email listed on this site.
                  We welcome bug reports, feedback, and suggestions.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  How do practice attempts work?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Your monthly number of practice attempts depends on your plan:
                  30 / 120 / 300 attempts per month.
                </p>
                <p>
                  The free tier includes 30 attempts per month. Extra attempts
                  cannot be purchased on this plan.
                </p>
                <p>
                  Paid plans allow you to buy extra packs of 30 exercises once
                  your monthly attempts are used up.
                </p>
                <p>Extra packs cost less on Premium than on Light.</p>
                <p>Extra attempts never expire.</p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  Why does my subscription only work with one Apple ID?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Your learning progress and attempts are linked to your Vraur
                  account, so they stay available when you sign in on another
                  device. However, subscriptions purchased through Apple only
                  remain active on devices connected to the same Apple ID used for
                  the original purchase. This is an Apple platform limitation.
                </p>
              </div>
            </details>

            <details className={styles.faqAccordionItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionLabel}>
                  How are my saved words stored?
                </span>
                <span className={styles.faqChevron} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>
                  Your saved words, phrases, and learning progress are backed up
                  to the cloud once per login session. This helps keep your data
                  available if you switch devices or reinstall the app.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section id="download" className={`${styles.section} ${styles.downloadSection}`}>
          <div className={styles.downloadInner}>
            <h2 className={styles.downloadHeading}>Download the app today</h2>
            <a
              className={styles.downloadStoreButton}
              href="https://apps.apple.com/cz/app/vraur/id6758308623"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the App Store"
            >
              <Image
                src="/images/appstore.svg"
                alt="Download on the App Store"
                width={190}
                height={63}
                className={styles.downloadStoreBadge}
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
