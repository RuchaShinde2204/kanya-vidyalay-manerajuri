import { createContext, useEffect, useMemo, useState } from "react";
import { authService } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem("kvm_admin");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("kvm_token");
    if (!token) return;
    authService.me().then(({ data }) => setAdmin(data.admin)).catch(() => logout());
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const { data } = await authService.login(credentials);
      localStorage.setItem("kvm_token", data.token);
      localStorage.setItem("kvm_admin", JSON.stringify(data.admin));
      setAdmin(data.admin);
      return data.admin;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("kvm_token");
    localStorage.removeItem("kvm_admin");
    setAdmin(null);
  };

  const value = useMemo(() => ({ admin, loading, login, logout, isAuthenticated: Boolean(admin) }), [admin, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
