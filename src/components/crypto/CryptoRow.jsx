function CryptoRow({ asset }) {
  return (
    <div
      key={asset.name}
      className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 last:border-b-0 sm:grid-cols-[2fr_1fr_1fr_auto] sm:px-6"
    >
      <div className="flex items-center gap-3">
        <img src={asset.icon} alt={asset.name} className="h-9 w-9 rounded-full object-cover" />
        <div>
          <p className="text-[35px] font-semibold text-white">{asset.name}</p>
        </div>
      </div>

      <p className="hidden text-[14px] font-medium text-[#101114] sm:block">{asset.price}</p>
      <p className="hidden text-[14px] font-semibold text-[#098551] sm:block">{asset.change}</p>
    </div>
  );
}

export default CryptoRow;