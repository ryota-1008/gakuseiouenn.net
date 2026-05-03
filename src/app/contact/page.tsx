import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "大学生AI活用ラボへのお問い合わせページ。記事への質問、誤情報のご指摘、記事リクエストなどお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-neutral-900 mb-1">
            お問い合わせ
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            質問・リクエスト・誤情報のご指摘など、お気軽にどうぞ。
          </p>
        </div>

        <div className="mb-10">
          <ContactForm />
        </div>

        <div className="border-t border-neutral-200 pt-8">
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-5">
            よくある質問
          </p>
          <div className="space-y-4">
            {[
              {
                q: "記事の内容が古い・間違っている",
                a: "AIツールは頻繁にアップデートされます。お気づきの点があればすぐに確認・修正します。",
              },
              {
                q: "こんな記事を書いてほしい",
                a: "リクエスト大歓迎です。「記事リクエスト」を選んで送ってください。",
              },
              {
                q: "コラボ・取材のご相談",
                a: "大学・企業からのご相談も歓迎しています。「その他」からどうぞ。",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="text-sm font-semibold text-neutral-700 cursor-pointer flex items-center justify-between py-1 list-none">
                  {q}
                  <span className="text-neutral-300 group-open:rotate-180 transition-transform text-xs ml-2">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed pl-3 border-l-2 border-neutral-200">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
