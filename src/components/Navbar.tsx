import { FaUserCircle } from "react-icons/fa";

// ✅ No circular import here!
const Navbar = () => {
  return (
    <div className="h-16 bg-white text-gray-700 shadow-md flex items-center justify-between px-6 w-full">
      <h1 className="text-xl font-semibold flex-1 text-center sm:text-left">DevClyst's</h1>
      <div className="flex items-center gap-2">
        <span className="font-medium hidden sm:inline-block">👋 Welcome</span>
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
