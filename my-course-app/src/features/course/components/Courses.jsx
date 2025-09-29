import { useEffect, useState } from "react";
import { getAllCourses, addCourse, deleteCourse } from "../api/courseApi";
import CourseCard from "./CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then(setCourses);
  }, []);

  const handleAdd = async () => {
    const newCourse = await addCourse({
      title: "New Course",
      description: "Ini course baru.",
    });
    setCourses([...courses, newCourse]);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <button className="btn btn-success" onClick={handleAdd}>
        ➕ Tambah Course
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
