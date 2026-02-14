import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import LeadCaptureModal from '../../components/LeadCaptureModal'
import { images } from '../../assets/images'
import { useScrollReveal, useScrollRevealGroup } from '../../hooks/useScrollReveal'
import { useGirlyBioTracker, usePageTracking, useScrollTracking } from '../../hooks/useGirlyBioTracker'

function VslPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false)
  const navigate = useNavigate()
  const tracker = useGirlyBioTracker()

  // Track page view and scroll
  usePageTracking('vsl-landing', 'Trading for Toddlers - Free VSL Training')
  useScrollTracking('vsl-landing')

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => setIsModalOpen(false)

  const handleFormSubmit = () => {
    closeModal()
    navigate('/vsl/watch')
  }

  // Scroll reveal refs
  const videoSectionRef = useScrollReveal()
  const socialProofHeadingRef = useScrollReveal()
  const testimonialCardsRef = useScrollRevealGroup({ staggerDelay: 150 })
  const discoverHeadingRef = useScrollReveal()
  const discoverItemsRef = useScrollRevealGroup({ staggerDelay: 120 })
  const whoHeadingRef = useScrollReveal()
  const whoForRef = useScrollRevealGroup({ staggerDelay: 100 })
  const whoNotRef = useScrollRevealGroup({ staggerDelay: 100 })
  const finalCtaRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-[#00102d] text-white overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute inset-x-0 top-0 h-[900px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a3f] via-[#00102d] to-[#00102d]" />
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #1b6bfb 0%, transparent 70%)' }}
        />
      </div>

      {/* Navbar */}
      <Navbar
        ctaText="Watch the Free Training"
        showNavLinks={false}
        onCtaClick={openModal}
      />

      {/* ===== Hero Section ===== */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 pt-6 sm:pt-8 pb-12 max-w-[800px] mx-auto">
        {/* Announcement Badge */}
        <button
          onClick={() => setIsChallengeModalOpen(true)}
          className="hero-animate hero-animate-delay-0 mb-6 cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            background: 'rgba(27, 107, 251, 0.1)',
            border: '1px solid rgba(27, 107, 251, 0.3)',
            borderRadius: '11px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '4px',
            position: 'relative'
          }}
        >
          <div style={{
            background: '#fff',
            border: '1px solid #FF4444',
            borderRadius: '7px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '1px 5px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="liveGradientVsl" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#FF4444', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#CC0000', stopOpacity: 1 }} />
                </radialGradient>
              </defs>
              <circle cx="6" cy="6" r="6" fill="url(#liveGradientVsl)">
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span style={{
              color: '#1b1b1d',
              opacity: 0.8,
              fontFamily: 'Commissioner, sans-serif',
              fontSize: '13px',
              fontWeight: 500
            }}>LIVE</span>
          </div>
          <span style={{
            color: '#ffffff',
            letterSpacing: '-0.28px',
            paddingRight: '8px',
            fontFamily: 'Commissioner, sans-serif',
            fontSize: '14px',
            fontWeight: 500
          }}>February 19th TFT CHALLENGE</span>
          {/* Click indicator icon - positioned outside bottom right */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              bottom: '-10px',
              right: '-13px',
              transform: 'rotate(-10deg)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}
          >
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" opacity="0.9"/>
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.5s" repeatCount="indefinite" />
          </svg>
        </button>

        {/* Headline */}
        <div className="hero-animate hero-animate-delay-1 mb-6">
          <h1 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[56px] text-white">
            The Trading Method So Simple, It Was Designed for Five-Year-Olds.
          </h1>
        </div>

        {/* Dashboard Image with Fake Play Button */}
        <div className="hero-animate hero-animate-delay-2 w-full max-w-[900px] mb-8">
          <button
            onClick={() => {
              tracker?.trackCtaClick('dashboard-thumbnail', 'Watch the Free Training', 'hero-dashboard', 'vsl-landing')
              openModal()
            }}
            className="relative block w-full group cursor-pointer rounded-[15px] overflow-hidden border border-[rgba(238,238,238,0.1)] shadow-2xl"
            aria-label="Watch the free training"
          >
            {/* Dashboard Image */}
            <img
              src="/tft-dashboard.png"
              alt="Trading for Toddlers Dashboard"
              className="w-full h-auto object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

            {/* Fake Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 ml-1" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Tagline under video */}
        <div className="hero-animate hero-animate-delay-3 mb-6">
          <h2 className="font-['Noto_Sans'] font-bold text-xl sm:text-[28px] leading-tight">
            <span className="text-[#1b6bfb]">It's Making Beginners Dangerous.</span>
          </h2>
        </div>

        {/* Subheadline */}
        <p className="hero-animate hero-animate-delay-4 font-['Commissioner'] font-medium text-base sm:text-xl leading-7 sm:leading-8 text-white/75 max-w-[710px] mb-8 px-2 sm:px-0">
          Most trading education is built to confuse you. This one was built to make you competent in weeks, not years. Watch the free training to see exactly how.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            tracker?.trackCtaClick('hero-cta', 'Watch the Free Training', 'hero', 'vsl-landing')
            openModal()
          }}
          className="hero-animate hero-animate-delay-4 mb-6"
          style={{
            background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            borderRadius: '99px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '11px 40px',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(27, 107, 251, 0.5), 0 0 0 6px rgba(27, 107, 251, 0.2), 0 10px 30px rgba(27, 107, 251, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)'
          }}
        >
          <span style={{
            color: '#fff',
            letterSpacing: '-0.18px',
            zIndex: 2,
            fontFamily: 'Commissioner, sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            position: 'relative'
          }}>Watch the Free Training</span>
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" style={{ zIndex: 2, flexShrink: 0, position: 'relative' }}>
            <path d="M1 1L6 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>

      {/* ===== What You'll Discover Section ===== */}
      <section id="what-you-get" className="relative z-10 px-4 py-16">
        <div className="max-w-[900px] mx-auto">
          <div ref={discoverHeadingRef} className="fade-in-up text-center mb-10">
            <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[56px] text-white mb-4">
              Here's What This Free Training Covers
            </h2>
          </div>

          <div ref={discoverItemsRef} className="grid grid-cols-2 gap-3 mb-10">
            {[
              { icon: images.smileIcon, text: "How to read a chart in under 60 seconds (even if you've never seen one before)" },
              { icon: images.brainIcon, text: "A trading system that works in any market -- stocks, crypto, forex, and beyond" },
              { icon: images.brainIcon, text: "Why you don't need signals, bots, or a Discord group telling you what to buy" },
              { icon: images.smileIcon, text: "The journaling habit that separates losing traders from profitable ones" },
              { icon: images.smileIcon, text: "Access to a community of traders who are in the same position as you, wanting to learn and progress" },
              { icon: images.brainIcon, text: "Learn a skill that stays with you for life -- at any level you choose" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal-item relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
                style={{ borderTop: '3px solid #1b6bfb' }}
              >
                {/* Large faded background icon */}
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none"
                />
                {/* Content */}
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <button
              onClick={() => {
                tracker?.trackCtaClick('discover-cta', 'Get Instant Access to the Training', 'what-you-get', 'vsl-landing')
                openModal()
              }}
              style={{
                background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '99px',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                padding: '11px 40px',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(27, 107, 251, 0.5), 0 0 0 6px rgba(27, 107, 251, 0.2), 0 10px 30px rgba(27, 107, 251, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)'
              }}
            >
              <span style={{
                color: '#fff',
                letterSpacing: '-0.18px',
                zIndex: 2,
                fontFamily: 'Commissioner, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                position: 'relative'
              }}>Get Instant Access to the Training</span>
              <svg width="7" height="14" viewBox="0 0 7 14" fill="none" style={{ zIndex: 2, flexShrink: 0, position: 'relative' }}>
                <path d="M1 1L6 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Who This Is For Section ===== */}
      <section id="who-this-is-for" className="relative z-10 px-4 py-16">
        <div className="max-w-[1000px] mx-auto">
          <div ref={whoHeadingRef} className="fade-in-up text-center mb-4">
            <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[56px] text-white mb-4">
              This Isn't for Everyone.
            </h2>
            <p className="font-['Commissioner'] font-medium text-lg sm:text-xl text-white/60">
              Trading for Toddlers was built for a specific kind of person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {/* IS for you */}
            <div className="card-glass p-5 sm:p-8">
              <h3 className="font-['Noto_Sans'] font-semibold text-xl sm:text-2xl text-white mb-6">
                This <span className="text-[#1b6bfb]">IS</span> for you if...
              </h3>
              <div className="h-px bg-white/10 mb-6" />
              <div ref={whoForRef} className="space-y-4">
                {[
                  "You're tired of watching gurus flex and never actually teach",
                  "You've tried trading before and felt completely lost",
                  "You want to learn the skill, not just follow someone else's trades",
                  "You have a job, school, or life -- and can't stare at screens all day",
                  "You want simple, repeatable rules -- not complicated strategies with 14 indicators",
                ].map((item, i) => (
                  <div key={i} className="reveal-item flex items-start gap-3">
                    <img src={images.greenTick} alt="" className="w-6 h-6 mt-0.5 shrink-0" />
                    <p className="font-['Commissioner'] font-medium text-base sm:text-lg text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* NOT for you */}
            <div className="card-glass p-5 sm:p-8">
              <h3 className="font-['Noto_Sans'] font-semibold text-xl sm:text-2xl text-white mb-6">
                This is <span className="text-red-400">NOT</span> for you if...
              </h3>
              <div className="h-px bg-white/10 mb-6" />
              <div ref={whoNotRef} className="space-y-4">
                {[
                  "You want someone to tell you exactly what to buy and when",
                  "You're looking for a get-rich-quick signal service",
                  "You aren't willing to practice and put in the reps",
                  "You think trading is gambling and just want to YOLO",
                ].map((item, i) => (
                  <div key={i} className="reveal-item flex items-start gap-3">
                    <img src={images.xIcon} alt="" className="w-6 h-6 mt-0.5 shrink-0" />
                    <p className="font-['Commissioner'] font-medium text-base sm:text-lg text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button
              onClick={() => {
                tracker?.trackCtaClick('who-for-cta', 'Watch the Training Now', 'who-this-is-for', 'vsl-landing')
                openModal()
              }}
              style={{
                background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '99px',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                padding: '11px 40px',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(27, 107, 251, 0.5), 0 0 0 6px rgba(27, 107, 251, 0.2), 0 10px 30px rgba(27, 107, 251, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)'
              }}
            >
              <span style={{
                color: '#fff',
                letterSpacing: '-0.18px',
                zIndex: 2,
                fontFamily: 'Commissioner, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                position: 'relative'
              }}>Watch the Training Now</span>
              <svg width="7" height="14" viewBox="0 0 7 14" fill="none" style={{ zIndex: 2, flexShrink: 0, position: 'relative' }}>
                <path d="M1 1L6 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Final CTA Section ===== */}
      <section className="relative z-10 py-16">
        <div className="px-4">
          <div className="max-w-[900px] mx-auto">
            <div ref={finalCtaRef} className="fade-in-up bg-[rgba(27,107,251,0.08)] border border-[rgba(27,107,251,0.2)] rounded-[20px] p-5 sm:p-12 text-center">
              <h2 className="font-['Noto_Sans'] font-semibold text-2xl sm:text-[48px] leading-tight sm:leading-[56px] text-white mb-6">
                Still scrolling? You already know you want in.
              </h2>

              <p className="font-['Commissioner'] font-medium text-base sm:text-xl leading-7 sm:leading-8 text-white/75 max-w-[700px] mx-auto mb-8">
                This training has helped thousands of complete beginners go from "I don't even know what a candlestick is" to placing confident, rule-based trades. It costs nothing to watch. The only thing you're risking is staying stuck.
              </p>

              <button
                onClick={() => {
                  tracker?.trackCtaClick('final-cta', 'Start Watching -- It\'s Free', 'final-cta-section', 'vsl-landing')
                  openModal()
                }}
                style={{
                  background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  borderRadius: '99px',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '11px 40px',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)',
                  cursor: 'pointer',
                  marginBottom: '16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(27, 107, 251, 0.5), 0 0 0 6px rgba(27, 107, 251, 0.2), 0 10px 30px rgba(27, 107, 251, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)'
                }}
              >
                <span style={{
                  color: '#fff',
                  letterSpacing: '-0.18px',
                  zIndex: 2,
                  fontFamily: 'Commissioner, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  position: 'relative'
                }}>Start Watching -- It's Free</span>
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" style={{ zIndex: 2, flexShrink: 0, position: 'relative' }}>
                  <path d="M1 1L6 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className="font-['Inter'] text-sm text-white/50">
                No credit card needed. Instant access after signup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="relative z-10 px-4 py-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={images.footerLogo} alt="TFT" className="h-[58px] w-auto object-contain mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
            <a href="#" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white">Privacy Policy</a>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <a href="#" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white">Terms & Conditions</a>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        <div className="mb-8">
          <h4 className="font-['Commissioner'] font-medium text-base text-white mb-3">
            Important Earnings & Legal Disclaimer
          </h4>
          <div className="font-['Inter'] text-sm leading-5 text-white/75 space-y-3" style={{ letterSpacing: '-0.224px' }}>
            <p>
              Any earnings or income examples shown by Trading for Toddlers are aspirational only and represent non-typical results. They are not a promise or guarantee of income or success.
            </p>
            <p>
              Trading for Toddlers does not provide financial advice. You are solely responsible for your own trading decisions and outcomes.
            </p>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 text-center sm:text-left">
          <p className="font-['Inter'] text-xs sm:text-sm text-white/75" style={{ letterSpacing: '-0.224px' }}>
            All rights reserved. Trading for Toddlers
          </p>
          <p className="font-['Inter'] text-xs sm:text-sm text-white/75" style={{ letterSpacing: '-0.224px' }}>
            &copy; 2025 StevenRTrades
          </p>
        </div>
      </footer>

      {/* ===== Lead Capture Modal ===== */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        headline="Fill out form to get access to community + training video"
        description="Enter your info below and you'll get instant access to the full TFT training."
        buttonText="Send Me the Training"
      />

      {/* ===== Challenge Modal ===== */}
      {isChallengeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.75)' }}
          onClick={() => setIsChallengeModalOpen(false)}
        >
          <div
            className="relative max-w-[600px] w-full rounded-[20px] p-8"
            style={{
              background: 'linear-gradient(135deg, #00102d 0%, #0a1a3f 100%)',
              border: '1px solid rgba(27, 107, 251, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsChallengeModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              style={{ fontSize: '24px', lineHeight: '1' }}
            >
              ×
            </button>

            {/* Title */}
            <h2 className="font-['Noto_Sans'] font-bold text-3xl sm:text-4xl text-white mb-3">
              Weekly TFT Challenge
            </h2>

            <p className="font-['Commissioner'] font-medium text-lg text-white/70 mb-6">
              New challenge every week. Test your skills. Win prizes.
            </p>

            {/* How It Works */}
            <h3 className="font-['Commissioner'] font-semibold text-lg text-white/95 mb-2">
              How It Works:
            </h3>
            <p className="font-['Commissioner'] text-sm text-white/60 mb-4">
              You have limited time to submit your prediction
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="#1b6bfb" opacity="0.8"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="#1b6bfb" opacity="0.8"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="#1b6bfb" opacity="0.8"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="#1b6bfb" opacity="0.8"/>
                </svg>
                <p className="font-['Commissioner'] text-base text-white/85">
                  We pick a ticker (BTC, ETH, stocks, etc.)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17L9 11L13 15L21 7" stroke="#1b6bfb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7H21V12" stroke="#1b6bfb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-['Commissioner'] text-base text-white/85">
                  You submit your prediction chart
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="10" rx="2" fill="#1b6bfb" opacity="0.8"/>
                  <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#1b6bfb" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="font-['Commissioner'] text-base text-white/85">
                  Submissions lock at deadline
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" opacity="0.9"/>
                </svg>
                <p className="font-['Commissioner'] text-base text-white/85">
                  Closest prediction wins
                </p>
              </div>
            </div>

            {/* Next Challenge & Prize */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <p className="font-['Commissioner'] font-semibold text-white/95 mb-1">
                Next Challenge: February 19th
              </p>
              <p className="font-['Commissioner'] text-sm text-white/60">
                Prize details announced to members in Discord
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                setIsChallengeModalOpen(false)
                openModal()
              }}
              className="w-full rounded-full py-4 font-['Commissioner'] font-semibold text-lg text-white transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 0 30px rgba(27, 107, 251, 0.4)'
              }}
            >
              Register for the Challenge
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VslPage
