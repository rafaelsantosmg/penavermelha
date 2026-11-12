-- Seed de exemplo — rode depois do schema.sql
-- Foco: artigos de Umbanda e Candomblé
-- image_path aponta para SVGs locais do app; depois troque pelo Storage.

insert into public.categories (id, name, slug)
values
  ('11111111-1111-1111-1111-111111111101', 'Guias e contas', 'guias-e-contas'),
  ('11111111-1111-1111-1111-111111111102', 'Imagens e entidades', 'imagens-e-entidades'),
  ('11111111-1111-1111-1111-111111111103', 'Ervas, banhos e defumação', 'ervas-banhos-defumacao'),
  ('11111111-1111-1111-1111-111111111104', 'Velas e firmas', 'velas-e-firmas'),
  ('11111111-1111-1111-1111-111111111105', 'Para o terreiro', 'para-o-terreiro')
on conflict (slug) do nothing;

insert into public.products (
  id, name, slug, description, price_cents, image_path, category_id, active
)
values
  (
    '22222222-2222-2222-2222-222222222201',
    'Guia de Caboclo',
    'guia-de-caboclo',
    'Guia em contas vermelhas e pretas para firmeza e proteção nas linhas de caboclo da Umbanda.',
    8900,
    '/products/guia-caboclo.svg',
    '11111111-1111-1111-1111-111111111101',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222202',
    'Imagem Caboclo Pena Vermelha',
    'imagem-caboclo-pena-vermelha',
    'Imagem para altar e congá, com acabamento detalhado para apresentação e firmeza da casa.',
    15900,
    '/products/imagem-caboclo.svg',
    '11111111-1111-1111-1111-111111111102',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222203',
    'Banho de descarrego',
    'banho-de-descarrego',
    'Blend de ervas para banho de limpeza, usado em preparos de Umbanda e Candomblé.',
    3500,
    '/products/banho-ervas.svg',
    '11111111-1111-1111-1111-111111111103',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222204',
    'Vela setenária vermelha',
    'vela-setenaria-vermelha',
    'Vela de sete dias para pedidos de força, coragem e firmeza — comum em trabalhos e oferendas.',
    2800,
    '/products/vela-vermelha.svg',
    '11111111-1111-1111-1111-111111111104',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222205',
    'Guia de proteção',
    'guia-de-protecao',
    'Guia com contas e medalha para uso diário, com intenção de amparo e fechamento.',
    6500,
    '/products/colar-protecao.svg',
    '11111111-1111-1111-1111-111111111101',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222206',
    'Kit limpeza espiritual',
    'kit-limpeza-espiritual',
    'Conjunto com ervas, vela e guia leve para abertura, limpeza e renovação do ambiente.',
    11900,
    '/products/kit-limpeza.svg',
    '11111111-1111-1111-1111-111111111103',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222207',
    'Defumação de abertura',
    'defumacao-de-abertura',
    'Ervas para defumação de casa e terreiro — limpeza, abertura de caminhos e harmonização.',
    4200,
    '/products/banho-ervas.svg',
    '11111111-1111-1111-1111-111111111103',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222208',
    'Kit firmeza de congá',
    'kit-firmeza-de-conga',
    'Seleção prática para o congá: vela, imagem e guia, pensada para a rotina do terreiro.',
    18900,
    '/products/kit-limpeza.svg',
    '11111111-1111-1111-1111-111111111105',
    true
  )
on conflict (slug) do nothing;
