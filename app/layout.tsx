import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavel Lipin - Automation Engineer & AI Integration Specialist",
  description: "I help businesses save 40-60% on operational costs through AI-powered automation. Building production-grade systems with 99.7% uptime for logistics, tourism, and service industries. n8n, Make, Claude AI expert.",
  keywords: ["automation engineer", "AI integration", "n8n expert", "Make automation", "workflow automation", "chatbot development", "business process automation", "Claude AI", "European market"],
  authors: [{ name: "Pavel Lipin" }],
  openGraph: {
    title: "Pavel Lipin - Automation Engineer & AI Integration Specialist",
    description: "Save 40-60% on operational costs through AI-powered automation. 99.7% uptime. 30+ completed projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
