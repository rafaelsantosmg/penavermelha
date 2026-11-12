import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <Image
            src="/brand/logo-dark.png"
            alt="Caboclo Pena Vermelha"
            width={140}
            height={140}
            className="site-footer__logo"
          />
          <p className="site-footer__copy">
            Artigos de Umbanda e Candomblé, com respeito à tradição e ao
            terreiro.
          </p>
        </div>
        <div className="site-footer__links">
          <Link href="/catalogo">Catálogo</Link>
          <a
            href={buildWhatsAppUrl(
              "Olá! Gostaria de falar com a loja Caboclo Pena Vermelha.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
