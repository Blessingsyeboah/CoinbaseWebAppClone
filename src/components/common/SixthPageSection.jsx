import buildersImage from "../../assets/0_4mVyVaU6yLa--GR_.png";
import replaceBankImage from "../../assets/Replace_Bank.png";
import learnImage from "../../assets/Learn_Illustration_Ultimate_Guide_Bitcoin.png";

const sectionCards = [
  {
    image: buildersImage,
    title: "Start with confidence",
  },
  {
    image: replaceBankImage,
    title: "Replace your bank",
  },
  {
    image: learnImage,
    title: "Learn as you go",
  },
];

function SixthPageSection() {
  return (
    <section className="border-t border-[#e8edf4] bg-[#f7f9fc] px-5 py-16 sm:px-7 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch gap-6 lg:gap-12">
          <div className="flex h-full items-start">
            <h2 className="max-w-[760px] text-[38px] font-semibold leading-[1.06] tracking-[-0.02em] text-[#0a0b0d] sm:text-[46px] lg:text-[52px]">
              New to crypto?
              <br />
              Learn some
              <br />
              crypto basics
            </h2>
          </div>

          <div className="h-full max-w-[620px] lg:pt-2">
            <p className="text-[16px] leading-[1.62] text-[#4b5565] sm:text-[17px] lg:text-[20px]">
              Beginner guides, practical tips, and market updates for
              <br />
              first-timers, experienced investors, and everyone in
              <br />
              between
            </p>

            <button
              type="button"
              className="mt-6 inline-flex h-[46px] items-center justify-center rounded-full bg-black px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f1f1f] sm:h-[52px] sm:px-9 sm:text-[16px] lg:h-[56px] lg:px-11 lg:text-[17px]"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {sectionCards.map((card, index) => (
            <div key={card.title}>
              <div className="overflow-hidden rounded-[30px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[200px] w-full rounded-[30px] object-cover sm:h-[215px] lg:h-[230px]"
                />
              </div>

              {index === 0 && (
                <div className="mt-1 w-full">
                  <a href="#" className="block text-[30px] font-semibold leading-[1.38] tracking-[0.01em] text-[#0a0b0d] hover:underline">
                    USDC: The digital
                    <br />
                    dollar for the global
                    <br />
                    crypto economy
                  </a>
                  <p className="mt-3 text-[18px] leading-[1.72] tracking-[0.005em] text-[#4b5565] sm:text-[19px]">
                    Coinbase believes crypto will be part of the solution for creating an open financial system
                    that is both more efficient and more...
                  </p>
                </div>
              )}

              {index === 1 && (
                <div className="mt-1 w-full">
                  <a href="#" className="block text-[30px] font-semibold leading-[1.38] tracking-[0.01em] text-[#0a0b0d] hover:underline">
                    Can crypto really
                    <br />
                    replace your bank account?
                  </a>
                  <p className="mt-3 text-[18px] leading-[1.72] tracking-[0.005em] text-[#4b5565] sm:text-[19px]">
                    If you’re a big enough fan of crypto, you’ve probably heard the phrase “be your own bank” or
                    the term “bankless” — the idea being that...
                  </p>
                </div>
              )}

              {index === 2 && (
                <div className="mt-1 w-full">
                  <a href="#" className="block text-[30px] font-semibold leading-[1.38] tracking-[0.01em] text-[#0a0b0d] hover:underline">
                    When is the best time to invest in crypto?
                  </a>
                  <p className="mt-3 text-[18px] leading-[1.72] tracking-[0.005em] text-[#4b5565] sm:text-[19px]">
                    Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As
                    with any kind of investment, volatility may cause...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SixthPageSection;
