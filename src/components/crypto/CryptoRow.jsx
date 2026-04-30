function CryptoRow({ asset }) {
  return (
    <div
      className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-3xl border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[2fr_1fr] sm:px-5"
    >
      <div className="flex items-center gap-3">
        <img src={asset.image || asset.icon} alt={asset.name} className="h-9 w-9 rounded-full object-cover" />
        <div>
          <p className="text-[30px] font-semibold text-white leading-[1.05]">{asset.name}</p>
          {asset.symbol && <p className="text-sm text-gray-400">{asset.symbol}</p>}
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 text-right">
        <p className="text-[18px] font-semibold text-white">{asset.price}</p>
        <p
          className={`text-[15px] font-semibold ${
            asset.change?.startsWith("-")
              ? "text-[#ff5e6c]"
              : asset.change === "0.00%"
              ? "text-[#94a3b8]"
              : "text-[#10b981]"
          }`}
        >
          {asset.change}
        </p>
      </div>
    </div>
  );
}

export default CryptoRow;