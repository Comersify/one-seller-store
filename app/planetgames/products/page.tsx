/* eslint-disable react/jsx-key */
"use client";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../../api/products";
import { Product } from "../components/Product";
const baseURL = process.env.NEXT_PUBLIC_MEDIA_URL;

import React from "react";

/**
 * PaginationButtons
 * Renders up to 5 buttons: Prev, prev page number, current page number,
 * next page number, Next.
 *
 * Props:
 * - previousUrl: string | null  (URL containing ?page=... or null)
 * - nextUrl: string | null      (URL containing ?page=... or null)
 */
function PaginationButtons({ previousUrl, nextUrl }) {
  // Parse a URL (absolute or relative) and get the numeric `page` param
  const getPageFromUrl = (url) => {
    if (!url) return null;
    try {
      const u = new URL(url, window.location.href);
      const p = u.searchParams.get("page");
      return p ? Number(p) : null;
    } catch {
      return null;
    }
  };

  // Given a URL template (prev or next), return the same URL with a new page value
  const setPageInUrl = (url, page) => {
    if (!url || !page) return null;
    try {
      const u = new URL(url, window.location.href);
      u.searchParams.set("page", String(page));
      return u.toString();
    } catch {
      return null;
    }
  };

  const prevPage = getPageFromUrl(previousUrl);
  const nextPage = getPageFromUrl(nextUrl);

  // Infer current page
  // If both present, assume pages are consecutive
  // current = nextPage - 1 OR prevPage + 1 (consistent if API is well-formed)
  let currentPage = 1;
  if (nextPage && prevPage) currentPage = nextPage - 1;
  else if (nextPage && !prevPage) currentPage = Math.max(1, nextPage - 1);
  else if (!nextPage && prevPage) currentPage = prevPage + 1;

  // Build number-button URLs using whichever template we have
  const templateUrl = nextUrl || previousUrl || null;
  const prevNumberUrl = prevPage ? setPageInUrl(templateUrl, prevPage) : null;
  const currNumberUrl = setPageInUrl(templateUrl, currentPage);
  const nextNumberUrl = nextPage ? setPageInUrl(templateUrl, nextPage) : null;

  const Btn = ({ disabled, href, children, ariaLabel }) => (
    <a
      href={disabled ? undefined : href}
      aria-label={ariaLabel}
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium " +
        (disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white shadow border hover:shadow-md")
      }
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="flex items-center gap-2">
      {/* Prev */}
      <Btn disabled={!previousUrl} href={previousUrl || undefined} ariaLabel="Previous page">
        Prev
      </Btn>

      {/* Prev page number */}
      <Btn disabled={!prevNumberUrl} href={prevNumberUrl || undefined} ariaLabel={`Page ${prevPage || ""}`}>
        {prevPage ?? "--"}
      </Btn>

      {/* Current page number (disabled) */}
      <Btn disabled href={currNumberUrl || undefined} ariaLabel={`Current page ${currentPage}`}>
        {currentPage}
      </Btn>

      {/* Next page number */}
      <Btn disabled={!nextNumberUrl} href={nextNumberUrl || undefined} ariaLabel={`Page ${nextPage || ""}`}>
        {nextPage ?? "--"}
      </Btn>

      {/* Next */}
      <Btn disabled={!nextUrl} href={nextUrl || undefined} ariaLabel="Next page">
        Next
      </Btn>
    </div>
  );
}


// Banner Component
const Banner = ({ text, subtext }: any) => (
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
      <div className="mx-4 my-4 space-y-2">
        {categories.map(({ id, name, children }) => (
          <>
            <p
              key={id}
              onClick={() => onSelectCategory(id)}
              className="text-gray-700 cursor-pointer w-full hover:bg-gray-200 px-2 py-1 rounded-md font-semibold"
            >
              {name}
            </p>
            {children.map(({ id, name }) => (<p
              key={id}
              onClick={() => onSelectCategory(id)}
              className="pl-8 text-gray-700 cursor-pointer w-full hover:bg-gray-200 px-2 py-1 rounded-md font-semibold"
            >
              {name}
            </p>))}
          </>
        ))}
      </div>
    </>
  );
};
// Main Home Component
export default function Home() {
  const [products, setProducts] = useState({});
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

        setProducts(data);
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
      <Banner />

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
                setMinPrice(e.target.value);
              }}
              onMaxChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
            <div className="w-full bg-gray-300 py-[0.5px]"></div>
            <Categories onSelectCategory={(id) => setCategoryId(id)} />
          </div>
        </div>
        {/* Products List */}
        <div className="w-full">
          <div className="w-full flex items-center justify-between">

            <p className="px-12 pb-4">
              Showing <b>{products.results.length}</b> of <b>{products.count}</b> products
            </p>
            <PaginationButtons previousUrl={products.previous} nextUrl={products.next} />
          </div>

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
            ) : products.count === 0 ? (
              <p className="text-center text-gray-500 col-span-full">No products found.</p>
            ) : (
              products.results.map((product) => (
                <Product
                  key={product.id}
                  category={product.category || "Uncategorized"}
                  productName={product.title}
                  price={product.act_price}
                  image={`${baseURL}/${product.image}`}
                  link={`/products/${product.slug || product.id}`}
                />
              ))
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
