import apiHelper from "@/helpers/apiHelper";

const BASE_URL = "/courses"; // ganti sesuai endpoint backend kamu

// =============================
// COURSE API
// =============================
export const courseAPI = {
  getAllCourses: async () => {
    return apiHelper.fetchData(`${BASE_URL}`, { method: "GET" });
  },

  getCourseDetail: async (id) => {
    return apiHelper.fetchData(`${BASE_URL}/${id}`, { method: "GET" });
  },

  addNewCourse: async (data) => {
    return apiHelper.fetchData(`${BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  updateCourse: async (id, data) => {
    return apiHelper.fetchData(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  deleteCourse: async (id) => {
    return apiHelper.fetchData(`${BASE_URL}/${id}`, { method: "DELETE" });
  },

  changeCoverCourse: async (id, file) => {
    const formData = new FormData();
    formData.append("cover", file);

    return apiHelper.fetchData(`${BASE_URL}/${id}/cover`, {
      method: "PATCH",
      body: formData,
    });
  },
};

// =============================
// STUDENT API
// =============================
export const studentAPI = {
  addStudent: async (courseId, studentData) => {
    return apiHelper.fetchData(`${BASE_URL}/${courseId}/students`, {
      method: "POST",
      body: JSON.stringify(studentData),
    });
  },

  deleteStudent: async (courseId, studentId) => {
    return apiHelper.fetchData(`${BASE_URL}/${courseId}/students/${studentId}`, {
      method: "DELETE",
    });
  },

  changeStudentRatings: async (courseId, studentId, rating) => {
    return apiHelper.fetchData(
      `${BASE_URL}/${courseId}/students/${studentId}/rating`,
      {
        method: "PATCH",
        body: JSON.stringify({ rating }),
      }
    );
  },
};

// =============================
// CONTENT API
// =============================
export const contentAPI = {
  addNewContent: async (courseId, contentData) => {
    return apiHelper.fetchData(`${BASE_URL}/${courseId}/contents`, {
      method: "POST",
      body: JSON.stringify(contentData),
    });
  },

  updateContent: async (courseId, contentId, contentData) => {
    return apiHelper.fetchData(
      `${BASE_URL}/${courseId}/contents/${contentId}`,
      {
        method: "PUT",
        body: JSON.stringify(contentData),
      }
    );
  },

  getContentDetail: async (courseId, contentId) => {
    return apiHelper.fetchData(
      `${BASE_URL}/${courseId}/contents/${contentId}`,
      { method: "GET" }
    );
  },

  deleteContent: async (courseId, contentId) => {
    return apiHelper.fetchData(
      `${BASE_URL}/${courseId}/contents/${contentId}`,
      { method: "DELETE" }
    );
  },

  changeContentStatus: async (courseId, contentId, status) => {
    return apiHelper.fetchData(
      `${BASE_URL}/${courseId}/contents/${contentId}/status`,
      {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }
    );
  },
};
