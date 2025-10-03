import { createContext, useState, useContext } from "react";
import { postLogin, postRegister } from "../api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = async (email, password) => {
    const data = await postLogin(email, password);
    setUser(data.data.user);
    setToken(data.data.token);
    localStorage.setItem("token", data.data.token);
    return data;
  };

  const handleRegister = async (name, email, password) => {
    const data = await postRegister(name, email, password);
    return data;
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
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
