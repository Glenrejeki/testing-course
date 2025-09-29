import { useEffect, useState } from "react";
import { getAllCourses, addCourse, updateCourse, deleteCourse } from "../api/courseApi";
import CourseCard from "./CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then(data => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
