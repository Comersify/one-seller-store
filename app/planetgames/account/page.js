"use client";
import Link from "next/link";
import { useStateContext } from "../../../context/contextProvider";
import useWithAuth from "../_authRouter";

function Orders() {
  const { profile } = useStateContext()
  return (
    <>
      <section className="flex  w-full flex-col text-gray-900 items-center justify-center">
        <div className="p-4 space-y-4 flex-grow w-full mb-[30px]">
          <div className="bg-white rounded-lg p-6 shadow-sm w-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {profile?.first_name}! 👋
            </h1>
            <p className="text-gray-600 text-sm">
              Manage your orders, update your profile, and explore your account
              settings all in one place.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Link
              href="/account/orders"
              className="relative bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow group w-full h-[140px] flex items-center"
            >
              <div className="absolute top-3 right-3 text-gray-500 group-hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
              </div>
              <div className="max-w-xl ml-10">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary">
                  My Orders
                </h2>
                <p className="text-sm text-gray-500 mt-3">
                  View and track your order history
                </p>
                <span className="text-gray-600 font-semibold mt-3 block">
                  View all orders &gt;
                </span>
              </div>
            </Link>

            <Link
              href="/account/settings"
              className="relative bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow group w-full h-[140px] flex items-center"
            >
              <div className="absolute top-3 right-3 text-gray-500 group-hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="max-w-xl ml-10">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary">
                  Account Settings
                </h2>
                <p className="text-sm text-gray-500 mt-3">
                  Update your profile and preferences
                </p>
                <span className="text-gray-600 font-semibold mt-3 block">
                  Manage settings &gt;
                </span>
              </div>
            </Link>
          </div>
          {/* Chat Section 
          <div className="w-full">
            <div className="bg-white rounded-lg p-5 shadow-sm w-full">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Chat</h2>
              <div className="space-y-2 h-40 overflow-y-auto border-b pb-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg break-words w-fit max-w-[80%] ${msg.sender === "user"
                        ? "bg-primary text-white ml-auto text-right"
                        : "bg-gray-200 text-gray-900 text-left"
                      }`}
                    style={{ direction: msg.sender === "user" ? "rtl" : "ltr" }}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  className="border rounded-lg p-2 flex-grow outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary border-gray-300"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="bg-primary text-white px-4 py-2 rounded-lg"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        */}
        </div>
      </section>
    </>
  );
}

export default useWithAuth(Orders);
