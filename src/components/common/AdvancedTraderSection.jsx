import advancedImage from "../../assets/Advanced.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function AdvancedTraderSection() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[84vh] border-t border-[#eef1f6] bg-[#f8fafc] px-5 py-14 sm:bg-white sm:px-7 lg:flex lg:items-center lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-[minmax(180px,50%)_minmax(0,1fr)] items-center gap-7 sm:grid-cols-[minmax(240px,48%)_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[minmax(420px,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="order-1">
          <img
            src={advancedImage}
            alt="Advanced trading tools"
            className="h-auto w-full rounded-[32px] object-cover shadow-[0_12px_28px_rgba(2,6,23,0.12)] sm:shadow-none sm:rounded-[36px] lg:max-h-[72vh] lg:rounded-[44px]"
          />
        </div>

        <div className="order-2 max-w-[620px]">
          <h2 className="text-[23px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0b0d] sm:text-[27px] lg:text-[46px]">
            <span className="lg:hidden">
              Powerful tools,
              <br />
              designed for the
              <br />
              advanced trader.
            </span>
            <span className="hidden lg:inline">
              Powerful tools, designed
              <br />
              for the advanced trader.
            </span>
          </h2>

          <p className="mt-4 text-[16px] leading-[1.6] text-[#4b5565] sm:mt-5 sm:text-[17px] lg:mt-6 lg:text-[21px] lg:leading-[1.65]">
            Powerful analytical tools with the safety and security of Crypto App deliver the ultimate trading
            experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity
            across hundreds of markets.
          </p>

          <Button
            onClick={() => navigate("/start-trading")}
            className="mt-6 inline-flex h-[52px] items-center justify-center rounded-full bg-black px-9 text-[16px] font-semibold text-white transition-colors hover:bg-[#1f1f1f] sm:mt-7 sm:h-[54px] sm:px-10 sm:text-[17px] lg:mt-9 lg:h-[58px] lg:px-12 lg:text-[19px]"
          >
            Start trading
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AdvancedTraderSection;
