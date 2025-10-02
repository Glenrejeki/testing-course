import { createContext, useState, useContext } from "react";
import { login } from "../api/authAPI";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = async (email, password) => {
    const data = await login(email, password);
    setToken(data.data.token);
    localStorage.setItem("token", data.data.token);
    return data;
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
