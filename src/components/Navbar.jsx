import { images } from '../assets/images'

function Navbar({ ctaText = 'Learn Trading Today', ctaHref = '#cta', showNavLinks = true, onCtaClick }) {
  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault()
      onCtaClick()
    }
  }

  return (
    <nav className="relative z-10 flex justify-center pt-4 sm:pt-8 px-3 sm:px-4">
      <div className="flex items-center gap-3 sm:gap-6 bg-[#000c23] border border-[rgba(238,238,238,0.1)] rounded-full px-4 sm:px-8 py-2 sm:py-3 max-w-[951px] w-full sm:w-auto">
        <div className="flex items-center gap-2 shrink-0">
          <img src="/icon-512.png" alt="TFT Icon" className="h-[24px] sm:h-[30px] w-auto object-contain" />
          <img src="/tft-typeography.svg" alt="TFT" className="h-[18px] sm:h-[22px] w-auto object-contain" />
        </div>
        {showNavLinks && (
          <div className="hidden sm:flex items-center gap-6 ml-auto">
            <a href="#learn" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white transition-colors">
              What you learn
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a href="#comparison" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white transition-colors">
              Comparison
            </a>
          </div>
        )}
        <a
          href={ctaHref}
          onClick={handleCtaClick}
          className="ml-auto whitespace-nowrap"
          style={{
            background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            borderRadius: '99px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)'
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
          }}>{ctaText}</span>
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" style={{ zIndex: 2, flexShrink: 0, position: 'relative' }}>
            <path d="M1 1L6 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
