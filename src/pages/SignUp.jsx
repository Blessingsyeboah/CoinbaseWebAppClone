import { Link } from "react-router-dom";
import delegateIcon from "../assets/delegate-3.svg";
import developerIcon from "../assets/developerPlatformNavigation-2.svg";
import businessIcon from "../assets/holdingCoin-3.svg";

const accountTypes = [
  {
    title: "Personal",
    description: "Trade crypto as an individual.",
    icon: delegateIcon,
    alt: "Personal account",
  },
  {
    title: "Business",
    description: (
      <>
        Manage teams and portfolios,
        <br />
        accept crypto payments, access
        <br />
        APIs, and more.
      </>
    ),
    icon: businessIcon,
    alt: "Business account",
  },
  {
    title: "Developer",
    description: (
      <>
        Build onchain using developer
        <br />
        tooling.
      </>
    ),
    icon: developerIcon,
    alt: "Developer account",
  },
];

function SignUp() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#141414] px-4 py-10 text-white">
      <Link to="/" aria-label="Coinbase home" className="absolute left-6 top-6 text-white sm:left-8 sm:top-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
          <path d="M20.032 28.5c-4.705 0-8.516-3.804-8.516-8.5s3.81-8.5 8.516-8.5a8.51 8.51 0 0 1 8.388 7.083H37C36.276 9.857 28.96 3 20.032 3 10.629 3 3 10.615 3 20s7.629 17 17.032 17C28.959 37 36.276 30.143 37 21.417h-8.58a8.51 8.51 0 0 1-8.388 7.083" />
        </svg>
      </Link>

      <div className="w-full max-w-[620px]">
        <h1 className="mx-auto w-[65.6%] text-left text-2xl font-medium tracking-tight sm:text-3xl">
          What kind of account are you creating?
        </h1>

        <div className="mx-auto mt-8 w-[82%] space-y-4">
          {accountTypes.map((account) => (
            <button
              key={account.title}
              type="button"
              className="mx-auto flex w-[80%] items-start gap-4 rounded-lg border border-white/15 bg-[#181818] px-5 py-5 text-left transition-colors hover:bg-white/5"
            >
              <img src={account.icon} alt={account.alt} className="mt-0.5 h-12 w-12 shrink-0" />

              <span className="block">
                <span className="block text-lg font-semibold text-white">{account.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-300">{account.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignUp;
