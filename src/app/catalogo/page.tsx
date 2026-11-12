import { Suspense } from "react";
import { CatalogGrid } from "@/components/CatalogGrid";
import { CategoryFilter } from "@/components/CategoryFilter";
import { getCategories, getProducts } from "@/lib/products";

export const metadata = {
  title: "Catálogo",
  description:
    "Catálogo de artigos de Umbanda e Candomblé — Caboclo Pena Vermelha.",
};

async function CatalogResults({
  searchParams,
}: {
  searchParams: PageProps<"/catalogo">["searchParams"];
}) {
  const params = await searchParams;
  const categoria =
    typeof params.categoria === "string" ? params.categoria : undefined;

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(categoria),
  ]);

  return (
    <>
      <Suspense fallback={<div className="category-filter">Carregando…</div>}>
        <CategoryFilter categories={categories} />
      </Suspense>
      <CatalogGrid products={products} />
    </>
  );
}

export default function CatalogoPage({ searchParams }: PageProps<"/catalogo">) {
  return (
    <div className="catalog-page">
      <p className="section__eyebrow">Catálogo</p>
      <h1>Umbanda e Candomblé</h1>
      <p>
        Guias, imagens, ervas, velas e itens para o terreiro. Abra o produto e
        solicite pelo WhatsApp.
      </p>

      <Suspense fallback={<p className="empty-state">Carregando catálogo…</p>}>
        <CatalogResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
