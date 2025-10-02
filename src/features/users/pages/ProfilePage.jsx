import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/states/authContext";
import { getProfile } from "../api/userAPI";

export default function ProfilePage() {
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getProfile(token);
      setProfile(data.data);
    }
    if (token) load();
  }, [token]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profil</h1>
      <p>Nama: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}
