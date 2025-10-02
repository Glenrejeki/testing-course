import { useState } from "react";
import { useAuth } from "../states/authContext";

export default function LoginPage() {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      window.location.href = "/courses";
    } catch (err) {
      alert("Login gagal: " + err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Masuk</button>
      </form>
      <p>Belum punya akun? <a href="/register">Register</a></p>
    </div>
  );
}
