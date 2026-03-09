import { useParams } from "react-router-dom";

function AssetDetail() {
  const { symbol } = useParams();

  return (
    <section className="mx-auto w-full max-w-[1220px] px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold">Asset Detail</h1>
      <p className="mt-4 text-lg text-gray-600">Viewing details for: {symbol ?? "unknown asset"}</p>
    </section>
  );
}

export default AssetDetail;
