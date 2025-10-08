"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { login, signupWithProvider } from "../../api/auth"; // تأكد أن المسار صحيح حسب مجلدك
import { useRouter } from "next/navigation";
import { useStateContext } from "../../../context/contextProvider";
import { GoogleAuth } from "../../../comps/GoogleAuth";

const AuthenticationForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { profile, setProfile } = useStateContext()
  useEffect(() => {
    if (profile?.email) {
      router.push('/account')
    }
  }, [profile])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.id]: e.target.value.trim() === "" });
  };

  const isDisabled =
    formData.email.trim() === "" || formData.password.trim() === "" || loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (formData.email.trim() === "") {
      setErrors((prev) => ({ ...prev, email: true }));
      setLoading(false);
      return;
    }
    if (formData.password.trim() === "") {
      setErrors((prev) => ({ ...prev, password: true }));
      setLoading(false);
      return;
    }

    try {
      const data = await login(formData.email, formData.password);
      if (data['type'] == 'success') {
        setProfile(data.data)
      } else {
        setErrorMessage(data.message || "Login failed");

      }

      router.push("/account");
    } catch (error) {
      setErrorMessage(error.message || "Login failed");
    }
    finally {
      setLoading(false);
    }

  };

  async function googleSignup(provider, token, user) {
    setLoading(true)
    const resp = await signupWithProvider(provider, token, user)
    setLoading(false)
    if (resp['type'] == 'success') {
      setProfile(resp.data)
      router.push('/account');
    } else {
      setErrorMessage(resp.message);
    }
  }

  return (
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden p-8">
      <h2 className="text-2xl font-bold text-indigo-800 text-center">Welcome Back! 🔑</h2>
      <p className="text-indigo-600 mt-2 text-center">Sign in to your account</p>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
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
            disabled={loading}
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
            disabled={loading}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password is required!</p>}
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        <button
          type="submit"
          className={`w-full p-3 rounded-lg font-medium text-white transition-all 
            ${isDisabled ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
          disabled={isDisabled}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {/* خط مع "or" */}
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <GoogleAuth signup={googleSignup} />

        <div className="text-center">
          <Link href="/ForgetPaswored" className="text-indigo-600 font-bold">
            Reset Password
          </Link>
        </div>

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-indigo-600 font-bold">
            Sign Up
          </Link>
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
        PlanetGames ✨
      </h1>

      {/* الفقرة التوضيحية */}
      <p className="text-xl lg:text-2xl text-[rgb(90,71,251)] mb-6 inline-flex items-center whitespace-nowrap">
        Your #1 Digital Store in Algeria 🇩🇿
      </p>

      {/* البطاقات */}
      <div className="grid grid-cols-2 gap-4 relative">
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
      <div>
        <FeatureHighlightSection />
      </div>

      <div className="w-full max-w-lg">
        <AuthenticationForm />
      </div>
    </div>
  );
};

export default AuthenticationContainer;
