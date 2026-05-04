import { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "best-ai-tools-for-students",
    title: "大学生におすすめのAIツール7選: 勉強・レポート・就活で使い分ける",
    description:
      "ChatGPT、Claude、Gemini、Perplexityなど、大学生がまず試したいAIツールを用途別に整理します。",
    category: "tools",
    publishedAt: "2026-05-01",
    readTime: 8,
    featured: true,
    tags: ["AIツール", "大学生", "ChatGPT", "無料"],
    relatedSlugs: ["chatgpt-free-plan-students", "perplexity-research-workflow"],
    content: `
## まず結論

大学生が最初に使うなら、文章作成はChatGPT、長い資料の読解はClaude、調べものはPerplexity、Googleサービス連携はGeminiから始めるのがおすすめです。

AIツールは「ひとつを完璧に使う」より、用途ごとに得意な道具を選ぶほうが失敗しにくくなります。

## 用途別のおすすめ

| 用途 | おすすめ | 理由 |
| 調べもの | Perplexity | 出典つきで情報を追いやすい |
| レポートの構成 | ChatGPT | 論点整理と文章のたたき台が得意 |
| 長文PDFの読解 | Claude | 長い文章をまとめる作業に向いている |
| Googleドキュメント作業 | Gemini | Googleサービスと相性がよい |
| プログラミング | GitHub Copilot | エラー理解と補完に使いやすい |

## AIを使うときの注意点

- 生成された文章をそのまま提出しない
- 数字、引用、固有名詞は必ず一次情報で確認する
- 大学や授業ごとのAI利用ルールを先に確認する
- 自分の考察、経験、判断を最後に必ず入れる

## 最初の一週間の使い方

1. レポートのテーマをAIに相談する
2. 参考文献の探し方をPerplexityで整理する
3. 自分で読んだ内容をAIに要約させる
4. 最後は自分の言葉で書き直す

AIは答えを丸ごと作る道具ではなく、考える速度を上げる補助輪として使うと効果が出ます。
    `,
  },
  {
    slug: "chatgpt-free-plan-students",
    title: "ChatGPT無料版は大学生に十分か: 有料版にする前の判断基準",
    description:
      "無料版でできること、有料版を検討したい場面、学生が無駄なく使うための考え方をまとめます。",
    category: "chatgpt",
    publishedAt: "2026-05-02",
    readTime: 7,
    featured: true,
    tags: ["ChatGPT", "無料", "Plus", "学生"],
    relatedSlugs: ["best-ai-tools-for-students", "ai-report-writing-comparison"],
    content: `
## 無料版で十分な人

週に数回、レポートの構成相談、英訳、要約、アイデア出しに使う程度なら、まずは無料版で十分です。

無料版だけでも、次のような作業はかなり楽になります。

- レポートの章立てを作る
- 難しい文章をやさしく説明してもらう
- 英文メールや履歴書の表現を整える
- 面接質問の練習相手にする

## 有料版を検討してよい人

毎日のように使う人、締切前に長時間使う人、画像・ファイル・高度な推論を頻繁に使う人は、有料版を検討する価値があります。

ただし、先に一週間だけ無料版で使い方を固めるのがおすすめです。使う目的が曖昧なまま課金すると、便利さより「なんとなく払っている感」が勝ちやすいからです。

## 学生向けの判断表

| 状況 | 判断 |
| 週1から2回使う | 無料版で開始 |
| レポート提出前だけ使う | 無料版で十分 |
| 毎日1時間以上使う | 有料版を検討 |
| 卒論・就活で集中的に使う | 1か月だけ課金もあり |

## 大事な考え方

ChatGPTの価値は、課金するかどうかより「何を聞くか」で大きく変わります。

よい使い方は、AIに完成品を求めることではありません。自分の考えを出し、AIに抜け漏れや別視点を出してもらい、最後に自分で判断することです。
    `,
  },
  {
    slug: "ai-report-writing-comparison",
    title: "レポート作成に使えるAI比較: ChatGPT・Claude・Gemini・Perplexity",
    description:
      "大学レポートでAIを使うときの役割分担、プロンプト例、引用確認の注意点を解説します。",
    category: "study",
    publishedAt: "2026-05-03",
    readTime: 9,
    featured: true,
    tags: ["レポート", "ChatGPT", "Claude", "Perplexity"],
    relatedSlugs: ["perplexity-research-workflow", "chatgpt-seminar-prompts"],
    content: `
## AIでレポートを書くのはありか

AIの使い方次第です。文章を丸ごと生成して提出するのは危険ですが、テーマ整理、構成づくり、論点の比較、文章の読みやすさチェックには役立ちます。

## ツールごとの役割

| ツール | 得意な作業 |
| ChatGPT | 構成案、論点整理、文章の改善 |
| Claude | 長文資料やPDFの読解 |
| Gemini | Googleドキュメントとの連携 |
| Perplexity | 出典を探す調査の入口 |

## 使えるプロンプト例

「大学1年生向けのレポートとして、テーマ『SNSとメンタルヘルス』を扱います。賛成・反対の論点、調べるべきキーワード、章立て案を出してください。ただし本文は書かず、考えるための材料だけください。」

このように「本文は書かず」と入れると、自分で考える余地を残しやすくなります。

## 最後に必ず確認すること

- 引用元が実在するか
- 授業で指定された形式に合っているか
- 自分の主張が入っているか
- AIに任せた部分を説明できるか

AIは便利ですが、評価されるのはあなたの理解です。補助として使い、最終判断は自分で持つのが安全です。
    `,
  },
  {
    slug: "perplexity-research-workflow",
    title: "Perplexityで調べものを速くする: 出典つきリサーチの基本手順",
    description:
      "AI検索を使ってレポートや発表準備の情報収集を進める方法と、出典確認のコツを紹介します。",
    category: "study",
    publishedAt: "2026-05-04",
    readTime: 6,
    tags: ["Perplexity", "リサーチ", "出典", "レポート"],
    content: `
## Perplexityが向いている場面

Perplexityは、調べものの入口として使いやすいAI検索ツールです。検索結果と要約が同時に見られるため、最初の全体像をつかむ時間を短縮できます。

## 基本手順

1. まず日本語で広く聞く
2. 重要そうなキーワードを拾う
3. そのキーワードで追加検索する
4. 出典URLを開いて原文を確認する
5. 自分のメモに要点と引用元を分けて残す

## プロンプト例

「大学レポート用に、生成AIと教育に関する主要な論点を整理してください。肯定的な意見、批判的な意見、調べるべきキーワード、確認すべき公的資料を分けてください。」

## 注意点

AI検索の要約だけを信用しないことが大切です。特に統計、法律、料金、規約は変わるため、必ず公式ページや一次資料に戻って確認します。
    `,
  },
  {
    slug: "chatgpt-seminar-prompts",
    title: "ゼミ発表で使えるChatGPTプロンプト集: 構成・想定質問・スライド改善",
    description:
      "ゼミ発表の準備をAIで効率化するための、すぐ使えるプロンプトを場面別にまとめます。",
    category: "study",
    publishedAt: "2026-05-05",
    readTime: 7,
    tags: ["ゼミ", "発表", "プロンプト", "ChatGPT"],
    content: `
## ゼミ発表はAIと相性がよい

ゼミ発表では、資料を読む、論点を整理する、説明順を決める、質問に備えるという作業が必要です。ChatGPTはこの準備の壁打ち相手になります。

## 構成を作る

「以下の内容をもとに、10分のゼミ発表の構成を作ってください。導入、背景、先行研究、論点、まとめに分け、各パートの時間配分も提案してください。」

## 想定質問を出す

「この発表に対して、教授や学生から出そうな質問を10個挙げてください。鋭い質問、基本的な確認質問、反対意見に分けてください。」

## スライドを改善する

「以下のスライド構成を、聞き手が理解しやすい順番に並べ替えてください。1枚ごとのメッセージが重複していないかも確認してください。」

## 使いすぎないコツ

AIに全部任せると、自分が説明できない発表になります。AIから出た案に対して「なぜこの順番なのか」を自分で説明できる状態まで整理しましょう。
    `,
  },
  {
    slug: "ai-job-hunting-es",
    title: "AIでエントリーシートを改善する: 自己PRを自分の言葉に戻す方法",
    description:
      "AIを就活のES作成に使うとき、ありきたりな文章にしないための手順と注意点を紹介します。",
    category: "career",
    publishedAt: "2026-05-06",
    readTime: 8,
    tags: ["就活", "ES", "自己PR", "ChatGPT"],
    content: `
## AIは添削係として使う

就活のESでは、AIに完成文を書かせるより、自分で書いた文章を改善してもらう使い方が向いています。

最初からAIに任せると、どこかで見たような自己PRになりやすいからです。

## 手順

1. まず自分で雑に書く
2. AIに「強み」「根拠」「成果」が入っているか確認してもらう
3. 表現を3パターン出してもらう
4. 自分の経験に近い表現だけ採用する
5. 最後に声に出して違和感を直す

## プロンプト例

「以下の自己PRを、企業に伝わりやすい文章に改善してください。ただし、経験していないことを追加しないでください。抽象的な表現があれば、どこを具体化すべきか指摘してください。」

## 注意点

AIらしい文章は、読みやすい一方で個性が薄くなりがちです。自分だけのエピソード、失敗、工夫、数字を入れることで説得力が出ます。
    `,
  },
  {
    slug: "github-copilot-for-beginners",
    title: "GitHub Copilotは初心者に役立つか: 課題で使う前に知りたいこと",
    description:
      "プログラミング学習でAI補完を使うメリット、つまずきやすい点、学びを失わない使い方を解説します。",
    category: "programming",
    publishedAt: "2026-05-07",
    readTime: 7,
    tags: ["GitHub Copilot", "プログラミング", "初心者", "AI"],
    content: `
## 初心者でも役立つ

GitHub Copilotは、エラーの原因を探したり、似た処理の書き方を見たりするのに役立ちます。ただし、何も考えずに採用すると学習効果が下がります。

## よい使い方

- エラー文を説明してもらう
- 自分が書いたコードの改善点を聞く
- 関数の役割をコメントで整理する
- 似た例を見て書き方を学ぶ

## 避けたい使い方

- 課題の答えを丸ごと生成する
- 意味が分からないコードを提出する
- テストせずに動くと思い込む

## 学びを残すコツ

AIが出したコードを使うときは、1行ずつ何をしているか説明できるか確認します。説明できない部分は、提出前に必ず調べ直しましょう。
    `,
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.category === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getArticlesBySlugs(slugs: string[]): Article[] {
  return slugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean) as Article[];
}
