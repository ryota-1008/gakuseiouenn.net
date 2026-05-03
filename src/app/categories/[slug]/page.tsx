import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return { title: `${category.name}の記事一覧`, description: category.description };
}

const categoryEmoji: Record<string, string> = {
  chatgpt: "🤖", study: "📚", career: "💼", tools: "🛠️", programming: "💻",
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const articles = getArticlesByCategory(slug);
  const emoji = categoryEmoji[slug] ?? "📄";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-blue-500 transition-colors">ホーム</Link>
        <span>›</span>
        <Link href="/categories" className="hover:text-blue-500 transition-colors">カテゴリ</Link>
        <span>›</span>
        <span className="text-blue-600 font-semibold">{category.name}</span>
      </nav>

      <div className="bg-white rounded-md border border-blue-100 p-5 mb-6 flex items-center gap-4">
        <div className="w-14 h-14 bg-blue-50 rounded-md flex items-center justify-center text-3xl border border-blue-100 flex-shrink-0">
          {emoji}
        </div>
        <div>
          <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-sm mb-1.5 ${category.color}`}>
            {category.name}
          </span>
          <h1 className="text-xl font-black text-gray-800">{category.name}の記事一覧</h1>
          <p className="text-gray-500 text-xs mt-0.5">{category.description} · {articles.length}件</p>
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="space-y-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-md border border-blue-100">
          <p className="text-5xl mb-3">✍️</p>
          <p className="text-gray-600 font-semibold mb-1">このカテゴリの記事はまだありません</p>
          <p className="text-gray-400 text-sm">リクエストはお問い合わせから！</p>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/categories" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
          ← カテゴリ一覧に戻る
        </Link>
      </div>
    </div>
  );
}
