import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { formatPriceBRL } from "@/lib/format";
import { getProductBySlug, getProducts } from "@/lib/products";
import { productWhatsAppMessage } from "@/lib/whatsapp";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/catalogo/[slug]">) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

async function ProductContent({
  params,
}: {
  params: PageProps<"/catalogo/[slug]">["params"];
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const image = product.image_path || "/products/guia-caboclo.svg";

  return (
    <div className="product-page">
      <Link href="/catalogo" style={{ color: "var(--muted)" }}>
        ← Voltar ao catálogo
      </Link>

      <div className="product-page__layout">
        <div className="product-page__media">
          <Image
            src={image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div>
          {product.category ? (
            <span className="product-page__category">
              {product.category.name}
            </span>
          ) : null}
          <h1>{product.name}</h1>
          <p className="product-page__price">
            {formatPriceBRL(product.price_cents)}
          </p>
          <p className="product-page__desc">{product.description}</p>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <WhatsAppButton
              message={productWhatsAppMessage(product.name)}
              label="Quero este item"
            />
            <Link href="/catalogo" className="btn btn--light">
              Ver outros
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage({
  params,
}: PageProps<"/catalogo/[slug]">) {
  return (
    <Suspense fallback={<p className="empty-state">Carregando produto…</p>}>
      <ProductContent params={params} />
    </Suspense>
  );
}
