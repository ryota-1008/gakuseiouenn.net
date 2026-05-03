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
      <section className="border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-bold leading-[1.2] tracking-tight text-neutral-900 mb-5">
            大学生のAI活用術が、
            <br />
            ここにある。
          </h1>
          <p className="text-neutral-500 text-[15px] sm:text-base leading-relaxed max-w-md mb-8">
            ChatGPT・Claude・Gemini を勉強・レポート・就活に活かす。
            実践テクニックを大学生の目線でわかりやすく解説します。
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/articles"
              className="bg-neutral-900 hover:bg-neutral-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              記事を読む
            </Link>
            <Link
              href="/categories"
              className="text-sm text-neutral-400 hover:text-neutral-900 font-medium transition-colors"
            >
              カテゴリから探す →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-16">
        {/* Featured */}
        <section>
          <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-6">
            注目の記事
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-5">
            カテゴリ
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className={`text-[11px] font-semibold px-3 py-1.5 border border-neutral-200 hover:border-neutral-400 transition-colors ${cat.color}`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Latest */}
        <section>
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em]">
              最新の記事
            </h2>
            <Link
              href="/articles"
              className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              すべて見る →
            </Link>
          </div>
          <div className="divide-y divide-neutral-100">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* About strip */}
        <section className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-1">
              大学生のAI活用ラボ
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              実際に試して役立ったAI活用法だけをまとめています。難しい技術の話より、明日から使えるリアルな情報を届けます。
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold text-neutral-400 hover:text-neutral-900 transition-colors flex-shrink-0"
          >
            運営者情報 →
          </Link>
        </section>
      </div>
    </>
  );
}
