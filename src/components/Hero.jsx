import { images } from '../assets/images';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-bg">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <img src={images.heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Badge */}
        <div className="bg-navy-deeper border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="text-white/90 text-lg font-medium font-[Commissioner]">
            LIVE
          </span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="liveGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#FF4444', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#CC0000', stopOpacity: 1 }} />
              </radialGradient>
            </defs>
            <circle cx="9" cy="9" r="9" fill="url(#liveGradient)" />
            <circle cx="9" cy="9" r="9" fill="url(#liveGradient)">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Main heading */}
        <div className="relative">
          <h1 className="font-[Noto_Sans] font-semibold text-4xl md:text-[56px] md:leading-[64px] text-white">
            Learn Trading Like You're Five.
            <br />
            <span className="font-bold">
              {"    "}
              <span className="text-blue-primary">Win</span> Like a Pro.
            </span>
          </h1>
          <img
            src={images.awardIcon}
            alt=""
            className="absolute -left-4 top-12 w-[44px] h-[44px] -rotate-[7.66deg] hidden md:block"
          />
        </div>

        {/* Subheading */}
        <p className="text-white/75 text-lg md:text-xl font-medium font-[Commissioner] max-w-[710px] leading-8">
          Trading doesn't have to be confusing, intimidating, or full of fake gurus.
          <br /><br />
          Trading for Toddlers breaks down trading into simple, visual, step-by-step lessons so anyone can understand, even if you're starting from zero.
        </p>

        {/* CTA Button */}
        <a href="#cta" className="btn-primary rounded-full px-10 py-6 text-xl font-semibold font-[Commissioner] text-white no-underline">
          Learn Trading the easy way
        </a>

        {/* Feature tags */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-center">
          <div className="flex items-center gap-2">
            <img src={images.smileIcon} alt="" className="w-6 h-6" />
            <span className="text-white/75 text-lg font-medium font-[Commissioner]">
              No jargon. No ego. No overwhelm.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={images.brainIcon} alt="" className="w-6 h-6" />
            <span className="text-white/75 text-lg font-medium font-[Commissioner]">
              Just clean logic, clear rules, and repeatable systems.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
