"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (email: string, password: string, name: string, phone: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const savedAuthState = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(savedAuthState);
  }, []);

  const login = (email: string, password: string) => {
    const storedUsers: Array<any> = JSON.parse(localStorage.getItem("users") || "[]");
    const user = storedUsers.find((user: any) => user.email === email && user.password === password);

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const register = (email: string, password: string, name: string, phone: string) => {
    if (!email || !password || !name || !phone) return false;

    const storedUsers: Array<any> = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user already exists
    const userExists = storedUsers.some((user: any) => user.email === email);

    if (userExists) {
      return false; // User already exists
    }

    // Create new user object and store it
    const newUser = { email, password, name, phone };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
