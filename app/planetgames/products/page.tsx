/* eslint-disable react/jsx-key */
"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api/products";
import { fetchCategories } from "../services/api/products";
import { useGetcategories } from "../../../roupi/categories";
import Link from "next/link";
import { Product } from "../components/Product";
const baseURL = process.env.NEXT_PUBLIC_API_URL;



// Banner Component
const Banner = ({ text, subtext }: any) => (
  <>
    <p className="text-gray-900 uppercase font-bold text-2xl">{text}</p>
    <p className="text-gray-600 text-sm">{subtext}</p>
  </>
);

// Title Component
const Title = ({ icon, name }) => (
  <div className="flex gap-2 items-center justify-start my-2">
    <span className="emoji">{icon}</span>
    <h3 className="font-bold text-xl">{name}</h3>
  </div>
);

// Price Filter Component
const PriceFilter = ({ minPrice, maxPrice, onMinChange, onMaxChange }) => {
  return (
    <div className="p-2">
      <Title icon="💰" name="Price Range (DZD)" />
      <div className="flex py-2 items-center justify-center gap-2">
        <div className="flex items-center px-2 justify-center border rounded-md">
          <span className="text-gray-400 pr-2">DZD</span>
          <input
            type="number"
            className="py-2 focus:outline-none focus:ring-0 w-full"
            placeholder="Min"
            value={minPrice}
            onChange={onMinChange}
          />
        </div>
        <span className="text-xl font-bold text-gray-400">-</span>
        <div className="flex items-center px-2 justify-center border rounded-md">
          <span className="text-gray-400 pr-2">DZD</span>
          <input
            type="number"
            className="py-2 focus:outline-none focus:ring-0 w-full"
            placeholder="Max"
            value={maxPrice}
            onChange={onMaxChange}
          />
        </div>
      </div>
    </div>
  );
};

// Categories Component

const Categories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const catego = await fetchCategories();
        setCategories(catego);
        console.log("Fetched categories:", catego);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      <Title icon="📂" name="Categories" />
      <div className="mx-8 my-4 space-y-2">
        {categories.map(({ id, name }) => (
          <p
            key={id}
            onClick={() => onSelectCategory(id)}
            className="text-gray-700 cursor-pointer w-full hover:bg-gray-200 px-2 py-1 rounded-md font-semibold"
          >
            {name}
          </p>
        ))}
      </div>
    </>
  );
};
// Main Home Component
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

fetchProducts({
  signal: controller.signal,
  category_id: categoryId,
  price_gte: minPrice !== '' ? Number(minPrice) : undefined,
  price_lte: maxPrice !== '' ? Number(maxPrice) : undefined,
  page: 1,
})

      .then((data) => {
      
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Error fetching products:", err);
        }
      });

    return () => controller.abort();
  }, [categoryId, minPrice, maxPrice]);

  return (
    <div className="max-w-[1800px] gap-24 px-8 flex flex-col my-16 items-center justify-center">
      {/* Banner Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-600/10 to-purple-600/10">
        <div className="inset-0 bg-gradient-to-r from-purple-600 to-purple-600/90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div className="px-8 py-12 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Your One-Stop Digital Shop</h1>
                <p className="text-xl text-gray-200 max-w-lg">Get instant access to premium digital products, gaming credits, and gift cards at the best prices.</p>
              </div>
              <div className="tw-hidden md:flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-purple-500/25 hover:bg-purple-500/50 transition-all duration-300 backdrop-blur rounded-lg px-4 py-3">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h3 className="font-medium text-white">Gaming Credits</h3>
                    <p className="text-sm text-gray-300">Top up your favorite games</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-purple-500/25 hover:bg-purple-500/50 transition-all duration-300 backdrop-blur rounded-lg px-4 py-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h3 className="font-medium text-white">Gift Cards</h3>
                    <p className="text-sm text-gray-300">For all major platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-hidden md:flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-4 transform rotate-6">
                <div className="space-y-4">
                  <div className="bg-purple-500/25 hover:bg-purple-500/50 transition-all duration-300 backdrop-blur rounded-lg p-4 transform -translate-y-8">
                    <span className="text-4xl">⚡</span><h4 className="font-medium text-white mt-2">Instant Delivery</h4>
                  </div>
                  <div className="bg-purple-500/25 hover:bg-purple-500/50 transition-all duration-300 backdrop-blur rounded-lg p-4">
                    <span className="text-4xl">💳</span><h4 className="font-medium text-white mt-2">Secure Payment</h4>
                  </div>
                </div>
                <div className="space-y-4 transform translate-y-12">
                  <div className="bg-purple-500/25 hover:bg-purple-500/50 transition-all duration-300 backdrop-blur rounded-lg p-4">
                    <span className="text-4xl">🏆</span>
                    <h4 className="font-medium text-white mt-2">Best Prices</h4>
                  </div>
                  <div className="bg-purple-500/25 hover:bg-purple-500/50 transition-all duration-300 backdrop-blur rounded-lg p-4">
                    <span className="text-4xl">🎯</span>
                    <h4 className="font-medium text-white mt-2">24/7 Support</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex items-start relative max-w-[1400px] justify-start w-full">
        {/* Filters */}
        <div className="w-[400px] sticky top-[160px]">
          <div className="rounded-t-md border px-4 py-5 shadow-md">
            <p className="text-xl font-bold">Filter Products</p>
          </div>
          <div className="border px-2">
            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinChange={(e) => {
                console.log("Min price changed:", e.target.value);
                setMinPrice(e.target.value);
              }}
              onMaxChange={(e) => {
                console.log("Max price changed:", e.target.value);
                setMaxPrice(e.target.value);
              }}
            />
            <div className="w-full bg-gray-300 py-[0.5px]"></div>
            <Categories onSelectCategory={(id) => setCategoryId(id)} />
          </div>
        </div>
        {/* Products List */}
<div className="w-full">
  <p className="px-12 pb-4">
    Showing <b>{products.length}</b> products
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
    {loading ? (
  Array.from({ length: 8 }).map((_, index) => (
    <Product
      key={index}
      category=""
      productName=""
      price={0}
      image=""
      link=""
      isLoading
    />
  ))
) : products.length === 0 ? (
  <p className="text-center text-gray-500 col-span-full">No products found.</p>
) : (
  products.map((product) => (
    <Product
      key={product.id}
      category={product.category?.name || "Uncategorized"}
      productName={product.title}
      price={product.act_price}
      image={`${baseURL}/${product.image}`}
      link={`/product/${product.slug || product.id}`}
    />
  ))
)}

  </div>
</div>

      </div>
    </div>
  );
}
