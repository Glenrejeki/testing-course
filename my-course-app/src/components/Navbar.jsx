import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/authApi";

export default function Navbar() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile()
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => navigate("/")}
        >
          📚 MyCourseApp
        </button>
      </div>
      <div className="flex-none">
        {profile ? (
          <div className="flex items-center gap-3">
            <span>👋 {profile.name}</span>
            <button
              className="btn btn-error btn-sm"
              onClick={() => {
                localStorage.removeItem("accessToken");
                navigate("/auth/login");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
