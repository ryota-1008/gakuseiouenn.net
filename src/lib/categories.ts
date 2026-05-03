import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT活用",
    description: "ChatGPTを使ったレポート・学習・就活対策など大学生向けの活用術",
    color: "bg-blue-50 text-blue-600",
  },
  {
    slug: "study",
    name: "AI×学習",
    description: "AIツールを使って勉強効率を劇的に上げる方法を紹介",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    slug: "career",
    name: "AI×就活",
    description: "エントリーシートや面接対策にAIを活用するテクニック",
    color: "bg-amber-50 text-amber-700",
  },
  {
    slug: "tools",
    name: "AIツール紹介",
    description: "大学生に役立つAIツールを厳選してレビュー",
    color: "bg-violet-50 text-violet-600",
  },
  {
    slug: "programming",
    name: "AI×プログラミング",
    description: "GitHub CopilotやCursorなどAIコーディングツールの使い方",
    color: "bg-slate-100 text-slate-600",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
