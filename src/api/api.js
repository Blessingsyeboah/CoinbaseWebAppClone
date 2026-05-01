const API_BASE_URL = import.meta.env.VITE_API_URL || "https://interim-assesment-blessingsyeboah.onrender.com/)";

async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch (error) {
    throw new Error("Unable to reach the backend API. Make sure the server is running and the API URL is correct.");
  }

  let json;
  try {
    json = await response.json();
  } catch {
    json = null;
  }

  if (!response.ok) {
    throw new Error(json?.message || response.statusText || "API request failed.");
  }

  return json;
}

export async function authRegister(payload) {
  return request("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function authLogin(payload) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function fetchProfile() {
  return request("/auth/profile");
}

export async function fetchCryptos() {
  return request("/crypto");
}

export async function fetchTopGainers() {
  return request("/crypto/gainers");
}

export async function fetchNewCryptos() {
  return request("/crypto/new");
}

export async function createCrypto(payload) {
  return request("/crypto", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
