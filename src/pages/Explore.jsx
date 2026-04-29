import { useState } from "react";
import { Link } from "react-router-dom";
import bitcoinIcon from "../assets/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png";
import ethereumIcon from "../assets/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png";
import tetherIcon from "../assets/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png";
import solanaIcon from "../assets/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png";
import usdCoinIcon from "../assets/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png";
import coinbaseLogo from "../assets/coinbase_logo@2x.png";
import coinbaseNavLogo from "../assets/coinbaseLogoNavigation-4.svg";
import instagramIcon from "../assets/instagram-light.svg";
import xIcon from "../assets/x-light.svg";
import linkedinIcon from "../assets/linkedin-light.svg";
import tiktokIcon from "../assets/tiktok-light.svg";

function Sparkline({ trend = "up", width = 80, height = 32 }) {
  const w = width;
  const h = height;
  const upPath      = `M0,${h} L${w*0.14},${h*0.72} L${w*0.28},${h*0.78} L${w*0.43},${h*0.52} L${w*0.57},${h*0.36} L${w*0.71},${h*0.2}  L${w*0.85},${h*0.12} L${w},${h*0.04}`;
  const downPath    = `M0,${h*0.04} L${w*0.14},${h*0.1}  L${w*0.28},${h*0.08} L${w*0.43},${h*0.32} L${w*0.57},${h*0.52} L${w*0.71},${h*0.66} L${w*0.85},${h*0.78} L${w},${h}`;
  const flatPath    = `M0,${h*0.5}  L${w*0.14},${h*0.42} L${w*0.28},${h*0.54} L${w*0.43},${h*0.46} L${w*0.57},${h*0.5}  L${w*0.71},${h*0.44} L${w*0.85},${h*0.52} L${w},${h*0.48}`;
  const neutralPath = `M0,${h*0.4}  L${w*0.14},${h*0.55} L${w*0.28},${h*0.7}  L${w*0.43},${h*0.6}  L${w*0.57},${h*0.45} L${w*0.71},${h*0.35} L${w*0.85},${h*0.42} L${w},${h*0.38}`;
  const paths  = { up: upPath, down: downPath, flat: flatPath, neutral: neutralPath };
  const colors = { up: "#16a34a", down: "#dc2626", flat: "#eab308", neutral: "#111111" };
  const d     = paths[trend]  ?? upPath;
  const color = colors[trend] ?? "#098551";
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={`${d} L${w},${h + 2} L0,${h + 2} Z`} fill={color} fillOpacity="0.08" />
      <path d={d} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoinAvatar({ symbol, color = "#0052ff" }) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold text-white"
      style={{ backgroundColor: color }}
    >
      {symbol.slice(0, 4)}
    </div>
  );
}

function SortIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-[#9fadc0]" fill="currentColor">
      <path d="M8 3l3 4H5l3-4zm0 10L5 9h6l-3 4z" />
    </svg>
  );
}

const tableAssets = [
  { icon: bitcoinIcon,  name: "Bitcoin",  symbol: "BTC",  price: "GHS 744,143.03", trend: "up",   change: "+2.95%", positive: true  },
  { icon: ethereumIcon, name: "Ethereum", symbol: "ETH",  price: "GHS 21,996.13",  trend: "up",   change: "+3.86%", positive: true  },
  { icon: tetherIcon,   name: "Tether",   symbol: "USDT", price: "GHS 10.79",      trend: "neutral", change: "+0.02%", positive: true  },
  { icon: null, color: "#F3BA2F", name: "BNB",      symbol: "BNB",  price: "GHS 6,884.00",  trend: "up",   change: "+3.44%", positive: true  },
  { icon: null, color: "#00AAE4", name: "XRP",      symbol: "XRP",  price: "GHS 14.81",     trend: "up",   change: "+1.46%", positive: true  },
  { icon: usdCoinIcon,  name: "USDC",     symbol: "USDC", price: "GHS 10.78",      trend: "flat", change: "0.00%",  positive: null, apy: "Earn 3.35% APY" },
  { icon: solanaIcon,   name: "Solana",   symbol: "SOL",  price: "GHS 926.56",     trend: "up",   change: "+4.50%", positive: true  },
  { icon: null, color: "#FF0013", name: "TRON",     symbol: "TRX",  price: "GHS 3.09",      trend: "up",   change: "+1.30%", positive: true  },
  { icon: null, color: "#C2A633", name: "Dogecoin", symbol: "DOGE", price: "GHS 0.98",      trend: "up",   change: "+2.19%", positive: true  },
  { icon: null, color: "#0033AD", name: "Cardano",  symbol: "ADA",  price: "GHS 2.79",      trend: "up",   change: "+2.61%", positive: true  },
];

const topMovers = [
  { symbol: "KEYCAT", name: "Keyboard Cat", change: "+20.22%", trend: "up",   color: "#FF6B35", price: "GHS 0.0017" },
  { symbol: "FLOW",   name: "Flow",         change: "+22.22%", trend: "up",   color: "#00C781", price: "GHS 0.92"   },
  { symbol: "SYND",   name: "Syndicator",   change: "-15.00%", trend: "down", color: "#7B61FF", price: "GHS 0.47"   },
  { symbol: "KERN",   name: "Kernel DAO",   change: "+14.07%", trend: "up",   color: "#1A1A2E", price: "GHS 1.02"   },
  { symbol: "FAI",    name: "Friday",       change: "-13.43%", trend: "down", color: "#F74A4A", price: "GHS 0.0047" },
];

const newAssets = [
  { symbol: "HYPE", name: "HyperLiquid", addedDate: "Added Feb 5",  color: "#1B1B1B" },
  { symbol: "JUP",  name: "Jupiter",     addedDate: "Added Dec 9",  color: "#FB9D24" },
  { symbol: "LIGH", name: "Lighter",     addedDate: "Added Jan 15", color: "#5E81F4" },
];

const statCards = [
  { label: "Total market cap", value: "GHS 24,717", change: "+2.27%", trend: "up" },
  { label: "Trade volume",     value: "GHS 2,241",  change: "+78.40%", trend: "up" },
  { label: "Buy-sell ratio",   value: "GHS 0.76",   change: "+0.69%",  trend: "up" },
];

const footerColumns = [
  {
    heading: "Company",
    links: ["About", "Careers", "Affiliates", "Blog", "Security", "Investors", "Vendors", "Legal & privacy", "Cookie policy", "Cookie preferences", "Digital Asset Disclosures"],
  },
  {
    heading: "Learn",
    links: ["Explore", "Market statistics", "Crypto App Bytes newsletter", "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates", "What is Bitcoin?", "What is crypto?", "What is a blockchain?", "How to set up a crypto wallet?", "How to send crypto?", "Taxes"],
  },
  {
    heading: "Support",
    links: ["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods", "Instant access", "Supported crypto", "Status"],
  },
  {
    heading: "Individuals",
    links: ["Buy & sell", "Earn free crypto", "Base App", "Crypto App One", "Debit Card"],
  },
  {
    heading: "Businesses",
    links: ["Asset Listings", "Crypto App Business", "Payments", "Commerce", "Token Manager"],
  },
  {
    heading: "Institutions",
    links: ["Prime", "Staking", "Exchange", "International Exchange", "Derivatives Exchange", "Verified Pools"],
  },
  {
    heading: "Developers",
    links: ["Developer Platform", "Base", "Privy Wallets", "Embedded Wallets", "Base Accounts (Smart Wallets)", "Onramp & Offramp", "xRO", "Trade API", "Paymaster", "OnchainKit", "Verifications", "Node", "AgentKit", "Staking", "Faucet", "Exchange API", "International Exchange API", "Prime API", "Derivatives API"],
  },
  {
    heading: "Asset prices",
    links: ["Bitcoin price", "Ethereum price", "Solana price", "XRP price"],
  },
  {
    heading: "Stock prices",
    links: ["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"],
  },
];

function Explore() {
  const [search, setSearch] = useState("");

  const filtered = tableAssets.filter(
    (a) =>
      search === "" ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.symbol.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="border-b border-[#eef1f6] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            {/* Left: heading + badge */}
            <div>
              <h1 className="text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0a0b0d] sm:text-[48px]">
                Explore crypto
              </h1>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e8f0fe] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1652f0]" />
                <span className="text-[13px] font-semibold text-[#1652f0]">
                  Crypto App 50 Index is up +3.01% (24hrs)
                </span>
              </div>
            </div>
            {/* Right: search */}
            <div className="flex w-full max-w-[360px] items-center gap-2 rounded-full border border-[#d1d9e0] bg-[#f7f9fc] px-4 py-3">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#9fadc0]" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search for an asset"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-[14px] text-[#0a0b0d] outline-none placeholder:text-[#9fadc0]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Market Stats ── */}
      <section className="border-b border-[#eef1f6] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          {/* Section heading */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-[#0a0b0d]">Market stats</h2>
            <button type="button" className="grid h-8 w-8 place-items-center rounded-full border border-[#e8edf4] text-[#4b5565] transition-colors hover:bg-[#f7f9fc]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {/* Description card */}
            <div className="rounded-2xl border border-[#e8edf4] bg-[#f7f9fc] p-4">
              <p className="text-[13px] leading-relaxed text-[#4b5565]">
                The overall crypto market is growing this week. As of today, the total crypto market
                capitalisation is 24.73 trillion, representing a 6.50% increase from last week.
              </p>
              <button type="button" className="mt-3 text-[12px] font-semibold text-[#1652f0] hover:underline">
                Read more
              </button>
            </div>
            {/* 3 stat cards */}
            {statCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-[#e8edf4] p-4">
                <p className="text-[12px] text-[#9fadc0]">{card.label}</p>
                <p className="mt-1 text-[17px] font-semibold text-[#0a0b0d]">{card.value}</p>
                <p className="text-[12px] font-semibold text-[#098551]">{card.change}</p>
                <div className="mt-3">
                  <Sparkline trend={card.trend} width={110} height={36} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Crypto Prices Table + Sidebar ── */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

            {/* ── Left: Table ── */}
            <div>
              <div className="mb-2">
                <h2 className="text-[22px] font-semibold text-[#0a0b0d]">Crypto market prices</h2>
                <p className="text-[13px] text-[#9fadc0]">16,532 assets</p>
              </div>

              <p className="mb-4 text-[13px] leading-relaxed text-[#4b5565]">
                As of today, the total crypto market capitalisation is 24.73 trillion. This represents a 4.50% increase from last week.
              </p>

              <div className="mb-5 flex flex-wrap items-center gap-2">
                {["All assets", "10", "GHS", "10 rows"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="flex items-center gap-1 rounded-full border border-[#d1d9e0] bg-white px-3 py-1.5 text-[13px] font-medium text-[#0a0b0d] hover:bg-[#f7f9fc]"
                  >
                    {label}
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#9fadc0]" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#e8edf4]">
                <table className="w-full min-w-[580px]">
                  <thead>
                    <tr className="border-b border-[#e8edf4] bg-[#f7f9fc]">
                      <th className="w-10 px-3 py-3 text-center text-[11px] font-semibold text-[#9fadc0]">#</th>
                      <th className="w-8 px-2 py-3" />
                      <th className="px-4 py-3 text-left">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#9fadc0]">
                          Asset <SortIcon />
                        </span>
                      </th>
                      <th className="px-4 py-3 text-right">
                        <span className="inline-flex items-center justify-end gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#9fadc0]">
                          Market price <SortIcon />
                        </span>
                      </th>
                      <th className="hidden px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-[#9fadc0] sm:table-cell">Chart</th>
                      <th className="px-4 py-3 text-right">
                        <span className="inline-flex items-center justify-end gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#9fadc0]">
                          Change <SortIcon />
                        </span>
                      </th>
                      <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[#9fadc0]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(search ? filtered : tableAssets).map((asset, i) => (
                      <tr
                        key={asset.symbol}
                        className={`transition-colors hover:bg-[#f7f9fc] ${i < tableAssets.length - 1 ? "border-b border-[#eef1f6]" : ""}`}
                      >
                        <td className="px-3 py-3.5 text-center text-[13px] text-[#9fadc0]">{i + 1}</td>
                        <td className="px-2 py-3.5">
                          <div className="grid h-5 w-5 place-items-center rounded-full border-2 border-[#d1d9e0]" />
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-3">
                            {asset.icon ? (
                              <img src={asset.icon} alt={asset.name} className="h-9 w-9 rounded-full object-cover" />
                            ) : (
                              <CoinAvatar symbol={asset.symbol} color={asset.color} />
                            )}
                            <div>
                              <p className="text-[14px] font-semibold text-[#0a0b0d]">{asset.name}</p>
                              <p className="text-[12px] text-[#9fadc0]">
                                {asset.symbol}{asset.apy && <span className="ml-1 text-[#1652f0]">· {asset.apy}</span>}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-right text-[14px] font-medium text-[#0a0b0d]">
                          {asset.price}
                        </td>
                        <td className="hidden px-4 py-3.5 sm:table-cell">
                          <div className="flex justify-center">
                            <Sparkline trend={asset.trend} width={80} height={32} />
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <span
                            className={`text-[14px] font-semibold ${
                              asset.positive === true  ? "text-[#098551]" :
                              asset.positive === false ? "text-[#d93025]" :
                                                         "text-[#9fadc0]"
                            }`}
                          >
                            {asset.change}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <Link
                            to={`/assets/${asset.symbol}`}
                            className="inline-flex h-8 items-center justify-center rounded-full bg-blue-600 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-blue-700"
                          >
                            Trade
                          </Link>
                        </td>
                      </tr>
                    ))}
                    {search && filtered.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-10 text-center text-[14px] text-[#9fadc0]">
                          No assets found for &quot;{search}&quot;
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[13px] text-[#9fadc0]">1–10 of 16,532 assets</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`grid h-8 w-8 place-items-center rounded-full text-[13px] font-medium transition-colors ${
                        page === 1 ? "bg-[#0052ff] text-white" : "text-[#4b5565] hover:bg-[#f7f9fc]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="px-1 text-[13px] text-[#9fadc0]">…</span>
                  <button type="button" className="grid h-8 w-8 place-items-center rounded-full text-[13px] font-medium text-[#4b5565] hover:bg-[#f7f9fc]">
                    1,854
                  </button>
                  <button type="button" className="grid h-8 w-8 place-items-center rounded-full text-[#4b5565] hover:bg-[#f7f9fc]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Right: Sidebar ── */}
            <div className="flex flex-col gap-5">

              {/* Big blue sign-up card */}
              <div className="relative overflow-hidden rounded-2xl bg-[#0052ff] p-6">
                <p className="text-[17px] font-semibold leading-snug text-white">
                  Create a Crypto App account to trade crypto.
                </p>
                <p className="mt-2 text-[13px] text-white/80">
                  It&apos;s quick, easy, and secure.
                </p>
                <Link
                  to="/signup"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0052ff] transition-colors hover:bg-[#e8f0fe]"
                >
                  Sign up
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                {/* Decorative illustration */}
                <div className="pointer-events-none absolute bottom-0 right-0 opacity-20">
                  <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                    <rect x="10" y="55" width="16" height="35" rx="3" fill="white" />
                    <rect x="34" y="38" width="16" height="52" rx="3" fill="white" />
                    <rect x="58" y="20" width="16" height="70" rx="3" fill="white" />
                    <rect x="82" y="32" width="16" height="58" rx="3" fill="white" />
                    <path d="M100 12 L110 4 L120 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="110" y1="4" x2="110" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Top movers – scrollable */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#0a0b0d]">Top movers</h3>
                    <p className="text-[12px] text-[#9fadc0]">24hr change</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="grid h-7 w-7 place-items-center rounded-full border border-[#e8edf4] text-[#4b5565] transition-colors hover:bg-[#f7f9fc]"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="grid h-7 w-7 place-items-center rounded-full border border-[#e8edf4] text-[#4b5565] transition-colors hover:bg-[#f7f9fc]"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto pb-1">
                  <div className="flex gap-3" style={{ width: "max-content" }}>
                    {topMovers.map((mover) => (
                      <div key={mover.symbol} className="w-[130px] flex-shrink-0 rounded-2xl border border-[#e8edf4] p-3 transition-colors hover:bg-[#f7f9fc]">
                        <CoinAvatar symbol={mover.symbol} color={mover.color} />
                        <p className="mt-2 text-[13px] font-semibold text-[#0a0b0d]">{mover.name}</p>
                        <p className="text-[11px] text-[#9fadc0]">{mover.symbol}</p>
                        <p className={`mt-1.5 text-[13px] font-bold ${mover.change.startsWith("+") ? "text-[#098551]" : "text-[#d93025]"}`}>
                          {mover.change}
                        </p>
                        <p className="text-[11px] text-[#4b5565]">{mover.price}</p>
                        <div className="mt-2">
                          <Sparkline trend={mover.trend} width={105} height={26} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── New on Crypto App ── */}
      <section className="border-t border-[#eef1f6] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <h2 className="mb-5 text-[20px] font-semibold text-[#0a0b0d]">New on Crypto App</h2>
          <div className="flex flex-wrap gap-4">
            {newAssets.map((asset) => (
              <div
                key={asset.symbol}
                className="flex w-[180px] flex-col items-start gap-2 rounded-2xl border border-[#e8edf4] p-5 transition-colors hover:bg-[#f7f9fc]"
              >
                <CoinAvatar symbol={asset.symbol} color={asset.color} />
                <div>
                  <p className="text-[14px] font-semibold text-[#0a0b0d]">{asset.name}</p>
                  <p className="text-[12px] text-[#9fadc0]">{asset.symbol} · {asset.addedDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e8edf4] bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">

          {/* Crypto App logo at top of footer */}
          <div className="mb-10">
            <img src={coinbaseNavLogo} alt="Crypto App" className="h-8 w-auto" />
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#9fadc0]">
                  {col.heading}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[12px] leading-snug text-[#4b5565] transition-colors hover:text-[#0a0b0d]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#e8edf4] pt-6">
            <div className="flex items-center gap-3">
              {[xIcon, instagramIcon, linkedinIcon, tiktokIcon].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full border border-[#e8edf4] bg-[#f7f9fc] transition-colors hover:bg-[#eef1f6]"
                >
                  <img src={icon} alt="" className="h-3.5 w-3.5" style={{ filter: "invert(1)" }} />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-[12px] text-[#9fadc0]">
                © 2026 Crypto App&nbsp;•&nbsp;
                <a href="#" className="hover:text-[#0a0b0d]">Privacy</a>
                &nbsp;•&nbsp;
                <a href="#" className="hover:text-[#0a0b0d]">Terms &amp; Conditions</a>
              </p>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full border border-[#d1d9e0] px-3 py-1 text-[12px] text-[#4b5565] transition-colors hover:text-[#0a0b0d]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
                </svg>
                Global&nbsp;•&nbsp;English
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Explore;
