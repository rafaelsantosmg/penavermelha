import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Caboclo Pena Vermelha",
    template: "%s · Caboclo Pena Vermelha",
  },
  description:
    "Caboclo Pena Vermelha — artigos de Umbanda e Candomblé: guias, imagens, ervas, velas e itens para o terreiro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="site-shell antialiased">
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
