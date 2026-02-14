export default function RealLife() {
  const audiences = [
    "People with jobs",
    "Students",
    "Side-hustlers",
    "Beginners who don't want stress",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
        <div className="gradient-bar" />

        <div className="gradient-top-card w-full p-10 md:p-16 flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="font-[Noto_Sans] font-semibold text-3xl md:text-[48px] md:leading-[56px] text-white mb-2">
              Designed for Real Life
            </h2>
            <p className="text-gradient-blue text-4xl md:text-[56px] italic font-normal" style={{ fontFamily: "'Noto Sans', cursive" }}>
              Not screenshots
            </p>
          </div>

          <p className="text-white/75 text-lg md:text-xl font-medium font-[Commissioner] text-center">
            This isn't a "look how much I made" course.
          </p>

          {/* Audience cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1000px]">
            {audiences.map((audience, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center min-h-[120px]">
                <p className="text-white text-lg font-medium font-[Commissioner] text-center">{audience}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/75 text-lg font-medium font-[Commissioner]">
            <span>No 10-hour screen days.</span>
            <span>No fake Lamborghini motivation.</span>
          </div>

          <a href="#cta" className="btn-primary rounded-full px-10 py-6 text-xl font-semibold font-[Commissioner] text-white no-underline">
            Learn Trading the easy way
          </a>
        </div>
      </div>
    </section>
  );
}
