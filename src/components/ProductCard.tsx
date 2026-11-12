import Image from "next/image";
import Link from "next/link";
import { formatPriceBRL } from "@/lib/format";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.image_path || "/products/guia-caboclo.svg";

  return (
    <Link href={`/catalogo/${product.slug}`} className="product-card">
      <div className="product-card__media">
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="product-card__body">
        {product.category ? (
          <span className="product-card__category">{product.category.name}</span>
        ) : null}
        <h3>{product.name}</h3>
        <p>{formatPriceBRL(product.price_cents)}</p>
      </div>
    </Link>
  );
}
