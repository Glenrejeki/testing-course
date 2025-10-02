import { fetchData } from "@/helpers/apiHelper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllCourses(token, isMe = false) {
  const url = isMe ? `${BASE_URL}/courses?is_me=1` : `${BASE_URL}/courses`;
  return fetchData(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getCourseDetail(id, token) {
  return fetchData(`${BASE_URL}/courses/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
