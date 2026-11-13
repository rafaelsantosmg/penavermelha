import Link from "next/link";
import type { Category } from "@/lib/types";

type CategoryShowcaseProps = {
  categories: Category[];
};

export function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pt-14 pb-[4.5rem]">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 text-[0.8rem] tracking-[0.14em] text-crimson uppercase">
            Categorias
          </p>
          <h2 className="m-0 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-tight text-ink">
            Navegue pelo catálogo.
          </h2>
        </div>
        <p className="text-muted leading-relaxed">
          Guias, imagens, banhos, velas, defumação e itens para o terreiro —
          organize sua busca e peça pelo WhatsApp.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3.5 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/catalogo?categoria=${category.slug}`}
            className="grid min-h-30 gap-2 border border-line bg-white p-4 transition-transform hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--color-crimson)_40%,var(--color-line))]"
          >
            <span className="font-display text-[1.2rem] leading-tight text-ink">
              {category.name}
            </span>
            <strong className="self-end text-[0.8rem] font-bold tracking-wide text-crimson uppercase">
              Ver itens
            </strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
