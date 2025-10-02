import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@/features/auth/states/authContext";
import { getCourseDetail } from "../api/courseAPI";

export default function CourseDetailPage() {
  const { token } = useAuth();
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getCourseDetail(id, token);
      setCourse(data.data);
    }
    if (token) load();
  }, [id, token]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
