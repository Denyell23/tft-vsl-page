export default function LearnVisuals() {
  const visualItems = [
    "Visual-first",
    "Explained with real chart examples",
    "Broken into small, digestible concepts",
    "Repeated until it clicks",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="font-[Noto_Sans] font-semibold text-3xl md:text-[48px] md:leading-[56px] text-white mb-2">
            Learn With Visuals
          </h2>
          <p className="text-gradient-blue text-4xl md:text-[56px] italic font-normal" style={{ fontFamily: "'Noto Sans', cursive" }}>
            Not walls of text
          </p>
        </div>

        <p className="text-white/75 text-lg md:text-xl font-medium font-[Commissioner] text-center">
          Trading is pattern recognition — not memorization.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {visualItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="card-glass h-[143px] flex items-center justify-center">
                <span className="text-white/50 text-sm font-medium font-[Commissioner]">ILLUSTRATION HERE</span>
              </div>
              <p className="text-white text-lg font-medium font-[Commissioner] text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
