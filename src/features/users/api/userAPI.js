import apiHelper from "@/helpers/apiHelper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// 🔹 Ambil semua user
export async function getAllUsers(token) {
  return apiHelper.fetchData(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// 🔹 Ambil profil user yang sedang login
export async function getProfile(token) {
  return apiHelper.fetchData(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
