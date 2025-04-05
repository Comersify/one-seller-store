"use client";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";

const UserProfileForm = () => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
      <>
          <section className="flex pt-16 min-h-[70vh] w-full flex-col  text-gray-900 items-center justify-center">   
            <div className="flex flex-col items-center justify-start min-h-screen mt-4 w-full ">
             <div className="w-full max-w-4xl p-4 bg-white rounded-2xl shadow-md">
  
        {/* عنوان الإعدادات */}
        <div className="p-4 border-b border-gray-300 bg-white rounded-t-2xl">
          <h2 className="text-lg font-bold text-black">Profile Settings</h2>
          <p className="text-sm text-gray-500 mt-1">Update your personal information</p>
        </div>
  
        {/* صورة الملف الشخصي */}
        <div className="flex flex-col sm:flex-row items-center gap-6 my-6 p-4 border border-gray-200 rounded-lg bg-white">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <img
                src="https://backend.odigix.com/storage/avatars/45053c83-1b35-4492-9b9a-477bcbe107fa.png"
                alt="Avatar Preview"
                className="w-32 h-32 rounded-xl object-cover bg-gray-50 ring-2 ring-primary/10"
              />
              <div className="absolute bottom-0 right-0">
                <button
                  onClick={handleButtonClick}
                  className="w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center shadow-lg transform transition-all duration-200 hover:bg-gray-200 border border-gray-300"
                >
                  <PlusCircleIcon className="w-7 h-7" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => console.log("Selected file:", e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-gray-900">Profile Picture</h3>
            <p className="text-sm text-gray-500 mt-1">Upload a new profile picture</p>
          </div>
        </div>
  
        {/* نموذج تعديل البيانات */}
        <form className="space-y-6 p-4 border border-gray-200 rounded-lg bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary border-gray-300 bg-white"
                defaultValue="houssine"
              />
            </div>
  
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary border-gray-300 bg-white"
                defaultValue="houssine"
              />
            </div>
  
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full border p-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary border-gray-300 bg-white"
                defaultValue="houssinoteman958@gmail.com"
              />
            </div>
  
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full border p-2 rounded-lg bg-gray-200 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary border-gray-300"
                defaultValue="+213 6 87 98 73 65"
                disabled
              />
              <p className="text-xs text-gray-500">Updating your phone number is not allowed.</p>
            </div>
          </div>
  
          {/* زر حفظ التغييرات */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-300 bg-white rounded-b-2xl">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 hover:bg-primary-dark transition border border-primary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
    </>
  );
  
  
};

export default UserProfileForm;
