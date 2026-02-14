import { images } from '../assets/images'

function CardDesignsPage() {
  const sampleItems = [
    { icon: images.brainIcon, text: 'The "Toddler Method" -- a trading system so simple it fits on a napkin' },
    { icon: images.smileIcon, text: "How to read a chart in under 60 seconds (even if you've never seen one before)" },
    { icon: images.brainIcon, text: "A trading system that works in any market -- stocks, crypto, forex, and beyond" },
    { icon: images.smileIcon, text: "Why you don't need signals, bots, or a Discord group telling you what to buy" },
  ]

  return (
    <div className="min-h-screen bg-[#00102d] text-white p-8">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-['Noto_Sans'] font-bold text-4xl sm:text-5xl text-white mb-12 text-center">
          Card Design Variations
        </h1>

        {/* Design 1: Current - Faded Background Icon (Bottom Right) */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 1: Faded Background Icon (Bottom Right)
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 2: Faded Background Icon (Top Left) */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 2: Faded Background Icon (Top Left)
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -top-2 -left-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 3: Centered Background Icon */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 3: Centered Background Icon
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-[0.04] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 4: Gradient Background with Icon */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 4: Gradient Background with Icon
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[12px] p-4 sm:p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(27, 107, 251, 0.1) 0%, rgba(27, 107, 251, 0.02) 100%)',
                  border: '1px solid rgba(27, 107, 251, 0.2)'
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.1] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 5: With Small Icon Badge */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 5: Icon Badge + Faded Background
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none"
                />
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-8 h-8 bg-[rgba(27,107,251,0.15)] rounded-lg flex items-center justify-center shrink-0">
                    <img src={item.icon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 6: Bordered Top Accent */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 6: Top Border Accent
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
                style={{ borderTop: '3px solid #1b6bfb' }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 7: Glow Effect */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 7: Glow Effect
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(27,107,251,0.2)] rounded-[12px] p-4 sm:p-5"
                style={{
                  boxShadow: '0 0 20px rgba(27, 107, 251, 0.1)'
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.08] pointer-events-none"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(27, 107, 251, 0.3))'
                  }}
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 8: Minimal with Left Bar */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 8: Left Accent Bar
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5"
                style={{ borderLeft: '4px solid #1b6bfb' }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 9: Hover Lift Effect */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 9: Hover Lift Effect
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(238,238,238,0.08)] rounded-[12px] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(27,107,251,0.3)] hover:shadow-lg hover:shadow-[rgba(27,107,251,0.1)] cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.06] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.1]"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design 10: Dark Mode Glass */}
        <section className="mb-16">
          <h2 className="font-['Noto_Sans'] font-semibold text-2xl text-white mb-6">
            Design 10: Glass Morphism
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sampleItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[12px] p-4 sm:p-5 backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.08] pointer-events-none"
                />
                <div className="relative z-10">
                  <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/90">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <a
            href="/vsl"
            className="inline-block px-8 py-3 bg-[#1b6bfb] text-white rounded-full font-['Commissioner'] font-semibold hover:opacity-90 transition-opacity"
          >
            Back to VSL Page
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardDesignsPage
