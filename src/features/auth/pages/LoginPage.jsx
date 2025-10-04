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
      window.location.href = "/courses"; // setelah login redirect
    } catch (err) {
      alert("Login gagal: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />
        <button type="submit">Masuk</button>
      </form>
      <p>Belum punya akun? <a href="/register">Daftar di sini</a></p>
    </div>
  );
}
