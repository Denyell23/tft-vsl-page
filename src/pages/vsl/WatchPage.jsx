import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../../assets/images'
import { useGirlyBioTracker, usePageTracking, useScrollTracking, useVideoTracking } from '../../hooks/useGirlyBioTracker'
import { getVideoUrl } from '../../lib/supabase'

const UNLOCK_DELAY_MS = 10_000

const VALUE_STACK = [
  {
    title: 'The Full TFT Trading Course (18+ Lessons)',
    description:
      'Everything from candlesticks to psychology. Visual-first. No jargon. Go at your own pace.',
  },
  {
    title: 'The TFT Trading Journal',
    description:
      'Our custom-built journal that tracks your trades, calculates your stats, and shows you exactly where you\'re improving — and where you\'re leaking money.',
  },
  {
    title: 'Private TFT Discord Community',
    description:
      'Trade alongside other students. Get feedback. Share setups. Stay accountable. No toxic flex culture.',
  },
  {
    title: 'Weekly Live Sessions',
    description:
      'Real-time chart breakdowns, Q&A, and trade reviews with the TFT team.',
  },
  {
    title: 'Exclusive Access to the TFT Mentorship Track',
    description:
      'Direct coaching, personalized trade reviews, and an accelerated path to consistency.',
  },
]

const TAKEAWAYS = [
  { text: 'How to read price action without any indicators', icon: 'smileIcon' },
  { text: 'The 3 trade types that work across all markets', icon: 'brainIcon' },
  { text: 'Why 90% of traders fail (it\'s not what you think)', icon: 'smileIcon1' },
  { text: 'The journaling system that builds consistency automatically', icon: 'brainIcon4' },
]

function WatchPage() {
  const navigate = useNavigate()
  const tracker = useGirlyBioTracker()
  const [leadData, setLeadData] = useState(null)
  const [unlocked, setUnlocked] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(UNLOCK_DELAY_MS / 1000)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const maxWatchedTimeRef = useRef(0)

  // Track page view and scroll
  usePageTracking('watch-page', 'Trading for Toddlers - Watch Training')
  useScrollTracking('watch-page')

  // Track video events with HTML5 video
  useVideoTracking(videoRef, 'tft-training-video')

  // Prevent skipping forward in video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      // Update max watched time
      if (video.currentTime > maxWatchedTimeRef.current) {
        maxWatchedTimeRef.current = video.currentTime
      }
    }

    const handleSeeking = () => {
      // Prevent seeking beyond furthest watched point
      if (video.currentTime > maxWatchedTimeRef.current) {
        video.currentTime = maxWatchedTimeRef.current
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('seeking', handleSeeking)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('seeking', handleSeeking)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  // Custom control handlers
  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  useEffect(() => {
    const stored = sessionStorage.getItem('tft_lead')
    if (!stored) {
      navigate('/vsl', { replace: true })
      return
    }
    try {
      setLeadData(JSON.parse(stored))
    } catch {
      navigate('/vsl', { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setUnlocked(true)
          // Track CTA unlock
          tracker?.track('custom', {
            event_name: 'cta_unlocked',
            funnel_step: 'watch-page',
            unlock_time: UNLOCK_DELAY_MS / 1000,
          })
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [tracker])

  if (!leadData) return null

  return (
    <div className="min-h-screen bg-[#00102d] text-white overflow-x-hidden bg-texture-aurora">

      {/* Hero / Above Video */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 pt-12 sm:pt-16 pb-4 max-w-[800px] mx-auto">
        <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-[#1b6bfb] mb-3 tracking-wide">
          Welcome, {leadData.name}
        </p>
        <h1 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[44px] leading-tight text-white mb-4">
          Your Training Is Ready.
        </h1>
        <p className="font-['Commissioner'] font-medium text-base sm:text-lg text-white/60 max-w-[600px]">
          Watch the full breakdown below. When you're done, you'll unlock the next step.
        </p>
      </section>

      {/* Video Player */}
      <section className="relative z-10 px-4 pb-12 pt-6 max-w-[900px] mx-auto">
        <div className="relative w-full aspect-video rounded-[15px] overflow-hidden border border-[rgba(238,238,238,0.1)] shadow-2xl group">
          <video
            ref={videoRef}
            src={getVideoUrl('tft-training.mp4')}
            poster="/video-thumbnail.jpg"
            playsInline
            className="absolute inset-0 w-full h-full bg-black"
            style={{ objectFit: 'contain' }}
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Custom Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {isPlaying ? (
                  // Pause Icon
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-0">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  // Play Icon
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Gated CTA Section */}
      <section
        id="watch-cta"
        className="relative z-10 px-4 pb-16 max-w-[800px] mx-auto"
      >
        <div className="relative">
          {/* CTA content */}
          <div className="gradient-top-card p-6 sm:p-10">
            {/* Status bubble (CRM style) */}
            <div className="flex justify-center mb-6">
              {!unlocked ? (
                <div
                  className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 relative isolate overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,149,0,0.35) 0%, rgba(255,149,0,0.05) 100%), rgba(255,149,0,0.2)',
                    border: '0.5px solid rgba(255,149,0,0.35)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 0 3px rgba(0,0,0,0.04), inset 0.5px 0.5px 0 rgba(255,149,0,0.4), inset 0 0 1px rgba(255,149,0,0.3)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF9500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className="relative z-10 font-['Commissioner'] font-semibold text-sm tracking-[0.015em]" style={{ color: '#FF9500' }}>
                    Please watch the video
                  </span>
                  <span className="relative z-10 font-mono font-semibold text-sm tabular-nums" style={{ color: '#FF9500' }}>
                    0:{String(secondsLeft).padStart(2, '0')}
                  </span>
                </div>
              ) : (
                <div
                  className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 relative isolate overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(100,193,244,0.35) 0%, rgba(100,193,244,0.05) 100%), rgba(100,193,244,0.2)',
                    border: '0.5px solid rgba(100,193,244,0.35)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 0 3px rgba(0,0,0,0.04), inset 0.5px 0.5px 0 rgba(100,193,244,0.4), inset 0 0 1px rgba(100,193,244,0.3)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64C1F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 watch-bounce-arrow" style={{ animationDelay: '0s' }}>
                    <path d="M12 5v14" /><path d="M19 12l-7 7-7-7" />
                  </svg>
                  <span className="relative z-10 font-['Commissioner'] font-semibold text-sm tracking-[0.015em]" style={{ color: '#64C1F4' }}>
                    Scroll down to unlock
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64C1F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 watch-bounce-arrow" style={{ animationDelay: '0.15s' }}>
                    <path d="M12 5v14" /><path d="M19 12l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                filter: unlocked ? 'none' : 'blur(2px) grayscale(0.3)',
                opacity: unlocked ? 1 : 0.5,
              }}
            >
            <div className="text-center mb-8">
              <h2 className="font-['Noto_Sans'] font-semibold text-2xl sm:text-[36px] leading-tight text-white mb-3">
                Ready to Go Deeper?
              </h2>
              <p className="font-['Commissioner'] font-medium text-base sm:text-lg text-white/60 max-w-[560px] mx-auto mb-4">
                You just watched the foundation. Now here's where it gets real.
              </p>
              <p className="font-['Commissioner'] text-sm sm:text-base text-white/50 max-w-[560px] mx-auto leading-relaxed">
                Trading for Toddlers isn't just a course. It's a complete system designed to take you from total beginner to confident, independent trader. Here's everything you get when you take the next step:
              </p>
            </div>

            {/* Value Stack */}
            <div className="flex flex-col gap-3 mb-10">
              {VALUE_STACK.map((item, i) => (
                <div
                  key={i}
                  className="card-glass flex items-start gap-4 p-4 sm:p-5"
                >
                  <span className="watch-value-badge">{i + 1}</span>
                  <div className="min-w-0">
                    <h3 className="font-['Noto_Sans'] font-semibold text-base sm:text-lg text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-['Commissioner'] text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  if (unlocked) {
                    tracker?.trackCtaClick('unlock-access-btn', 'Unlock Full Access', 'watch-cta', 'watch-page')
                    navigate('/invite')
                  }
                }}
                className={`inline-block rounded-full px-8 sm:px-12 py-3 sm:py-4 font-['Commissioner'] font-semibold text-base sm:text-lg text-white transition-all duration-500 ${
                  unlocked
                    ? 'btn-primary watch-cta-pulse cursor-pointer'
                    : 'bg-white/10 cursor-not-allowed pointer-events-none'
                }`}
                aria-disabled={!unlocked}
                tabIndex={unlocked ? 0 : -1}
                disabled={!unlocked}
              >
                Unlock Full Access
              </button>
              <p className="font-['Commissioner'] text-xs sm:text-sm text-white/40 mt-4">
                Limited spots. No obligation to continue past the free content.
              </p>
            </div>

            {/* Urgency element */}
            {unlocked && (
              <p className="font-['Commissioner'] text-xs text-center text-[#1b6bfb]/70 mt-6">
                This offer is available to new students only.
              </p>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* What You Just Learned */}
      <section className="relative z-10 px-4 pb-20 max-w-[800px] mx-auto">
        <h2 className="font-['Noto_Sans'] font-semibold text-2xl sm:text-3xl text-white text-center mb-8">
          What You Just Learned
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TAKEAWAYS.map((item, i) => (
            <div
              key={i}
              className="card-glass flex items-start gap-4 p-5"
            >
              <img
                src={images[item.icon]}
                alt=""
                className="w-8 h-8 shrink-0 mt-0.5"
              />
              <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WatchPage
