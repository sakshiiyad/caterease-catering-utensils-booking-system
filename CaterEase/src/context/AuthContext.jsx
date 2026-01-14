import { createContext, useContext, useEffect, useState } from "react";
import { clearAuth, getRole, isLoggedIn } from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (isLoggedIn()) {
      setIsAuth(true);
      setRole(getRole());
    } else {
      setIsAuth(false);
      setRole(null);
    }
  }, []);

  const login = (newRole) => {
    setIsAuth(true);
    setRole(newRole);
  };

  const logout = () => {
    clearAuth();
    setIsAuth(false);
    setRole(null);
  };

  const value = { isAuth, role, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
