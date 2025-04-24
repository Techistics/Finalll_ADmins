"use client";

import { useState } from "react";
import Login from "./LoginPage";
import Register from "./RegisterPage";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-4">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 font-semibold rounded ${
              activeTab === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 mx-2 font-semibold rounded ${
              activeTab === "register"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form Display */}
        {activeTab === "login" ? <Login/> : <Register />}
      </div>
    </div>
  );
}
