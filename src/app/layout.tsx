import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://gakuseiouenn.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "大学生AI活用ラボ | ChatGPT・AI×学習・就活を徹底解説",
    template: "%s | 大学生AI活用ラボ",
  },
  description:
    "大学生がAIを正しく・賢く活用するための実践的な情報を発信。ChatGPT活用術、AI×勉強法、AI×就活対策、おすすめAIツールレビューなど、今すぐ使える情報が満載。",
  keywords: ["大学生", "AI", "ChatGPT", "Claude", "勉強", "就活", "レポート", "AI活用"],
  authors: [{ name: "大学生AI活用ラボ編集部" }],
  creator: "大学生AI活用ラボ",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "大学生AI活用ラボ",
    title: "大学生AI活用ラボ | ChatGPT・AI×学習・就活を徹底解説",
    description:
      "大学生がAIを正しく・賢く活用するための実践的な情報を発信。ChatGPT活用術、AI×勉強法、AI×就活対策など。",
  },
  twitter: {
    card: "summary_large_image",
    title: "大学生AI活用ラボ",
    description: "大学生がAIを正しく・賢く活用するための実践情報メディア",
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
      <body className="min-h-full flex flex-col bg-[#f0f7ff]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
