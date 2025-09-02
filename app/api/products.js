const API_BASE_URL = 'https://api.comercify.shop';

export const fetchProducts = async ({
  page = 1,
  category_id,
  price_gte,
  price_lte,
  signal
} = {}) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    ...(category_id && { category_id: category_id.toString() }),
    ...(price_gte !== undefined && price_gte !== null ? { price_gte: price_gte.toString() } : {}),
    ...(price_lte !== undefined && price_lte !== null ? { price_lte: price_lte.toString() } : {}),

  });
  const res = await fetch(
    `${API_BASE_URL}/v2/products/?${queryParams.toString()}`,
    {
      method: 'GET',
      signal,
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Domain': 'https://planetgames.localhost:3001'
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  return await res.json();
};


export const getProductDetails = async (id) => {
  const res = await fetch(`${API_BASE_URL}/products/id/${id}/`, {
    headers: {
      'X-Client-Domain': 'https://planetgames.localhost:3001',
    }
  });
  return await res.json();
};


export const fetchCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/categories/`, {
    headers: {
      'X-Client-Domain': 'https://planetgames.localhost:3001',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return await res.json();
};


export const fetchTopCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/categories/top/`);
  return await res.json();
};


export const fetchVariants = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/variants/`);
  return await res.json();
};


export const fetchAttributes = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/attributes/`);
  return await res.json();
};


export const fetchAttributeValues = async () => {
  const res = await fetch(`${API_BASE_URL}/v2/attribute-values/`);
  return await res.json();
};



// ⭐ 15. Get product reviews
export const fetchProductReviews = async (productId) => {
  const res = await fetch(`${API_BASE_URL}/reviews/${productId}`);
  return await res.json();
};

// 💸 16. Get super deals
export const fetchSuperDeals = async () => {
  const res = await fetch(`${API_BASE_URL}/products/super-deals/`, {
    'X-Client-Domain': 'https://planetgames.localhost:3001',
  });
  return await res.json();
};

export const fetchRecentProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/products/new/`, {
    'X-Client-Domain': 'https://planetgames.localhost:3001',
  });
  return await res.json();
};

export const fetchBestSellers = async () => {
  const res = await fetch(`${API_BASE_URL}/products/best-sellers/`, {
    'X-Client-Domain': 'https://planetgames.localhost:3001',
  });
  return await res.json();
};

