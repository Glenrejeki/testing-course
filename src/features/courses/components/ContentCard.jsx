export default function ContentCard({ content, onClick }) {
  return (
    <div
      className="border rounded-md p-3 shadow hover:bg-gray-50 cursor-pointer"
      onClick={onClick}
    >
      <h4 className="font-semibold">{content.title}</h4>
      <a
        href={content.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm"
      >
        Lihat Video
      </a>
      <p className="text-xs text-gray-500">
        Status: {content.my_status_finished ? "Selesai" : "Belum selesai"}
      </p>
    </div>
  );
}
