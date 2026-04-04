import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Vraur",
  description: "Coming soon 🦖",
  keywords: [
    "english vocabulary",
    "vocabulary practice app",
    "remember english words",
    "English practice",
    "Vraur",
    "learn english in context"
  ],
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
