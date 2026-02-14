import { images } from '../assets/images';

const scratchItems = [
  { icon: images.waterfallIcon, text: "What a trade actually is" },
  { icon: images.coinsIcon, text: "Why price moves" },
  { icon: images.brainIcon2, text: "How buyers and sellers think" },
  { icon: images.exitIcon, text: "When to enter, exit, or do nothing" },
];

export default function Beginners() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-[Noto_Sans] font-semibold text-3xl md:text-[48px] md:leading-[56px] text-white mb-2">
            Built for Absolute Beginners
          </h2>
          <p className="text-gradient-blue text-4xl md:text-[56px] italic font-normal" style={{ fontFamily: "'Noto Sans', cursive" }}>
            Yes, even you
          </p>
        </div>

        <p className="text-white/75 text-lg md:text-xl font-medium font-[Commissioner] text-center max-w-[700px]">
          Most trading education assumes you already "know the basics."
          <br />We don't.
        </p>

        {/* Scratch card */}
        <div className="card-glass w-full max-w-[1435px] p-8 md:p-12">
          <p className="text-white text-xl md:text-2xl font-medium font-[Commissioner] mb-8 text-center">
            At Trading for Toddlers, we start from scratch:
          </p>
          <div className="border-t border-white/10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {scratchItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center px-4">
                <div className="w-16 h-16 rounded-xl bg-blue-primary/20 border border-blue-primary/30 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-8 h-8" />
                </div>
                <p className="text-white text-lg font-medium font-[Commissioner]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
