import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "大学生AI活用ラボへのお問い合わせページ。記事への質問、誤情報の報告、記事リクエストなどを受け付けています。",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-neutral-900 mb-1">お問い合わせ</h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            記事への質問、誤情報の報告、リクエスト、掲載相談などはこちらからお送りください。
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
                a: "AIツールは頻繁に更新されます。気づいた点があれば、該当URLとあわせて送ってください。",
              },
              {
                q: "こんな記事を書いてほしい",
                a: "歓迎です。知りたいテーマ、困っている場面、使っているツール名を添えてください。",
              },
              {
                q: "広告掲載やコラボの相談はできますか",
                a: "学生向けAI活用というテーマに合う内容であれば検討します。読者の利益を優先して判断します。",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="text-sm font-semibold text-neutral-700 cursor-pointer flex items-center justify-between py-1 list-none">
                  {q}
                  <span className="text-neutral-300 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
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
