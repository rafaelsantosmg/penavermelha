import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { getCategories } from "@/lib/products";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#contato", label: "Contato" },
];

export async function SiteHeader() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/92 backdrop-blur-[14px]">
      <AnnouncementBar />
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between gap-4 py-2">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/brand/logo-transparent.png"
            alt="Caboclo Pena Vermelha — Artigos Religiosos"
            width={220}
            height={186}
            className="h-[4.25rem] w-auto object-contain max-sm:h-14"
            priority
          />
        </Link>
        <nav className="flex gap-4 text-[0.95rem] max-sm:gap-3 max-sm:text-[0.85rem]" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="border-t border-line bg-white" aria-label="Categorias">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] gap-1 overflow-x-auto py-2 [scrollbar-width:thin]">
          <Link
            href="/catalogo"
            className="shrink-0 whitespace-nowrap border border-transparent px-3 py-1.5 text-[0.86rem] text-muted transition-colors hover:border-[color-mix(in_srgb,var(--color-crimson)_30%,var(--color-line))] hover:bg-[color-mix(in_srgb,var(--color-crimson)_8%,white)] hover:text-crimson-deep"
          >
            Todos
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogo?categoria=${category.slug}`}
              className="shrink-0 whitespace-nowrap border border-transparent px-3 py-1.5 text-[0.86rem] text-muted transition-colors hover:border-[color-mix(in_srgb,var(--color-crimson)_30%,var(--color-line))] hover:bg-[color-mix(in_srgb,var(--color-crimson)_8%,white)] hover:text-crimson-deep"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
