import apiHelper from "./apiHelper";

const BASE_URL = "http://localhost:3000/api"; // ganti sesuai backend

function _url(path) {
  return `${BASE_URL}${path}`;
}

export async function postRegister(name, email, password) {
  return apiHelper.fetchData(_url("/register"), {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export async function postLogin(email, password) {
  const data = await apiHelper.fetchData(_url("/login"), {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.token) {
    apiHelper.putAccessToken(data.token); // simpan token
  }
  return data;
}

export async function getProfile() {
  return apiHelper.fetchData(_url("/profile"));
}
