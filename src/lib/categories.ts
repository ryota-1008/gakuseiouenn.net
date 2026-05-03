import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT活用",
    description: "ChatGPTを使ったレポート・学習・就活対策など大学生向けの活用術",
    color: "bg-blue-100 text-blue-700",
  },
  {
    slug: "study",
    name: "AI×学習",
    description: "AIツールを使って勉強効率を劇的に上げる方法を紹介",
    color: "bg-sky-100 text-sky-700",
  },
  {
    slug: "career",
    name: "AI×就活",
    description: "エントリーシートや面接対策にAIを活用するテクニック",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    slug: "tools",
    name: "AIツール紹介",
    description: "大学生に役立つAIツールを厳選してレビュー",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    slug: "programming",
    name: "AI×プログラミング",
    description: "GitHub CopilotやCursorなどAIコーディングツールの使い方",
    color: "bg-violet-100 text-violet-700",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
