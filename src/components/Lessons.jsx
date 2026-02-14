import { images } from '../assets/images';

const lessons = [
  {
    number: "01",
    title: "Trading Basics (From Zero)",
    items: [
      { icon: images.smileIcon1, text: "How markets work (stocks, crypto, forex)" },
      { icon: images.brainIcon4, text: "Candlesticks explained like building blocks" },
      { icon: images.smileIcon1, text: "Support & resistance made obvious" },
      { icon: images.brainIcon4, text: "Trend vs chop (and why most people lose)" },
    ],
  },
  {
    number: "02",
    title: "Entry & Exit Logic",
    items: [
      { icon: images.smileIcon2, text: "When not to trade (most important lesson)" },
      { icon: images.brainIcon5, text: "Simple entry rules you can repeat" },
      { icon: images.smileIcon2, text: "Stop-loss and take-profit without fear" },
      { icon: images.brainIcon5, text: "Risk explained in plain English" },
    ],
  },
  {
    number: "03",
    title: "Toddler-Proof Strategies",
    items: [
      { icon: images.smileIcon3, text: "Trend continuation plays" },
      { icon: images.brainIcon6, text: "Breakout logic that actually works" },
      { icon: images.smileIcon3, text: "Range trading for slow days" },
      { icon: images.brainIcon6, text: "High-probability confirmation rules" },
    ],
  },
  {
    number: "04",
    title: "Psychology (The Silent Killer)",
    items: [
      { icon: images.smileIcon3, text: "How to stop revenge trading" },
      { icon: images.brainIcon6, text: "Why overtrading feels addictive" },
      { icon: images.smileIcon3, text: "How to follow rules even after losses" },
      { icon: images.brainIcon6, text: "How professionals think during drawdowns" },
    ],
  },
];

export default function Lessons() {
  return (
    <section id="learn" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="font-[Noto_Sans] font-semibold text-3xl md:text-[48px] md:leading-[56px] text-white mb-4">
            What You'll Learn Inside
          </h2>
          <p className="text-white/75 text-lg md:text-xl font-medium font-[Commissioner]">
            Trading is pattern recognition — not memorization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {lessons.map((lesson, i) => (
            <div
              key={i}
              className={`card-glass p-8 ${i % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="inline-block border border-blue-primary rounded-full px-4 py-1 mb-4">
                <span className="text-blue-primary text-sm font-semibold font-[Commissioner]">
                  Lesson {lesson.number}
                </span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold font-[Noto_Sans] mb-4">
                {lesson.title}
              </h3>
              <div className="border-t border-white/10 mb-6" />
              <div className="flex flex-col gap-4">
                {lesson.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <img src={item.icon} alt="" className="w-6 h-6 shrink-0" />
                    <span className="text-white/75 text-base font-medium font-[Commissioner]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
