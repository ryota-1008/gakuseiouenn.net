import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "大学生AI活用ラボの運営者情報ページ。サイトのコンセプト・運営者プロフィール・発信の方針についてご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">

        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-800 mb-1">👤 運営者情報</h1>
          <p className="text-gray-500 text-sm">このサイトについて・運営者について</p>
        </div>

        {/* Profile card */}
        <div className="bg-white rounded-md border border-blue-100 p-6 mb-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center text-3xl flex-shrink-0">
              🎓
            </div>
            <div>
              <p className="font-black text-gray-800 text-lg">Na(りた</p>
              <p className="text-sm text-blue-600 font-semibold">大学生 · AI活用研究中</p>
              <p className="text-xs text-gray-400 mt-0.5">経済学部 / 都内の大学に在学中</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            はじめまして！大学生AI活用ラボを運営しているNa(りたです。
            普段はゼミ・バイト・就活を並行しながら、AIツールを使った効率化を日々研究しています。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            「AIって難しそう…」という友人が多い中で、自分が実際に試して役立ったことを
            わかりやすくまとめたくてこのサイトを始めました。
            難しい技術の話よりも、<strong>明日から使えるリアルな活用法</strong>を届けることを大切にしています。
          </p>
        </div>

        {/* Why I started */}
        <div className="bg-white rounded-md border border-blue-100 p-6 mb-5">
          <h2 className="text-base font-black text-gray-800 mb-4 flex items-center gap-2">
            💡 このサイトを始めたきっかけ
          </h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
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
        </div>

        {/* What this site covers */}
        <div className="bg-white rounded-md border border-blue-100 p-6 mb-5">
          <h2 className="text-base font-black text-gray-800 mb-4 flex items-center gap-2">
            📋 サイトのコンセプト
          </h2>
          <ul className="space-y-3">
            {[
              { icon: "✅", title: "実際に使って確かめたことだけ書く", desc: "自分で試していない情報は載せません。すべて実際に使った体験をもとにしています。" },
              { icon: "✅", title: "大学生の目線で書く", desc: "社会人向けの小難しい解説ではなく、学生の日常（授業・レポート・就活・バイト）に即した内容を発信します。" },
              { icon: "✅", title: "AIの「正しい使い方」を伝える", desc: "コピペやズルを勧めるのではなく、AIを活用しながら自分のスキルも伸ばせる使い方を大切にしています。" },
              { icon: "✅", title: "情報は随時アップデートする", desc: "AIツールは数ヶ月で大きく変わります。古くなった情報は随時修正・追記します。" },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="text-blue-500 font-black flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Coverage */}
        <div className="bg-white rounded-md border border-blue-100 p-6 mb-5">
          <h2 className="text-base font-black text-gray-800 mb-4 flex items-center gap-2">
            🏷️ 扱っているテーマ
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { emoji: "🤖", label: "ChatGPT活用", desc: "レポート・就活・日常利用" },
              { emoji: "📚", label: "AI×学習",     desc: "暗記・試験対策・論文読解" },
              { emoji: "💼", label: "AI×就活",     desc: "ES・面接・企業研究" },
              { emoji: "🛠️", label: "AIツール紹介", desc: "無料ツールを中心にレビュー" },
              { emoji: "💻", label: "AI×プログラミング", desc: "Copilot・Claude Codeなど" },
            ].map(({ emoji, label, desc }) => (
              <div key={label} className="bg-blue-50 rounded-md p-3 border border-blue-100">
                <p className="text-lg mb-1">{emoji}</p>
                <p className="font-bold text-sm text-gray-800">{label}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-md p-6 text-white text-center border-l-4 border-yellow-300">
          <p className="font-black text-lg mb-1">✉️ 気軽に話しかけてください！</p>
          <p className="text-blue-100 text-sm leading-relaxed mb-4">
            記事のリクエスト・内容へのツッコミ・「こんな使い方してるよ」などなど、
            お気軽にどうぞ。全部読んでます 😊
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-black px-6 py-2.5 text-sm hover:bg-blue-50 transition-colors shadow-sm rounded-md"
          >
            お問い合わせフォームへ
          </Link>
        </div>

      </div>
    </div>
  );
}
