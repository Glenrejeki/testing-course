export default function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
        <p className="text-gray-600">{course.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(course)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(course._id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
