-- Seed de exemplo — rode depois do schema.sql
-- Foco: artigos de Umbanda e Candomblé
-- image_path aponta para SVGs locais do app; depois troque pelo Storage.

insert into public.categories (id, name, slug)
values
  ('11111111-1111-1111-1111-111111111101', 'Guias e contas', 'guias-e-contas'),
  ('11111111-1111-1111-1111-111111111102', 'Imagens e entidades', 'imagens-e-entidades'),
  ('11111111-1111-1111-1111-111111111103', 'Banhos e ervas', 'banhos-e-ervas'),
  ('11111111-1111-1111-1111-111111111104', 'Velas e firmas', 'velas-e-firmas'),
  ('11111111-1111-1111-1111-111111111105', 'Incensos e defumação', 'incensos-e-defumacao'),
  ('11111111-1111-1111-1111-111111111106', 'Artigos africanos', 'artigos-africanos'),
  ('11111111-1111-1111-1111-111111111107', 'Para o terreiro', 'para-o-terreiro')
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
    'Ervas e blends para defumação de casa e terreiro — limpeza e abertura de caminhos.',
    4200,
    '/products/banho-ervas.svg',
    '11111111-1111-1111-1111-111111111105',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222208',
    'Kit firmeza de congá',
    'kit-firmeza-de-conga',
    'Seleção prática para o congá: vela, imagem e guia, pensada para a rotina do terreiro.',
    18900,
    '/products/kit-limpeza.svg',
    '11111111-1111-1111-1111-111111111107',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222209',
    'Vela palito branca (pacote)',
    'vela-palito-branca',
    'Pacote de velas palito brancas para firmas, orações e uso diário no terreiro.',
    2890,
    '/products/vela-vermelha.svg',
    '11111111-1111-1111-1111-111111111104',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222210',
    'Fio de contas com búzios',
    'fio-de-contas-com-buzios',
    'Fio artesanal com búzios, inspirado em usos tradicionais de Umbanda e Candomblé.',
    6500,
    '/products/guia-caboclo.svg',
    '11111111-1111-1111-1111-111111111106',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222211',
    'Cachimbo de madeira',
    'cachimbo-de-madeira',
    'Cachimbo de madeira para linha de pretos-velhos e firmas no congá.',
    1990,
    '/products/kit-limpeza.svg',
    '11111111-1111-1111-1111-111111111107',
    true
  ),
  (
    '22222222-2222-2222-2222-222222222212',
    'Incenso de limpeza',
    'incenso-de-limpeza',
    'Incenso para limpeza e harmonização do ambiente — casa, loja ou terreiro.',
    1590,
    '/products/banho-ervas.svg',
    '11111111-1111-1111-1111-111111111105',
    true
  )
on conflict (slug) do nothing;
