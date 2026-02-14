import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../assets/images'
import { useGirlyBioTracker, usePageTracking, useScrollTracking } from '../hooks/useGirlyBioTracker'

function CheckoutPage() {
  const navigate = useNavigate()
  const tracker = useGirlyBioTracker()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [formStartTime, setFormStartTime] = useState(null)

  // Track page view and scroll
  usePageTracking('checkout', 'Trading for Toddlers - Checkout')
  useScrollTracking('checkout')

  // Check if user came from watch page
  useEffect(() => {
    const leadData = sessionStorage.getItem('tft_lead')
    if (!leadData) {
      // Redirect if no lead data
      navigate('/vsl', { replace: true })
    }

    // Track page load with order intent
    if (tracker) {
      tracker.track('custom', {
        event_name: 'checkout_page_viewed',
        funnel_step: 'checkout',
      })
    }
  }, [navigate, tracker])

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Track form start on first interaction
    if (!formStartTime) {
      setFormStartTime(Date.now())
      tracker?.trackFormStart('checkout-form', name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Calculate time to submit
    const timeToSubmit = formStartTime ? (Date.now() - formStartTime) / 1000 : 0

    // Track form submission
    tracker?.trackFormSubmit('checkout-form', Object.keys(formData), timeToSubmit)

    // Track conversion event
    tracker?.track('custom', {
      event_name: 'purchase_completed',
      funnel_step: 'checkout',
      order_value: 197, // Your product price
      currency: 'USD',
    })

    // Simulate payment processing
    setTimeout(() => {
      // Store order confirmation
      sessionStorage.setItem('tft_order', JSON.stringify({
        orderId: `TFT-${Date.now()}`,
        ...formData,
        amount: 197,
        date: new Date().toISOString(),
      }))

      // Navigate to thank you page
      navigate('/thank-you')
    }, 2000)
  }

  const handleCtaClick = (location) => {
    tracker?.trackCtaClick('secure-checkout-btn', 'Complete Purchase', location, 'checkout')
  }

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
      <nav className="relative z-10 flex justify-center pt-4 sm:pt-8 px-3 sm:px-4">
        <div className="flex items-center gap-3 sm:gap-6 bg-[#000c23] border border-[rgba(238,238,238,0.1)] rounded-full px-4 sm:px-8 py-2 sm:py-3 max-w-[951px] w-full sm:w-auto">
          <img src={images.navLogo} alt="TFT" className="h-[24px] sm:h-[30px] w-auto object-contain shrink-0" />
          <span className="font-['Commissioner'] font-medium text-sm text-white/75 ml-auto">
            Secure Checkout
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative z-10 px-4 py-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="card-glass p-6 sm:p-8">
              <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
                Your Order
              </h2>

              <div className="space-y-6 mb-6">
                {/* Product */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg bg-[#1b6bfb]/20 flex items-center justify-center shrink-0">
                    <img src={images.navLogo} alt="TFT" className="h-12 w-auto" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Commissioner'] font-semibold text-lg text-white mb-1">
                      Trading for Toddlers - Full Access
                    </h3>
                    <p className="font-['Commissioner'] text-sm text-white/60">
                      Lifetime access to all lessons, tools, and community
                    </p>
                  </div>
                </div>

                {/* Price breakdown */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <span className="font-['Commissioner'] text-white/75">Subtotal</span>
                    <span className="font-['Commissioner'] font-semibold text-white">$197</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Commissioner'] text-white/75">Tax</span>
                    <span className="font-['Commissioner'] font-semibold text-white">$0</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="font-['Commissioner'] font-semibold text-lg text-white">Total</span>
                    <span className="font-['Commissioner'] font-bold text-2xl text-[#1b6bfb]">$197</span>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-[rgba(27,107,251,0.15)] border border-[#1b6bfb] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#1b6bfb] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-['Commissioner'] font-semibold text-white mb-1">
                      30-Day Money-Back Guarantee
                    </h4>
                    <p className="font-['Commissioner'] text-sm text-white/75">
                      Try Trading for Toddlers risk-free. If you're not satisfied, get a full refund within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-['Commissioner'] text-sm text-white/75">256-bit SSL Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#1b6bfb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-['Commissioner'] text-sm text-white/75">Verified Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="order-1 lg:order-2">
            <div className="card-glass p-6 sm:p-8">
              <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
                Payment Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="h-px bg-white/10 my-6" />

                {/* Card Number */}
                <div>
                  <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    maxLength="19"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      required
                      maxLength="5"
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="font-['Commissioner'] text-sm text-white/75 mb-2 block">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      maxLength="4"
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-lg px-4 py-3 text-white font-['Commissioner'] focus:outline-none focus:border-[#1b6bfb] transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  onClick={() => handleCtaClick('payment-form')}
                  className="w-full btn-primary rounded-full px-6 py-4 font-['Commissioner'] font-semibold text-lg text-white disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {isProcessing ? 'Processing...' : 'Complete Purchase - $197'}
                </button>

                <p className="font-['Commissioner'] text-xs text-center text-white/50 mt-4">
                  By completing this purchase, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CheckoutPage
