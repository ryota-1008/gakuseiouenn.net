import Link from "next/link";
import { getCategoryBySlug } from "@/lib/categories";

type Props = {
  categorySlug: string;
  linkable?: boolean;
};

export default function CategoryBadge({ categorySlug, linkable = true }: Props) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const badge = (
    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-sm ${category.color}`}>
      {category.name}
    </span>
  );

  if (!linkable) return badge;

  return (
    <Link href={`/categories/${category.slug}`} className="hover:opacity-75 transition-opacity">
      {badge}
    </Link>
  );
}
