import type { Category, Product } from "@/lib/types";

export const seedCategories: Category[] = [
  { id: "cat-guias", name: "Guias e contas", slug: "guias-e-contas" },
  { id: "cat-imagens", name: "Imagens e entidades", slug: "imagens-e-entidades" },
  { id: "cat-ervas", name: "Ervas, banhos e defumação", slug: "ervas-banhos-defumacao" },
  { id: "cat-velas", name: "Velas e firmas", slug: "velas-e-firmas" },
  { id: "cat-terreiro", name: "Para o terreiro", slug: "para-o-terreiro" },
];

export const seedProducts: Product[] = [
  {
    id: "prod-1",
    name: "Guia de Caboclo",
    slug: "guia-de-caboclo",
    description:
      "Guia em contas vermelhas e pretas para firmeza e proteção nas linhas de caboclo da Umbanda.",
    price_cents: 8900,
    image_path: "/products/guia-caboclo.svg",
    category_id: "cat-guias",
    active: true,
    created_at: "2026-01-10T12:00:00.000Z",
  },
  {
    id: "prod-2",
    name: "Imagem Caboclo Pena Vermelha",
    slug: "imagem-caboclo-pena-vermelha",
    description:
      "Imagem para altar e congá, com acabamento detalhado para apresentação e firmeza da casa.",
    price_cents: 15900,
    image_path: "/products/imagem-caboclo.svg",
    category_id: "cat-imagens",
    active: true,
    created_at: "2026-01-11T12:00:00.000Z",
  },
  {
    id: "prod-3",
    name: "Banho de descarrego",
    slug: "banho-de-descarrego",
    description:
      "Blend de ervas para banho de limpeza, usado em preparos de Umbanda e Candomblé.",
    price_cents: 3500,
    image_path: "/products/banho-ervas.svg",
    category_id: "cat-ervas",
    active: true,
    created_at: "2026-01-12T12:00:00.000Z",
  },
  {
    id: "prod-4",
    name: "Vela setenária vermelha",
    slug: "vela-setenaria-vermelha",
    description:
      "Vela de sete dias para pedidos de força, coragem e firmeza — comum em trabalhos e oferendas.",
    price_cents: 2800,
    image_path: "/products/vela-vermelha.svg",
    category_id: "cat-velas",
    active: true,
    created_at: "2026-01-13T12:00:00.000Z",
  },
  {
    id: "prod-5",
    name: "Guia de proteção",
    slug: "guia-de-protecao",
    description:
      "Guia com contas e medalha para uso diário, com intenção de amparo e fechamento.",
    price_cents: 6500,
    image_path: "/products/colar-protecao.svg",
    category_id: "cat-guias",
    active: true,
    created_at: "2026-01-14T12:00:00.000Z",
  },
  {
    id: "prod-6",
    name: "Kit limpeza espiritual",
    slug: "kit-limpeza-espiritual",
    description:
      "Conjunto com ervas, vela e guia leve para abertura, limpeza e renovação do ambiente.",
    price_cents: 11900,
    image_path: "/products/kit-limpeza.svg",
    category_id: "cat-ervas",
    active: true,
    created_at: "2026-01-15T12:00:00.000Z",
  },
  {
    id: "prod-7",
    name: "Defumação de abertura",
    slug: "defumacao-de-abertura",
    description:
      "Ervas para defumação de casa e terreiro — limpeza, abertura de caminhos e harmonização.",
    price_cents: 4200,
    image_path: "/products/banho-ervas.svg",
    category_id: "cat-ervas",
    active: true,
    created_at: "2026-01-16T12:00:00.000Z",
  },
  {
    id: "prod-8",
    name: "Kit firmeza de congá",
    slug: "kit-firmeza-de-conga",
    description:
      "Seleção prática para o congá: vela, imagem e guia, pensada para a rotina do terreiro.",
    price_cents: 18900,
    image_path: "/products/kit-limpeza.svg",
    category_id: "cat-terreiro",
    active: true,
    created_at: "2026-01-17T12:00:00.000Z",
  },
];
