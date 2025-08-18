"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../app/api/products"; // عدّل المسار حسب المشروع
export const useProducts = ({ page = 1, filter, search } = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({
      page,
      category: filter, // ← تأكد من تمريرها هنا
      search,
      signal: controller.signal,
    })
      .then((data) => {
        setProducts(data?.results || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("فشل في جلب المنتجات:", err);
          setError(err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [page, filter, search]);

  return { products, loading, error };
};
