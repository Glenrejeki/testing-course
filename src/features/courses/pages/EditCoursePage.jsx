import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCourseDetail, asyncUpdateCourse } from "@/features/courses/states/action";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCoursePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.courseDetail);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  useEffect(() => {
    dispatch(asyncGetCourseDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
      setCover(course.cover);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncUpdateCourse({ id, title, description, cover }));
    navigate(`/courses/${id}`);
  };

  return (
    <div>
      <h1>Edit Kursus</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input value={cover} onChange={(e) => setCover(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
