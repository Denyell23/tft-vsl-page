/**
 * Girly.bio Tracking SDK
 * Lightweight client for VSL funnel event tracking
 */

class GirlyBioTracker {
  constructor(config) {
    this.apiUrl = config.apiUrl || 'https://girly.bio/api/v1'
    this.externalId = config.externalId
    this.apiKey = config.apiKey
    this.linkId = config.linkId
    this.sessionId = this.getOrCreateSessionId()
    this.debug = config.debug || false
    this.pageLoadTime = Date.now()
  }

  /**
   * Get or create session ID
   */
  getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem('gb_session_id')
    if (!sessionId) {
      sessionId = this.generateUUID()
      sessionStorage.setItem('gb_session_id', sessionId)
    }
    return sessionId
  }

  /**
   * Generate UUID v4
   */
  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  /**
   * Track an event
   */
  async track(eventType, eventData = {}) {
    const payload = {
      external_id: this.externalId,
      link_id: this.linkId,
      session_id: this.sessionId,
      event_type: eventType,
      event_data: eventData,
      page_url: window.location.href,
      referrer: document.referrer,
    }

    if (this.debug) {
      console.log('[GirlyBio] Tracking event:', payload)
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
      }

      // Add API key if provided
      if (this.apiKey) {
        headers['Authorization'] = `Bearer ${this.apiKey}`
      }

      const response = await fetch(`${this.apiUrl}/events`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(`HTTP ${response.status}: ${error.message || 'Unknown error'}`)
      }

      const result = await response.json()

      if (this.debug) {
        console.log('[GirlyBio] Event tracked successfully:', result)
      }

      return result
    } catch (error) {
      console.error('[GirlyBio] Failed to track event:', error)
      // Fail silently in production
      if (this.debug) {
        throw error
      }
    }
  }

  /**
   * Page tracking
   */
  trackPageLoad(funnelStep, pageTitle = document.title) {
    const loadTime = (performance.timing?.loadEventEnd - performance.timing?.navigationStart) / 1000 || 0
    return this.track('page_load', {
      funnel_step: funnelStep,
      page_title: pageTitle,
      load_time: loadTime,
    })
  }

  trackPageExit(funnelStep) {
    const timeOnPage = (Date.now() - this.pageLoadTime) / 1000
    return this.track('page_unload', {
      funnel_step: funnelStep,
      time_on_page: timeOnPage,
    })
  }

  trackPageScroll(percent, funnelStep) {
    const timeToScroll = (Date.now() - this.pageLoadTime) / 1000
    return this.track('page_scroll', {
      percent,
      funnel_step: funnelStep,
      time_to_scroll: timeToScroll,
    })
  }

  /**
   * Video tracking
   */
  trackVideoPlay(videoId, currentTime, duration) {
    return this.track('video_play', {
      video_id: videoId,
      current_time: currentTime,
      duration,
    })
  }

  trackVideoPause(videoId, currentTime, duration, watchTime) {
    return this.track('video_pause', {
      video_id: videoId,
      current_time: currentTime,
      duration,
      watch_time_so_far: watchTime,
    })
  }

  trackVideoProgress(videoId, percent, currentTime, duration, watchTime) {
    return this.track('video_progress', {
      video_id: videoId,
      percent,
      current_time: currentTime,
      duration,
      watch_time_so_far: watchTime,
    })
  }

  trackVideoComplete(videoId, duration, watchTime) {
    return this.track('video_complete', {
      video_id: videoId,
      duration,
      watch_time: watchTime,
      completion_rate: watchTime / duration,
    })
  }

  /**
   * Form tracking
   */
  trackFormLoad(formId, fields) {
    return this.track('form_load', {
      form_id: formId,
      fields,
    })
  }

  trackFormStart(formId, firstField) {
    return this.track('form_start', {
      form_id: formId,
      first_field: firstField,
    })
  }

  trackFormSubmit(formId, fields, timeToSubmit) {
    return this.track('form_submit', {
      form_id: formId,
      fields_submitted: fields,
      time_to_submit: timeToSubmit,
    })
  }

  trackFormError(formId, errorFields, errorMessages) {
    return this.track('form_error', {
      form_id: formId,
      error_fields: errorFields,
      error_messages: errorMessages,
    })
  }

  /**
   * Button/CTA tracking
   */
  trackButtonClick(buttonId, buttonText, buttonLocation, funnelStep) {
    const timeOnPage = (Date.now() - this.pageLoadTime) / 1000
    return this.track('button_click', {
      button_id: buttonId,
      button_text: buttonText,
      button_location: buttonLocation,
      funnel_step: funnelStep,
      time_on_page: timeOnPage,
    })
  }

  trackCtaClick(ctaId, ctaText, ctaLocation, funnelStep) {
    const timeOnPage = (Date.now() - this.pageLoadTime) / 1000
    return this.track('cta_click', {
      cta_id: ctaId,
      cta_text: ctaText,
      cta_location: ctaLocation,
      funnel_step: funnelStep,
      time_on_page: timeOnPage,
    })
  }

  /**
   * Modal tracking
   */
  trackModalOpen(modalId, triggeredBy) {
    return this.track('modal_open', {
      modal_id: modalId,
      triggered_by: triggeredBy,
    })
  }

  trackModalClose(modalId, timeOpen) {
    return this.track('modal_close', {
      modal_id: modalId,
      time_open: timeOpen,
    })
  }
}

export default GirlyBioTracker
