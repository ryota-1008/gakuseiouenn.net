import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getAllArticles, getArticlesByCategory, getArticlesBySlugs } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import CategoryBadge from "@/components/CategoryBadge";
import ArticleCard from "@/components/ArticleCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function renderMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/^\| (.+) \|$/gm, (_, row) => {
      const cells = row.split(" | ").map((c: string) => `<td>${c.trim()}</td>`).join("");
      return `<tr>${cells}</tr>`;
    })
    .replace(/(<tr>[\s\S]*?<\/tr>)/g, (match) => match.includes("---") ? "" : match)
    .replace(/(<tr>.*<\/tr>\s*)+/g, (match) => `<table>${match}</table>`)
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\s*)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    .split(/\n\n+/)
    .map((block) => {
      if (/^<(h[23]|ul|ol|pre|table)/.test(block)) return block;
      return `<p>${block.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = article.relatedSlugs
    ? getArticlesBySlugs(article.relatedSlugs)
    : getArticlesByCategory(article.category).filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-blue-500 transition-colors">ホーム</Link>
          <span>›</span>
          <Link href="/articles" className="hover:text-blue-500 transition-colors">記事一覧</Link>
          {category && (
            <>
              <span>›</span>
              <Link href={`/categories/${category.slug}`} className="hover:text-blue-500 transition-colors">
                {category.name}
              </Link>
            </>
          )}
        </nav>

        {/* Article header */}
        <header className="bg-white rounded-md border border-blue-100 p-5 sm:p-7 mb-4">
          <div className="mb-3">
            <CategoryBadge categorySlug={article.category} />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug mb-3">
            {article.title}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
          <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-blue-50">
            <time dateTime={article.publishedAt}>📅 {formatDate(article.publishedAt)}</time>
            <span>·</span>
            <span>⏱ {article.readTime}分で読める</span>
          </div>
        </header>

        {/* Article body */}
        <div className="bg-white rounded-md border border-blue-100 p-5 sm:p-7">
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
          />
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-50 text-blue-600 font-semibold px-2.5 py-1 border border-blue-100"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-2xl mx-auto mt-10">
          <h2 className="text-base font-black text-gray-800 mb-4">
            👀 {category?.name}の関連記事
          </h2>
          <div className="space-y-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/articles"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 text-sm transition-colors shadow-sm rounded-md"
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
