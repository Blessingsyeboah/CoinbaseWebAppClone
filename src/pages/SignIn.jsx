import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../api/api";
import { useAuth } from "../context/AuthContext";


function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await authLogin( {email, password});
      setUser(response.user);
      navigate("/profile");
    } catch (error) {
      setMessage(error.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#141414] px-4 py-10 text-white">
      <Link to="/" aria-label="Crypto App home" className="absolute left-6 top-6 text-white sm:left-8 sm:top-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
          <path d="M20.032 28.5c-4.705 0-8.516-3.804-8.516-8.5s3.81-8.5 8.516-8.5a8.51 8.51 0 0 1 8.388 7.083H37C36.276 9.857 28.96 3 20.032 3 10.629 3 3 10.615 3 20s7.629 17 17.032 17C28.959 37 36.276 30.143 37 21.417h-8.58a8.51 8.51 0 0 1-8.388 7.083" />
        </svg>
      </Link>

      <div className="w-full max-w-[500px]">
        <h1 className="mx-auto w-[82%] text-center text-3xl font-medium tracking-tight sm:text-4xl">Sign in to Crypto App</h1>

        <div className="mx-auto mt-4 w-[82%] rounded-lg border border-yellow-600/50 bg-yellow-600/10 px-4 py-3 text-center text-sm text-yellow-500">
          Demo app – do not use your real password
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block w-[82%] mx-auto text-sm font-medium text-gray-300">
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="block w-[82%] rounded-xl border border-white/15 bg-[#181818] px-6 py-4 text-base text-gray-100 placeholder:text-gray-500 outline-none transition-colors focus:border-[#2f61e8] mx-auto"
          />

          <label htmlFor="password" className="block w-[82%] mx-auto text-sm font-medium text-gray-300">
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Your password"
            className="block w-[82%] rounded-xl border border-white/15 bg-[#181818] px-6 py-4 text-base text-gray-100 placeholder:text-gray-500 outline-none transition-colors focus:border-[#2f61e8] mx-auto"
          />

          {message && <p className="mx-auto w-[82%] text-center text-sm text-red-400">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="block w-[82%] rounded-full bg-[#273c75] px-6 py-4 text-base font-semibold text-black transition-colors hover:bg-[#22356a] disabled:cursor-not-allowed disabled:opacity-60 mx-auto"
          >
            {loading ? "Signing in…" : "Continue"}
          </button>
        </form>

        <div className="my-6 mx-auto flex w-[82%] items-center gap-3 text-base text-gray-500">
          <span className="h-px flex-1 bg-white/20" />
          <span>OR</span>
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="block w-[82%] rounded-full border border-white/15 bg-transparent px-6 py-4 text-base font-medium text-gray-100 transition-colors hover:bg-white/5 mx-auto"
          >
            Sign in with Passkey
          </button>

          <button
            type="button"
            className="block w-[82%] rounded-full border border-white/15 bg-transparent px-6 py-4 text-base font-medium text-gray-100 transition-colors hover:bg-white/5 mx-auto"
          >
            Sign in with Google
          </button>

          <button
            type="button"
            className="block w-[82%] rounded-full border border-white/15 bg-transparent px-6 py-4 text-base font-medium text-gray-100 transition-colors hover:bg-white/5 mx-auto"
          >
            Sign in with Apple
          </button>
        </div>

        <p className="mt-6 text-center text-base text-gray-300">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-[#2f61e8] hover:text-[#5f86f0]">
            Sign up
          </Link>
        </p>

        <p className="mt-5 text-center text-sm leading-relaxed text-gray-500">
          Not your device? Use a private window. See our Privacy Policy for more info.
        </p>
      </div>
    </section>
  );
}

export default SignIn;
