import Link from "next/link";
import { Suspense } from "react";
import { CatalogGrid } from "@/components/CatalogGrid";
import { Hero } from "@/components/Hero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getFeaturedProducts } from "@/lib/products";

async function FeaturedProducts() {
  const featured = await getFeaturedProducts(3);

  return (
    <>
      <CatalogGrid products={featured} />
      <div className="cta-row" style={{ marginTop: "1.5rem" }}>
        <Link href="/catalogo" className="btn btn--primary">
          Ver catálogo completo
        </Link>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="sobre" className="section--about">
        <div className="section__inner section--split">
          <div>
            <p className="section__eyebrow">Desde agosto de 1998</p>
            <h2>
              Tradição desde agosto de 1998 — artigos escolhidos com respeito à
              Umbanda e ao Candomblé.
            </h2>
          </div>
          <p>
            A Caboclo Pena Vermelha oferece guias, imagens, ervas, banhos,
            defumação, velas e itens de firmeza para o terreiro e o congá —
            com atenção ao detalhe e cuidado com a tradição.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section--split">
          <div>
            <p className="section__eyebrow">Destaques</p>
            <h2>Peças para conhecer agora.</h2>
          </div>
          <p>
            Uma amostra do catálogo de Umbanda e Candomblé. Abra o item e fale
            conosco pelo WhatsApp.
          </p>
        </div>
        <Suspense fallback={<p className="empty-state">Carregando destaques…</p>}>
          <FeaturedProducts />
        </Suspense>
      </section>

      <section id="contato" className="section">
        <div className="contact-panel">
          <p className="section__eyebrow" style={{ color: "#ffd0d0" }}>
            Contato
          </p>
          <h2>Peça pelo WhatsApp</h2>
          <p>
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
