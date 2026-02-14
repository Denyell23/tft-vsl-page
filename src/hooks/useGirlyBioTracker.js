import { useEffect, useRef } from 'react'
import GirlyBioTracker from '../lib/girly-bio-tracker'

/**
 * React hook for Girly.bio tracking
 */
export function useGirlyBioTracker() {
  const trackerRef = useRef(null)

  useEffect(() => {
    if (!trackerRef.current) {
      trackerRef.current = new GirlyBioTracker({
        apiUrl: import.meta.env.VITE_GIRLY_BIO_API_URL,
        externalId: import.meta.env.VITE_GIRLY_BIO_EXTERNAL_ID,
        apiKey: import.meta.env.VITE_GIRLY_BIO_API_KEY,
        debug: import.meta.env.VITE_APP_ENV === 'development',
      })
    }
  }, [])

  return trackerRef.current
}

/**
 * Track page view on mount
 */
export function usePageTracking(funnelStep, pageTitle) {
  const tracker = useGirlyBioTracker()

  useEffect(() => {
    if (!tracker) return

    // Track page load
    tracker.trackPageLoad(funnelStep, pageTitle)

    // Track page exit
    const handleBeforeUnload = () => {
      tracker.trackPageExit(funnelStep)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [tracker, funnelStep, pageTitle])
}

/**
 * Track scroll depth
 */
export function useScrollTracking(funnelStep) {
  const tracker = useGirlyBioTracker()
  const trackedMilestones = useRef(new Set())

  useEffect(() => {
    if (!tracker) return

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      // Track at 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone)
          tracker.trackPageScroll(milestone, funnelStep)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [tracker, funnelStep])
}

/**
 * Track video events
 */
export function useVideoTracking(videoRef, videoId) {
  const tracker = useGirlyBioTracker()
  const watchTimeRef = useRef(0)
  const lastTimeRef = useRef(0)
  const trackedMilestonesRef = useRef(new Set())
  const hasTrackedPlayRef = useRef(false)

  useEffect(() => {
    if (!tracker || !videoRef?.current) return

    const video = videoRef.current

    const handlePlay = () => {
      if (!hasTrackedPlayRef.current) {
        tracker.trackVideoPlay(videoId, video.currentTime, video.duration)
        hasTrackedPlayRef.current = true
      }
    }

    const handlePause = () => {
      tracker.trackVideoPause(
        videoId,
        video.currentTime,
        video.duration,
        watchTimeRef.current
      )
    }

    const handleTimeUpdate = () => {
      // Track watch time (exclude seeks)
      if (!video.paused) {
        const timeDiff = video.currentTime - lastTimeRef.current
        if (timeDiff > 0 && timeDiff < 2) {
          watchTimeRef.current += timeDiff
        }
        lastTimeRef.current = video.currentTime
      }

      // Track progress milestones
      const percent = Math.round((video.currentTime / video.duration) * 100)
      const milestones = [25, 50, 75, 90, 100]

      milestones.forEach((milestone) => {
        if (percent >= milestone && !trackedMilestonesRef.current.has(milestone)) {
          trackedMilestonesRef.current.add(milestone)
          tracker.trackVideoProgress(
            videoId,
            milestone,
            video.currentTime,
            video.duration,
            watchTimeRef.current
          )

          // Track complete event at 100%
          if (milestone === 100) {
            tracker.trackVideoComplete(videoId, video.duration, watchTimeRef.current)
          }
        }
      })
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [tracker, videoRef, videoId])
}
