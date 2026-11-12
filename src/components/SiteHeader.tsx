import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-mark">
          <Image
            src="/brand/logo-transparent.png"
            alt="Caboclo Pena Vermelha — Artigos Religiosos"
            width={220}
            height={186}
            className="brand-mark__logo"
            priority
          />
        </Link>
        <nav className="site-nav" aria-label="Principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
