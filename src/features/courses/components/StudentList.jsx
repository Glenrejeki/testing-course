export default function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <p>Belum ada mahasiswa yang mengikuti kursus ini.</p>;
  }

  return (
    <ul className="list-disc pl-4">
      {students.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ul>
  );
}
