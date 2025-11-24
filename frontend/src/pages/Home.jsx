import React from 'react'
import { Link } from "react-router-dom";

const Home = ({ user, error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center space-y-6">

        <h1 className="text-4xl font-bold text-indigo-600">
          Welcome to MERN Auth
        </h1>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        {user ? (
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, <span className="text-indigo-600">{user.username}</span>!
          </h2>
        ) : (
          <>
            <h2 className="text-xl text-gray-800">
              Please log in or register
            </h2>

            <div className="flex justify-center gap-4 pt-2">
              <Link
                to="/login"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-6 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
              >
                Register
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Home
