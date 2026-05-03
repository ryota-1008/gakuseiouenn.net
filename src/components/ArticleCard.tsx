import Link from "next/link";
import { Article } from "@/types";
import CategoryBadge from "./CategoryBadge";

type Props = {
  article: Article;
  featured?: boolean;
};

const categoryTopBorder: Record<string, string> = {
  chatgpt:     "border-t-blue-500",
  study:       "border-t-emerald-500",
  career:      "border-t-amber-500",
  tools:       "border-t-violet-500",
  programming: "border-t-slate-500",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ArticleCard({ article, featured = false }: Props) {
  const topBorder = categoryTopBorder[article.category] ?? "border-t-gray-400";

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className="group block h-full">
        <article className={`bg-white border border-gray-200 border-t-4 ${topBorder} hover:shadow-md transition-all h-full flex flex-col p-5`}>
          <div className="mb-2.5">
            <CategoryBadge categorySlug={article.category} linkable={false} />
          </div>
          <h2 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-2.5 flex-1">
            {article.title}
          </h2>
          <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
            {article.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span>·</span>
            <span>{article.readTime}分で読める</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="py-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors -mx-2 px-2 rounded-sm">
        <div className="flex-1 min-w-0">
          <div className="mb-1.5">
            <CategoryBadge categorySlug={article.category} linkable={false} />
          </div>
          <h2 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
            {article.title}
          </h2>
          <p className="text-xs text-gray-400 line-clamp-1 mt-1 leading-relaxed hidden sm:block">
            {article.description}
          </p>
        </div>
        <div className="text-right flex-shrink-0 text-xs text-gray-400 space-y-0.5 pt-0.5">
          <div>{formatDate(article.publishedAt)}</div>
          <div>{article.readTime}分</div>
        </div>
      </article>
    </Link>
  );
}
