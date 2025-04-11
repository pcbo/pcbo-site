import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "pcbo - bulding in public",
    template: "%s | pcbo - bulding in public",
  },
  description: "pcbo - bulding in public",
  openGraph: {
    title: "bulding in public with pcbo",
    description: "born to build, one log entry at a time",
    url: baseUrl,
    siteName: "pcbo - bulding in public",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          GeistSans.variable,
          GeistMono.variable,
          "antialiased max-w-xl mx-4 mt-8 lg:mx-auto",
          "bg-[#111] text-gray-100"
        )}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <footer className="text-sm text-neutral-400">© 2025 – PCBO Inc.</footer>
      </body>
    </html>
  );
}
