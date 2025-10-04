import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  asyncGetCourseDetail,
  asyncDeleteCourse,
} from "@/features/courses/states/action";

export default function CourseDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.courseDetail);

  useEffect(() => {
    dispatch(asyncGetCourseDetail(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(asyncDeleteCourse(id));
    navigate("/courses");
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.cover} alt="cover" width="200" />
      <p>{course.description}</p>

      <Link to={`/courses/${id}/edit`}>✏ Edit</Link> |{" "}
      <button onClick={handleDelete}>🗑 Delete</button>

      <h2>Konten</h2>
      <Link to={`/courses/${id}/contents`}>Kelola Konten</Link>
    </div>
  );
}
