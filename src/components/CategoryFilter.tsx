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

  const base =
    "border px-3.5 py-1.5 transition-colors border-line bg-white text-muted hover:border-[color-mix(in_srgb,var(--color-crimson)_45%,var(--color-line))] hover:bg-[color-mix(in_srgb,var(--color-crimson)_10%,white)] hover:text-crimson-deep";
  const active =
    "border-[color-mix(in_srgb,var(--color-crimson)_45%,var(--color-line))] bg-[color-mix(in_srgb,var(--color-crimson)_10%,white)] text-crimson-deep";

  return (
    <div
      className="mt-7 mb-2 flex flex-wrap gap-2"
      role="navigation"
      aria-label="Categorias"
    >
      <Link
        href="/catalogo"
        className={`${base} ${!current ? active : ""}`}
        scroll={false}
      >
        Todos
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/catalogo?categoria=${category.slug}`}
          className={`${base} ${current === category.slug ? active : ""}`}
          scroll={false}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
