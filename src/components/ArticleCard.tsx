import Link from "next/link";
import { Article } from "@/types";
import CategoryBadge from "./CategoryBadge";

type Props = {
  article: Article;
  featured?: boolean;
};

const categoryEmoji: Record<string, string> = {
  chatgpt: "🤖",
  study: "📚",
  career: "💼",
  tools: "🛠️",
  programming: "💻",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ArticleCard({ article, featured = false }: Props) {
  const emoji = categoryEmoji[article.category] ?? "📄";

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className="group block h-full">
        <article className="bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden h-full flex flex-col">
          <div className="h-36 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
            <span className="text-5xl drop-shadow-sm">{emoji}</span>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="mb-2.5">
              <CategoryBadge categorySlug={article.category} linkable={false} />
            </div>
            <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-2 flex-1">
              {article.title}
            </h2>
            <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
              {article.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span>·</span>
              <span>⏱ {article.readTime}分</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-4 flex gap-4 items-start">
        <div className="w-11 h-11 bg-blue-50 rounded-md flex items-center justify-center flex-shrink-0 text-xl border border-blue-100">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-1.5">
            <CategoryBadge categorySlug={article.category} linkable={false} />
          </div>
          <h2 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-1">
            {article.title}
          </h2>
          <p className="text-xs text-gray-500 line-clamp-2 mb-2 leading-relaxed hidden sm:block">
            {article.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span>·</span>
            <span>⏱ {article.readTime}分</span>
          </div>
        </div>
        <span className="text-blue-300 group-hover:text-blue-500 transition-colors text-lg flex-shrink-0 self-center">›</span>
      </article>
    </Link>
  );
}
