"use client";
import React, { useState } from "react";
import Link from "next/link";
import { resetPassword } from "../../api/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    setError(!email.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      const res = await resetPassword(email);
      setMessage(res.message || "Check your email to reset your password.");
      setEmail("");
    } catch (err) {
      setMessage(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/imges/bg_wallpaper.a8ed10be.webp')" }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
        <h2 className="text-xl font-bold text-center mb-2">Reset your password</h2>
        <hr className="mb-4 border-gray-300" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              required
              className={`w-full p-2 border rounded mt-1 transition outline-none ${isFocused
                ? "border-indigo-600"
                : error
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
              placeholder="Email"
            />
            {error && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}

        <div className="text-center text-gray-600 mt-4">Don't have an account?</div>
        <div className="text-center mt-2">
          <Link
            href="/login"
            className="w-full inline-block border border-black text-black px-4 py-2 rounded bg-white hover:bg-gray-100 transition text-center"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
