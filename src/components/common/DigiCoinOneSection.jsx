import zeroFeesImage from "../../assets/zero_fees_us.png";
import Button from "./Button";

function CryptoAppOneSection() {
  return (
    <section className="-mt-14 bg-white px-5 pb-16 pt-0 sm:-mt-20 sm:px-7 sm:pb-16 sm:pt-0 lg:mt-0 lg:px-8 lg:pb-20 lg:pt-18">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-[minmax(0,1fr)_minmax(180px,50%)] items-center gap-7 sm:grid-cols-[minmax(0,1fr)_minmax(240px,48%)] sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,1fr)] lg:items-start lg:gap-16">
        <div className="order-1 mt-4 sm:mt-6 lg:mt-8 lg:max-w-[620px]">
          <p className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#415068]">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#dbe6ff] text-[#1652f0]" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11h16" />
                <path d="M4 16h16" />
                <path d="M4 6h16" />
              </svg>
            </span>
            CRYPTO APP ONE
          </p>

          <h2 className="mt-5 text-[24px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0b0d] sm:text-[32px] lg:text-[52px]">
            Zero trading fees,
            <br />
            more rewards.
          </h2>

          <p className="mt-4 text-[14px] leading-[1.55] text-[#4b5565] sm:mt-5 sm:text-[16px] lg:text-[20px]">
            Get more out of crypto with one membership:
            <br />
            zero trading fees, boosted rewards, priority
            <br />
            support, and more.
          </p>

          <Button className="mt-6 inline-flex h-[46px] items-center justify-center rounded-full bg-black px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f1f1f] sm:mt-8 sm:h-[52px] sm:px-9 sm:text-[16px] lg:h-[56px] lg:px-11 lg:text-[17px]">
            Claim free trial
          </Button>
        </div>

        <div className="order-2">
          <div className="ml-auto mr-10 flex w-[104%] items-center justify-center rounded-[44px] bg-[#e8eef9] px-6 pb-0 pt-3 sm:mr-12 sm:w-[102%] sm:rounded-[52px] sm:px-7 sm:pb-0 sm:pt-4 lg:mr-9 lg:w-[104%] lg:rounded-[60px] lg:px-10 lg:pb-0 lg:pt-6">
            <img
              src={zeroFeesImage}
              alt="Crypto App One zero trading fees"
              className="mx-auto h-auto w-[92%] rounded-[34px] object-cover sm:rounded-[40px] lg:rounded-[46px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoAppOneSection;
