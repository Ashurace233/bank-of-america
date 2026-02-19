import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  userId: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (userId: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userId: string, password: string) => {
    if (userId === "JackLeoWhite" && password === "445Mighty5") {
      setUser({ userId: "JackLeoWhite", name: "Jack Leo White" });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
