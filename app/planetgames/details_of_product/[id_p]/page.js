"use client";
import { useState } from "react";
import "material-icons/iconfont/material-icons.css";
import Tabs from "../../components/taps";
import ProductCarousel from "../../components/ProductCarousel";

export default function DetailsOfProducts() {
  const images = [
    "https://backend.odigix.com/storage/1754/conversions/psn100chf-large.jpg",
    "https://backend.odigix.com/storage/1755/conversions/psnswmain-large.jpg",
    "https://backend.odigix.com/storage/1756/conversions/psnswmain-large.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [showRegionOptions, setShowRegionOptions] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Switzerland 🇨🇭");

  const [showDenominationOptions, setShowDenominationOptions] = useState(false);
  const [selectedDenomination, setSelectedDenomination] = useState("100 CHF");

  const regionOptions = [
    "United States 🇺🇲",
    "Europe 🇪🇺",
    "Turkey 🇹🇷",
    "Brazil 🇧🇷",
  ];
  const denominationOptions = [
    "10 USD",
    "15 USD",
    "25 USD",
    "50 USD",
    "5 USD",
    "100 USD",
  ];

  const toggleRegionDropdown = () => setShowRegionOptions(!showRegionOptions);
  const toggleDenominationDropdown = () =>
    setShowDenominationOptions(!showDenominationOptions);

  const selectRegion = (option) => {
    setSelectedRegion(option);
    setShowRegionOptions(false);
  };

  const selectDenomination = (option) => {
    setSelectedDenomination(option);
    setShowDenominationOptions(false);
  };

  // Sample products data
  const products = [
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Premium Watch",
      category: "Accessories",
      price: "$199.99",
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Wireless Headphones",
      category: "Electronics",
      price: "$149.99",
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Camera Lens",
      category: "Photography",
      price: "$299.99",
      outOfStock: true,
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      title: "Sunglasses",
      category: "Fashion",
      price: "$89.99",
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1507764923504-cd90bf7da772",
      title: "Smart Watch",
      category: "Electronics",
      price: "$249.99",
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Running Shoes",
      category: "Sports",
      price: "$129.99",
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      title: "Wireless Earbuds",
      category: "Electronics",
      price: "$159.99",
    },
    {
      link: "#",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      title: "Smart Speaker",
      category: "Electronics",
      price: "$79.99",
    },
  ];

  return (
    <>
      <div className=" bg-gray-100  ">
        <div className="mx-auto  max-w-[75%]">
          <div className="w-full bg-gray-100 p-4 flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="w-full max-w-sm mx-auto lg:max-w-lg">
              <div className="mx-auto bg-gray-100 rounded relative">
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-contain"
                />
              </div>

              <div className="mt-6 flex justify-center gap-6">
                {images.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumb ${index}`}
                    className={`w-56 h-56 object-contain border-2 rounded-xl cursor-pointer transition-transform duration-300 ${
                      image === selectedImage ? "scale-110 " : "border-gray-100"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 p-2 rounded-xl shadow-sm space-y-6 max-w-2xl ml-auto">
              <div className="flex items-center bg-gray-100 space-x-2 text-sm text-gray-500">
                <a href="/shop" className="hover:text-primary">
                  Shop
                </a>
                <svg
                  className="lucide lucide-chevron-right-icon w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <a
                  href="/shop?category=playstation-gift-cards"
                  className="hover:text-primary"
                >
                  Playstation
                </a>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  PlayStation Network Card 100 CHF (CH) PSN Key SWITZERLAND
                </h1>
                <div className="flex gap-2 mt-3">
                  <div className="q-chip row inline no-wrap items-center bg-primary uppercase text-white rounded-none m-0">
                    <div className="ellipsis p-2">Instant</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="text-4xl font-bold text-primary m-4">
                  1140 DZD
                </div>
                <p className="text-gray-600">
                  Add funds to your PlayStation® Network wallet without the need
                  for a credit card...
                </p>

                <div className="pt-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Available Options
                  </h3>
                  <div className="space-y-2">
                    {/* Region Dropdown */}
                    <div className="w-full relative">
                      <div className="font-bold mb-2">Region</div>
                      <div
                        onClick={toggleRegionDropdown}
                        className="px-3 rounded-md py-2 border-2 cursor-pointer relative bg-white"
                      >
                        {selectedRegion}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2"
                          style={{ width: "25px", height: "25px" }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>

                      {showRegionOptions && (
                        <div className="absolute z-50 bg-white shadow-lg rounded-md border mt-1 w-full p-2 max-h-48 overflow-auto">
                          {regionOptions.map((option) => (
                            <div
                              key={option}
                              onClick={() => selectRegion(option)}
                              className={`px-2 py-2 cursor-pointer rounded-md mb-1 hover:bg-gray-200 ${
                                option === selectedRegion
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Denomination Dropdown */}
                    <div className="w-full relative">
                      <div className="font-bold mb-2">DENOMINATION</div>
                      <div
                        onClick={toggleDenominationDropdown}
                        className="px-3 rounded-md py-2 border-2 cursor-pointer relative bg-white"
                      >
                        {selectedDenomination}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2"
                          style={{ width: "25px", height: "25px" }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>

                      {showDenominationOptions && (
                        <div className="absolute z-50 bg-white shadow-lg rounded-md border mt-1 w-full p-2 max-h-48 overflow-auto">
                          {denominationOptions.map((option) => (
                            <div
                              key={option}
                              onClick={() => selectDenomination(option)}
                              className={`px-2 py-2 cursor-pointer rounded-md mb-1 hover:bg-gray-200 ${
                                option === selectedDenomination
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <div className="grid grid-cols-1">
                    <button className="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase w-full py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200">
                      <span className="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-white text-lg font-medium">
                            Add to cart
                          </span>
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
                            className="lucide lucide-circle-plus-icon h-5 w-5 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 12h8"></path>
                            <path d="M12 8v8"></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 p-6 border border-white/20">
                  <div className="flex flex-col items-center text-center space-y-3 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
                      <div className="relative bg-white p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-zap-icon w-6 h-6 text-primary group-hover:animate-pulse"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-bold text-primary">
                        Instant Delivery
                      </span>
                      <p className="text-xs text-gray-500">Get it right away</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-3 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
                      <div className="relative bg-white p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-shield-check-icon w-6 h-6 text-primary group-hover:animate-pulse"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-bold text-primary">
                        Secure Payment
                      </span>
                      <p className="text-xs text-gray-500">100% Protected</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-3 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
                      <div className="relative bg-white p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-headphones-icon w-6 h-6 text-primary group-hover:animate-pulse"
                        >
                          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-bold text-primary">
                        24/7 Available
                      </span>
                      <p className="text-xs text-gray-500">Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-gray-100">
            <div className="p-4 ">
              <Tabs />
            </div>
            <div className="p-2">
              <ProductCarousel title="You may also like" products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
