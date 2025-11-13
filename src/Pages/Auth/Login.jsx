/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setMessage("Login successful!");
      navigate("/profile");
    }
    if (error) {
      setMessage(error);
    }
  }, [user, error, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    dispatch(loginUser(formData)); // ✅ Dispatch Redux thunk
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Form */}
      <div className="flex items-center justify-center bg-white dark:bg-slate-900 px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address..."
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="************"
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white uppercase py-3 rounded-md hover:bg-indigo-700 transition"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            {message && (
              <p className="text-sm text-center text-red-500 dark:text-red-400 mt-2">
                {message}
              </p>
            )}

            <div className="text-right mt-4">
              <a
                href="/signup"
                className="text-sm text-gray-600 dark:text-slate-400 hover:underline"
              >
                Sign Up →
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative hidden md:block">
        <img
          src="/logo.png"
          alt="Login visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-indigo-400 opacity-70"></div>
      </div>
    </div>
  );
};

export default Login;
