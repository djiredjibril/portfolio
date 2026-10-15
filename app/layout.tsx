import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { profile, seo } from "@/data/content";
import "./globals.scss";

const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font" });

// Set NEXT_PUBLIC_SITE_URL on Vercel (e.g. https://your-name.vercel.app) so
// Open Graph/Twitter URLs resolve to the deployed domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.variable} suppressHydrationWarning>{children}</body>
    </html>
  );
}
