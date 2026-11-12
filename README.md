# Caboclo Pena Vermelha

Landing page + catálogo visual (MVP) da loja Caboclo Pena Vermelha — foco em artigos de Umbanda e Candomblé.

## Stack

- **Next.js** (App Router) — front e futuras rotas de API
- **Supabase** — Postgres + Storage (opcional no MVP; há seed local)
- **Vercel** — hosting recomendado

## Desenvolvimento

```bash
cp .env.example .env.local
npm install
npm run dev
```

Sem variáveis do Supabase, o site usa produtos de exemplo em `src/lib/seed-data.ts`.

## Docker (dev com hot reload)

O `docker compose up` sobe o Next em modo **dev**: alterações em `src/`, `public/` etc. refletem sozinhas (polling ligado para WSL).

```bash
docker compose up --build
```

Abra **http://localhost:3000**

Parar:

```bash
docker compose down
```

Variáveis: use `.env.local` na raiz (WhatsApp/Supabase).  
Depois de mudar o número do WhatsApp, reinicie:

```bash
docker compose restart
```

Produção (sem hot reload):

```bash
npm run docker:prod
```

### Variáveis

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anon |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp com DDI (ex: `5511999999999`) |

## Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. No SQL Editor, rode `supabase/schema.sql`
3. Rode `supabase/seed.sql` (opcional)
4. Em Storage, confirme o bucket `products` (público)
5. Preencha `.env.local` e reinicie o dev server

Cadastro de produtos no MVP: Table Editor do Supabase + upload no bucket `products`.

## Deploy na Vercel

1. Suba o repositório no GitHub/GitLab
2. Importe o projeto em [vercel.com](https://vercel.com)
3. Configure as mesmas variáveis de ambiente
4. Deploy — domínio `.vercel.app` grátis; depois aponte seu `.com.br`

```bash
npm run build
```

## Próximas fases

1. Painel `/admin` (Supabase Auth)
2. Carrinho
3. Checkout Mercado Pago (Pix)

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servir build
- `npm run lint` — ESLint
