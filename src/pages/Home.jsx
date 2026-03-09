import heroImage from "../assets/Hero__4_.png";
import AdvancedTraderSection from "../components/common/AdvancedTraderSection";
import BaseAppSection from "../components/common/BaseAppSection";
import CoinbaseOneSection from "../components/common/CoinbaseOneSection";
import HeroSection from "../components/common/HeroSection";
import SeventhPageSection from "../components/common/SeventhPageSection";
import SixthPageSection from "../components/common/SixthPageSection";
import TakeControlSection from "../components/common/TakeControlSection";
import CryptoExploreSection from "../components/crypto/CryptoExploreSection";
import { marketRows } from "../data/homeData";

function Home() {
  return (
    <>
      <HeroSection heroImage={heroImage} />
      <CryptoExploreSection marketRows={marketRows} />
      <AdvancedTraderSection />
      <CoinbaseOneSection />
      <BaseAppSection />
      <SixthPageSection />
      <TakeControlSection />
      <SeventhPageSection />
    </>
  );
}

export default Home;