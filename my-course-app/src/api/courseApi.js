// Simulasi data (belum pakai backend)
let courses = [
  { id: 1, title: "React untuk Pemula", description: "Belajar dasar React.js" },
  { id: 2, title: "Tailwind CSS", description: "Membuat UI modern dengan Tailwind" },
  { id: 3, title: "JavaScript Lanjutan", description: "Asynchronous, Fetch API, dll." }
];

// Get all courses
export function getAllCourses() {
  return Promise.resolve(courses);
}

// Add course
export function addCourse(course) {
  const newCourse = { id: Date.now(), ...course };
  courses.push(newCourse);
  return Promise.resolve(newCourse);
}

// Update course
export function updateCourse(id, updatedCourse) {
  courses = courses.map(c => (c.id === id ? { ...c, ...updatedCourse } : c));
  return Promise.resolve(updatedCourse);
}

// Delete course
export function deleteCourse(id) {
  courses = courses.filter(c => c.id !== id);
  return Promise.resolve(true);
}
