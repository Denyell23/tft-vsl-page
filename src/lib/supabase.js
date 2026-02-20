import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper to get video URL from Supabase Storage
export const getVideoUrl = (filename) => {
  return `${supabaseUrl}/storage/v1/object/public/vsl-videos/${filename}`
}
