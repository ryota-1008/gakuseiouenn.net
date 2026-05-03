import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "大学生AI活用ラボのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-neutral-900 mb-8">
          プライバシーポリシー
        </h1>

        <div className="prose-article space-y-6 text-sm text-neutral-600 leading-relaxed">
          <section>
            <h2>個人情報の取り扱いについて</h2>
            <p>
              大学生AI活用ラボ（以下「当サイト」）は、お問い合わせフォームを通じてご提供いただいた
              個人情報（お名前・メールアドレス等）を、お問い合わせへの返信目的のみに使用します。
              第三者への提供は行いません。
            </p>
          </section>

          <section>
            <h2>アクセス解析について</h2>
            <p>
              当サイトでは、サービス改善のためにGoogle Analytics等のアクセス解析ツールを
              使用する場合があります。このツールはCookieを利用して匿名のトラフィックデータを
              収集しますが、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2>Cookieの使用について</h2>
            <p>
              当サイトはCookieを使用することがあります。ブラウザの設定によりCookieを
              無効にすることができますが、一部のサービスが正常に動作しない場合があります。
            </p>
          </section>

          <section>
            <h2>著作権について</h2>
            <p>
              当サイトに掲載されているコンテンツ（文章・画像等）の著作権は当サイトに帰属します。
              無断転載・複製を禁止します。引用する場合は出典を明記してください。
            </p>
          </section>

          <section>
            <h2>免責事項</h2>
            <p>
              当サイトの情報は執筆時点のものであり、AIツールのアップデートにより
              内容が変わる場合があります。最新情報は各公式サイトでご確認ください。
              当サイトの情報を利用したことによる損害について、当サイトは責任を負いかねます。
            </p>
          </section>

          <p className="text-xs text-neutral-400 pt-4">
            最終更新：2025年4月15日
          </p>
        </div>
      </div>
    </div>
  );
}
