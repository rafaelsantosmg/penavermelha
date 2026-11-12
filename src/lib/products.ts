import { seedCategories, seedProducts } from "@/lib/seed-data";
import { getPublicImageUrl, getSupabase } from "@/lib/supabase";
import type { Category, Product } from "@/lib/types";

function withCategory(product: Product, categories: Category[]): Product {
  return {
    ...product,
    category: categories.find((c) => c.id === product.category_id) ?? null,
    image_path: getPublicImageUrl(product.image_path) ?? product.image_path,
  };
}

export async function getCategories(): Promise<Category[]> {
  const supabase = getSupabase();
  if (!supabase) return seedCategories;

  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug")
    .order("name");

  if (error || !data) {
    console.error("Erro ao buscar categorias:", error?.message);
    return seedCategories;
  }

  return data;
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  const supabase = getSupabase();
  const categories = await getCategories();

  if (!supabase) {
    const filtered = categorySlug
      ? seedProducts.filter((product) => {
          const category = categories.find((c) => c.id === product.category_id);
          return category?.slug === categorySlug;
        })
      : seedProducts;

    return filtered
      .filter((p) => p.active)
      .map((p) => withCategory(p, categories));
  }

  let query = supabase
    .from("products")
    .select(
      "id, name, slug, description, price_cents, image_path, category_id, active, created_at, category:categories(id, name, slug)",
    )
    .eq("active", true)
    .order("created_at", { ascending: false });

  if (categorySlug) {
    const category = categories.find((c) => c.slug === categorySlug);
    if (!category) return [];
    query = query.eq("category_id", category.id);
  }

  const { data, error } = await query;

  if (error || !data) {
    console.error("Erro ao buscar produtos:", error?.message);
    return seedProducts
      .filter((p) => p.active)
      .map((p) => withCategory(p, categories));
  }

  return data.map((product) => ({
    ...product,
    category: Array.isArray(product.category)
      ? (product.category[0] ?? null)
      : (product.category ?? null),
    image_path: getPublicImageUrl(product.image_path),
  })) as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = getSupabase();
  const categories = await getCategories();

  if (!supabase) {
    const product = seedProducts.find((p) => p.slug === slug && p.active);
    return product ? withCategory(product, categories) : null;
  }

  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, slug, description, price_cents, image_path, category_id, active, created_at, category:categories(id, name, slug)",
    )
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    console.error("Erro ao buscar produto:", error.message);
  }

  if (!data) {
    const fallback = seedProducts.find((p) => p.slug === slug && p.active);
    return fallback ? withCategory(fallback, categories) : null;
  }

  return {
    ...data,
    category: Array.isArray(data.category)
      ? (data.category[0] ?? null)
      : (data.category ?? null),
    image_path: getPublicImageUrl(data.image_path),
  } as Product;
}

export async function getFeaturedProducts(limit = 3): Promise<Product[]> {
  const products = await getProducts();
  return products.slice(0, limit);
}
