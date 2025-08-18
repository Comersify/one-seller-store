"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import 'material-icons/iconfont/material-icons.css';


import React from "react";

/**
 * Tailwind-only CSS Slider (no custom CSS, no JS behavior)
 * - Uses hidden radio inputs + labels for navigation
 * - Prev/Next arrows and dot indicators
 * - All styling via Tailwind utility classes
 *
 * Props:
 *  - slides: Array<{ src: string, alt?: string, caption?: string }>
 */
export default function TailwindSlider({
  slides,
}) {
  const name = "twslider-" + Math.random().toString(36).slice(2, 7);

  return (
    <div className="w-full max-w-4xl mx-auto select-none">
      <div className="relative">
        {/* RADIOs + SLIDES */}
        <div className="relative h-0 pb-[50%] overflow-hidden rounded-2xl shadow">
          {slides.map((s, i) => (
            <div key={`slide-wrap-${i}`} className="absolute inset-0">
              {/* Radio for this slide */}
              <input
                id={`${name}-${i}`}
                name={name}
                type="radio"
                defaultChecked={i === 0}
                className="peer hidden"
              />

              {/* Slide content controlled by the peer radio above */}
              <figure className="absolute inset-0 opacity-0 scale-[1.02] transition-all duration-500 ease-in-out peer-checked:opacity-100 peer-checked:scale-100 peer-checked:z-10">
                <img
                  src={s.src}
                  alt={`Slide ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />


                {/* Prev / Next arrows */}
                <div className="pointer-events-none">
                  <label
                    htmlFor={`${name}-${(i - 1 + slides.length) % slides.length}`}
                    className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 px-3 py-1 text-xl font-semibold shadow hover:bg-white"
                  >
                    ‹
                  </label>
                  <label
                    htmlFor={`${name}-${(i + 1) % slides.length}`}
                    className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 px-3 py-1 text-xl font-semibold shadow hover:bg-white"
                  >
                    ›
                  </label>
                </div>
              </figure>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <label
              key={`dot-${i}`}
              htmlFor={`${name}-${i}`}
              className="h-3 w-3 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-400"
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



export function DetailsOfProducts() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://backend.odigix.com/storage/1754/conversions/psn100chf-large.jpg",
    "https://backend.odigix.com/storage/1755/conversions/psnswmain-large.jpg",
    "https://backend.odigix.com/storage/1756/conversions/psnswmain-large.jpg",
  ];

  const [showRegionOptions, setShowRegionOptions] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Switzerland 🇨🇭");

  const [showDenominationOptions, setShowDenominationOptions] = useState(false);
  const [selectedDenomination, setSelectedDenomination] = useState("100 CHF");

  const regionOptions = ["United States 🇺🇲", "Europe 🇪🇺", "Turkey 🇹🇷", "Brazil 🇧🇷"];
  const denominationOptions = ["10 USD", "15 USD", "25 USD", "50 USD", "5 USD", "100 USD"];

  const toggleRegionDropdown = () => setShowRegionOptions(!showRegionOptions);
  const toggleDenominationDropdown = () => setShowDenominationOptions(!showDenominationOptions);

  const selectRegion = (option) => {
    setSelectedRegion(option);
    setShowRegionOptions(false);
  };

  const selectDenomination = (option) => {
    setSelectedDenomination(option);
    setShowDenominationOptions(false);
  };

  return (
    <div className="w-full bg-gray-100 p-4 flex flex-col lg:flex-row gap-8">
      {/* Image Gallery */}
      <div className="w-full max-w-sm mx-auto lg:max-w-md">
        <div className="mx-auto bg-gray-100 rounded relative">
          <TailwindSlider slides={images} />
        </div>

      </div>

      {/* Product Details */}
      <div className="flex-1 p-2 rounded-xl shadow-sm space-y-6 max-w-2xl ml-auto">
        <div className="flex items-center bg-gray-100 space-x-2 text-sm text-gray-500">
          <a href="/shop" className="hover:text-primary">Shop</a>
          <svg className="lucide lucide-chevron-right-icon w-4 h-4 text-gray-400" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <a href="/shop?category=playstation-gift-cards" className="hover:text-primary">Playstation</a>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">PlayStation Network Card 100 CHF (CH) PSN Key SWITZERLAND</h1>
          <div className="flex gap-2 mt-3">
            <div className="q-chip row inline no-wrap items-center bg-primary uppercase text-white rounded-none m-0">
              <div className="ellipsis p-2">Instant</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <div className="text-4xl font-bold text-primary m-4">1140 DZD</div>
          <p className="text-gray-600">
            Add funds to your PlayStation® Network wallet without the need for a credit card...
          </p>

          <div className="pt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Available Options</h3>
            <div className="space-y-2">
              {/* Region Dropdown */}
              <div className="w-full relative">
                <div className="font-bold mb-2">Region</div>
                <div
                  onClick={toggleRegionDropdown}
                  className="px-3 rounded-md py-2 border-2 cursor-pointer relative bg-white"
                >
                  {selectedRegion}
                  <i className="material-icons absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2">
                    arrow_drop_down
                  </i>
                </div>

                {showRegionOptions && (
                  <div className="absolute z-50 bg-white shadow-lg rounded-md border mt-1 w-full p-2 max-h-48 overflow-auto">
                    {regionOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => selectRegion(option)}
                        className={`px-2 py-2 cursor-pointer rounded-md mb-1 hover:bg-gray-200 ${option === selectedRegion ? "bg-primary text-white" : ""}`}
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
                  <i className="material-icons absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2">
                    arrow_drop_down
                  </i>
                </div>

                {showDenominationOptions && (
                  <div className="absolute z-50 bg-white shadow-lg rounded-md border mt-1 w-full p-2 max-h-48 overflow-auto">
                    {denominationOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => selectDenomination(option)}
                        className={`px-2 py-2 cursor-pointer rounded-md mb-1 hover:bg-gray-200 ${option === selectedDenomination ? "bg-primary text-white" : ""}`}
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
                    <span className="text-white text-lg font-medium">Add to cart</span>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap-icon w-6 h-6 text-primary group-hover:animate-pulse">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-primary">Instant Delivery</span>
                <p className="text-xs text-gray-500">Get it right away</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
                <div className="relative bg-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check-icon w-6 h-6 text-primary group-hover:animate-pulse">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-primary">Secure Payment</span>
                <p className="text-xs text-gray-500">100% Protected</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
                <div className="relative bg-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones-icon w-6 h-6 text-primary group-hover:animate-pulse"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-primary">24/7 Available</span>
                <p className="text-xs text-gray-500">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
