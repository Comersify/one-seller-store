import Link from "next/link";
import LogoImage from "../resources/logo.png";
import Image from "next/image";

const Logo = () => {
  return <Image src={LogoImage} className="-mt-14" width={150} height={150} />;
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 relative z-20 text-gray-300 py-10">
      <div
        className="container mx-auto flex flex-col md:flex-row md:items-start space-y-8 items-center
       justify-between"
      >
        <div className="flex items-center justify-start flex-col">
          <div className="flex">
            <Logo />
            <p className="font-bold text-3xl -ml-6 text-white">PlanetGames</p>
          </div>
          <p dir="rtl" className="max-w-[400px] -mt-6">
            🟣 أفضل متجر إلكتروني 🤩 لبيع ألعاب الفيديو منصات الكونسل 🎮 و ال PC
            🖥️🖱️و إشتاراكات الألعاب الرسمية OFFICIEL ✅ إشتراكات مشاهدة مباريات
            ⚽ أفلام و مسلسلات 📺 و الكثير في إنتضاركم ✔️ سرعة و مصداقية تامة
            🎖️مرحبا بالجميع ❤️
          </p>
          <div className="flex mt-6 items-center gap-4">
            <a
              href="https://www.facebook.com/planetgamesdzd"
              aria-label="Facebook"
              className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-purple-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook-icon w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/planetgames.dz/"
              aria-label="Instagram"
              className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-purple-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Instagram
              </span>
            </a>
            <a
              href="https://www.youtube.com/@Odigix"
              aria-label="Youtube"
              className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-purple-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                className="lucide lucide-youtube-icon w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
              >
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 33.898 90 c -6.418 0 -12.469 -2.046 -17.499 -5.918 c -0.934 -0.719 -1.838 -1.508 -2.688 -2.347 c -5.868 -5.801 -8.821 -13.523 -8.314 -21.746 c 0.383 -6.212 2.888 -12.201 7.051 -16.865 c 5.523 -6.187 13.141 -9.593 21.45 -9.593 c 1.426 0 2.869 0.107 4.29 0.317 c 0.491 0.073 0.854 0.494 0.854 0.989 v 14.589 c 0 0.321 -0.154 0.622 -0.414 0.811 c -0.261 0.188 -0.596 0.24 -0.899 0.139 c -1.223 -0.403 -2.497 -0.608 -3.787 -0.608 c -3.255 0 -6.304 1.275 -8.585 3.591 c -2.271 2.306 -3.496 5.356 -3.447 8.591 c 0.062 4.172 2.256 7.953 5.87 10.114 c 1.665 0.996 3.564 1.579 5.491 1.686 c 1.518 0.079 3.017 -0.117 4.458 -0.592 c 4.933 -1.63 8.248 -6.207 8.248 -11.39 L 45.993 1 c 0 -0.552 0.447 -1 1 -1 h 14.368 c 0.549 0 0.995 0.442 1 0.99 c 0.013 1.346 0.15 2.683 0.407 3.973 c 1.017 5.103 3.876 9.646 8.052 12.795 c 3.699 2.79 8.109 4.268 12.757 4.276 c 0.083 -0.006 0.172 -0.003 0.259 0.013 c 0.476 0.086 0.821 0.5 0.821 0.983 v 14.305 c 0 0.558 -0.444 1.041 -1.015 1 c -5.048 0 -9.953 -0.99 -14.582 -2.943 c -2.35 -0.992 -4.588 -2.219 -6.677 -3.658 l 0.069 30.142 c -0.032 7.506 -3.004 14.556 -8.367 19.857 c -4.356 4.306 -9.854 7.055 -15.898 7.95 C 36.773 89.894 35.33 90 33.898 90 z M 33.898 35.531 c -7.731 0 -14.819 3.17 -19.958 8.925 c -3.866 4.33 -6.191 9.89 -6.547 15.656 c -0.471 7.639 2.272 14.813 7.723 20.2 c 0.792 0.78 1.634 1.516 2.503 2.186 C 22.296 86.098 27.925 88 33.898 88 c 1.333 0 2.678 -0.099 3.997 -0.294 c 5.621 -0.833 10.734 -3.39 14.785 -7.394 c 4.982 -4.926 7.743 -11.474 7.773 -18.438 l -0.074 -32.108 c -0.001 -0.382 0.216 -0.73 0.558 -0.899 c 0.344 -0.168 0.751 -0.128 1.054 0.105 c 2.398 1.851 5.039 3.391 7.848 4.577 c 4.079 1.721 8.388 2.652 12.819 2.772 V 24.015 c -4.747 -0.19 -9.237 -1.792 -13.041 -4.66 c -4.568 -3.444 -7.697 -8.417 -8.809 -14.001 C 60.589 4.26 60.449 3.135 60.392 2 H 47.993 l -0.018 59.769 c 0 6.046 -3.866 11.387 -9.621 13.287 c -1.679 0.555 -3.424 0.789 -5.195 0.689 c -2.25 -0.123 -4.466 -0.803 -6.408 -1.965 c -4.213 -2.52 -6.771 -6.932 -6.844 -11.802 c -0.056 -3.773 1.372 -7.334 4.022 -10.023 c 2.66 -2.7 6.215 -4.188 10.01 -4.188 c 1.047 0 2.085 0.116 3.1 0.345 V 35.714 C 35.996 35.593 34.942 35.531 33.898 35.531 z"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(156,163,175)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="matrix(1 0 0 1 0 0)"
                  />
                </g>
              </svg>

              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                TikTok
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col mb-2">
            <h2 className="font-bold mb-2 text-xl text-white">Account</h2>
            <span className="bg-purple-500 w-full py-[1px]"></span>
          </div>
          <li className="hover:text-purple-600">
            <Link
              href="/"
              className="hover:text-purple-600 transition-all duration-100 text-gray-400 text-lg font-bold"
            >
              Profile
            </Link>
          </li>
          <li className="hover:text-purple-600">
            <Link
              href="/"
              className="hover:text-purple-600 transition-all duration-100 text-gray-400 text-lg font-bold"
            >
              Orders
            </Link>
          </li>
          <li className="hover:text-purple-600">
            <Link
              href="/"
              className="hover:text-purple-600 transition-all duration-100 text-gray-400 text-lg font-bold"
            >
              Settings
            </Link>
          </li>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col mb-2">
            <h2 className="font-bold text-center mb-2 text-xl text-white">
              Shop
            </h2>
            <span className="bg-purple-500 w-full py-[1px]"></span>
          </div>
          <li className="hover:text-purple-600">
            <Link
              href="/shop"
              className="hover:text-purple-600 transition-all duration-100 text-gray-400 text-lg font-bold"
            >
              Products
            </Link>
          </li>
          <li className="hover:text-purple-600">
            <Link
              href="/login"
              className="hover:text-purple-600 transition-all duration-100 text-gray-400 text-lg font-bold"
            >
              Login
            </Link>
          </li>
          <li className="hover:text-purple-600">
            <Link
              href="/signup"
              className="hover:text-purple-600 transition-all duration-100 text-gray-400 text-lg font-bold"
            >
              Sign up
            </Link>
          </li>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col mb-2">
            <h2 className="font-bold text-center mb-2 text-xl text-white">
              Contact
            </h2>
            <span className="bg-purple-500 w-full py-[1px]"></span>
          </div>
          <a
            className="hover:text-purple-600 text-white text-lg"
            href="mailto:planetgamesdz@gmail.com"
          >
            planetgamesdz@gmail.com
          </a>
          <a
            className="hover:text-purple-600 text-white text-lg"
            href="tel:+213770712371"
          >
            0770712371
          </a>
          <a
            className="bg-green-400 text-white px-4 py-2 rounded mt-4 space-x-3 flex items-center justify-center w-full hover:scale-105 transition-transform"
            icon="fa-brands fa-whatsapp"
            target="__blank"
            href="https://wa.me/213770712371"
          >
            <i
              className="q-icon fa-brands fa-whatsapp"
              aria-hidden="true"
              role="presentation"
              style={{ fontSize: "24px" }}
            ></i>
            <span className="text-uppercase">Contact support</span>
          </a>
        </div>
      </div>
      <div className="py-[1px] my-6 w-full bg-gray-600"></div>
      <div className="w-full text-center">
        © 2025 comercify.shop All Rights Reserved
      </div>
    </footer>
  );
};
