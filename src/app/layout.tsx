import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-englishhub",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnglishHub — школа английского языка",
  description:
    "Современные курсы английского: разговор, IELTS, Business, подготовка к экзаменам. Заявка в WhatsApp в один клик.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} min-h-dvh font-sans antialiased`}>{children}</body>
    </html>
  );
}
