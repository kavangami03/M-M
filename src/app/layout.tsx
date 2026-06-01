import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monitor & Manage | AI-Powered Security Operations",
  description: "Guard Monitor & Manage (M&M App) is a real-time mobile-based guard patrolling and workforce management platform built for modern security operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}





