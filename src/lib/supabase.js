import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase initialization:', {
  urlConfigured: !!supabaseUrl,
  keyConfigured: !!supabaseAnonKey,
  url: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'MISSING'
})

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('CRITICAL: Supabase environment variables are not set!', {
    VITE_SUPABASE_URL: supabaseUrl,
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? 'SET' : 'MISSING'
  })
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper to get video URL from Supabase Storage
export const getVideoUrl = (filename) => {
  return `${supabaseUrl}/storage/v1/object/public/vsl-videos/${filename}`
}
