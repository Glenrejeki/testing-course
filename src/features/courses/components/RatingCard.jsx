export default function RatingCard({ rating }) {
  return (
    <div className="border rounded-md p-3 shadow bg-gray-50">
      <p className="font-semibold">{rating.name}</p>
      <p>⭐ {rating.ratings}</p>
      <p className="text-sm italic">"{rating.comment}"</p>
    </div>
  );
}
