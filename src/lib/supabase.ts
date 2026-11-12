import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) return false;
  if (url.includes("seu-projeto") || key === "sua-anon-key") return false;

  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname.endsWith(".supabase.co")
    );
  } catch {
    return false;
  }
}

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
  }

  return client;
}

export function getPublicImageUrl(imagePath: string | null): string | null {
  if (!imagePath) return null;
  if (imagePath.startsWith("http") || imagePath.startsWith("/")) {
    return imagePath;
  }

  const supabase = getSupabase();
  if (!supabase) return null;

  const { data } = supabase.storage.from("products").getPublicUrl(imagePath);
  return data.publicUrl;
}
