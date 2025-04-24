"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Handle loading state

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login page if not authenticated
    } else {
      setIsLoading(false); // Stop loading if authenticated
    }
  }, [isAuthenticated, router]);

  // Return nothing or a loading indicator while redirecting
  if (isLoading) {
    return <div>Loading...</div>; // Optional: You can show a loading indicator
  }

  return <>{children}</>;
};

export default ProtectedRoute;
