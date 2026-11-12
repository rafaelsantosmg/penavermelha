import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="hero">
      <Image
        src="/brand/pattern-red.jpg"
        alt=""
        fill
        priority
        className="hero__media"
        sizes="100vw"
      />
      <div className="hero__veil" aria-hidden />
      <div className="hero__content">
        <Image
          src="/brand/logo-dark.png"
          alt="Caboclo Pena Vermelha"
          width={520}
          height={520}
          className="hero__logo"
          priority
        />
        <h1>Artigos de Umbanda e Candomblé para o seu terreiro.</h1>
        <p className="hero__lead">
          Guias, imagens, ervas, velas e itens de firmeza — com respeito à
          tradição e à casa.
        </p>
        <div className="hero__actions">
          <Link href="/catalogo" className="btn btn--primary">
            Ver catálogo
          </Link>
          <WhatsAppButton
            variant="secondary"
            message="Olá! Quero conhecer os artigos de Umbanda e Candomblé da loja Caboclo Pena Vermelha."
            label="Pedir pelo WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}
