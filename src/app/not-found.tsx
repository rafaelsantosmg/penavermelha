import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))] py-[4.5rem] text-center">
      <p className="mb-2 text-[0.8rem] tracking-[0.14em] text-crimson uppercase">
        404
      </p>
      <h2 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-ink">
        Página não encontrada
      </h2>
      <p className="mt-3 text-muted">
        O conteúdo que você procura não está disponível.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-transparent bg-crimson px-5 py-2.5 font-semibold text-[#fff7f2] transition-transform hover:-translate-y-px hover:bg-crimson-deep"
        >
          Ir para o início
        </Link>
        <Link
          href="/catalogo"
          className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-line bg-white px-5 py-2.5 font-semibold text-ink transition-transform hover:-translate-y-px"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
