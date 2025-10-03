// src/features/auth/api/authApi.js

const BASE_URL = import.meta.env.VITE_DELCOM_BASEURL;

export async function postRegister(name, email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Gagal daftar");
    }

    return data;
  } catch (err) {
    console.error("Register error:", err.message);
    throw err;
  }
}

export async function postLogin(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login gagal");
    }

    return data;
  } catch (err) {
    console.error("Login error:", err.message);
    throw err;
  }
}
