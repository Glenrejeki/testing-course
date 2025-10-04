import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncAddCourse } from "@/features/courses/states/action";
import { useNavigate } from "react-router-dom";

export default function AddCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncAddCourse({ title, description, cover }));
    navigate("/courses");
  };

  return (
    <div>
      <h1>Tambah Kursus Baru</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL Cover"
          value={cover}
          onChange={(e) =
