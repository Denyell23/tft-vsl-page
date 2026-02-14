import { useEffect } from 'react'
import { images } from '../assets/images'
import { useGirlyBioTracker, usePageTracking } from '../hooks/useGirlyBioTracker'

const DISCORD_INVITE_URL = 'https://discord.gg/cHqeJJ3E8v'

function InvitePage() {
  const tracker = useGirlyBioTracker()

  usePageTracking('discord-invite', 'Join TFT Discord Community')

  const handleJoinDiscord = () => {
    tracker?.trackCtaClick('join-discord-btn', 'Join Discord Community', 'invite-page', 'discord-invite')
    window.open(DISCORD_INVITE_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#00102d] text-white flex items-center justify-center px-4 overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, #1b6bfb 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[600px] w-full text-center">
        {/* Main Card */}
        <div
          className="rounded-[20px] p-8 sm:p-12 mb-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #00102d 0%, #0a1a3f 100%)',
            border: '1px solid rgba(27, 107, 251, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Faded TFT Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <img
              src={images.navLogo}
              alt=""
              className="w-[300px] h-auto sm:w-[400px] opacity-[0.04]"
            />
          </div>

          {/* Discord Icon */}
          <div className="mb-6 flex justify-center relative z-10">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(88, 101, 242, 0.15)' }}
            >
              <img src="/discord-icon-svgrepo-com.svg" alt="Discord" className="w-12 h-12" />
            </div>
          </div>

          {/* Badge */}
          <div className="mb-4 flex justify-center relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.15) 100%)',
                border: '1px solid rgba(255, 215, 0, 0.5)',
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
              }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] animate-pulse" />
              <span
                className="font-['Commissioner'] font-semibold text-sm uppercase tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Private Access
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-['Noto_Sans'] font-bold text-3xl sm:text-4xl text-white mb-2 relative z-10">
            You Have Been Invited
          </h1>
          <h2 className="font-['Noto_Sans'] font-semibold text-xl sm:text-2xl text-[#1b6bfb] mb-8 relative z-10">
            To The TFT Private Discord
          </h2>

          {/* Join Discord Button */}
          <button
            onClick={handleJoinDiscord}
            className="w-full rounded-full py-4 font-['Commissioner'] font-semibold text-lg text-white transition-all hover:scale-[1.02] mb-4 flex items-center justify-center gap-3 relative z-10"
            style={{
              background: '#5865F2',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 0 30px rgba(88, 101, 242, 0.4), 0 8px 20px rgba(88, 101, 242, 0.3)'
            }}
          >
            <img src="/discord-icon-svgrepo-com.svg" alt="" className="w-6 h-6" />
            ACCESS PRIVATE COMMUNITY
          </button>

          <p className="font-['Commissioner'] font-medium text-base text-white/75 mb-3 relative z-10">
            Join an exclusive community of traders getting real results. Access full training, weekly live sessions, and connect with members only.
          </p>

          <p className="font-['Commissioner'] text-sm text-white/50 relative z-10">
            Opens Discord in a new tab. One-time invite link.
          </p>
        </div>

        {/* Info Card */}
        <div
          className="rounded-[15px] p-6 text-left"
          style={{
            background: 'rgba(88, 101, 242, 0.08)',
            border: '1px solid rgba(88, 101, 242, 0.25)'
          }}
        >
          <h3 className="font-['Commissioner'] font-semibold text-lg text-white/95 mb-3 flex items-center gap-2">
            <img src="/discord-icon-svgrepo-com.svg" alt="" className="w-5 h-5" />
            Inside The Private Community:
          </h3>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5865F2] mt-2 shrink-0" />
              <p className="font-['Commissioner'] text-base text-white/80">
                Full TFT Trading Course (18+ lessons)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5865F2] mt-2 shrink-0" />
              <p className="font-['Commissioner'] text-base text-white/80">
                Weekly live sessions with real traders
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5865F2] mt-2 shrink-0" />
              <p className="font-['Commissioner'] text-base text-white/80">
                Weekly TFT Challenges with prizes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5865F2] mt-2 shrink-0" />
              <p className="font-['Commissioner'] text-base text-white/80">
                Private community of serious traders
              </p>
            </div>
          </div>
        </div>

        {/* Help text */}
        <p className="font-['Commissioner'] text-sm text-white/40 mt-6">
          New to Discord? No problem. Keep this page open while you set up your account.
        </p>
      </div>
    </div>
  )
}

export default InvitePage
