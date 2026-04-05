import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const FALLBACK_SUPABASE_URL = "https://placeholder.supabase.co";
const FALLBACK_SUPABASE_KEY = "placeholder-anon-key";

export const supabase = createClient(
  SUPABASE_URL ?? FALLBACK_SUPABASE_URL,
  SUPABASE_ANON_KEY ?? FALLBACK_SUPABASE_KEY,
);
