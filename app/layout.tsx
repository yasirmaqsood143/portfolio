import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yasir Maqsood | Go High Level Expert, Funnel Builder & Web Developer",
  description: "Results-driven developer with 5+ years of experience building 400+ high-converting funnels and websites across GoHighLevel, WordPress, ClickFunnels, and Simvoly.",
  openGraph: {
    title: "Yasir Maqsood | Go High Level Expert, Funnel Builder & Web Developer",
    description: "Results-driven developer with 5+ years of experience building 400+ high-converting funnels and websites across GoHighLevel, WordPress, ClickFunnels, and Simvoly.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Yasir Maqsood",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#0a1628] text-[#e2e8f0]`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
