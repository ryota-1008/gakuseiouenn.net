import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "大学生AI活用ラボの運営者情報ページ。サイトのコンセプト・運営者プロフィール・発信の方針についてご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-neutral-900 mb-1">
            運営者情報
          </h1>
          <p className="text-sm text-neutral-400">
            このサイトと運営者について
          </p>
        </div>

        {/* Profile */}
        <section className="mb-10 pb-10 border-b border-neutral-200">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
              N
            </div>
            <div>
              <p className="font-bold text-neutral-900">Na(りた</p>
              <p className="text-sm text-neutral-500">
                大学生 &middot; AI活用研究中
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">
                経済学部 / 都内の大学に在学中
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-neutral-600 leading-[1.85]">
            <p>
              はじめまして！大学生AI活用ラボを運営しているNa(りたです。
              普段はゼミ・バイト・就活を並行しながら、AIツールを使った効率化を日々研究しています。
            </p>
            <p>
              「AIって難しそう…」という友人が多い中で、自分が実際に試して役立ったことを
              わかりやすくまとめたくてこのサイトを始めました。
              難しい技術の話よりも、
              <strong>明日から使えるリアルな活用法</strong>
              を届けることを大切にしています。
            </p>
          </div>
        </section>

        {/* Why I started */}
        <section className="mb-10 pb-10 border-b border-neutral-200">
          <h2 className="text-base font-bold text-neutral-900 mb-4">
            このサイトを始めたきっかけ
          </h2>
          <div className="space-y-3 text-sm text-neutral-600 leading-[1.85]">
            <p>
              大学2年の後期、レポートが毎週のように重なって完全に詰んでいた時期がありました。
              そのとき藁にもすがる思いでChatGPTを使い始めたのがきっかけです。
            </p>
            <p>
              最初はうまく使えなかったんですが、プロンプトの工夫を重ねていくうちに
              「これ、めちゃくちゃ便利じゃん」と気づいて。気づいたら毎日AIを使うようになっていました。
            </p>
            <p>
              同じゼミの友人に使い方を教えたら「なにそれ知らなかった！」という反応ばかり。
              ならブログにまとめれば同じ悩みを持つ大学生の役に立てるかも、と思い立ったのがこのサイトの始まりです。
            </p>
          </div>
        </section>

        {/* Concept */}
        <section className="mb-10 pb-10 border-b border-neutral-200">
          <h2 className="text-base font-bold text-neutral-900 mb-5">
            サイトのコンセプト
          </h2>
          <ul className="space-y-4">
            {[
              {
                title: "実際に使って確かめたことだけ書く",
                desc: "自分で試していない情報は載せません。すべて実際に使った体験をもとにしています。",
              },
              {
                title: "大学生の目線で書く",
                desc: "社会人向けの小難しい解説ではなく、学生の日常（授業・レポート・就活・バイト）に即した内容を発信します。",
              },
              {
                title: "AIの正しい使い方を伝える",
                desc: "コピペやズルを勧めるのではなく、AIを活用しながら自分のスキルも伸ばせる使い方を大切にしています。",
              },
              {
                title: "情報は随時アップデートする",
                desc: "AIツールは数ヶ月で大きく変わります。古くなった情報は随時修正・追記します。",
              },
            ].map(({ title, desc }) => (
              <li key={title}>
                <p className="font-semibold text-sm text-neutral-900 mb-0.5">
                  {title}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-4">
          <p className="text-sm text-neutral-500 mb-4">
            記事のリクエスト・内容へのフィードバックなど、お気軽にどうぞ。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-neutral-900 hover:bg-neutral-700 text-white font-semibold px-6 py-2.5 text-sm transition-colors"
          >
            お問い合わせ
          </Link>
        </section>
      </div>
    </div>
  );
}
