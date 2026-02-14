import { images } from '../assets/images'

const DESIGNS = [
  {
    name: 'Grid Pattern + Radial Glow',
    className: 'bg-texture-grid',
    description: 'Subtle dot grid with a soft blue radial glow from center-top. Tech/dashboard aesthetic.',
  },
  {
    name: 'Aurora / Gradient Mesh',
    className: 'bg-texture-aurora',
    description: 'Animated color blobs that slowly drift and morph. Northern Lights vibe, very subtle.',
  },
  {
    name: 'Noise Grain + Vignette',
    className: 'bg-texture-grain',
    description: 'Film grain texture with dark vignette edges. Premium, cinematic feel.',
  },
  {
    name: 'Geometric Low-Poly',
    className: 'bg-texture-geometric',
    description: 'Tessellated triangles in varying shades of navy. Adds depth without distraction.',
  },
  {
    name: 'Particle Stars',
    className: 'bg-texture-stars',
    description: 'Subtle animated star dots at varying sizes that slowly drift. Space/depth feel.',
  },
]

function SampleContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-6">
      <div className="flex items-center gap-2 bg-[#000c23]/80 border border-[rgba(238,238,238,0.1)] rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
        <p className="font-['Commissioner'] font-medium text-base text-white/90">
          Introducing TFT - Exclusive Launch Offer
        </p>
      </div>
      <h1 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-5xl leading-tight text-white mb-2">
        Learn Trading Like You're Five.
      </h1>
      <h1 className="font-['Noto_Sans'] font-bold text-3xl sm:text-5xl leading-tight mb-6">
        <span className="text-[#1b6bfb]">Win</span>
        <span> Like a Pro.</span>
      </h1>
      <p className="font-['Commissioner'] font-medium text-lg text-white/60 max-w-[600px] mb-8">
        Trading for Toddlers breaks down trading into simple, visual, step-by-step lessons so anyone can understand.
      </p>
      <a className="btn-primary rounded-full px-10 py-5 font-['Commissioner'] font-semibold text-lg text-white">
        Learn Trading the easy way
      </a>
    </div>
  )
}

function DesignsPage() {
  return (
    <div className="min-h-screen bg-[#00102d] text-white">
      {/* Header */}
      <div className="px-4 pt-12 pb-8 max-w-[1000px] mx-auto text-center">
        <img src={images.navLogo} alt="TFT" className="h-[30px] w-auto object-contain mx-auto mb-6" />
        <h1 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[44px] leading-tight text-white mb-4">
          Background Texture Options
        </h1>
        <p className="font-['Commissioner'] font-medium text-lg text-white/60 max-w-[600px] mx-auto">
          Preview different background treatments for the TFT landing page. Each option keeps the same navy color palette but adds visual depth and texture.
        </p>
      </div>

      {/* Design Previews */}
      <div className="space-y-6 pb-20">
        {DESIGNS.map((design, i) => (
          <div key={i} className="px-4">
            {/* Label */}
            <div className="max-w-[1000px] mx-auto mb-3 flex items-baseline gap-3">
              <span className="font-['Noto_Sans'] font-semibold text-xl text-white">
                Option {i + 1}:
              </span>
              <span className="font-['Commissioner'] font-medium text-xl text-[#1b6bfb]">
                {design.name}
              </span>
            </div>
            <div className="max-w-[1000px] mx-auto mb-4">
              <p className="font-['Commissioner'] text-sm text-white/50">
                {design.description}
              </p>
            </div>

            {/* Preview Card */}
            <div
              className={`relative w-full min-h-[550px] sm:min-h-[600px] flex items-center justify-center overflow-hidden rounded-[20px] border border-[rgba(238,238,238,0.1)] ${design.className}`}
            >
              <SampleContent />
            </div>

            {/* CSS class name */}
            <div className="max-w-[1000px] mx-auto mt-3">
              <code className="font-mono text-xs text-white/30 bg-white/5 px-2 py-1 rounded">
                .{design.className}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignsPage
