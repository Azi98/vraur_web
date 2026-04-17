export const siteUrl = "https://www.vraur.com";

export const siteName = "Vraur";

export const siteDescription =
  "Vraur helps English learners build vocabulary through active AI-generated practice in context.";

export function canonicalUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
