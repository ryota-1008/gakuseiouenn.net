import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-20">
      <div className="max-w-3xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-bold text-neutral-900 text-sm mb-1.5">大学生のAI活用ラボ</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              大学生がAIをうまく使いこなすための実践情報をわかりやすく発信しています。
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3">コンテンツ</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles" className="text-neutral-500 hover:text-neutral-900 transition-colors">記事一覧</Link></li>
              <li><Link href="/categories" className="text-neutral-500 hover:text-neutral-900 transition-colors">カテゴリ</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3">サイト情報</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-neutral-500 hover:text-neutral-900 transition-colors">運営者情報</Link></li>
              <li><Link href="/contact" className="text-neutral-500 hover:text-neutral-900 transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="text-neutral-500 hover:text-neutral-900 transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 text-xs text-neutral-400 text-center">
          &copy; {new Date().getFullYear()} 大学生AI活用ラボ
        </div>
      </div>
    </footer>
  );
}
