"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/ProtectedRoutes";
import UserGrowthChart from "@/components/UserGrowthChart";

export default function Dashboard() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        {/* Center the title on small screens */}
        <h1 className="text-3xl font-bold text-sky-700 flex justify-center sm:justify-center">
          Welcome to Your Dashboard
        </h1>
        <UserGrowthChart />
        <p className="italic text-sky-950 flex justify-center">
          This is a protected page, only accessible by authenticated users.
        </p>
      </div>
    </ProtectedRoute>
  );
}
