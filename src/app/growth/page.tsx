import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SNS・収益化計画",
  description:
    "大学生AI活用ラボをSNS運用と広告収益につなげるためのロードマップ、投稿設計、AdSense申請前チェックリスト。",
};

const weeklyPlan = [
  ["月", "検索向け記事を1本公開", "大学生の悩み系キーワードを狙う"],
  ["火", "Xで要点を5投稿に分解", "記事への初速流入を作る"],
  ["水", "Instagramカルーセル化", "手順・比較表・注意点を保存される形にする"],
  ["木", "Shorts/TikTok台本化", "1テーマ1分で認知を広げる"],
  ["金", "関連記事を内部リンクで整理", "回遊と滞在時間を伸ばす"],
  ["土", "Search ConsoleとSNS反応を確認", "次の記事テーマを決める"],
  ["日", "古い記事を更新", "料金・仕様・リンク切れを確認する"],
];

export default function GrowthPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="max-w-2xl mb-10">
        <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-[0.16em] mb-3">
          Growth roadmap
        </p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">
          SNSと検索を組み合わせて、広告収益を目指す運用計画
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          まずは読者に役立つ独自記事を積み上げ、SNSで再編集して届ける流れを作ります。
          広告はサイトの信頼性、記事数、回遊導線が整ってから申請する方針です。
        </p>
      </div>

      <div className="grid gap-10">
        <section className="border-t border-neutral-200 pt-6">
          <h2 className="text-base font-bold text-neutral-900 mb-4">最初の90日目標</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ["記事", "30本", "検索流入の入口を作る"],
              ["SNS", "週20投稿", "記事を短く再編集して届ける"],
              ["改善", "週1回", "反応を見てタイトル・内部リンクを更新"],
            ].map(([label, value, desc]) => (
              <div key={label} className="border border-neutral-200 p-4">
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">{label}</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">{value}</p>
                <p className="text-xs text-neutral-500 leading-relaxed mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-6">
          <h2 className="text-base font-bold text-neutral-900 mb-4">週間運用</h2>
          <div className="divide-y divide-neutral-100 border border-neutral-200">
            {weeklyPlan.map(([day, task, point]) => (
              <div key={day} className="grid sm:grid-cols-[56px_1fr_1.2fr] gap-2 px-4 py-3 text-sm">
                <p className="font-semibold text-neutral-900">{day}</p>
                <p className="text-neutral-700">{task}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-6">
          <h2 className="text-base font-bold text-neutral-900 mb-4">SNSへの展開テンプレート</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "X",
                body: "記事の結論、失敗例、チェックリスト、プロンプト例、本文リンクの5投稿に分ける。",
              },
              {
                title: "Instagram",
                body: "表紙、悩み、手順、比較表、注意点、保存促進の6枚構成にする。",
              },
              {
                title: "TikTok / Shorts",
                body: "1動画1テーマ。最初の3秒で悩みを言い、最後に記事名で検索導線を作る。",
              },
              {
                title: "note",
                body: "体験談や長めの考察を置き、検索記事とは違う人格と背景を見せる。",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-neutral-200 p-4">
                <p className="font-semibold text-neutral-900 mb-1">{title}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-6">
          <h2 className="text-base font-bold text-neutral-900 mb-4">広告申請前チェック</h2>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>□ 独自性のある記事が20から30本ある</li>
            <li>□ 運営者情報・お問い合わせ・プライバシーポリシーがある</li>
            <li>□ コピー記事やAI丸投げ記事に見えない体験・判断が入っている</li>
            <li>□ ナビゲーションが明確で、行き止まりページが少ない</li>
            <li>□ 広告より本文が主役になる配置にする</li>
            <li>□ 料金・規約・ツール仕様の記事は定期更新する</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
