// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tyacvqyyptjlbjlyaahb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5YWN2cXl5cHRqbGJqbHlhYWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NDg0NzUsImV4cCI6MjA2MTMyNDQ3NX0.VYfDJPSZMiThCTFlWp9PGdVN9wzCgy4BLVz5wHl2FKU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);