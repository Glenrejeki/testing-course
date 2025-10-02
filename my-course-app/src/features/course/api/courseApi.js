import apiHelper from "./apiHelper";

const BASE_URL = "http://localhost:3000/api";

function _url(path) {
  return `${BASE_URL}${path}`;
}

export async function getAllCourses() {
  return apiHelper.fetchData(_url("/courses"));
}
