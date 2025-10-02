export default function Courses({ courses }) {
  if (!courses || courses.length === 0) {
    return <p>Tidak ada kursus tersedia.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div key={course.id} className="card bg-base-100 shadow-md p-4">
          <h3 className="font-bold text-xl">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
        </div>
      ))}
    </div>
  );
}
