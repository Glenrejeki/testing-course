import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/states/authContext";
import { getAllCourses } from "../api/courseAPI";

export default function CourseListPage() {
  const { token } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAllCourses(token);
      setCourses(data.data);
    }
    if (token) load();
  }, [token]);

  return (
    <div>
      <h1>Daftar Kursus</h1>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            <a href={`/courses/${c.id}`}>{c.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
