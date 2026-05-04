import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "大学生AI活用ラボを運営する理工学部の大学生の発信方針、AIツールの使い方、記事作成時の確認ルールを紹介します。",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-neutral-900 mb-1">運営者情報</h1>
          <p className="text-sm text-neutral-500">このサイトと発信方針について</p>
        </div>

        <section className="mb-10 pb-10 border-b border-neutral-200">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
              AI
            </div>
            <div>
              <p className="font-bold text-neutral-900">理工学部の大学生 / 大学生AI活用ラボ</p>
              <p className="text-sm text-neutral-500">実体験ベースの学生向けAI活用ブログ</p>
              <p className="text-xs text-neutral-400 mt-0.5">
                レポート・就活・発表・開発インターンを中心に発信
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-neutral-600 leading-[1.85]">
            <p>
              大学生AI活用ラボは、AIツールを大学生活に取り入れたい学生向けの実践ブログです。
              運営者自身も、ChatGPT無料版、Claude、Canva、Claude Codeなどを課題や就活準備、開発インターンの中で使っています。
            </p>
            <p>
              AIは便利ですが、レポートや就活で使う場合は、引用確認、大学のルール、情報の新しさへの配慮が欠かせません。
              このサイトでは、ただAIに丸投げするのではなく、読者自身の経験や考えを生かしながら時間効率を上げる使い方を扱います。
            </p>
            <p>
              まだ試行錯誤中の部分もありますが、その分「大学生が実際に使うとどこで便利で、どこから危ないのか」を正直に書いていきます。
            </p>
          </div>
        </section>

        <section className="mb-10 pb-10 border-b border-neutral-200">
          <h2 className="text-base font-bold text-neutral-900 mb-5">編集方針</h2>
          <ul className="space-y-4">
            {[
              {
                title: "学生の実用性を優先する",
                desc: "授業、課題、就活、発表、インターンなど、大学生活の具体的な場面に結びつけて解説します。",
              },
              {
                title: "AIの出力を鵜呑みにしない",
                desc: "料金、規約、統計、引用元などは公式情報や一次資料で確認する前提で記事を作ります。",
              },
              {
                title: "過度な収益導線にしない",
                desc: "広告やアフィリエイトを設置する場合も、本文の読みやすさと読者の判断を優先します。",
              },
            ].map(({ title, desc }) => (
              <li key={title}>
                <p className="font-semibold text-sm text-neutral-900 mb-0.5">{title}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center py-4">
          <p className="text-sm text-neutral-500 mb-4">
            記事リクエスト、誤情報の報告、掲載相談はお問い合わせからお送りください。
          </p>
          <Link href="/contact" className="inline-block bg-neutral-900 hover:bg-neutral-700 text-white font-semibold px-6 py-2.5 text-sm transition-colors">
            お問い合わせ
          </Link>
        </section>
      </div>
    </div>
  );
}
