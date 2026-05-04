import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description:
    "ChatGPT活用、レポート・学習、就活・ES対策、AIツール比較、開発・コードAIの記事カテゴリ一覧です。",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">カテゴリ</h1>
        <p className="text-sm text-neutral-500">
          レポート、就活、ツール比較など、今の目的に近いテーマから探せます。
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {categories.map((cat) => {
          const arts = getArticlesByCategory(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="rounded-[6px] border border-neutral-200 p-5 group hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 mb-2 ${cat.color}`}>
                    {cat.name}
                  </span>
                  <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-700 transition-colors">
                    {cat.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-semibold text-neutral-900">{arts.length}</span>
                  <span className="text-xs text-neutral-400 ml-0.5">件</span>
                </div>
              </div>
              {arts.length > 0 && (
                <p className="mt-4 pt-4 border-t border-neutral-100 text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">
                  最新: {arts[0].title}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
