import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createCrypto, fetchCryptos } from "../api/api";

// Assets imported from Explore
import bitcoinIcon from "../assets/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png";
import ethereumIcon from "../assets/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png";
import tetherIcon from "../assets/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png";
import solanaIcon from "../assets/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png";
import usdCoinIcon from "../assets/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png";
import coinbaseNavLogo from "../assets/coinbaseLogoNavigation-4.svg";

// --- Helper Components from Explore ---
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
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold text-white" style={{ backgroundColor: color }}>
      {symbol.slice(0, 4)}
    </div>
  );
}

const tableAssets = [
  { icon: bitcoinIcon,  name: "Bitcoin",  symbol: "BTC",  price: "GHS 744,143.03", trend: "up",   change: "+2.95%", positive: true  },
  { icon: ethereumIcon, name: "Ethereum", symbol: "ETH",  price: "GHS 21,996.13",  trend: "up",   change: "+3.86%", positive: true  },
  { icon: tetherIcon,   name: "Tether",   symbol: "USDT", price: "GHS 10.79",      trend: "neutral", change: "+0.02%", positive: true  },
  { icon: usdCoinIcon,  name: "USDC",     symbol: "USDC", price: "GHS 10.78",      trend: "flat", change: "0.00%",  positive: null, apy: "Earn 3.35% APY" },
  { icon: solanaIcon,   name: "Solana",   symbol: "SOL",  price: "GHS 926.56",     trend: "up",   change: "+4.50%", positive: true  },
];

function Profile() {
  const navigate = useNavigate();
  const { user, loading, checkAuth } = useAuth();
  const [search, setSearch] = useState("");
  const [assets, setAssets] = useState(tableAssets);
  
  // Form State
  const [newCryptoPayload, setNewCryptoPayload] = useState({
    name: "", symbol: "", price: "", image: "", change24h: ""
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const formatAssets = (apiData) => {
    return apiData.map(asset => ({
      ...asset,
      price: typeof asset.price === "number" 
        ? `GHS ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
        : asset.price,
      change: asset.change24h !== undefined
        ? `${asset.change24h >= 0 ? "+" : ""}${asset.change24h.toFixed(2)}%`
        : asset.change || "",
      positive: asset.change24h >= 0,
      trend: asset.change24h > 0 ? "up" : asset.change24h < 0 ? "down" : "neutral"
    }));
  };

  const loadCryptos = async () => {
    try {
      const response = await fetchCryptos();
      if (response?.data) {
        setAssets([...tableAssets, ...formatAssets(response.data)]);
      }
    } catch (e) {
      console.error("Failed to load market data");
    }
  };

  useEffect(() => {
    const initPage = async () => {
      if (!user) {
        try {
          await checkAuth();
        } catch (err) {
          navigate("/signin", { replace: true });
          return;
        }
      }
      loadCryptos();
    };
    initPage();
  }, [user, navigate, checkAuth]);

  const handleAddCrypto = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitMessage("");
    setSubmitLoading(true);

    try {
      const result = await createCrypto(newCryptoPayload);
      if (result?.success) {
        setSubmitMessage(result.message || "Cryptocurrency added successfully.");
        setNewCryptoPayload({ name: "", symbol: "", price: "", image: "", change24h: "" });
        // Refresh the list
        await loadCryptos();
      }
    } catch (error) {
      setSubmitError(error.message || "Unable to add cryptocurrency.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const joinDate = user?.createdAt 
    ? new Date(user.createdAt).toLocaleDateString() 
    : "Recently";

  const filtered = assets.filter(
    (a) =>
      search === "" ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.symbol.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading || !user) return <div className="p-20 text-center font-medium">Loading your profile...</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="border-b border-[#eef1f6] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0a0b0d] sm:text-[48px]">
                {user.name}
              </h1>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#f0f5ff] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1652f0]" />
                <span className="text-[13px] font-semibold text-[#1652f0]">
                  {user.email} • Joined {joinDate}
                </span>
              </div>
            </div>
            <div className="flex w-full max-w-[360px] items-center gap-2 rounded-full border border-[#d1d9e0] bg-[#f7f9fc] px-4 py-3">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#9fadc0]" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search your assets"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-[14px] text-[#0a0b0d] outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Add new crypto (Imported Layout) ── */}
      <section className="border-b border-[#eef1f6] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-[#e8edf4] bg-[#f7f9fc] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[18px] font-semibold text-[#0a0b0d]">Add a new cryptocurrency</h2>
              <p className="mt-2 text-sm text-[#475569]">Expand your portfolio by integrating the latest digital assets. Select from our list of supported networks to get started.</p>
            </div>
            <span className="rounded-full border border-[#d1d9e0] bg-white px-4 py-2 text-sm text-[#334155]">See available cryptocurrencies you can trade</span>
          </div>

          <form onSubmit={handleAddCrypto} className="grid gap-4 md:grid-cols-5">
            <input
              value={newCryptoPayload.name}
              onChange={(event) => setNewCryptoPayload((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Name"
              className="rounded-2xl border border-[#d1d9e0] bg-white px-4 py-3 text-sm text-[#0a0b0d] outline-none"
            />
            <input
              value={newCryptoPayload.symbol}
              onChange={(event) => setNewCryptoPayload((prev) => ({ ...prev, symbol: event.target.value }))}
              placeholder="Symbol"
              className="rounded-2xl border border-[#d1d9e0] bg-white px-4 py-3 text-sm text-[#0a0b0d] outline-none"
            />
            <input
              value={newCryptoPayload.price}
              onChange={(event) => setNewCryptoPayload((prev) => ({ ...prev, price: event.target.value }))}
              placeholder="Price"
              className="rounded-2xl border border-[#d1d9e0] bg-white px-4 py-3 text-sm text-[#0a0b0d] outline-none"
              type="number"
              step="0.01"
            />
            <input
              value={newCryptoPayload.change24h}
              onChange={(event) => setNewCryptoPayload((prev) => ({ ...prev, change24h: event.target.value }))}
              placeholder="24h change"
              className="rounded-2xl border border-[#d1d9e0] bg-white px-4 py-3 text-sm text-[#0a0b0d] outline-none"
              type="number"
              step="0.01"
            />
            <input
              value={newCryptoPayload.image}
              onChange={(event) => setNewCryptoPayload((prev) => ({ ...prev, image: event.target.value }))}
              placeholder="Image URL"
              className="rounded-2xl border border-[#d1d9e0] bg-white px-4 py-3 text-sm text-[#0a0b0d] outline-none"
            />

            <button
              type="submit"
              disabled={submitLoading}
              className="md:col-span-5 rounded-full bg-[#273c75] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1f2f5a] disabled:opacity-60"
            >
              {submitLoading ? "Saving crypto…" : "Add cryptocurrency"}
            </button>
          </form>

          {(submitMessage || submitError) && (
            <div className="mt-4 rounded-2xl border px-4 py-3 text-sm">
              <p className={submitMessage ? "text-green-700" : "text-red-700"}>
                {submitMessage || submitError}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Table Section ── */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <h2 className="text-[22px] font-semibold text-[#0a0b0d] mb-4">Portfolio Holdings</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e8edf4]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#f7f9fc] border-b border-[#e8edf4]">
                      <th className="px-4 py-4 text-left text-[11px] font-bold text-[#9fadc0] uppercase">Asset</th>
                      <th className="px-4 py-4 text-right text-[11px] font-bold text-[#9fadc0] uppercase">Price</th>
                      <th className="px-4 py-4 text-center text-[11px] font-bold text-[#9fadc0] uppercase">Trend</th>
                      <th className="px-4 py-4 text-right text-[11px] font-bold text-[#9fadc0] uppercase">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((asset) => (
                      <tr key={asset.symbol} className="border-b border-[#eef1f6] hover:bg-[#f7f9fc]">
                        <td className="px-4 py-4 flex items-center gap-3">
                          {asset.icon ? <img src={asset.icon} className="h-9 w-9 rounded-full" /> : <CoinAvatar symbol={asset.symbol} />}
                          <div>
                            <p className="font-semibold text-sm">{asset.name}</p>
                            <p className="text-xs text-[#9fadc0]">{asset.symbol}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right font-medium text-sm">{asset.price}</td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex justify-center"><Sparkline trend={asset.trend} /></div>
                        </td>
                        <td className={`px-4 py-4 text-right font-bold text-sm ${asset.positive ? "text-[#098551]" : "text-[#d93025]"}`}>
                          {asset.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-[#0052ff] p-6 text-white">
                <h3 className="font-bold text-lg">Secure your account</h3>
                <p className="text-sm text-white/80 mt-2">Always use two-factor authentication to keep your assets safe.</p>
                <button className="mt-4 w-full rounded-full bg-white py-2 text-[13px] font-bold text-[#0052ff]">Manage Security</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e8edf4] bg-white px-4 py-12 mt-10">
        <div className="mx-auto w-full max-w-[1220px]">
          <img src={coinbaseNavLogo} alt="Logo" className="h-6 mb-10" />
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e8edf4] pt-6">
            <p className="text-[12px] text-[#9fadc0]">© 2026 Crypto App • Privacy • Terms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Profile;