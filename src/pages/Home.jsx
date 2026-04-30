import { useEffect, useState } from "react";
import heroImage from "../assets/Hero__4_.png";
import bitcoinIcon from "../assets/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png";
import ethereumIcon from "../assets/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png";
import tetherIcon from "../assets/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png";
import solanaIcon from "../assets/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png";
import bnbIcon from "../assets/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png";
import usdCoinIcon from "../assets/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png";
import AdvancedTraderSection from "../components/common/AdvancedTraderSection";
import BaseAppSection from "../components/common/BaseAppSection";
import CryptoAppOneSection from "../components/common/CryptoAppOneSection";
import HeroSection from "../components/common/HeroSection";
import SeventhPageSection from "../components/common/SeventhPageSection";
import SixthPageSection from "../components/common/SixthPageSection";
import TakeControlSection from "../components/common/TakeControlSection";
import CryptoExploreSection from "../components/crypto/CryptoExploreSection";
import { marketRows as defaultMarketRows } from "../data/homeData";
import { fetchCryptos } from "../api/api";

function Home() {
  const [marketRows, setMarketRows] = useState(defaultMarketRows);

  useEffect(() => {
    let active = true;

    const iconMap = {
      BTC: bitcoinIcon,
      ETH: ethereumIcon,
      USDT: tetherIcon,
      SOL: solanaIcon,
      BNB: bnbIcon,
      USDC: usdCoinIcon,
    };

    fetchCryptos()
      .then((result) => {
        if (!active || !result?.data) {
          return;
        }

        const rows = result.data.filter(asset => !asset.isUserAdded).slice(0, 8).map((asset) => ({
          name: asset.name,
          icon: asset.image || iconMap[asset.symbol?.toUpperCase()] || undefined,
          price:
            typeof asset.price === "number"
              ? `GHS ${asset.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : asset.price,
          change:
            asset.change24h !== undefined
              ? `${asset.change24h >= 0 ? "+" : ""}${asset.change24h.toFixed(2)}%`
              : "",
        }));

        setMarketRows(rows);
        setIsLoading(false); 
      })
      .catch(() => {
        setMarketRows(defaultMarketRows); 
        setIsLoading(false);
       
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <HeroSection heroImage={heroImage} />
      <CryptoExploreSection marketRows={marketRows} />
      <AdvancedTraderSection />
      <CryptoAppOneSection />
      <BaseAppSection />
      <SixthPageSection />
      <TakeControlSection />
      <SeventhPageSection />
    </>
  );
}

export default Home;