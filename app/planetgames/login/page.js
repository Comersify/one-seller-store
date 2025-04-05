"use client";
import React, { useState } from "react";
import Link from "next/link";

const AuthenticationForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.id]: e.target.value.trim() === "" });
  };

  const isDisabled = formData.email.trim() === "" || formData.password.trim() === "";

  return (
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden p-8">
      <h2 className="text-2xl font-bold text-indigo-800 text-center">Welcome Back! 🔑</h2>
      <p className="text-indigo-600 mt-2 text-center">Sign in to your account</p>

      <form className="space-y-6 mt-6">
        {/* حقل البريد الإلكتروني */}
        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">📧</span>
          <input
            className={`w-full pl-10 p-3 border-2 rounded-lg focus:outline-none transition-all duration-300 
              ${errors.email ? "border-red-500" : "border-gray-300 focus:border-indigo-600 focus:shadow-lg"}`}
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Email is required!</p>}
        </div>

        {/* حقل كلمة المرور */}
        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">🔒</span>
          <input
            className={`w-full pl-10 p-3 border-2 rounded-lg focus:outline-none transition-all duration-300 
              ${errors.password ? "border-red-500" : "border-gray-300 focus:border-indigo-600 focus:shadow-lg"}`}
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password is required!</p>}
        </div>

        {/* زر تسجيل الدخول */}
        <button
          type="submit"
          className={`w-full p-3 rounded-lg font-medium text-white transition-all 
    ${isDisabled ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
          disabled={isDisabled}
        >
          Sign In
        </button>

        {/* خط مع "or" */}
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* زر تسجيل الدخول بجوجل */}
        <button className="w-full flex items-center justify-center gap-2 p-3 border-2 border-gray-300 rounded-lg transition-all hover:bg-gray-100">
          <i className="fa-brands fa-google text-red-500"></i>
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        {/* زر إعادة تعيين كلمة المرور */}
        <div className="text-center">
          <Link href="/forgot-password" className="text-indigo-600 font-bold">  Reset Password</Link>
        </div>
        <p className="text-center text-gray-600">
          Don't have an account? <Link href="/regester" className="text-indigo-600 font-bold">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

const FeatureHighlightSection = () => {
  return (
    <div className="flex-1 text-center lg:text-left flex flex-col justify-center relative">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[rgb(90,71,251)] inline-flex items-center whitespace-nowrap">
        Planetgames ✨
      </h1>

      {/* الفقرة التوضيحية */}
      <p className="text-xl lg:text-2xl text-[rgb(90,71,251)] mb-6 inline-flex items-center whitespace-nowrap">
        Your #1 Digital Store in Algeria 🇩🇿
      </p>

      {/* البطاقات */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20 ">
          <i className="lucide-zap text-2xl mb-3 text-yellow-500"></i>
          <h3 className="font-bold text-indigo-700 text-sm">Instant Delivery ⚡</h3>
          <p className="text-sm text-indigo-500 mt-2">Automatic & instant product delivery</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-credit-card text-2xl mb-3 text-indigo-500"></i>
          <h3 className="font-bold text-indigo-800 text-sm">Local Payment 💳</h3>
          <p className="text-sm text-indigo-600 mt-2">CIB & Eddahabia accepted</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-gamepad-2 text-2xl mb-3 text-indigo-500"></i>
          <h3 className="font-bold text-indigo-800 text-sm">Game Recharges 🎮</h3>
          <p className="text-sm text-indigo-600 mt-2">Top up your favorite games</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-gift text-2xl mb-3 text-pink-500"></i>
          <h3 className="font-bold text-indigo-800 text-sm">Gift Cards 🎁</h3>
          <p className="text-sm text-indigo-600 mt-2">Wide selection of gift cards</p>
        </div>
      </div>
    </div>
  );
};

const AuthenticationContainer = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row bg-gradient-to-br min-h-[77vh] from-indigo-50 to-indigo-100 items-center justify-center gap-12 p-8">
      {/* القسم الترويجي */}
      <div>
        <FeatureHighlightSection />
      </div>

      {/* نموذج التحقق */}
      <div className="w-full max-w-lg">
        <AuthenticationForm />
      </div>
    </div>
  );
};

export default AuthenticationContainer;
