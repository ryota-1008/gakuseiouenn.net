import Link from "next/link";
import { getFeaturedArticles, getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  const featured = getFeaturedArticles();
  const latest = getAllArticles().slice(0, 5);

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-[0.16em] mb-4">
            AI literacy for students
          </p>
          <h1 className="text-[2rem] sm:text-[2.9rem] font-bold leading-[1.18] text-neutral-900 mb-5 max-w-3xl">
            大学生のためのAI活用を、
            <br className="hidden sm:block" />
            実践ベースでわかりやすく。
          </h1>
          <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8">
            ChatGPT、Claude、Geminiなどを、レポート・就活・発表・開発インターンにどう使うか。
            便利さだけでなく、引用確認や大学のルールも含めて整理します。
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/articles"
              className="bg-neutral-900 hover:bg-neutral-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              記事を読む
            </Link>
            <Link
              href="/categories"
              className="text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
            >
              カテゴリから探す →
            </Link>
          </div>
          <div className="mt-8 max-w-2xl border-l-2 border-blue-600 pl-4">
            <p className="text-xs font-semibold text-neutral-900 mb-1">
              理工学部の大学生が、実際に使いながら書いています。
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              ChatGPT無料版、Claude課金、Canva、Claude Codeなどを、課題・就活準備・開発インターンの中で試した感覚も混ぜて整理しています。
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 py-14 space-y-16">
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em]">
              注目の記事
            </h2>
            <Link href="/articles" className="text-xs text-neutral-500 hover:text-neutral-900">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

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

        <section>
          <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-2">
            最新の記事
          </h2>
          <div className="divide-y divide-neutral-100">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-8 grid gap-6 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-1">
              記事は随時アップデートします
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xl">
              AIツールの仕様や料金は変わりやすいため、古くなった情報は確認しながら更新していきます。
              気づいた点があればお問い合わせからお知らせください。
            </p>
          </div>
          <Link
            href="/contact"
            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors sm:text-right"
          >
            お問い合わせ →
          </Link>
        </section>
      </div>
    </>
  );
}
