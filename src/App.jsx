import { images } from './assets/images'
import { useScrollReveal, useScrollRevealGroup } from './hooks/useScrollReveal'
import './App.css'

function App() {
  // Scroll reveal refs for section headings
  const beginnersHeadingRef = useScrollReveal()
  const scratchGridRef = useScrollRevealGroup({ staggerDelay: 150 })
  const visualsHeadingRef = useScrollReveal()
  const visualCardsRef = useScrollRevealGroup({ staggerDelay: 120 })
  const learnInsideHeadingRef = useScrollReveal()
  const lesson01Ref = useScrollReveal()
  const lesson02Ref = useScrollReveal()
  const lesson03Ref = useScrollReveal()
  const lesson04Ref = useScrollReveal()
  const realLifeHeadingRef = useScrollReveal()
  const personaCardsRef = useScrollRevealGroup({ staggerDelay: 120 })
  const toolsHeadingRef = useScrollReveal()
  const featureCardsRef = useScrollRevealGroup({ staggerDelay: 100 })
  const learnPracticeHeadingRef = useScrollReveal()
  const learnPracticeGridRef = useScrollRevealGroup({ staggerDelay: 120 })
  const longTermHeadingRef = useScrollReveal()
  const approachCardsRef = useScrollRevealGroup({ staggerDelay: 150 })
  const comparisonHeadingRef = useScrollReveal()
  const comparisonLeftRef = useScrollReveal()
  const comparisonRightRef = useScrollReveal()
  const ctaHeadingRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-[#00102d] text-white overflow-x-hidden">
      {/* Hero Background */}
      <div className="absolute inset-x-0 top-0 h-[900px] overflow-hidden pointer-events-none">
        <img
          src={images.heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00102d]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center pt-4 sm:pt-8 px-3 sm:px-4">
        <div className="flex items-center gap-3 sm:gap-6 bg-[#000c23] border border-[rgba(238,238,238,0.1)] rounded-full px-4 sm:px-8 py-2 sm:py-3 max-w-[951px] w-full sm:w-auto">
          <img src={images.navLogo} alt="TFT" className="h-[24px] sm:h-[30px] w-auto object-contain shrink-0" />
          <div className="hidden sm:flex items-center gap-6 ml-auto">
            <a href="#learn" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white transition-colors">
              What you learn
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a href="#comparison" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white transition-colors">
              Comparison
            </a>
          </div>
          <a href="#cta" className="btn-primary rounded-full px-4 sm:px-6 py-2 font-['Commissioner'] font-semibold text-sm sm:text-base text-white ml-auto whitespace-nowrap">
            Learn Trading Today
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-16 max-w-[800px] mx-auto">
        {/* Badge */}
        <div className="hero-animate hero-animate-delay-0 flex items-center gap-2 bg-[#000c23] border border-[rgba(238,238,238,0.1)] rounded-full px-3 sm:px-4 py-1 mb-6">
          <p className="font-['Commissioner'] font-medium text-sm sm:text-lg text-white/90 text-center">
            Introducing TFT - Exclusive Launch Offer
          </p>
          <img src={images.frameIcon} alt="" className="w-[18px] h-[18px] shrink-0" />
        </div>

        {/* Headline */}
        <div className="hero-animate hero-animate-delay-1 relative mb-6">
          <h1 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[56px] leading-tight sm:leading-[64px] text-white">
            Learn Trading Like You're Five.
          </h1>
          <h1 className="font-['Noto_Sans'] font-bold text-3xl sm:text-[56px] leading-tight sm:leading-[64px]">
            <span className="ml-4" />
            <span className="text-[#1b6bfb]">Win</span>
            <span> Like a Pro.</span>
          </h1>
          <img
            src={images.awardIcon}
            alt=""
            className="absolute -left-8 bottom-2 w-11 h-11 -rotate-[7.66deg] hidden sm:block"
          />
        </div>

        {/* Subheadline */}
        <p className="hero-animate hero-animate-delay-2 font-['Commissioner'] font-medium text-base sm:text-xl leading-7 sm:leading-8 text-white/75 max-w-[710px] mb-8 px-2 sm:px-0">
          Trading doesn't have to be confusing, intimidating, or full of fake gurus.
          <br /><br />
          Trading for Toddlers breaks down trading into simple, visual, step-by-step lessons so anyone can understand, even if you're starting from zero.
        </p>

        {/* CTA Button */}
        <a href="#cta" className="hero-animate hero-animate-delay-3 btn-primary rounded-full px-6 sm:px-10 py-4 sm:py-6 font-['Commissioner'] font-semibold text-lg sm:text-xl text-white mb-8">
          Learn Trading the easy way
        </a>

        {/* Feature Tags */}
        <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
          <div className="flex items-center gap-2">
            <img src={images.smileIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span className="font-['Commissioner'] font-medium text-base sm:text-lg text-white/75">
              No jargon. No ego. No overwhelm.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={images.brainIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span className="font-['Commissioner'] font-medium text-base sm:text-lg text-white/75">
              Just clean logic, clear rules, and repeatable systems.
            </span>
          </div>
        </div>
      </section>

      {/* Built for Absolute Beginners */}
      <section ref={beginnersHeadingRef} className="fade-in-up relative z-10 flex flex-col items-center text-center gap-[25px] px-4 py-16 max-w-[800px] mx-auto">
        <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white">
          Built for Absolute Beginners
        </h2>
        <p className="font-script text-4xl sm:text-[56px] text-gradient-blue">
          Yes, even you
        </p>
        <p className="font-['Commissioner'] font-medium text-xl leading-8 text-white/75">
          Most trading education assumes you already 'know the basics.'
          <br />
          We don't.
        </p>
      </section>

      {/* Start from Scratch Grid */}
      <section className="relative z-10 px-4 pb-16">
        <div className="card-glass max-w-[1435px] mx-auto p-5 sm:p-12">
          <p className="font-['Commissioner'] font-medium text-2xl text-white text-center mb-10">
            At Trading for Toddlers, we start from scratch:
          </p>
          <div ref={scratchGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {[
              { icon: images.waterfallIcon, text: "What a trade actually is" },
              { icon: images.coinsIcon, text: "Why price moves" },
              { icon: images.brainIcon2, text: "How buyers and sellers think" },
              { icon: images.exitIcon, text: "When to enter, exit, or do nothing" },
            ].map((item, i) => (
              <div key={i} className="reveal-item scratch-grid-item flex flex-col items-center text-center gap-4 px-6 lg:px-8">
                <div className="w-[85px] h-[85px] bg-[rgba(27,107,251,0.15)] rounded-[25px] flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-[55px] h-[55px]" />
                </div>
                <p className="font-['Commissioner'] font-medium text-xl sm:text-[26px] leading-8 text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn With Visuals */}
      <section ref={visualsHeadingRef} className="fade-in-up relative z-10 flex flex-col items-center text-center gap-[25px] px-4 py-16 max-w-[800px] mx-auto">
        <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white">
          Learn With Visuals
        </h2>
        <p className="font-script text-4xl sm:text-[56px] text-gradient-blue">
          Not walls of text
        </p>
        <p className="font-['Commissioner'] font-medium text-xl leading-8 text-white/75">
          Trading is pattern recognition - not memorization.
        </p>
      </section>

      {/* Visual Learning Cards */}
      <section className="relative z-10 px-4 pb-8">
        <div ref={visualCardsRef} className="max-w-[1435px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Visual-first",
            "Explained with real chart examples",
            "Broken into small, digestible concepts",
            "Repeated until it clicks",
          ].map((label, i) => (
            <div key={i} className="reveal-item flex flex-col gap-3">
              <div className="card-glass h-[143px] flex items-center justify-center">
                <span className="font-['Commissioner'] text-xl text-white/50">ILLUSTRATION HERE</span>
              </div>
              <p className="font-['Commissioner'] font-medium text-xl text-white text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Learn Inside */}
      <section id="learn" ref={learnInsideHeadingRef} className="fade-in-up relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-8 max-w-[800px] mx-auto">
        <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white mb-4">
          What You'll Learn Inside
        </h2>
        <p className="font-['Commissioner'] font-medium text-xl leading-8 text-white/75">
          Trading is pattern recognition - not memorization.
        </p>
      </section>

      {/* Lesson Cards */}
      <section className="relative z-10 px-4 py-12 max-w-[1200px] mx-auto">
        <div className="space-y-12">
          {/* Lesson 01 */}
          <div ref={lesson01Ref} className="fade-in-up flex flex-col lg:flex-row gap-8">
            <LessonCard
              number="01"
              title="Trading Basics (From Zero)"
              items={[
                { icon: "smile", text: "How markets work (stocks, crypto, forex)" },
                { icon: "smile", text: "Candlesticks explained like building blocks" },
                { icon: "brain", text: "Support & resistance made obvious" },
                { icon: "brain", text: "Trend vs chop (and why most people lose)" },
              ]}
            />
            <div className="hidden lg:block flex-1" />
          </div>

          {/* Lesson 02 */}
          <div ref={lesson02Ref} className="fade-in-up flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block flex-1" />
            <LessonCard
              number="02"
              title="Entry & Exit Logic"
              items={[
                { icon: "smile", text: "When not to trade (most important lesson)" },
                { icon: "smile", text: "Simple entry rules you can repeat" },
                { icon: "brain", text: "Stop-loss and take-profit without fear" },
                { icon: "brain", text: "Risk explained in plain English" },
              ]}
            />
          </div>

          {/* Lesson 03 */}
          <div ref={lesson03Ref} className="fade-in-up flex flex-col lg:flex-row gap-8">
            <LessonCard
              number="03"
              title="Toddler-Proof Strategies"
              items={[
                { icon: "smile", text: "Trend continuation plays" },
                { icon: "smile", text: "Breakout logic that actually works" },
                { icon: "brain", text: "Range trading for slow days" },
                { icon: "brain", text: "High-probability confirmation rules" },
              ]}
            />
            <div className="hidden lg:block flex-1" />
          </div>

          {/* Lesson 04 */}
          <div ref={lesson04Ref} className="fade-in-up flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block flex-1" />
            <LessonCard
              number="04"
              title="Psychology (The Silent Killer)"
              items={[
                { icon: "smile", text: "How to stop revenge trading" },
                { icon: "smile", text: "Why overtrading feels addictive" },
                { icon: "brain", text: "How to follow rules even after losses" },
                { icon: "brain", text: "How professionals think during drawdowns" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Designed for Real Life */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-[1193px] mx-auto">
          <div className="gradient-bar mx-auto mb-2" />
          <div className="gradient-top-card p-5 sm:p-12">
            <div ref={realLifeHeadingRef} className="fade-in-up flex flex-col items-center text-center gap-[25px] mb-10">
              <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white">
                Designed for Real Life
              </h2>
              <p className="font-script text-4xl sm:text-[56px] text-gradient-blue">
                Not screenshots
              </p>
              <p className="font-['Commissioner'] font-medium text-xl leading-8 text-white/75 max-w-[710px]">
                This isn't a 'look how much I made' course.
              </p>
            </div>

            {/* Persona Cards */}
            <div ref={personaCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                "People with jobs",
                "Students",
                "Side-hustlers",
                "Beginners who don't want stress",
              ].map((persona, i) => (
                <div
                  key={i}
                  className="reveal-item bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-[15px] p-5 sm:p-6 flex items-center justify-center min-h-[120px] sm:min-h-[200px]"
                >
                  <p className="font-['Commissioner'] font-medium text-lg text-white text-center">
                    {persona}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <img src={images.smileIcon} alt="" className="w-6 h-6" />
                <span className="font-['Commissioner'] font-medium text-lg text-white/75">
                  No 10-hour screen days.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={images.brainIcon} alt="" className="w-6 h-6" />
                <span className="font-['Commissioner'] font-medium text-lg text-white/75">
                  No fake Lamborghini motivation.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a href="#cta" className="btn-primary rounded-full px-6 sm:px-10 py-4 sm:py-6 font-['Commissioner'] font-semibold text-lg sm:text-xl text-white">
                Learn Trading the easy way
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Features Included */}
      <section className="relative z-10 px-4 py-16 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div ref={toolsHeadingRef} className="fade-in-up lg:w-[400px] shrink-0">
            <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white mb-4">
              Tools & Features Included
            </h2>
            <p className="font-['Commissioner'] font-medium text-xl leading-8 text-white/75">
              Everything is designed to reduce decision fatigue.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex-1 relative pl-0 lg:pl-6">
            {/* Timeline connector line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[rgba(27,107,251,0.3)] hidden lg:block" />
            <div ref={featureCardsRef} className="space-y-4">
              {[
                "Beginner-friendly dashboards",
                "Step-by-step lesson paths",
                "Trade examples with explanations",
                "Risk calculators made simple",
                "Checklists you can actually follow",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="reveal-item relative flex items-center gap-3 sm:gap-5 bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.1)] rounded-[15px] p-4 sm:p-5"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot-pulse absolute -left-[29px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-[#1b6bfb] hidden lg:block" />
                  <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-[10px] shrink-0" style={{ background: 'linear-gradient(180deg, #1b6bfb 0%, #104095 100%)' }} />
                  <p className="font-['Commissioner'] font-medium text-xl sm:text-2xl text-white">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learn -> Practice -> Repeat */}
      <section className="relative z-10 px-4 py-16 max-w-[1200px] mx-auto">
        <div ref={learnPracticeHeadingRef} className="fade-in-up text-center mb-10">
          <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white mb-4">
            Learn -&gt; Practice -&gt; Repeat
          </h2>
          <p className="font-['Inter'] text-lg leading-7 text-white/75 max-w-[700px] mx-auto" style={{ letterSpacing: '-0.3px' }}>
            You won't be thrown into live trading blind. Our learning flow:
          </p>
        </div>

        <div ref={learnPracticeGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Understand the concept",
            "See real examples",
            "Practice without pressure",
            "Apply with confidence",
          ].map((step, i) => (
            <div key={i} className="reveal-item flex flex-col gap-3">
              {i < 2 && (
                <p className="font-['Commissioner'] font-medium text-2xl text-white">{step}</p>
              )}
              <div className="card-glass h-[143px] flex items-center justify-center">
                <span className="font-['Commissioner'] text-xl text-white/50">ILLUSTRATION HERE</span>
              </div>
              {i >= 2 && (
                <p className="font-['Commissioner'] font-medium text-2xl text-white">{step}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Built for Long-Term Skill */}
      <section ref={longTermHeadingRef} className="fade-in-up relative z-10 flex flex-col items-center text-center gap-[25px] px-4 py-16 max-w-[800px] mx-auto">
        <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white">
          Built for Long-Term Skill
        </h2>
        <p className="font-script text-4xl sm:text-[56px] text-gradient-blue">
          not hype
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <img src={images.smileIcon} alt="" className="w-6 h-6" />
            <span className="font-['Commissioner'] font-medium text-lg text-white/75">No signals</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={images.brainIcon} alt="" className="w-6 h-6" />
            <span className="font-['Commissioner'] font-medium text-lg text-white/75">No copy trading</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={images.brainIcon} alt="" className="w-6 h-6" />
            <span className="font-['Commissioner'] font-medium text-lg text-white/75">No dependency</span>
          </div>
        </div>

        <p className="font-['Inter'] text-lg leading-7 text-white/75 max-w-[691px]" style={{ letterSpacing: '-0.3px' }}>
          Trading for Toddlers teaches you how to think, not what to click.
        </p>
      </section>

      {/* Three Approach Cards */}
      <section className="relative z-10 px-4 py-8 max-w-[1200px] mx-auto">
        <div ref={approachCardsRef} className="space-y-8">
        {[
          {
            title: "Framework",
            items: [
              "A structured approach to reading the market - not guessing.",
              "Clear rules for when to trade and when to stay out.",
              "Simple frameworks you can apply to any market or timeframe.",
              "No indicator overload - just clean price action logic.",
            ],
          },
          {
            title: "Process",
            items: [
              "A step-by-step workflow from market analysis to trade execution.",
              "Repeatable processes that remove emotion from your decisions.",
            ],
          },
          {
            title: "Clarity in your trading",
            items: [
              "Know exactly why you're entering a trade - every time.",
              "Understand your edge and when conditions favor it.",
              "Build the confidence that comes from having a real plan.",
            ],
          },
        ].map((card, i) => (
          <div key={i} className="reveal-item card-glass p-5 sm:p-10 flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="flex-1">
              <h3 className="font-['Commissioner'] font-medium text-2xl text-white mb-6">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#1b6bfb] mt-1 shrink-0">&#8226;</span>
                    <span className="font-['Commissioner'] font-medium text-lg text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="w-full lg:w-[498px] h-[250px] lg:h-[352px] rounded-[15px] shrink-0"
              style={{ background: 'linear-gradient(180deg, rgba(27,107,251,0) 0%, rgba(27,107,251,0.2) 100%), #000c23' }}
            />
          </div>
        ))}
        </div>
      </section>

      {/* Why TFT Is Different */}
      <section id="comparison" ref={comparisonHeadingRef} className="fade-in-up relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-8 max-w-[800px] mx-auto">
        <h2 className="font-['Noto_Sans'] font-semibold text-3xl sm:text-[48px] leading-tight sm:leading-[64px] text-white mb-4">
          Why Trading for Toddlers Is Different
        </h2>
        <p className="font-['Inter'] text-lg leading-7 text-white/75" style={{ letterSpacing: '-0.3px' }}>
          Trading for Toddlers teaches you how to think, not what to click.
        </p>
      </section>

      {/* Comparison Cards */}
      <section className="relative z-10 px-4 py-12 max-w-[1200px] mx-auto">
        <div className="comparison-wrapper flex flex-col lg:flex-row gap-6 justify-center items-center">
          {/* Other Courses */}
          <div ref={comparisonLeftRef} className="slide-in-left card-glass p-5 sm:p-10 w-full lg:w-[465px]">
            <h3 className="font-['Noto_Sans'] font-semibold text-2xl sm:text-[34px] leading-tight text-white mb-6">
              Other Trading Courses
            </h3>
            <div className="h-px bg-white/10 mb-6" />
            <ul className="space-y-5">
              {[
                "Complex jargon",
                "Ego-driven",
                "Theory-heavy",
                "Confusing indicators",
                "Fear-based selling",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <img src={images.xIcon} alt="" className="w-9 h-9 shrink-0" />
                  <span className="font-['Commissioner'] font-semibold text-xl sm:text-[27px] leading-9 text-white" style={{ letterSpacing: '-0.27px' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* TFT */}
          <div ref={comparisonRightRef} className="slide-in-right bg-[#1b6bfb] rounded-[15px] p-5 sm:p-12 w-full lg:w-[708px]">
            <img src={images.tftLogoLarge} alt="TFT" className="h-[50px] sm:h-[78px] w-auto object-contain mb-6" />
            <div className="h-px bg-white/30 mb-6" />
            <ul className="space-y-5">
              {[
                "Plain English",
                "Beginner-first",
                "Practical & visual",
                "Clean price action",
                "Confidence-based learning",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <img src={images.greenTick} alt="" className="w-9 h-9 shrink-0" />
                  <span className="font-['Commissioner'] font-semibold text-xl sm:text-[36px] leading-[48px] text-white" style={{ letterSpacing: '-0.36px' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Start Learning the Right Way - CTA */}
      <section id="cta" className="relative z-10 py-16 bg-[#000c23]">
        <div className="px-4">
          <div className="max-w-[1193px] mx-auto pt-8 sm:pt-16 pb-12 sm:pb-20">
            <div className="gradient-bar mx-auto mb-2" />
            <div className="gradient-top-card p-5 sm:p-12">
              <div ref={ctaHeadingRef} className="fade-in-up flex flex-col items-center text-center">
                {/* Heading */}
                <div className="relative mb-6">
                  <h2 className="font-['Noto_Sans'] font-semibold text-2xl sm:text-[56px] leading-tight sm:leading-[64px] text-white">
                    Start Learning the
                  </h2>
                  <h2 className="font-['Noto_Sans'] font-semibold text-2xl sm:text-[56px] leading-tight sm:leading-[64px] text-[#1b6bfb]">
                    Right Way
                  </h2>
                  <img src={images.tickIcon} alt="" className="absolute -right-8 top-0 w-12 h-12 hidden sm:block" />
                </div>

                {/* You don't need */}
                <p className="font-['Commissioner'] font-medium text-xl text-white/75 mb-4">
                  You don't need:
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <img src={images.smileIcon} alt="" className="w-6 h-6" />
                    <span className="font-['Commissioner'] font-medium text-lg text-white/75">A finance degree</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={images.brainIcon} alt="" className="w-6 h-6" />
                    <span className="font-['Commissioner'] font-medium text-lg text-white/75">Years of experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={images.brainIcon} alt="" className="w-6 h-6" />
                    <span className="font-['Commissioner'] font-medium text-lg text-white/75">Fancy tools</span>
                  </div>
                </div>

                {/* Blue highlight box */}
                <div className="bg-[rgba(27,107,251,0.25)] border border-[#1b6bfb] rounded-[15px] p-4 sm:p-8 max-w-[720px] w-full mb-8">
                  <p className="font-['Commissioner'] font-medium text-lg sm:text-xl text-white mb-4">You just need</p>
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <img src={images.smileIcon} alt="" className="w-6 h-6" />
                      <span className="font-['Commissioner'] font-medium text-lg text-white">Clear rules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={images.brainIcon} alt="" className="w-6 h-6" />
                      <span className="font-['Commissioner'] font-medium text-lg text-white">Simple logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={images.brainIcon} alt="" className="w-6 h-6" />
                      <span className="font-['Commissioner'] font-medium text-lg text-white">Consistency</span>
                    </div>
                  </div>
                  <p className="font-['Commissioner'] font-medium text-xl text-white">
                    And that's exactly what Trading for Toddlers gives you.
                  </p>
                </div>

                {/* CTA Button */}
                <a href="#cta" className="btn-primary rounded-full px-6 sm:px-10 py-4 sm:py-6 font-['Commissioner'] font-semibold text-lg sm:text-xl text-white mb-6">
                  Learn Trading the easy way
                </a>

                <p className="font-['Commissioner'] font-medium text-xl text-white/75">
                  Because trading shouldn't feel harder than it needs to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={images.footerLogo} alt="TFT" className="h-[58px] w-auto object-contain mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
            <a href="#" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white">Privacy Policy</a>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <a href="#" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white">Terms & Conditions</a>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <a href="#" className="font-['Commissioner'] font-medium text-sm text-white/75 hover:text-white">Text Message Policy</a>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        {/* Disclaimer */}
        <div className="mb-8">
          <h4 className="font-['Commissioner'] font-medium text-base text-white mb-3">
            Important Earnings & Legal Disclaimer
          </h4>
          <div className="font-['Inter'] text-sm leading-5 text-white/75 space-y-3" style={{ letterSpacing: '-0.224px' }}>
            <p>
              Any earnings or income examples shown by Trading for Toddlers™ are aspirational only and represent non-typical results. They are not a promise or guarantee of income or success.
            </p>
            <p>Individual results will vary and depend on factors such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your experience and trading skill</li>
              <li>Effort, discipline, and consistency</li>
              <li>Market conditions</li>
              <li>Risk management and decision-making</li>
              <li>Normal and unforeseen risks involved in trading</li>
            </ul>
            <p>
              Trading for Toddlers™ does not provide financial advice. You are solely responsible for your own trading decisions and outcomes. Always perform your own due diligence and risk assessment before participating in any trading activity.
            </p>
            <p>
              By using our products or services, you agree that Trading for Toddlers™ and its representatives are not liable for your trading results or decisions. Please review our Terms & Conditions for full details and limitations.
            </p>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        {/* Questions */}
        <div className="mb-8">
          <h4 className="font-['Commissioner'] font-medium text-base text-white mb-3">Questions?</h4>
          <div className="font-['Inter'] text-sm leading-5 text-white/75 space-y-2" style={{ letterSpacing: '-0.224px' }}>
            <p>If you're unsure whether Trading for Toddlers™ is right for you, feel free to reach out.</p>
            <p>We're happy to discuss your goals and explain how the program works.</p>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 text-center sm:text-left">
          <p className="font-['Inter'] text-xs sm:text-sm text-white/75" style={{ letterSpacing: '-0.224px' }}>
            All rights reserved. Trading for Toddlers™
          </p>
          <p className="font-['Inter'] text-xs sm:text-sm text-white/75" style={{ letterSpacing: '-0.224px' }}>
            © 2025 StevenRTrades™
          </p>
        </div>
      </footer>
    </div>
  )
}

function LessonCard({ number, title, items }) {
  return (
    <div className="card-glass p-5 sm:p-8 w-full lg:w-[585px]">
      {/* Badge */}
      <div className="inline-flex items-center border border-[#1b6bfb] rounded-full px-4 py-1 mb-4">
        <span className="font-['Commissioner'] font-medium text-sm text-[#1b6bfb]">
          Lesson {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Commissioner'] font-medium text-2xl sm:text-[32px] leading-8 text-white mb-6">
        {title}
      </h3>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-6" />

      {/* Items */}
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <img
              src={item.icon === "smile" ? images.smileIcon : images.brainIcon}
              alt=""
              className="w-6 h-6 shrink-0"
            />
            <span className="font-['Commissioner'] font-medium text-lg text-white/75">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
