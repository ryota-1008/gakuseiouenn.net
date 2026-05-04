import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT活用",
    description: "レポート、要約、翻訳、就活準備など、大学生活で使えるChatGPTの実践ノウハウ。",
    color: "bg-blue-50 text-blue-700",
  },
  {
    slug: "study",
    name: "AIで学習",
    description: "授業、試験、ゼミ、卒論でAIを安全に使い、学びの質を上げる方法。",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    slug: "career",
    name: "AIで就活",
    description: "自己分析、ES、面接対策、企業研究にAIを活用するための具体例。",
    color: "bg-amber-50 text-amber-700",
  },
  {
    slug: "tools",
    name: "AIツール紹介",
    description: "学生向けに使いやすいAIツールを、用途・無料枠・注意点つきで比較。",
    color: "bg-violet-50 text-violet-700",
  },
  {
    slug: "programming",
    name: "AIプログラミング",
    description: "GitHub CopilotやCursorなどを使った学習・課題制作・コード理解の進め方。",
    color: "bg-slate-100 text-slate-700",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
