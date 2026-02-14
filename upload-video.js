import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const supabaseUrl = 'https://tjynencrgyhquibjbdqk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeW5lbmNyZ3locXVpYmpiZHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNDQxMzgsImV4cCI6MjA4MzgyMDEzOH0.LwHv9ewBIkVJQJvB3WYnJyLOAJMiwjTS-HMKNPwYmno'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function uploadVideo() {
  try {
    console.log('📹 Reading video file...')
    const videoPath = '/Users/denyell/Documents/Premier Pro Edits/Al First Video/IMG_8472_1.mp4'
    const videoBuffer = readFileSync(videoPath)

    console.log(`✅ Video loaded (${(videoBuffer.length / 1024 / 1024).toFixed(2)} MB)`)
    console.log('📤 Uploading to Supabase Storage...')

    const { data, error } = await supabase.storage
      .from('vsl-videos')
      .upload('tft-training.mp4', videoBuffer, {
        contentType: 'video/mp4',
        cacheControl: '3600',
        upsert: true // This will overwrite if the file already exists
      })

    if (error) {
      console.error('❌ Upload failed:', error.message)
      process.exit(1)
    }

    console.log('✅ Upload successful!')
    console.log('📍 Video URL:', `${supabaseUrl}/storage/v1/object/public/vsl-videos/tft-training.mp4`)
    console.log('\n🎉 Your video is now live! Refresh your browser to see it.')
  } catch (err) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

uploadVideo()
