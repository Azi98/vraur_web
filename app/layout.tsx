import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./seo";

const instrumentSans = Instrument_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "english vocabulary",
    "vocabulary practice app",
    "remember english words",
    "English practice",
    "Vraur",
    "learn english in context"
  ],
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
    url: siteUrl,
  },
  verification: {
    google: "I-SeCcRzzbqiMYnq6aqxFVClHGU3SSzef2RSS-bFkr0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
