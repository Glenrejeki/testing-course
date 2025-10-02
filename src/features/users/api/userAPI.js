import { fetchData } from "@/helpers/apiHelper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllUsers(token) {
  return fetchData(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getProfile(token) {
  return fetchData(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
