import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../api/api";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadProfile = async () => {
      try {
        const response = await fetchProfile();
        if (!active) return;
        setUser(response.user);
      } catch (err) {
        if (!active) return;
        setError(err.message || "Authentication required. Please sign in.");
        navigate("/signin", { replace: true });
      } finally {
        if (active) setLoading(false);
      }
    };

    loadProfile();

    return () => {
      active = false;
    };
  }, [navigate]);

  if (loading) {
    return (
      <section className="min-h-screen bg-white px-4 py-20 text-center text-gray-700">
        <div className="mx-auto max-w-lg rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] px-6 py-10 shadow-sm">
          <p className="text-lg font-medium">Loading profile...</p>
        </div>
      </section>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <section className="min-h-screen bg-white px-4 py-20 text-gray-900">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] px-8 py-12 shadow-sm">
        <h1 className="text-3xl font-semibold">Your profile</h1>
        <p className="mt-2 text-sm text-[#475569]">This page is protected and requires a valid authentication session.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#64748b]">Name</p>
            <p className="mt-2 text-xl font-semibold text-[#111827]">{user.name}</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#64748b]">Email</p>
            <p className="mt-2 text-xl font-semibold text-[#111827]">{user.email}</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:col-span-2">
            <p className="text-sm text-[#64748b]">Account created</p>
            <p className="mt-2 text-xl font-semibold text-[#111827]">
              {new Date(user.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile;
