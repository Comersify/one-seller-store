"use client";
import React, { useState } from "react";
import Link from "next/link";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+213",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  // Validate input fields
  const validateField = (id, value) => {
    if (id === "email" && value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? "" : "Invalid email format.";
    }

    if (id === "confirmPassword" && formData.password !== value) {
      return "Passwords do not match.";
    }

    return value.trim() === "" ? "This field is required." : "";
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });

    if (errors[id]) {
      setErrors({ ...errors, [id]: validateField(id, value) });
    }
  };

  // Handle input blur (validation on leaving field)
  const handleBlur = (e) => {
    const { id, value } = e.target;
    setErrors({ ...errors, [id]: validateField(id, value) });
  };

  // Check if the form is valid
  const isFormValid =
    Object.values(errors).every((error) => error === "") &&
    Object.values(formData).every((value) => value !== "") &&
    formData.password === formData.confirmPassword;

  // Handle phone number formatting
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // التأكد من أن الرقم يبدأ بـ +213
    if (!value.startsWith("+213")) {
      value = "+213";
    }

    // استخراج الأرقام بعد +213 فقط
    const digitsOnly = value.replace(/\D/g, "").slice(3);

    // التأكد من أن الرقم يتكون من 9 أرقام بعد +213
    if (digitsOnly.length > 9) {
      return;
    }

    // تحديث قيمة الهاتف
    const formattedPhone = "+213" + digitsOnly;
    setFormData({ ...formData, phone: formattedPhone });
  };
  const handlePhoneBlur = () => {
    const phoneNumber = formData.phone.replace(/\D/g, "").slice(3);

    setErrors({
      ...errors,
      phone:
        phoneNumber.length === 9 ? "" : "You must enter 9 digits after +213",
    });
  };

  return (
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden ">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-indigo-800 text-center">
          Create Account 🎉
        </h2>
        <p className="text-indigo-600 mt-2 text-center">
          Join the largest digital store in Algeria
        </p>

        <form className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "firstName", placeholder: "First Name", icon: "👤" },
              { id: "lastName", placeholder: "Last Name", icon: "👤" },
            ].map(({ id, placeholder, icon }) => (
              <div key={id} className="relative w-full">
                <span className="absolute left-3 top-3 text-lg opacity-70">
                  {icon}
                </span>
                <input
                  className={`w-full pl-10 p-3 border rounded-lg outline-none transition-all duration-300 ${
                    errors[id]
                      ? "border-red-500"
                      : "border-gray-300 focus:border-indigo-600"
                  }`}
                  id={id}
                  type="text"
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors[id] && (
                  <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
                )}
              </div>
            ))}
          </div>

          {[
            { id: "email", type: "text", placeholder: "Email", icon: "📧" },
            { id: "phone", type: "tel", placeholder: "Phone", icon: "📱" },
            {
              id: "password",
              type: "password",
              placeholder: "Password",
              icon: "🔒",
            },
            {
              id: "confirmPassword",
              type: "password",
              placeholder: "Confirm Password",
              icon: "🔒",
            },
          ].map(({ id, type, placeholder, icon }) => (
            <div key={id} className="relative w-full">
              <span className="absolute left-3 top-3 text-lg opacity-70">
                {icon}
              </span>
              <input
                className={`w-full pl-10 p-3 border rounded-lg outline-none transition-all duration-300 ${
                  id === "confirmPassword" && formData.password
                    ? formData.password === formData.confirmPassword
                      ? "border-green-500"
                      : "border-red-500"
                    : errors[id]
                    ? "border-red-500"
                    : "border-gray-300 focus:border-indigo-600"
                }`}
                id={id}
                type={type}
                placeholder={placeholder}
                value={formData[id]}
                onChange={id === "phone" ? handlePhoneChange : handleChange}
                onBlur={id === "phone" ? handlePhoneBlur : handleBlur} // ← يتم التحقق فقط عند الخروج من الحقل
                {...(id === "phone" && {
                  pattern: "^\\+213[5-7][0-9]{8}$",
                  inputMode: "numeric",
                  maxLength: 13,
                })}
              />

              {errors[id] && (
                <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-3 text-white font-medium rounded-lg transition-all ${
              isFormValid
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-400 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
      <button className="w-full block text-center bg-indigo-600 font-bold text-lg py-4 transition-all duration-300">
        <Link href="/login" className="font-bold text-white">
          Already have an account? Login 🔑
        </Link>
      </button>
    </div>
  );
};
const PromoSection = () => {
  return (
    <div className="flex-1 text-center lg:text-left flex flex-col justify-center relative ">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl lg:text-4xl font-bold mb-4 text-[rgb(90,71,251)] inline-flex items-center whitespace-nowrap">
        Join PlanetGames Today ✨
      </h1>

      {/* الفقرة التوضيحية */}
      <p className="text-xl lg:text-2xl text-[rgb(90,71,251)] mb-6 inline-flex items-center whitespace-nowrap">
        Get instant access to digital products 🚀
      </p>

      {/* البطاقات */}
      <div className="grid grid-cols-2 gap-4 relative ">
        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-shield-check text-2xl mb-3 text-green-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">
            Secure Payment 🔒
          </h3>
          <p className="text-base text-indigo-600 mt-2">
            Safe transactions with local banks
          </p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-history text-2xl mb-3 text-indigo-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">
            Order History 📋
          </h3>
          <p className="text-base text-indigo-600 mt-2">
            Track all your purchases
          </p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-badge-percent text-2xl mb-3 text-yellow-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">
            Special Offers 🎯
          </h3>
          <p className="text-base text-indigo-600 mt-2">
            Access to exclusive deals
          </p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-headphones text-2xl mb-3 text-pink-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">24/7 Support 🎧</h3>
          <p className="text-base text-indigo-600 mt-2">
            Always here to help you
          </p>
        </div>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto  p-8">
        {/* نموذج التسجيل */}
        <div className="w-full max-w-lg">
          <SignupForm />
        </div>
        {/* القسم الترويجي */}
        <div>
          <PromoSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
