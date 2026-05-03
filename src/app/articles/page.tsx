import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "大学生向けAI活用記事の一覧。ChatGPT活用術、AI×勉強法、就活対策、AIツールレビューなど実践的な記事を掲載しています。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800 mb-1">📝 記事一覧</h1>
        <p className="text-gray-500 text-sm">全 {articles.length} 件を掲載中</p>
      </div>

      {/* Category filter */}
      <div className="bg-white rounded-md border border-blue-100 p-4 mb-6">
        <p className="text-xs font-bold text-gray-500 mb-3">🏷️ カテゴリで絞り込む</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`text-xs font-bold px-2.5 py-1 rounded-sm transition-all hover:opacity-80 ${cat.color}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
