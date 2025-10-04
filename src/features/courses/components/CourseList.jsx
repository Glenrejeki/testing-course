import CourseCard from "./CourseCard";

export default function CourseList({ courses, onSelect }) {
  if (!courses || courses.length === 0) {
    return <p>Tidak ada kursus tersedia.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} onClick={() => onSelect(c)} />
      ))}
    </div>
  );
}
