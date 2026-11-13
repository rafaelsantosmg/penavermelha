import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/types";

type CatalogGridProps = {
  products: Product[];
};

export function CatalogGrid({ products }: CatalogGridProps) {
  if (products.length === 0) {
    return (
      <p className="mt-8 text-muted">
        Nenhum produto encontrado nesta categoria. Em breve novos itens.
      </p>
    );
  }

  return (
    <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
