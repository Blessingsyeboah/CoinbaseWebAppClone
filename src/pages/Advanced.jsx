import advancedHero from "../assets/advanced_hero.webp";

function Advanced() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="border-b border-[#1f2937] bg-[#0A0A0A]">
        <div className="mx-auto flex h-14 w-full max-w-[1220px] items-center px-4 sm:px-6 lg:px-8">
          <p className="text-lg font-semibold tracking-tight text-white">Coinbase Advanced</p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 items-center gap-6 px-0 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,48%)] lg:gap-12 lg:py-12">
        <div className="ml-4 -mt-8 max-w-[680px] lg:ml-6 lg:-mt-14 lg:justify-self-start">
          <div className="flex items-center gap-3 text-[15px] font-medium text-[#cbd5e1]">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-[#334155] bg-[#0f172a] text-base">A</span>
            <span>Coinbase Advanced</span>
          </div>

          <h1 className="mt-4 text-6xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-[88px]">
            Low fees.
            <br />
            Powerful trading.
          </h1>

          <p className="mt-5 text-base leading-7 text-[#94a3b8] sm:text-lg">
            From 500+ spot pairs with as low as 0.0% maker fees, to advanced charting
            <br />
            powered by TradingView, to powerful APIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#6f8bdc] px-7 text-[15px] font-bold text-black transition-colors hover:bg-[#88a0e6]"
            >
              Get started
            </button>

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#2b313b]"
            >
              Explore Coinbase Advanced
              <svg viewBox="0 0 20 20" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 15 15 5" strokeLinecap="round" />
                <path d="M8 5h7v7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-start lg:ml-2">
          <img
            src={advancedHero}
            alt="Coinbase Advanced trading interface"
            className="h-auto w-full max-w-[500px] object-cover lg:max-w-[570px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Advanced;
