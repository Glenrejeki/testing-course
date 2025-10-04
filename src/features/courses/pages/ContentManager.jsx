import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddContent,
  asyncDeleteContent,
  asyncGetCourseDetail,
  asyncUpdateContent,
} from "@/features/courses/states/action";
import { useParams } from "react-router-dom";

export default function ContentManager() {
  const { id } = useParams(); // courseId
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courseDetail);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(asyncGetCourseDetail(id));
  }, [dispatch, id]);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(asyncAddContent({ courseId: id, title, body }));
    setTitle("");
    setBody("");
  };

  const handleDelete = (contentId) => {
    dispatch(asyncDeleteContent(contentId));
  };

  const handleUpdate = (contentId) => {
    dispatch(asyncUpdateContent({ id: contentId, title, body }));
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h1>Kelola Konten Kursus: {course.title}</h1>

      <form onSubmit={handleAdd}>
        <input
          placeholder="Judul Konten"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Isi Konten"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Tambah Konten</button>
      </form>

      <ul>
        {course.contents?.map((c) => (
          <li key={c.id}>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <button onClick={() => handleDelete(c.id)}>Delete</button>
            <button onClick={() => handleUpdate(c.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
