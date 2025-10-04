// src/features/courses/states/reducer.js
// Reducer untuk mengelola semua state terkait Courses

// 🔹 State awal untuk semua daftar kursus
const initialCoursesState = {
  list: [],
  loading: false,
  error: null,
};

// 🔹 State awal untuk daftar kursus milik user (myCourses)
const initialMyCoursesState = {
  list: [],
  loading: false,
  error: null,
};

// 🔹 State awal untuk detail kursus tertentu
const initialCourseDetailState = {
  data: null,
  loading: false,
  error: null,
};

// ============================
// 🔹 Reducer: semua course
// ============================
export function coursesReducer(state = initialCoursesState, action) {
  switch (action.type) {
    case "courses/fetchStart":
      return { ...state, loading: true, error: null };

    case "courses/fetchSuccess":
      return { ...state, loading: false, list: action.payload };

    case "courses/fetchError":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

// ============================
// 🔹 Reducer: my courses (kursus milik user)
// ============================
export function myCoursesReducer(state = initialMyCoursesState, action) {
  switch (action.type) {
    case "myCourses/fetchStart":
      return { ...state, loading: true, error: null };

    case "myCourses/fetchSuccess":
      return { ...state, loading: false, list: action.payload };

    case "myCourses/fetchError":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

// ============================
// 🔹 Reducer: detail course
// ============================
export function courseDetailReducer(state = initialCourseDetailState, action) {
  switch (action.type) {
    case "courseDetail/fetchStart":
      return { ...state, loading: true, error: null };

    case "courseDetail/fetchSuccess":
      return { ...state, loading: false, data: action.payload };

    case "courseDetail/fetchError":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
