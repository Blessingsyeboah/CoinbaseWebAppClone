import { Link } from "react-router-dom";
import CryptoRow from "./CryptoRow";

function CryptoExploreSection({ marketRows }) {
  return (
    <section className="min-h-screen border-t border-[#eef1f6] bg-slate-100 px-4 py-14 sm:px-6 lg:py-18 lg:pl-8 lg:pr-8">
      <div className="mx-2 grid w-full max-w-[1220px] grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,700px)] lg:gap-16">
        <div className="max-w-[560px]">
          <h2 className="text-[34px] leading-[1.1] tracking-[-0.02em] text-[#0a0b0d] sm:text-[44px] lg:text-[52px]">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin
          </h2>
          <p className="mt-5 max-w-[680px] text-[17px] leading-[1.5] text-gray-600">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>
          <Link
            to="/explore"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-12 py-7 text-[18px] font-semibold text-white transition-colors hover:bg-gray-900"
          >
            See more assets
          </Link>
        </div>

        <div className="w-full max-w-[800px] rounded-[40px] bg-black p-7 sm:p-8 lg:ml-auto lg:mr-0 lg:min-h-[620px] lg:p-10">
          <div className="hidden grid-cols-[2fr_1fr_1fr_auto] px-4 py-4 text-lg font-semibold tracking-[0.08em] text-white sm:grid">
            <span>Tradable</span>
            <span>Top gainers</span>
            <span>New on Coinbase</span>
          </div>

          {marketRows.map((asset) => (
            <CryptoRow key={asset.name} asset={asset} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CryptoExploreSection;