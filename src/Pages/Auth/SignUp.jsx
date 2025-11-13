/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setMessage("Account created successfully!");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        agreeToTerms: false,
      });
      navigate("/profile");
    }
    if (error) {
      setMessage(error);
    }
  }, [user, error]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      setMessage("You must agree to the Terms of User.");
      return;
    }

    dispatch(
      signupUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="relative hidden md:block">
        <img
          src="/logo.png"
          alt="Signup visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-indigo-400 opacity-70"></div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-white dark:bg-slate-900 px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Name..."
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
            />

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

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-600 dark:text-slate-400">
                I agree to the Terms of User
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white uppercase py-3 rounded-md hover:bg-indigo-700 transition"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {message && (
              <p className="text-sm text-center text-indigo-500 dark:text-indigo-400 mt-2">
                {message}
              </p>
            )}

            <div className="text-right mt-4">
              <a
                href="/login"
                className="text-sm text-gray-600 dark:text-slate-400 hover:underline"
              >
                Log in →
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
