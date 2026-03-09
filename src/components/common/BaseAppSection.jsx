import baseAppImage from "../../assets/CB_LOLP__1_.png";
import Button from "./Button";

function BaseAppSection() {
  return (
    <section className="bg-white px-5 pb-16 pt-8 sm:px-7 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-[minmax(195px,54%)_minmax(0,1fr)] items-center gap-7 sm:grid-cols-[minmax(255px,50%)_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[minmax(420px,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="order-1">
          <div className="flex w-[112%] items-center justify-center rounded-[44px] bg-[#e8eef9] px-6 pb-0 pt-3 shadow-[0_14px_30px_rgba(2,6,23,0.14)] sm:w-[106%] sm:rounded-[52px] sm:px-7 sm:pb-0 sm:pt-4 sm:shadow-none lg:w-[104%] lg:rounded-[60px] lg:px-10 lg:pb-0 lg:pt-6">
            <img
              src={baseAppImage}
              alt="Base app experience"
              className="mx-auto h-auto w-[97%] rounded-[34px] object-cover sm:w-[94%] sm:rounded-[40px] lg:w-[92%] lg:rounded-[46px]"
            />
          </div>
        </div>

        <div className="order-2 mt-4 sm:mt-6 lg:mt-8 lg:max-w-[620px]">
          <p className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#415068]">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#dbe6ff] text-[#1652f0]" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11h16" />
                <path d="M4 16h16" />
                <path d="M4 6h16" />
              </svg>
            </span>
            BASE APP
          </p>

          <h2 className="mt-5 text-[21px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0b0d] sm:text-[28px] lg:text-[48px]">
            <span className="lg:hidden">
              Countless ways to earn crypto with
              <br />
              the Base App.
            </span>
            <span className="hidden lg:inline">Countless ways to earn crypto with the Base App.</span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.55] text-[#4b5565] sm:mt-5 sm:text-[16px] lg:text-[20px]">
            <span className="lg:hidden">
              An everything app to
              <br />
              trade, create,
              <br />
              discover, and chat, all in one place.
            </span>
            <span className="hidden lg:inline">An everything app to trade, create, discover, and chat, all in one place.</span>
          </p>

          <Button className="mt-6 inline-flex h-[46px] items-center justify-center rounded-full bg-black px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f1f1f] sm:mt-8 sm:h-[52px] sm:px-9 sm:text-[16px] lg:h-[56px] lg:px-11 lg:text-[17px]">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BaseAppSection;
