import React, { useEffect, useState } from "react";
import { getAllCourses, addCourse, updateCourse, deleteCourse } from "./api/api";

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    cover: null,
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.data.data?.courses || []);
    } catch (error) {
      console.error("Error getAllCourses:", error);
    }
  };

  const handleAddCourse = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newCourse.title);
      formData.append("description", newCourse.description);
      if (newCourse.cover) {
        formData.append("cover", newCourse.cover);
      }

      await addCourse(formData);
      setNewCourse({ title: "", description: "", cover: null });
      fetchCourses();
    } catch (error) {
      console.error("Error addCourse:", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id);
      fetchCourses();
    } catch (error) {
      console.error("Error deleteCourse:", error);
    }
  };

  const handleUpdateCourse = async (id) => {
    try {
      const data = new FormData();
      data.append("title", "Updated Title");
      data.append("description", "Updated Description");

      await updateCourse(id, data);
      fetchCourses();
    } catch (error) {
      console.error("Error updateCourse:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Courses</h1>

      {/* Form Add Course */}
      <div className="bg-gray-100 p-4 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Title"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            className="border p-2 rounded-md flex-1"
          />
          <input
            type="text"
            placeholder="Description"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            className="border p-2 rounded-md flex-1"
          />
          <input
            type="file"
            onChange={(e) => setNewCourse({ ...newCourse, cover: e.target.files[0] })}
            className="border p-2 rounded-md"
          />
          <button
            onClick={handleAddCourse}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Course List */}
      <div className="grid md:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              {course.cover && (
                <img
                  src={course.cover}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleUpdateCourse(course.id)}
                    className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Tidak ada Courses ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
