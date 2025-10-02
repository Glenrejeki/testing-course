export default function CourseCard({ course, onDelete }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <p>{course.description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-error btn-sm"
            onClick={() => onDelete(course.id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
