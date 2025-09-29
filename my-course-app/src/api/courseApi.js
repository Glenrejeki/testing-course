// src/api/courseApi.js
const BASE_URL = "https://open-api.delcom.org/api/v1"

export async function getAllCourses(token) {
  const res = await fetch(`${BASE_URL}/courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) throw new Error("Gagal mengambil data kursus")
  const data = await res.json()
  return data.data.courses
}

export async function getCourseDetail(id, token) {
  const res = await fetch(`${BASE_URL}/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) throw new Error("Gagal mengambil detail kursus")
  const data = await res.json()
  return data.data.course
}
