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
    <Link
      href={`/catalogo/${product.slug}`}
      className="flex flex-col overflow-hidden border border-line bg-white transition-transform hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--color-crimson)_35%,var(--color-line))]"
    >
      <div className="relative aspect-square bg-ink">
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="grid gap-1.5 p-4 pb-[1.15rem]">
        {product.category ? (
          <span className="text-[0.75rem] tracking-wide text-crimson uppercase">
            {product.category.name}
          </span>
        ) : null}
        <h3 className="m-0 font-display text-[1.25rem] font-medium">{product.name}</h3>
        <p className="m-0 text-muted">{formatPriceBRL(product.price_cents)}</p>
      </div>
    </Link>
  );
}
