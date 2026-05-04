import cryptoCoinsImage from "../../assets/image (1).png";

function TakeControlSection() {
  return (
    <section className="relative bg-white px-5 py-16 sm:px-7 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="flex max-w-[520px] flex-col">
          <h2 className="text-[42px] font-semibold leading-[1.06] tracking-[-0.02em] text-[#0a0b0d] sm:text-[52px] lg:text-[60px]">
            Take control
            <br />
            of your money
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#4b5565] sm:text-[17px]">
            Start your portfolio today and discover crypto
          </p>
          <div className="mt-6 flex items-center gap-3">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="h-[52px] w-full max-w-[280px] rounded-full border border-[#d1d9e0] px-5 text-[15px] text-[#0a0b0d] outline-none placeholder:text-[#9fadc0] focus:border-[#0052ff] sm:max-w-[300px]"
            />
            <button
              type="button"
              className="h-[52px] rounded-full bg-[#0052ff] px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#0040cc]"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="flex w-full max-w-[460px] justify-center md:justify-end">
          <img
            src={cryptoCoinsImage}
            alt="Crypto coins"
            className="w-full max-w-[420px] object-contain"
          />
        </div>
      </div>

        <div className="mx-auto mt-12 max-w-[900px] text-center">
          <p className="text-[12px] leading-[1.5] text-[#707a8a]">
            DEX trading is offered by Coinbase Bermuda Technologies Ltd.
            <br /><br />
            Products and features may not be available in all regions. Information
          is for informational purposes only, and is not (i) an offer, or
          solicitation of an offer, to invest in, or to buy or sell, any
          interests or shares, or to participate in any investment or trading
          strategy or (ii) intended to provide accounting, legal, or tax advice,
          or investment recommendations. Trading cryptocurrency comes with risk.
          </p>
        </div>
    </section>
  );
}

export default TakeControlSection;
