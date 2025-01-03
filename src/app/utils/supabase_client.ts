import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string; // Add this to your .env file
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string; // Add this to your .env file

export const supabase = createClient(supabaseUrl, supabaseKey);
