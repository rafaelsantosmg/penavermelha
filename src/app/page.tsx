import Link from "next/link";
import { Suspense } from "react";
import { BenefitsStrip } from "@/components/BenefitsStrip";
import { CatalogGrid } from "@/components/CatalogGrid";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { Hero } from "@/components/Hero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getCategories, getFeaturedProducts } from "@/lib/products";

async function FeaturedProducts() {
  const featured = await getFeaturedProducts(6);

  return (
    <>
      <CatalogGrid products={featured} />
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/catalogo"
          className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-transparent bg-crimson px-5 py-2.5 font-semibold text-[#fff7f2] transition-transform hover:-translate-y-px hover:bg-crimson-deep"
        >
          Ver catálogo completo
        </Link>
      </div>
    </>
  );
}

async function HomeCategories() {
  const categories = await getCategories();
  return <CategoryShowcase categories={categories} />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />

      <Suspense fallback={<p className="mx-auto mt-8 w-[min(1120px,calc(100%-2rem))] text-muted">Carregando categorias…</p>}>
        <HomeCategories />
      </Suspense>

      <section
        id="sobre"
        className="relative isolate overflow-hidden py-[4.8rem] before:absolute before:inset-0 before:-z-20 before:bg-[url('/brand/pattern-green.jpg')] before:bg-cover before:bg-center before:opacity-[0.06] after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.88)_100%)]"
      >
        <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-[0.8rem] tracking-[0.14em] text-crimson uppercase">
              Desde agosto de 1998
            </p>
            <h2 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-ink">
              Tradição desde agosto de 1998 — artigos escolhidos com respeito à
              Umbanda e ao Candomblé.
            </h2>
          </div>
          <p className="text-muted leading-relaxed">
            A Caboclo Pena Vermelha oferece guias, imagens, ervas, banhos,
            defumação, velas e itens de firmeza para o terreiro e o congá —
            com atenção ao detalhe e cuidado com a tradição.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-[4.5rem]">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-[0.8rem] tracking-[0.14em] text-crimson uppercase">
              Destaques
            </p>
            <h2 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-ink">
              Peças para conhecer agora.
            </h2>
          </div>
          <p className="text-muted leading-relaxed">
            Uma amostra do catálogo. Abra o item, veja o preço e peça pelo
            WhatsApp — como em uma loja completa, com atendimento direto.
          </p>
        </div>
        <Suspense fallback={<p className="mt-8 text-muted">Carregando destaques…</p>}>
          <FeaturedProducts />
        </Suspense>
      </section>

      <section id="contato" className="mx-auto w-[min(1120px,calc(100%-2rem))] py-[4.5rem]">
        <div className="relative isolate grid gap-4 overflow-hidden border border-[color-mix(in_srgb,var(--color-crimson)_35%,black)] bg-[linear-gradient(135deg,#5a0f0f,#1a0505)] p-6 text-[#fff5f2] before:absolute before:inset-0 before:-z-10 before:bg-[url('/brand/pattern-red.jpg')] before:bg-cover before:opacity-[0.18]">
          <p className="mb-0 text-[0.8rem] tracking-[0.14em] text-[#ffd0d0] uppercase">
            Contato
          </p>
          <h2 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-[#fff5f2]">
            Peça pelo WhatsApp
          </h2>
          <p className="m-0 max-w-[42ch] text-[#fff5f2]/opacity-90 leading-relaxed">
            Precisa de guia, imagem, erva ou algo específico para o terreiro?
            Chame a loja — a gente te orienta com respeito.
          </p>
          <WhatsAppButton
            message="Olá! Gostaria de artigos de Umbanda/Candomblé na loja Caboclo Pena Vermelha."
            label="Abrir WhatsApp"
          />
        </div>
      </section>
    </>
  );
}
