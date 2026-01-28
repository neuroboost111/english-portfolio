import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Проектирую AI-powered воркфлоу на no-code платформах. Создаю мультиагентные системы для логистики, недвижимости и туристического бизнеса. n8n, Make, Claude AI.",
  keywords: ["automation", "AI", "n8n", "Make", "no-code", "workflow", "chatbot", "integration"],
  authors: [{ name: "Pavel Lipin" }],
  openGraph: {
    title: "Pavel Lipin - Automation Engineer & AI Integration Specialist",
    description: "AI-powered автоматизация бизнес-процессов",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
