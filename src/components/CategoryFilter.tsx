"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Category } from "@/lib/types";

type CategoryFilterProps = {
  categories: Category[];
};

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const current = searchParams.get("categoria");

  return (
    <div className="category-filter" role="navigation" aria-label="Categorias">
      <Link
        href="/catalogo"
        className={!current ? "is-active" : undefined}
        scroll={false}
      >
        Todos
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/catalogo?categoria=${category.slug}`}
          className={current === category.slug ? "is-active" : undefined}
          scroll={false}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
