import { createContext, useState, useContext } from "react";
import { postLogin, postRegister } from "../api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = async (email, password) => {
    const data = await postLogin(email, password);

    // Struktur response dari Delcom API biasanya:
    // { success: true, message: "Login success", data: { token, user } }
    const tokenData = data?.data?.token;
    const userData = data?.data?.user;

    if (!tokenData) throw new Error("Token tidak ditemukan dalam response.");

    localStorage.setItem("token", tokenData);
    setToken(tokenData);
    setUser(userData);

    return data;
  };

  const handleRegister = async (name, email, password) => {
    const data = await postRegister(name, email, password);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleRegister, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
