// /services/api/products.js
const API_BASE_URL = ''; 

// 🟡 1. Get list of products with optional filters
export const fetchProducts = async ({ page = 1, category, search, signal } = {}) => {
  let url = `${API_BASE_URL}/v2/products/?page=${page}`;
  if (category) url += `&category=${category}`;
  if (search) url += `&search=${search}`;

  const res = await fetch(url, { signal }); // ← signal
  return await res.json();
};


// 🟡 2. Get product details
export const getProductDetails = async (id) => {
  const res = await fetch(`${API_BASE_URL}/products/id/${id}/`);
  return await res.json();
};

// 🟢 3. Create product (Vendor only)
export const createProduct = async (productData, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });
  return await res.json();
};

// 🟡 4. Update product
export const updateProduct = async (id, productData, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/products/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });
  return await res.json();
};

// 🔴 5. Delete product
export const deleteProduct = async (id, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/products/${id}/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

// ✅ 6. List categories
export const fetchCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/categories/`);
  return await res.json();
};

// 🔥 7. Get hot categories
export const fetchTopCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/categories/top/`);
  return await res.json();
};

// ➕ 8. Create category
export const createCategory = async (data, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/categories/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// 🔁 9. Get all variants
export const fetchVariants = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/variants/`);
  return await res.json();
};

// ➕ 10. Create variant
export const createVariant = async (data, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/variants/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// 📦 11. Get attributes
export const fetchAttributes = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/attributes/`);
  return await res.json();
};

// ➕ 12. Create attribute
export const createAttribute = async (data, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/attributes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// 🧩 13. Get attribute values
export const fetchAttributeValues = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/attribute-values/`);
  return await res.json();
};

// ➕ 14. Create attribute value
export const createAttributeValue = async (data, token) => {
  const res = await fetch(`${API_BASE_URL}/v2/attribute-values/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// ⭐ 15. Get product reviews
export const fetchProductReviews = async (productId) => {
  const res = await fetch(`${API_BASE_URL}/reviews/${productId}`);
  return await res.json();
};

// 💸 16. Get super deals
export const fetchSuperDeals = async () => {
  const res = await fetch(`${API_BASE_URL}/products/super-deals/`);
  return await res.json();
};

// 🧾 17. Vendor Dashboard
export const fetchVendorDashboard = async (token) => {
  const res = await fetch(`${API_BASE_URL}/dashboard/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};
