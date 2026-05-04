import type { Metadata } from "next";
import { getAllArticles, getArticlesBySlugs } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "大学生向けAI活用記事の一覧。ChatGPT、AI学習、就活、AIツール、プログラミングの記事を掲載しています。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const starterArticles = getArticlesBySlugs([
    "chatgpt-free-plan-students",
    "ai-report-research-workflow",
    "best-ai-tools-for-students",
  ]);
  const purposeLinks = [
    {
      label: "レポートで使う",
      href: "/articles/ai-report-research-workflow",
      desc: "論点、キーワード、参考文献探しから始める",
    },
    {
      label: "ESを書く前に整理する",
      href: "/articles/ai-job-hunting-es",
      desc: "経験、強み、ガクチカをAIと一緒に深掘りする",
    },
    {
      label: "面接対策をする",
      href: "/articles/ai-interview-practice",
      desc: "想定質問と深掘り質問で準備不足を見つける",
    },
    {
      label: "課金するか考える",
      href: "/articles/chatgpt-free-plan-students",
      desc: "無料版で十分な作業と、有料版を検討する場面を知る",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">記事一覧</h1>
        <p className="text-sm text-neutral-500">
          まず読む記事、目的別の記事、すべての記事をまとめています。
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-5">
          まず読むなら
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {starterArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} featured />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-5">
          目的別に探す
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {purposeLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[6px] border border-neutral-200 p-4 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
            >
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-blue-700 transition-colors">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-neutral-200">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className={`text-[11px] font-semibold px-2.5 py-1 transition-opacity hover:opacity-75 ${cat.color}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-2">
        すべての記事
      </h2>
      <p className="text-xs text-neutral-500 mb-3">{articles.length}件の記事</p>
      <div className="divide-y divide-neutral-100">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
