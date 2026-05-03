import Link from "next/link";
import { getFeaturedArticles, getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  const featured = getFeaturedArticles();
  const latest = getAllArticles().slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            大学生 × AI活用メディア
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.15] tracking-tight mb-5">
            AIを、勉強と就活の<br />
            <span className="text-blue-400">武器にしよう。</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-md leading-relaxed mb-8">
            ChatGPT・Claude・Geminiを実際に使って試した活用テクニックを、大学生の目線でわかりやすく解説します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 text-sm transition-colors"
            >
              記事を読む
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              カテゴリから探す →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

        {/* Featured */}
        <section>
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">注目の記事</h2>
            <Link href="/articles" className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">カテゴリ</h2>
            <Link href="/categories" className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group bg-white border border-gray-200 p-4 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <span className={`inline-block text-xs font-bold px-2 py-0.5 mb-2 ${cat.color}`}>
                  {cat.name}
                </span>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest */}
        <section>
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">最新記事</h2>
            <Link href="/articles" className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              すべて見る →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/articles"
              className="inline-block border border-gray-300 hover:border-blue-600 hover:text-blue-700 text-gray-600 font-semibold px-8 py-3 text-sm transition-colors"
            >
              もっと記事を読む
            </Link>
          </div>
        </section>

        {/* About */}
        <section className="border border-gray-200 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">このサイトについて</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              大学生がAIツールを実際に使い、役立ったことだけをまとめた実践メディアです。むずかしい技術の話より、<strong>明日から使えるリアルな活用法</strong>を届けることを大切にしています。
            </p>
          </div>
          <Link
            href="/about"
            className="flex-shrink-0 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap"
          >
            運営者情報 →
          </Link>
        </section>

      </div>
    </>
  );
}
