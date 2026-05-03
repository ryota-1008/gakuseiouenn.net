import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "大学生AI活用ラボへのお問い合わせページ。記事への質問、誤情報のご指摘、記事リクエストなどお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-800 mb-1">✉️ お問い合わせ</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            質問・リクエスト・誤情報のご指摘など、なんでも気軽に送ってください！<br />
            通常3営業日以内にお返しします 🙌
          </p>
        </div>

        <div className="bg-white rounded-md border border-blue-100 shadow-sm p-5 sm:p-7 mb-6">
          <ContactForm />
        </div>

        <div className="bg-blue-50 rounded-md border border-blue-100 p-5 space-y-3">
          <p className="font-black text-blue-800 text-sm mb-4">💬 よくあるお問い合わせ</p>
          {[
            {
              q: "📌 記事の内容が古い・間違っている",
              a: "AIツールは頻繁にアップデートされます。お気づきの点があればすぐに確認・修正します！",
            },
            {
              q: "✏️ こんな記事を書いてほしい",
              a: "リクエスト大歓迎！「記事リクエスト」を選んで送ってください。需要の高いテーマから執筆します。",
            },
            {
              q: "🤝 コラボ・取材のご相談",
              a: "大学・企業からのご相談も歓迎しています。「その他」からお気軽にどうぞ！",
            },
          ].map(({ q, a }) => (
            <details key={q} className="cursor-pointer group">
              <summary className="font-bold text-sm text-blue-700 list-none flex items-center justify-between py-1">
                {q}
                <span className="text-blue-400 group-open:rotate-180 transition-transform text-xs">▼</span>
              </summary>
              <p className="mt-2 text-xs text-blue-600 leading-relaxed pl-2 border-l-2 border-blue-200">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
