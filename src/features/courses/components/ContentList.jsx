import ContentCard from "./ContentCard";

export default function ContentList({ contents, onSelect }) {
  if (!contents || contents.length === 0) {
    return <p>Belum ada konten kursus.</p>;
  }

  return (
    <div className="space-y-2">
      {contents.map((ct) => (
        <ContentCard key={ct.id} content={ct} onClick={() => onSelect(ct)} />
      ))}
    </div>
  );
}
