import {Link} from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function HeroSection({ heroImage }) {
  return (
    <section className="mx-auto grid w-full max-w-[18000px] grid-cols-1 items-center gap-10 rounded-[56px] px-4 pb-14 pt-10 sm:px-6 md:pt-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-16">
      <div className="order-2 mx-auto w-full max-w-[800px] lg:order-1 lg:max-w-none">
        <img
          src={heroImage}
          alt="Phone with crypto interface"
          className="h-auto w-full rounded-[56px] object-contain"
        />
        <div className="text-sm text-gray-600">
          <p>Stocks and prediction markets not available in your jurisdiction.</p>
        </div>
      </div>

      <div className="order-1 max-w-[560px] lg:order-2">
        <h1 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-[62px]">
          The future of
          <br />
          money is here
        </h1>

        <p className="mt-6 max-w-[520px] text-[18px] leading-[1.55] text-black">
          Trade crypto and more on a platform you can trust.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-[500px] sm:flex-row">
          <Input
            type="email"
            placeholder="satoshi@nakamoto.com"
            className="h-14 flex-1 rounded-xl border border-[#1652f0] px-4 text-lg text-[#0a0b0d] outline-none transition-shadow placeholder:text-[#8a93a3] focus:border-[#1652f0] focus:ring-2 focus:ring-[#1652f0]/20"
          />
        <Link to="/signup" className="flex-1 sm:flex-none">
          <Button
            className="h-14 rounded-4xl bg-[#1652f0] px-7 text-lg font-semibold text-white transition-colors hover:bg-[#0c46df]"
          >
            Sign up
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;