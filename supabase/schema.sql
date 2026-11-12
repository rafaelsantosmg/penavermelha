-- Caboclo Pena Vermelha — schema MVP
-- Rode no SQL Editor do Supabase

create extension if not exists "pgcrypto";

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null default '',
  price_cents integer not null check (price_cents >= 0),
  image_path text,
  category_id uuid references public.categories (id) on delete set null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists products_category_id_idx on public.products (category_id);
create index if not exists products_active_idx on public.products (active);

alter table public.categories enable row level security;
alter table public.products enable row level security;

drop policy if exists "Public read categories" on public.categories;
create policy "Public read categories"
  on public.categories
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Public read active products" on public.products;
create policy "Public read active products"
  on public.products
  for select
  to anon, authenticated
  using (active = true);

-- Storage: bucket público de imagens do catálogo
insert into storage.buckets (id, name, public)
values ('products', 'products', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public read product images" on storage.objects;
create policy "Public read product images"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'products');

-- Upload manual pelo painel do Supabase (service role / dashboard).
-- Quando houver /admin, adicione policies de insert/update autenticadas.

-- ---- Extensão futura (NÃO criar no MVP) ----
-- orders, order_items, payments, cart_items
