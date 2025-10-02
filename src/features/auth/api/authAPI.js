import { fetchData } from "@/helpers/apiHelper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function register(name, email, password) {
  return fetchData(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
}

export async function login(email, password) {
  return fetchData(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}
