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
      <Suspense fallback={<div className="mt-7 text-muted">Carregando…</div>}>
        <CategoryFilter categories={categories} />
      </Suspense>
      <CatalogGrid products={products} />
    </>
  );
}

export default function CatalogoPage({ searchParams }: PageProps<"/catalogo">) {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10 pb-16">
      <p className="mb-2 text-[0.8rem] tracking-[0.14em] text-crimson uppercase">
        Catálogo
      </p>
      <h1 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-ink">
        Umbanda e Candomblé
      </h1>
      <p className="mt-3 max-w-[50ch] text-muted leading-relaxed">
        Guias, imagens, ervas, velas e itens para o terreiro. Abra o produto e
        solicite pelo WhatsApp.
      </p>

      <Suspense fallback={<p className="mt-8 text-muted">Carregando catálogo…</p>}>
        <CatalogResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
