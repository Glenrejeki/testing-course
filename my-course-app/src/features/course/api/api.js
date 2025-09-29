import axios from "axios";

const API_BASE = "http://localhost:5000/api/courses"; // ganti sesuai backendmu

export const getAllCourses = () => axios.get(API_BASE);
export const addCourse = (data) =>
  axios.post(API_BASE, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateCourse = (id, data) => axios.put(`${API_BASE}/${id}`, data);
export const deleteCourse = (id) => axios.delete(`${API_BASE}/${id}`);
