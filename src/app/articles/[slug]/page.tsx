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

const siteUrl = "https://gakuseiouenn-net.vercel.app";
const siteName = "大学生AI活用ラボ";

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
      url: `/articles/${article.slug}`,
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-image.jpeg"],
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function extractHeadings(content: string): { text: string; id: string }[] {
  const matches = content.match(/^## (.+)$/gm);
  if (!matches) return [];
  return matches.map((m, i) => ({
    text: m.replace(/^## /, ""),
    id: `section-${i}`,
  }));
}

function renderInline(value: string): string {
  return escapeHtml(value)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderMarkdown(content: string): string {
  let h2i = 0;
  const blocks = content.trim().split(/\n\n+/);

  return blocks
    .map((block) => {
      if (block.startsWith("## ")) {
        const title = renderInline(block.replace(/^## /, ""));
        return `<h2 id="section-${h2i++}">${title}</h2>`;
      }
      if (block.startsWith("### ")) {
        return `<h3>${renderInline(block.replace(/^### /, ""))}</h3>`;
      }
      if (block.includes("\n|") || block.startsWith("|")) {
        const rows = block
          .split("\n")
          .filter((line) => line.startsWith("|") && !/^\|[-\s:|]+\|$/.test(line))
          .map((line) => {
            const cells = line
              .split("|")
              .slice(1, -1)
              .map((cell) => `<td>${renderInline(cell.trim())}</td>`)
              .join("");
            return `<tr>${cells}</tr>`;
          })
          .join("");
        return `<table>${rows}</table>`;
      }
      if (block.split("\n").every((line) => line.startsWith("- "))) {
        const items = block
          .split("\n")
          .map((line) => `<li>${renderInline(line.replace(/^- /, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      if (block.split("\n").every((line) => /^\d+\. /.test(line))) {
        const items = block
          .split("\n")
          .map((line) => `<li>${renderInline(line.replace(/^\d+\. /, ""))}</li>`)
          .join("");
        return `<ol>${items}</ol>`;
      }
      return `<p>${renderInline(block).replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
}

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function getArticleTakeaways(slug: string): string[] {
  const takeaways: Record<string, string[]> = {
    "best-ai-tools-for-students": [
      "大学生が最初に使いやすいAIツールの選び方",
      "ChatGPT、Canva、Claude Codeなどの向いている作業",
      "課金や専門ツールを検討するタイミング",
    ],
    "chatgpt-free-plan-students": [
      "ChatGPT無料版で十分な大学生活の作業",
      "Claudeなどに課金する価値を感じやすい場面",
      "大学1〜2年生が無理なくAIを使い始める考え方",
    ],
    "ai-report-writing-comparison": [
      "レポート作成でAIに任せやすい作業と危ない作業",
      "ChatGPT、Claude、Geminiの使い分け",
      "本文丸投げを避けて、自分の考えを残す進め方",
    ],
    "chatgpt-daigaku-barelu": [
      "AIレポートで大学生が特に注意すべきポイント",
      "バレる・バレないより大切な大学ルールの確認",
      "安全に使うための具体的な使い方",
    ],
    "ai-report-research-workflow": [
      "AIで論点やキーワードを整理する手順",
      "Google検索と大学図書館を組み合わせる方法",
      "参考文献や反対意見を探すときの注意点",
    ],
    "ai-job-hunting-es": [
      "ESを書く前に整理しておきたい経験",
      "自分の強みやガクチカを深掘りする方法",
      "読者自身の貴重な体験を生かすAIの使い方",
    ],
    "chatgpt-report-outline": [
      "大学レポートの構成をChatGPTで作る流れ",
      "論点、反対意見、参考文献探しに使える聞き方",
      "本文を丸投げせず、自分の考えを残すコツ",
    ],
    "ai-interview-practice": [
      "AIで面接練習を始める前の準備",
      "想定質問と深掘り質問を出してもらう方法",
      "作った回答を自分の言葉に戻すポイント",
    ],
  };

  return (
    takeaways[slug] ?? [
      "この記事のテーマで押さえるべき基本",
      "大学生活の中で使える具体的な手順",
      "AIに任せすぎないための注意点",
    ]
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const headings = extractHeadings(article.content);
  const takeaways = getArticleTakeaways(article.slug);
  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.description,
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt ?? article.publishedAt,
        inLanguage: "ja",
        articleSection: category?.name ?? article.category,
        keywords: article.tags,
        author: {
          "@type": "Person",
          name: "理工学部の大学生",
          url: `${siteUrl}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        isPartOf: {
          "@type": "Blog",
          name: siteName,
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "記事一覧",
            item: `${siteUrl}/articles`,
          },
          ...(category
            ? [
                {
                  "@type": "ListItem",
                  position: 3,
                  name: category.name,
                  item: `${siteUrl}/categories/${category.slug}`,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: category ? 4 : 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };
  const related = article.relatedSlugs
    ? getArticlesBySlugs(article.relatedSlugs)
    : getArticlesByCategory(article.category)
        .filter((a) => a.slug !== slug)
        .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <div className="max-w-2xl mx-auto">
        <nav className="text-xs text-neutral-400 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-neutral-900 transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-neutral-900 transition-colors">記事一覧</Link>
          {category && (
            <>
              <span>/</span>
              <Link href={`/categories/${category.slug}`} className="hover:text-neutral-900 transition-colors">
                {category.name}
              </Link>
            </>
          )}
        </nav>

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
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span>&middot;</span>
            <span>{article.readTime}分で読める</span>
          </div>
        </header>

        <section className="mb-8 rounded-[6px] border border-blue-100 bg-blue-50/60 p-5">
          <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-[0.15em] mb-3">
            この記事でわかること
          </p>
          <ul className="space-y-2">
            {takeaways.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-neutral-700 leading-relaxed">
                <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {headings.length > 2 && (
          <nav className="border border-neutral-200 rounded-[6px] p-5 mb-10">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3">
              目次
            </p>
            <ol className="space-y-1.5">
              {headings.map((h, i) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    {i + 1}. {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
        />

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs text-neutral-500 font-medium px-2 py-0.5 border border-neutral-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

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
        <Link href="/articles" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors font-medium">
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
