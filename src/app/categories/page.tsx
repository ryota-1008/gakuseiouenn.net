import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description:
    "大学生AI活用ラボのカテゴリ一覧。ChatGPT活用・AI×学習・AI×就活・AIツール紹介・AI×プログラミングなどから記事を探せます。",
};

const categoryEmoji: Record<string, string> = {
  chatgpt: "🤖",
  study: "📚",
  career: "💼",
  tools: "🛠️",
  programming: "💻",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800 mb-1">🏷️ カテゴリ一覧</h1>
        <p className="text-gray-500 text-sm">興味あるテーマから記事を探してみよう！</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const arts = getArticlesByCategory(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="bg-white border border-blue-100 rounded-md p-5 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center text-2xl flex-shrink-0 border border-blue-100">
                  {categoryEmoji[cat.slug] ?? "📄"}
                </div>
                <div>
                  <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-sm mb-1 ${cat.color}`}>
                    {cat.name}
                  </span>
                  <p className="text-xs text-blue-400 font-semibold">{arts.length}件の記事</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{cat.description}</p>
              {arts.length > 0 && (
                <p className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors truncate">
                  最新：{arts[0].title}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
