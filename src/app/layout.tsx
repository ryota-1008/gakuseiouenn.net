import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://gakuseiouenn.net";
const siteName = "大学生AI活用ラボ";
const description =
  "大学生がChatGPTやAIツールを勉強・レポート・就活に安全に活用するための実践ブログ。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ChatGPTとAIツールを大学生活に活かす`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "大学生",
    "AI活用",
    "ChatGPT",
    "レポート",
    "就活",
    "AIツール",
    "プロンプト",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: `${siteName} | ChatGPTとAIツールを大学生活に活かす`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
