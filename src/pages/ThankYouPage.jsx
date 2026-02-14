import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../assets/images'
import { useGirlyBioTracker, usePageTracking } from '../hooks/useGirlyBioTracker'

function ThankYouPage() {
  const navigate = useNavigate()
  const tracker = useGirlyBioTracker()
  const [orderData, setOrderData] = useState(null)

  // Track page view
  usePageTracking('thank-you', 'Trading for Toddlers - Thank You')

  useEffect(() => {
    const stored = sessionStorage.getItem('tft_order')
    if (!stored) {
      // Redirect if no order data
      navigate('/', { replace: true })
      return
    }

    try {
      const order = JSON.parse(stored)
      setOrderData(order)

      // Track conversion completion
      if (tracker) {
        tracker.track('custom', {
          event_name: 'thank_you_page_viewed',
          funnel_step: 'thank-you',
          order_id: order.orderId,
          order_value: order.amount,
        })
      }
    } catch {
      navigate('/', { replace: true })
    }
  }, [navigate, tracker])

  const handleDashboardClick = () => {
    tracker?.trackCtaClick('dashboard-access-btn', 'Access Your Dashboard', 'hero', 'thank-you')
    // Navigate to member dashboard (you'd implement this)
    window.location.href = 'https://members.tradingfortoddlers.com'
  }

  if (!orderData) return null

  return (
    <div className="min-h-screen bg-[#00102d] text-white overflow-x-hidden">
      {/* Confetti Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a3f] via-[#00102d] to-[#00102d]" />
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #1b6bfb 0%, transparent 70%)' }}
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 py-16 sm:py-24 max-w-[800px] mx-auto min-h-screen justify-center">
        {/* Success Icon */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#1b6bfb]/20 border-4 border-[#1b6bfb] flex items-center justify-center mx-auto animate-scale-in">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#1b6bfb]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-['Noto_Sans'] font-bold text-3xl sm:text-[56px] leading-tight sm:leading-[64px] text-white mb-4">
          Welcome to Trading for Toddlers!
        </h1>

        <p className="font-['Commissioner'] font-medium text-base sm:text-xl text-white/75 max-w-[600px] mb-8">
          Your order has been confirmed. Check your email for login details and next steps.
        </p>

        {/* Order Summary Card */}
        <div className="card-glass p-6 sm:p-8 w-full max-w-[500px] mb-8">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <span className="font-['Commissioner'] text-white/75">Order Number</span>
            <span className="font-['Commissioner'] font-semibold text-white">{orderData?.orderId}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-['Commissioner'] text-white/75">Amount Paid</span>
            <span className="font-['Commissioner'] font-bold text-2xl text-[#1b6bfb]">${orderData?.amount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-['Commissioner'] text-white/75">Email</span>
            <span className="font-['Commissioner'] text-sm text-white/90">{orderData?.email}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleDashboardClick}
          className="btn-primary rounded-full px-8 sm:px-12 py-4 sm:py-6 font-['Commissioner'] font-semibold text-lg sm:text-xl text-white mb-8"
        >
          Access Your Dashboard
        </button>

        {/* What's Next */}
        <div className="w-full max-w-[600px]">
          <h2 className="font-['Noto_Sans'] font-semibold text-xl sm:text-2xl text-white mb-6">
            What Happens Next?
          </h2>

          <div className="space-y-4 text-left">
            {[
              {
                step: '1',
                title: 'Check Your Email',
                description: "You'll receive a welcome email with your login credentials within 5 minutes.",
              },
              {
                step: '2',
                title: 'Access Your Dashboard',
                description: 'Log in to start Lesson 1. The entire course is immediately available.',
              },
              {
                step: '3',
                title: 'Join the Community',
                description: 'Get your Discord invite in the welcome email. Connect with other students.',
              },
              {
                step: '4',
                title: 'Start Learning',
                description: 'Go at your own pace. Every lesson builds on the last.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-lg p-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#1b6bfb]/20 border border-[#1b6bfb] flex items-center justify-center shrink-0">
                  <span className="font-['Commissioner'] font-bold text-[#1b6bfb]">{item.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-['Commissioner'] font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="font-['Commissioner'] text-sm text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-[600px]">
          <p className="font-['Commissioner'] text-sm text-white/60 mb-2">
            Questions? Email us at{' '}
            <a href="mailto:support@tradingfortoddlers.com" className="text-[#1b6bfb] hover:underline">
              support@tradingfortoddlers.com
            </a>
          </p>
          <p className="font-['Commissioner'] text-xs text-white/40">
            Average response time: Under 2 hours
          </p>
        </div>
      </section>
    </div>
  )
}

export default ThankYouPage
