import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  
      const handleLogout = () => {
      localStorage.removeItem("token");
      setUser(null);
      window.location.href = "/login";
    };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-indigo-400"
        >
          MERN Auth
        </Link>

        {/* Links */}
        <div className="flex items-center gap-5">
          {user ? (
            <button 
              onClick={handleLogout}
              className="px-4 py-1.5 bg-red-600 hover:bg-red-700 rounded-md transition text-sm"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1.5 border border-indigo-500 rounded-md hover:bg-indigo-500 transition text-sm"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-md transition text-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
