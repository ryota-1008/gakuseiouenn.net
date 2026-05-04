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
  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const articles = getArticlesByCategory(slug);

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <nav className="text-xs text-neutral-400 mb-8 flex items-center gap-1.5">
        <Link href="/" className="hover:text-neutral-900 transition-colors">ホーム</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-neutral-900 transition-colors">カテゴリ</Link>
        <span>/</span>
        <span className="text-neutral-600 font-medium">{category.name}</span>
      </nav>

      <div className="mb-8">
        <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 mb-3 ${category.color}`}>
          {category.name}
        </span>
        <h1 className="text-xl font-bold text-neutral-900 mb-1">
          {category.name}の記事
        </h1>
        <p className="text-sm text-neutral-500">
          {category.description} &middot; {articles.length}件
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="divide-y divide-neutral-100">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-sm text-neutral-500 mb-1">
            このカテゴリの記事はまだありません
          </p>
          <p className="text-xs text-neutral-400">
            リクエストはお問い合わせからどうぞ
          </p>
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-neutral-200">
        <Link href="/categories" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors font-medium">
          ← カテゴリ一覧に戻る
        </Link>
      </div>
    </div>
  );
}
