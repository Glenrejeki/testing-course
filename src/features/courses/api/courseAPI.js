import apiHelper from "@/helpers/apiHelper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// =======================
// COURSE API
// =======================

export async function addCourse(formData, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export async function changeCourseCover(id, formData, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${id}/cover`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export async function updateCourse(id, data, token) {
  const body = new URLSearchParams(data);
  return apiHelper.fetchData(`${BASE_URL}/courses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
    body,
  });
}

export async function getAllCourses(token, isMe = false) {
  const url = isMe ? `${BASE_URL}/courses?is_me=1` : `${BASE_URL}/courses`;
  return apiHelper.fetchData(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getCourseDetail(id, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function deleteCourse(id, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}

// =======================
// STUDENT API
// =======================

export async function addStudent(courseId, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function deleteStudent(courseId, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/students`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function changeStudentRatings(courseId, data, token) {
  const body = new URLSearchParams(data);
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/students/ratings`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
    body,
  });
}

// =======================
// CONTENT API
// =======================

export async function addContent(courseId, data, token) {
  const body = new URLSearchParams(data);
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/contents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
    body,
  });
}

export async function updateContent(courseId, contentId, data, token) {
  const body = new URLSearchParams(data);
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/contents/${contentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}` },
    body,
  });
}

export async function getContentDetail(courseId, contentId, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/contents/${contentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function deleteContent(courseId, contentId, token) {
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/contents/${contentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}` },
  });
}

export async function changeContentStatus(courseId, contentId, status, token) {
  const body = new URLSearchParams({ status });
  return apiHelper.fetchData(`${BASE_URL}/courses/${courseId}/contents/${contentId}/learns`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}` },
    body,
  });
}
