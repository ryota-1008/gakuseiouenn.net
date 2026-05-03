import Link from "next/link";

function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
      <path d="M18 5L10 17h7l-3 10 12-14h-7l3-8z" fill="white" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-700 to-blue-900 text-blue-100 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <LogoIcon />
              <div className="leading-none">
                <span className="text-xs text-blue-300 block mb-0.5">大学生の</span>
                <span className="font-black text-white text-base">AI<span className="font-bold text-blue-200">活用ラボ</span></span>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              大学生がAIをうまく使いこなすための実践情報をわかりやすく発信しています 🎓
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm tracking-wide">コンテンツ</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/articles" className="hover:text-white transition-colors">記事一覧</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">カテゴリ</Link></li>
              <li><Link href="/categories/chatgpt" className="hover:text-white transition-colors">ChatGPT活用</Link></li>
              <li><Link href="/categories/study" className="hover:text-white transition-colors">AI×学習</Link></li>
              <li><Link href="/categories/career" className="hover:text-white transition-colors">AI×就活</Link></li>
            </ul>
          </div>

          {/* Site info */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm tracking-wide">サイト情報</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
            </ul>
            <div className="mt-4 p-3 bg-white/10 rounded-md text-xs text-blue-200 leading-relaxed border-l-2 border-blue-400">
              💡 AIツールは急速に進化中！<br />情報は随時アップデートします
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 pt-6 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} 大学生AI活用ラボ · すべての記事は無料でお読みいただけます</p>
        </div>
      </div>
    </footer>
  );
}
