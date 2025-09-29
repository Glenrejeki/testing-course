export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">📚 MyCourseApp</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}
