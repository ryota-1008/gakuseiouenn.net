import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "大学生AI活用ラボのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-neutral-900 mb-8">
          プライバシーポリシー
        </h1>

        <div className="prose-article space-y-6 text-sm text-neutral-600 leading-relaxed">
          <section>
            <h2>個人情報の取り扱い</h2>
            <p>
              大学生AI活用ラボ（以下「当サイト」）では、お問い合わせフォームを通じて提供された氏名、メールアドレス、問い合わせ内容を、
              回答および必要な連絡のために利用します。法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
            </p>
          </section>

          <section>
            <h2>アクセス解析について</h2>
            <p>
              当サイトでは、サイト改善のためにアクセス解析ツールを利用する場合があります。
              これらのツールはCookieを利用して匿名のトラフィックデータを収集することがありますが、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2>広告配信について</h2>
            <p>
              当サイトでは、第三者配信の広告サービスやアフィリエイトプログラムを利用する場合があります。
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためCookieを使用することがあります。
              Cookieはブラウザ設定により無効にできます。
            </p>
          </section>

          <section>
            <h2>免責事項</h2>
            <p>
              当サイトの情報は公開時点で確認した内容をもとにしていますが、AIツールの仕様、料金、規約は変更される場合があります。
              最新情報は各公式サイトで確認してください。当サイトの情報を利用したことによる損害について、当サイトは責任を負いかねます。
            </p>
          </section>

          <section>
            <h2>著作権について</h2>
            <p>
              当サイトに掲載している文章、画像、構成などの著作権は当サイトに帰属します。
              引用する場合は、引用元を明記し、著作権法上認められた範囲で利用してください。
            </p>
          </section>

          <p className="text-xs text-neutral-400 pt-4">
            最終更新日: 2026年5月4日
          </p>
        </div>
      </div>
    </div>
  );
}
