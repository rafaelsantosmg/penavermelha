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
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10 pb-16">
      <Link href="/catalogo" className="text-muted">
        ← Voltar ao catálogo
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[4/5] overflow-hidden border border-line bg-ink">
          <Image
            src={image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          {product.category ? (
            <span className="mb-2 inline-block text-[0.8rem] tracking-wide text-crimson uppercase">
              {product.category.name}
            </span>
          ) : null}
          <h1 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-ink">
            {product.name}
          </h1>
          <p className="my-3.5 text-[1.45rem] font-bold text-ink">
            {formatPriceBRL(product.price_cents)}
          </p>
          <p className="text-muted leading-relaxed">{product.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton
              message={productWhatsAppMessage(product.name)}
              label="Quero este item"
            />
            <Link
              href="/catalogo"
              className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-line bg-white px-5 py-2.5 font-semibold text-ink transition-transform hover:-translate-y-px"
            >
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
    <Suspense fallback={<p className="mx-auto mt-8 w-[min(1120px,calc(100%-2rem))] text-muted">Carregando produto…</p>}>
      <ProductContent params={params} />
    </Suspense>
  );
}
