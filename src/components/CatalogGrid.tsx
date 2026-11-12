import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/types";

type CatalogGridProps = {
  products: Product[];
};

export function CatalogGrid({ products }: CatalogGridProps) {
  if (products.length === 0) {
    return (
      <p className="empty-state">
        Nenhum produto encontrado nesta categoria. Em breve novos itens.
      </p>
    );
  }

  return (
    <div className="catalog-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
