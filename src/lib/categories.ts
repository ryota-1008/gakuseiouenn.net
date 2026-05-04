import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT活用",
    description: "無料版でできること、レポートやメール、相談での使い方を大学生目線で整理。",
    color: "bg-blue-50 text-blue-700",
  },
  {
    slug: "study",
    name: "レポート・学習",
    description: "テーマ決め、情報収集、構成作りなど、課題でAIを安全に使う方法。",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    slug: "career",
    name: "就活・ES対策",
    description: "自己分析、ガクチカ、志望動機、面接練習にAIを活用するための具体例。",
    color: "bg-amber-50 text-amber-700",
  },
  {
    slug: "tools",
    name: "AIツール比較",
    description: "ChatGPT、Claude、Canvaなどを、用途・無料枠・課金判断つきで比較。",
    color: "bg-violet-50 text-violet-700",
  },
  {
    slug: "programming",
    name: "開発・コードAI",
    description: "Claude CodeやCursorなど、コードを書く作業を効率化するAIの使い方。",
    color: "bg-slate-100 text-slate-700",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
