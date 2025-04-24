"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaUsers, FaCog, FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const isActive = (path: string) => {
    return activeLink === path ? "bg-gray-700" : "";
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-all"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-40 bg-gray-800 text-white p-4 
          transition-transform duration-300 transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:w-64 sm:block
        `}
      >
        <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">Admin <span className="hidden sm:inline">Panel</span></h2>
        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className={`block py-2 px-4 rounded transition-all ${isActive("/dashboard")}`}
            onClick={() => { setActiveLink("/dashboard"); if (window.innerWidth < 640) setIsSidebarOpen(false); }}
          >
            <FaHome className="inline mr-2" /> Dashboard
          </Link>

          <Link
            href="/users"
            className={`block py-2 px-4 rounded hover:text-blue-400 ${isActive("/users")}`}
            onClick={() => { setActiveLink("/users"); if (window.innerWidth < 640) setIsSidebarOpen(false); }}
          >
            <FaUsers className="inline mr-2" /> Users
          </Link>

          <Link
            href="/register"
            className={`block py-2 px-4 rounded hover:text-blue-400 ${isActive("/register")}`}
            onClick={() => { setActiveLink("/register"); if (window.innerWidth < 640) setIsSidebarOpen(false); }}
          >
            <FaUsers className="inline mr-2" /> Register
          </Link>

          <Link
            href="/login"
            className={`block py-2 px-4 rounded hover:text-blue-400 ${isActive("/login")}`}
            onClick={() => { setActiveLink("/login"); if (window.innerWidth < 640) setIsSidebarOpen(false); }}
          >
            <FaUsers className="inline mr-2" /> Login
          </Link>

          <Link
            href="/privacypolicy"
            className={`block py-2 px-4 rounded hover:text-blue-400 ${isActive("/privacypolicy")}`}
            onClick={() => { setActiveLink("/privacypolicy"); if (window.innerWidth < 640) setIsSidebarOpen(false); }}
          >
            <FaCog className="inline mr-2" /> Privacy
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all w-full"
          >
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
