"use client";

import ProtectedRoute from "../../components/ProtectedRoutes";
import UserGrowthChart from "@/components/UserGrowthChart";

const Dashboard: React.FC = () => {
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
};

export default Dashboard;