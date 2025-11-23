"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { getProductDetails } from "../../../api/products";
import { MEDIA_URL } from "../../../../urls";
import Image from "next/image";
import { addToCart } from "../../../api/cart";

/**
 * Tailwind-only CSS Slider (no custom CSS, no JS behavior)
 * - Uses hidden radio inputs + labels for navigation
 * - Prev/Next arrows and dot indicators
 * - All styling via Tailwind utility classes
 *
 * Props:
 *  - slides: Array<{ src: string, alt?: string, caption?: string }>
 */



export function ImageGallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);


  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };


  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="relative w-full max-w-md">
        <img
          src={images[selectedIndex]?.image}
          alt="Product"
          className="w-full h-full object-cover rounded-2xl shadow"
        />


        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              ▶
            </button>
          </>
        )}
      </div>


      <div className="flex gap-2 overflow-x-auto p-2">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img.image}
            alt="thumbnail"
            width={10000}
            height={10000}
            onClick={() => setSelectedIndex(idx)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${idx === selectedIndex ? "border-blue-500" : "border-transparent"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function TailwindSlider({
  slides,
}) {
  const name = "twslider-" + Math.random().toString(36).slice(2, 7);

  return (
    <div className="w-full mx-auto select-none">
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
              <figure className="absolute max-h-[400px] max-w-[400px] inset-0 opacity-0 scale-[1.02] transition-all duration-500 ease-in-out peer-checked:opacity-100 peer-checked:scale-100 peer-checked:z-10">
                <Image
                  src={`${MEDIA_URL}/${s.image}`}
                  alt={`Slide ${i + 1}`}
                  width={10000}
                  height={10000}
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



export default function DetailsPage() {

  const params = useParams(); // ✅ works in Client Components
  const slug = params.slug;
  const [product, setProduct] = useState({})
  useEffect(() => {
    async function fetch() {
      const resp = await getProductDetails(slug)
      setProduct(resp)
    }
    if (slug) {
      fetch()
    }
  }, [])

  return (
    <div className="w-full bg-gray-100 p-4 flex flex-col lg:flex-row gap-8">
      {/* Image Gallery */}
      <div className="mx-auto ">
        <div className="mx-auto bg-gray-100 w-full rounded relative">
          <ImageGallery images={product.images || []} />
        </div>

      </div>

      {/* Product Details */}
      <div className="flex-1 p-2 rounded-xl shadow-sm space-y-6 max-w-2xl ml-auto">
        <div className="flex items-center bg-gray-100 space-x-2 text-sm text-gray-500">
          <a href="/shop" className="hover:text-primary">Shop</a>
          <svg className="lucide lucide-chevron-right-icon w-4 h-4 text-gray-400" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <a href="/shop?category=playstation-gift-cards" className="hover:text-primary">{product.category__name}</a>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex gap-2 mt-3">
            <div className="q-chip row inline no-wrap items-center bg-primary uppercase text-white rounded-none m-0">
              <div className="ellipsis p-2">Instant</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <div className="text-4xl font-bold text-primary m-4">{product.price} DZD</div>
          <p className="text-gray-600">
            {product.description}
          </p>



          <div className="w-full mt-4">
            <div className="grid grid-cols-1">
              <button onClick={() => addToCart(product.id)} className="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase w-full py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200">
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
