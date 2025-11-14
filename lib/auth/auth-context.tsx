"use client";

import type React from "react";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import type {
  AuthUser,
  AuthContext as AuthContextType,
} from "@/lib/auth/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const getInitialUser = (): AuthUser | null => {
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

  const [user, setUser] = useState<AuthUser | null>(getInitialUser);
  const [isLoading] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
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
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

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
