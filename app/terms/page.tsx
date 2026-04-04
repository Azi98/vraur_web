import fs from "node:fs/promises";
import path from "node:path";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../components/marketing.module.css";

export const dynamic = "force-dynamic";

async function readTermsText(): Promise<string> {
  const termsPath = path.join(process.cwd(), "legal", "terms-of-use.txt");

  try {
    return await fs.readFile(termsPath, "utf8");
  } catch {
    return "Missing source file: legal/terms-of-use.txt";
  }
}

type TermsBlock =
  | { kind: "h1"; text: string }
  | { kind: "meta"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

function isSectionHeading(line: string): boolean {
  return /^\d+\.\s+/.test(line);
}

function isSubheading(line: string): boolean {
  return /^\d+\.\d+\s+/.test(line);
}

function isLikelyListItem(line: string): boolean {
  if (!line) return false;

  if (line.endsWith(";")) return true;
  if (/^[a-z]/.test(line)) return true;
  if (/^[A-Z][a-z]+$/.test(line)) return true;
  if (/^\d+/.test(line) && line.length < 80) return true;

  return false;
}

function parseTermsText(source: string): TermsBlock[] {
  const lines = source.split(/\r?\n/).map((line) => line.trim());
  const blocks: TermsBlock[] = [];
  let firstHeadingAdded = false;
  let expectList = false;
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      blocks.push({ kind: "ul", items: listBuffer });
      listBuffer = [];
    }
  };

  for (const line of lines) {
    if (!line) continue;

    if (!firstHeadingAdded) {
      flushList();
      blocks.push({ kind: "h1", text: line });
      firstHeadingAdded = true;
      expectList = false;
      continue;
    }

    if (/^Effective date:/i.test(line)) {
      flushList();
      blocks.push({ kind: "meta", text: line });
      expectList = false;
      continue;
    }

    if (isSubheading(line)) {
      flushList();
      blocks.push({ kind: "h3", text: line });
      expectList = false;
      continue;
    }

    if (isSectionHeading(line)) {
      flushList();
      blocks.push({ kind: "h2", text: line });
      expectList = false;
      continue;
    }

    if (expectList && isLikelyListItem(line)) {
      listBuffer.push(line);
      continue;
    }

    flushList();
    blocks.push({ kind: "p", text: line });
    expectList = line.endsWith(":");
  }

  flushList();
  return blocks;
}

function renderInline(text: string) {
  const chunks = text.split(/(support@vraur\.com)/gi);

  return chunks.map((chunk, index) => {
    if (/^support@vraur\.com$/i.test(chunk)) {
      return (
        <a key={`${chunk}-${index}`} href="mailto:support@vraur.com">
          {chunk}
        </a>
      );
    }

    return <span key={`${chunk}-${index}`}>{chunk}</span>;
  });
}

export default async function TermsPage() {
  const termsText = await readTermsText();
  const blocks = parseTermsText(termsText);

  return (
    <div className={styles.legalPage}>
      <Header />
      <main className={styles.legalMain}>
        <article className={`${styles.legalCard} ${styles.legalDoc}`}>
          {blocks.map((block, index) => {
            if (block.kind === "h1") {
              return <h1 key={`b-${index}`}>{renderInline(block.text)}</h1>;
            }

            if (block.kind === "meta") {
              return (
                <p key={`b-${index}`} className={styles.legalMeta}>
                  {renderInline(block.text)}
                </p>
              );
            }

            if (block.kind === "h2") {
              return <h2 key={`b-${index}`}>{renderInline(block.text)}</h2>;
            }

            if (block.kind === "h3") {
              return <h3 key={`b-${index}`}>{renderInline(block.text)}</h3>;
            }

            if (block.kind === "ul") {
              return (
                <ul key={`b-${index}`} className={styles.legalList}>
                  {block.items.map((item, itemIndex) => (
                    <li key={`i-${index}-${itemIndex}`}>{renderInline(item)}</li>
                  ))}
                </ul>
              );
            }

            return <p key={`b-${index}`}>{renderInline(block.text)}</p>;
          })}
        </article>
      </main>
      <Footer />
    </div>
  );
}
