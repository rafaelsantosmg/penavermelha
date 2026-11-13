import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/SocialIcons";
import { getSocialLinks } from "@/lib/social";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const socials = getSocialLinks();

  return (
    <footer className="mt-8 border-t border-[#2a1010] bg-[#0b0707] text-[#efe7d8]">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] grid-cols-1 gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-3">
          <Image
            src="/brand/logo-dark.png"
            alt="Caboclo Pena Vermelha"
            width={140}
            height={140}
            className="h-auto w-[5.5rem]"
          />
          <p className="m-0 opacity-80">
            Artigos de Umbanda e Candomblé, com respeito à tradição e ao
            terreiro.
          </p>
        </div>

        <div className="grid content-start gap-3">
          <p className="m-0 text-[0.78rem] tracking-[0.12em] text-[#ffd0d0] uppercase">
            Loja
          </p>
          <div className="grid gap-2 opacity-80">
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/#sobre">Sobre</Link>
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

        <div className="grid content-start gap-3">
          <p className="m-0 text-[0.78rem] tracking-[0.12em] text-[#ffd0d0] uppercase">
            Redes sociais
          </p>
          <div className="flex flex-wrap gap-2.5">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-fit items-center gap-2 border border-[color-mix(in_srgb,#efe7d8_28%,transparent)] px-3.5 py-2 text-[#efe7d8] transition-colors hover:border-[color-mix(in_srgb,#ffd0d0_45%,transparent)] ${
                  social.id === "instagram"
                    ? "hover:bg-instagram hover:text-white"
                    : social.id === "facebook"
                      ? "hover:bg-facebook hover:text-white"
                      : "hover:bg-youtube hover:text-white"
                }`}
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon id={social.id} className="size-[1.15rem] shrink-0" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
