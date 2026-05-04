import Link from "next/link";
import { Article } from "@/types";
import CategoryBadge from "./CategoryBadge";

type Props = {
  article: Article;
  featured?: boolean;
};

const categoryTopBorder: Record<string, string> = {
  chatgpt: "border-t-blue-500",
  study: "border-t-emerald-500",
  career: "border-t-amber-500",
  tools: "border-t-violet-500",
  programming: "border-t-slate-400",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ArticleCard({ article, featured = false }: Props) {
  const topBorder = categoryTopBorder[article.category] ?? "border-t-neutral-300";

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className="group block h-full">
        <article className={`bg-white border border-neutral-200 border-t-[3px] ${topBorder} rounded-[6px] hover:-translate-y-0.5 hover:shadow-sm transition-all h-full flex flex-col p-5`}>
          <div className="mb-3">
            <CategoryBadge categorySlug={article.category} linkable={false} />
          </div>
          <h2 className="text-[15px] font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 flex-1">
            {article.title}
          </h2>
          <p className="text-xs text-neutral-500 line-clamp-2 mb-4 leading-relaxed">
            {article.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-neutral-400 mt-auto pt-3 border-t border-neutral-100">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span>&middot;</span>
            <span>{article.readTime}分</span>
            <span className="ml-auto text-neutral-500 group-hover:text-blue-600 transition-colors">
              読む →
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="py-4 px-2 -mx-2 rounded-[6px] flex items-start justify-between gap-4 hover:bg-neutral-50 transition-colors">
        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <CategoryBadge categorySlug={article.category} linkable={false} />
          </div>
          <h2 className="text-[15px] font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors leading-snug">
            {article.title}
          </h2>
          <p className="text-xs text-neutral-500 line-clamp-1 mt-1 leading-relaxed hidden sm:block">
            {article.description}
          </p>
        </div>
        <div className="text-right flex-shrink-0 text-xs text-neutral-400 pt-1">
          <div>{formatDate(article.publishedAt)}</div>
          <div className="mt-0.5">{article.readTime}分</div>
        </div>
      </article>
    </Link>
  );
}
