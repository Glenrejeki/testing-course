import { useState } from "react";
import { register } from "../api/authAPI";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      alert("Registrasi berhasil!");
      window.location.href = "/";
    } catch (err) {
      alert("Gagal daftar: " + err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
}
