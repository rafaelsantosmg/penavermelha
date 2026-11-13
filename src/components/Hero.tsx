import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate grid min-h-[min(92vh,860px)] items-end overflow-hidden text-[#fff5f2]">
      <Image
        src="/brand/pattern-red.jpg"
        alt=""
        fill
        priority
        className="animate-drift -z-20 object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(8,4,4,0.88)_0%,rgba(8,4,4,0.55)_42%,rgba(120,10,10,0.28)_100%),linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden
      />
      <div className="animate-rise mx-auto w-[min(1120px,calc(100%-2rem))] py-[4.2rem] max-md:pt-28">
        <Image
          src="/brand/logo-dark.png"
          alt="Caboclo Pena Vermelha"
          width={520}
          height={520}
          className="mb-4 h-auto w-[min(280px,58vw)] drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)] max-sm:w-[min(220px,70vw)]"
          priority
        />
        <h1 className="m-0 max-w-[14ch] font-display text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-[1.15]">
          Artigos de Umbanda e Candomblé para o seu terreiro.
        </h1>
        <p className="mt-4 mb-7 max-w-[34ch] text-[1.05rem] text-[color-mix(in_srgb,#fff5f2_84%,transparent)]">
          Guias, imagens, ervas, velas e itens de firmeza — com respeito à
          tradição e à casa.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/catalogo"
            className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-transparent bg-crimson px-5 py-2.5 font-semibold text-[#fff7f2] transition-transform hover:-translate-y-px hover:bg-crimson-deep"
          >
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
