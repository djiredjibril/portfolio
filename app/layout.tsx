import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font" });

export const metadata: Metadata = {
  title: "Djibril Djiré, Frontend Engineer",
  description: "Frontend engineer (React, Next.js, TypeScript, React Native). Portfolio and case studies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.variable} suppressHydrationWarning>{children}</body>
    </html>
  );
}
