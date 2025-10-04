import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllCourses } from "@/features/courses/states/action";
import { Link } from "react-router-dom";

export default function CourseListPage() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(asyncGetAllCourses());
  }, [dispatch]);

  return (
    <div>
      <h1>Daftar Kursus</h1>
      <Link to="/courses/new">+ Tambah Kursus Baru</Link>
      <ul>
        {courses && courses.length > 0 ? (
          courses.map((c) => (
            <li key={c.id}>
              <Link to={`/courses/${c.id}`}>{c.title}</Link>
            </li>
          ))
        ) : (
          <p>Tidak ada kursus tersedia.</p>
        )}
      </ul>
    </div>
  );
}
