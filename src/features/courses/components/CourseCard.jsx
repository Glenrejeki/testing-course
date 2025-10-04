export default function CourseCard({ course, onClick }) {
  return (
    <div
      className="border rounded-md p-4 shadow hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={course.cover}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-bold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.description}</p>
      <p className="text-xs text-gray-500">
        {course.total_contents} konten | Rating:{" "}
        {course.avg_ratings ?? "Belum ada"}
      </p>
    </div>
  );
}
