import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getArticleBySlug,
  getAllArticles,
  getArticlesByCategory,
  getArticlesBySlugs,
} from "@/lib/articles";
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
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function extractHeadings(
  content: string
): { text: string; id: string }[] {
  const matches = content.match(/^## (.+)$/gm);
  if (!matches) return [];
  return matches.map((m, i) => ({
    text: m.replace(/^## /, ""),
    id: `section-${i}`,
  }));
}

function renderMarkdown(content: string): string {
  let h2i = 0;
  return content
    .trim()
    .replace(/^## (.+)$/gm, (_, t) => `<h2 id="section-${h2i++}">${t}</h2>`)
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/^\| (.+) \|$/gm, (_, row) => {
      const cells = row
        .split(" | ")
        .map((c: string) => `<td>${c.trim()}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .replace(/(<tr>[\s\S]*?<\/tr>)/g, (m) =>
      m.includes("---") ? "" : m
    )
    .replace(/(<tr>.*<\/tr>\s*)+/g, (m) => `<table>${m}</table>`)
    .replace(/^---+$/gm, "<hr/>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\s*)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    .split(/\n\n+/)
    .map((block) => {
      if (/^<(h[23]|ul|ol|pre|table|blockquote|hr)/.test(block))
        return block;
      return `<p>${block.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const headings = extractHeadings(article.content);
  const related = article.relatedSlugs
    ? getArticlesBySlugs(article.relatedSlugs)
    : getArticlesByCategory(article.category)
        .filter((a) => a.slug !== slug)
        .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-400 mb-8 flex items-center gap-1.5">
          <Link
            href="/"
            className="hover:text-neutral-900 transition-colors"
          >
            ホーム
          </Link>
          <span>/</span>
          <Link
            href="/articles"
            className="hover:text-neutral-900 transition-colors"
          >
            記事一覧
          </Link>
          {category && (
            <>
              <span>/</span>
              <Link
                href={`/categories/${category.slug}`}
                className="hover:text-neutral-900 transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
        </nav>

        {/* Article header */}
        <header className="mb-8 pb-8 border-b border-neutral-200">
          <div className="mb-3">
            <CategoryBadge categorySlug={article.category} />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug mb-3">
            {article.title}
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4">
            {article.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span>&middot;</span>
            <span>{article.readTime}分で読める</span>
          </div>
        </header>

        {/* TOC */}
        {headings.length > 2 && (
          <nav className="border border-neutral-200 p-5 mb-10">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3">
              目次
            </p>
            <ol className="space-y-1.5">
              {headings.map((h, i) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {i + 1}. {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Article body */}
        <article
          className="prose-article"
          dangerouslySetInnerHTML={{
            __html: renderMarkdown(article.content),
          }}
        />

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-neutral-400 font-medium px-2 py-0.5 border border-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-2xl mx-auto mt-12 pt-8 border-t border-neutral-200">
          <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-5">
            関連記事
          </h2>
          <div className="divide-y divide-neutral-100">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-2xl mx-auto mt-10 pt-6 border-t border-neutral-200 text-center">
        <Link
          href="/articles"
          className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium"
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
