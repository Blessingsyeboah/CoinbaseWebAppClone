import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import delegateIcon from "../assets/delegate-3.svg";
import developerIcon from "../assets/developerPlatformNavigation-2.svg";
import businessIcon from "../assets/holdingCoin-3.svg";
import { authRegister } from "../api/api";

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
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await authRegister({ name, email, password });
      navigate("/");
    } catch (error) {
      setMessage(error.message || "Unable to create account.");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (type) => {
    setSelectedType(type);
  };

  const handleBack = () => {
    setSelectedType(null);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#141414] px-4 py-10 text-white">
      <Link to="/" aria-label="Crypto App home" className="absolute left-6 top-6 text-white sm:left-8 sm:top-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
          <path d="M20.032 28.5c-4.705 0-8.516-3.804-8.516-8.5s3.81-8.5 8.516-8.5a8.51 8.51 0 0 1 8.388 7.083H37C36.276 9.857 28.96 3 20.032 3 10.629 3 3 10.615 3 20s7.629 17 17.032 17C28.959 37 36.276 30.143 37 21.417h-8.58a8.51 8.51 0 0 1-8.388 7.083" />
        </svg>
      </Link>

      <div className="w-full max-w-[620px]">
        {selectedType ? (
          <>
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-sm text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
              Back to account types
            </button>
            <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-[#181818] p-6 shadow-xl shadow-black/10 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Create your {selectedType} account</h2>
              <p className="mt-2 text-sm text-gray-400">Enter the details below to register for the demo.</p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-gray-300">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Jane Doe"
                  required
                  className="w-full rounded-xl border border-white/15 bg-[#0f172a] px-5 py-4 text-base text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#2f61e8]"
                />

                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/15 bg-[#0f172a] px-5 py-4 text-base text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#2f61e8]"
                />

                <label className="block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a password"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-white/15 bg-[#0f172a] px-5 py-4 text-base text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#2f61e8]"
                />

                {message && <p className="text-sm text-red-400">{message}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#273c75] px-6 py-4 text-base font-semibold text-black transition-colors hover:bg-[#22356a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating account…" : "Create account"}
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link to="/signin" className="font-semibold text-[#2f61e8] hover:text-[#5f86f0]">
                  Sign in
                </Link>
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="mx-auto w-[65.6%] text-left text-2xl font-medium tracking-tight sm:text-3xl">
              What kind of account are you creating?
            </h1>

            <div className="mx-auto mt-4 w-[82%] rounded-lg border border-yellow-600/50 bg-yellow-600/10 px-4 py-3 text-center text-sm text-yellow-500">
              Demo app – do not use your real password
            </div>

            <div className="mx-auto mt-8 w-[82%] space-y-4">
              {accountTypes.map((account) => (
                <button
                  key={account.title}
                  type="button"
                  onClick={() => handleCardClick(account.title)}
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
          </>
        )}
      </div>
    </section>
  );
}

export default SignUp;
