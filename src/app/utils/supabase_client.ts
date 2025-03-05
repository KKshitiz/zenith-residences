import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL as string; // Add this to your .env file
const supabaseKey = process.env.SUPABASE_SERVICE_KEY as string; // Add this to your .env file

export const supabase = createClient(supabaseUrl, supabaseKey);
