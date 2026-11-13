import type { Category, Product } from "@/lib/types";

export const seedCategories: Category[] = [
  { id: "cat-guias", name: "Guias e contas", slug: "guias-e-contas" },
  { id: "cat-imagens", name: "Imagens e entidades", slug: "imagens-e-entidades" },
  { id: "cat-banhos", name: "Banhos e ervas", slug: "banhos-e-ervas" },
  { id: "cat-velas", name: "Velas e firmas", slug: "velas-e-firmas" },
  { id: "cat-incensos", name: "Incensos e defumação", slug: "incensos-e-defumacao" },
  { id: "cat-africanos", name: "Artigos africanos", slug: "artigos-africanos" },
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
    category_id: "cat-banhos",
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
    category_id: "cat-banhos",
    active: true,
    created_at: "2026-01-15T12:00:00.000Z",
  },
  {
    id: "prod-7",
    name: "Defumação de abertura",
    slug: "defumacao-de-abertura",
    description:
      "Ervas e blends para defumação de casa e terreiro — limpeza e abertura de caminhos.",
    price_cents: 4200,
    image_path: "/products/banho-ervas.svg",
    category_id: "cat-incensos",
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
  {
    id: "prod-9",
    name: "Vela palito branca (pacote)",
    slug: "vela-palito-branca",
    description:
      "Pacote de velas palito brancas para firmas, orações e uso diário no terreiro.",
    price_cents: 2890,
    image_path: "/products/vela-vermelha.svg",
    category_id: "cat-velas",
    active: true,
    created_at: "2026-01-18T12:00:00.000Z",
  },
  {
    id: "prod-10",
    name: "Fio de contas com búzios",
    slug: "fio-de-contas-com-buzios",
    description:
      "Fio artesanal com búzios, inspirado em usos tradicionais de Umbanda e Candomblé.",
    price_cents: 6500,
    image_path: "/products/guia-caboclo.svg",
    category_id: "cat-africanos",
    active: true,
    created_at: "2026-01-19T12:00:00.000Z",
  },
  {
    id: "prod-11",
    name: "Cachimbo de madeira",
    slug: "cachimbo-de-madeira",
    description:
      "Cachimbo de madeira para linha de pretos-velhos e firmas no congá.",
    price_cents: 1990,
    image_path: "/products/kit-limpeza.svg",
    category_id: "cat-terreiro",
    active: true,
    created_at: "2026-01-20T12:00:00.000Z",
  },
  {
    id: "prod-12",
    name: "Incenso de limpeza",
    slug: "incenso-de-limpeza",
    description:
      "Incenso para limpeza e harmonização do ambiente — casa, loja ou terreiro.",
    price_cents: 1590,
    image_path: "/products/banho-ervas.svg",
    category_id: "cat-incensos",
    active: true,
    created_at: "2026-01-21T12:00:00.000Z",
  },
];
