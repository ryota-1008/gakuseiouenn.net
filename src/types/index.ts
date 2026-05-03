export type Category = {
  slug: string;
  name: string;
  description: string;
  color: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  featured?: boolean;
  tags: string[];
  relatedSlugs?: string[];
};
