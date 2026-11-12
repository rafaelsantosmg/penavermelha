export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price_cents: number;
  image_path: string | null;
  category_id: string;
  active: boolean;
  created_at: string;
  category?: Category | null;
};
