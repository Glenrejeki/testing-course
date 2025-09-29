import { useEffect, useState } from "react"
import { getAllCourses } from "./features/course/api/courseApi"

export default function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token") // simpan token login di localStorage
    if (!token) {
      setError("Token tidak ditemukan, silakan login dulu")
      setLoading(false)
      return
    }

    getAllCourses(token)
      .then((data) => {
        setCourses(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-center mt-10">Loading...</div>
  if (error) return <div className="text-center text-red-500">{error}</div>

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Daftar Kursus</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={course.cover}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-accent"
                  onClick={() => alert(`Detail: ${course.title}`)}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
