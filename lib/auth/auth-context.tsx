"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type {
  AuthUser,
  AuthContext as AuthContextType,
} from "@/lib/auth/types";
import LoadingScreen from "@/components/common/loading-screen";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const getStoredUser = (): AuthUser | null => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        localStorage.removeItem("user");
        return null;
      }
    }
    return null;
  };

  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = getStoredUser();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(storedUser);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    let role: "admin" | "user" | null = null;

    if (email === "admin@test.com" && password === "12345") {
      role = "admin";
    } else if (email === "user@test.com" && password === "12345") {
      role = "user";
    } else {
      throw new Error("Invalid credentials");
    }

    const mockUser: AuthUser = {
      id: "user-" + Date.now(),
      email,
      role,
    };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLoading(false);
    router.push("/auth/login");
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
