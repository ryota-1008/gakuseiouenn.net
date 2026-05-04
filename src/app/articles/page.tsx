import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "大学生向けAI活用記事の一覧。ChatGPT、AI学習、就活、AIツール、プログラミングの記事を掲載しています。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">記事一覧</h1>
        <p className="text-sm text-neutral-500">{articles.length}件の記事</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-neutral-200">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className={`text-[11px] font-semibold px-2.5 py-1 transition-opacity hover:opacity-75 ${cat.color}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="divide-y divide-neutral-100">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
