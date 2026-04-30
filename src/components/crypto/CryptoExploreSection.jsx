import { Link } from "react-router-dom";
import CryptoRow from "./CryptoRow";

function formatPrice(price) {
  if (price === undefined || price === null) return "";
  if (typeof price === "number") {
    return `GHS ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return price;
}

function formatChange(asset) {
  if (asset.change24h !== undefined && asset.change24h !== null) {
    return `${asset.change24h >= 0 ? "+" : ""}${asset.change24h.toFixed(2)}%`;
  }
  return asset.change || "";
}

function CryptoExploreSection({ marketRows }) {
  return (
    <section className="min-h-screen border-t border-[#eef1f6] bg-slate-100 px-4 py-14 sm:px-6 lg:py-18 lg:pl-8 lg:pr-8">
      <div className="mx-2 grid w-full max-w-[1120px] grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,680px)] lg:gap-12">
        <div className="max-w-[520px]">
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

        <div className="w-full max-w-[680px] rounded-[32px] bg-black p-5 sm:p-6 lg:ml-auto lg:mr-0 lg:min-h-[520px] lg:p-7">
          <div className="hidden grid-cols-[2fr_1fr_1fr] gap-2 px-3 py-3 text-base font-semibold tracking-[0.06em] text-white sm:grid">
            <span className="inline-flex items-center rounded-full bg-[#161b22] px-3 py-1.5 text-sm font-semibold text-white">Tradable</span>
            <span className="flex items-center text-sm font-semibold">Top gainers</span>
            <span className="flex items-center text-sm font-semibold">New on Crypto</span>
          </div>

          {marketRows.map((asset) => (
            <CryptoRow
              key={asset.name}
              asset={{
                ...asset,
                price: formatPrice(asset.price),
                change: formatChange(asset),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CryptoExploreSection;