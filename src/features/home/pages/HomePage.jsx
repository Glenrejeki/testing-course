// src/features/home/pages/HomePage.jsx
// Halaman utama aplikasi (Home Page)

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di MyCourse</h1>
      <p className="text-lg mb-6">
        Platform kursus online untuk belajar berbagai topik menarik!
      </p>

      <div className="space-x-4">
        <Link
          to="/courses"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Lihat Kursus
        </Link>

        <Link
          to="/login"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
