import Link from "next/link";
import { getFeaturedArticles, getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";

const categoryEmoji: Record<string, string> = {
  chatgpt: "🤖",
  study: "📚",
  career: "💼",
  tools: "🛠️",
  programming: "💻",
};

export default function Home() {
  const featured = getFeaturedArticles();
  const latest = getAllArticles().slice(0, 5);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-600 to-blue-500 text-white pt-12 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-none -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 mb-5 border border-white/20">
            🎓 大学生のためのAI活用メディア
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5 tracking-tight">
            AIを使いこなして<br />
            <span className="text-yellow-300">ライバルに差をつけよう！</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            ChatGPT・Claude・Gemini を勉強・レポート・就活に活かす<br className="hidden sm:block" />
            実践テクニックをわかりやすく解説します 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/articles"
              className="bg-white text-blue-700 font-black px-7 py-3.5 hover:bg-blue-50 transition-colors text-sm shadow-md"
            >
              📝 記事を読む
            </Link>
            <Link
              href="/categories"
              className="bg-blue-500/40 border border-white/30 text-white font-bold px-7 py-3.5 hover:bg-blue-500/60 transition-colors text-sm"
            >
              🏷️ カテゴリから探す
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-white border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-4 grid grid-cols-3 divide-x divide-blue-100 text-center">
          {[
            { value: "8+",  label: "公開記事数" },
            { value: "5",   label: "カテゴリ"  },
            { value: "無料", label: "全記事無料" },
          ].map((s) => (
            <div key={s.label} className="px-2">
              <p className="font-black text-blue-700 text-xl">{s.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-14">

        {/* ── Featured ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
              ⭐ 注目の記事
            </h2>
            <Link href="/articles" className="text-xs font-bold text-blue-600 hover:underline">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        {/* ── Categories ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
              🏷️ カテゴリから探す
            </h2>
            <Link href="/categories" className="text-xs font-bold text-blue-600 hover:underline">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="bg-white rounded-md border border-blue-100 p-4 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="text-2xl mb-2">{categoryEmoji[cat.slug] ?? "📄"}</div>
                <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-sm mb-2 ${cat.color}`}>
                  {cat.name}
                </span>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Latest ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
              🆕 最新記事
            </h2>
            <Link href="/articles" className="text-xs font-bold text-blue-600 hover:underline">
              すべて見る →
            </Link>
          </div>
          <div className="space-y-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/articles"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 text-sm transition-colors shadow-sm rounded-md"
            >
              もっと記事を読む →
            </Link>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 p-7 text-white text-center border-l-4 border-yellow-300">
          <p className="text-xl font-black mb-2">💬 記事のリクエストはこちら！</p>
          <p className="text-blue-100 text-sm mb-5 leading-relaxed">
            「こんな記事が読みたい！」というテーマがあればお気軽にどうぞ。<br className="hidden sm:block" />
            需要の高いテーマから順次執筆します✏️
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-black px-7 py-3 text-sm hover:bg-blue-50 transition-colors shadow-sm"
          >
            ✉️ お問い合わせする
          </Link>
        </section>

      </div>
    </>
  );
}
