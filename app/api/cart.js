const API_BASE_URL = process.env.NEXT_PUBLIC_API;


export async function getCart() {
    const res = await fetch(`${API_BASE_URL}/cart/products/`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Domain': window?.location?.host
        },
        credentials: 'include',
    });
    return res.json();
}

// ===============================
// 2. Add Product to Cart (POST)
// ===============================
export async function addToCart(product_id) {
    const res = await fetch(`${API_BASE_URL}/cart/add-product/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Domain': window?.location?.host
        },
        credentials: 'include',
        body: JSON.stringify({ product_id })
    });
    return res.json();
}

// ===============================
// 3. Delete Product From Cart (POST)
// ===============================
export async function deleteFromCart(order_id) {
    const res = await fetch(`${API_BASE_URL}/cart/delete-product/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Domain': window?.location?.host
        },
        credentials: 'include',
        body: JSON.stringify({ order_id })
    });
    return res.json();
}

// ===============================
// 4. Update Product Quantity (POST)
// ===============================
export async function updateCart(order_id, quantity) {
    const res = await fetch(`${API_BASE_URL}/cart/update-product/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Domain': window?.location?.host
        },
        credentials: 'include',
        body: JSON.stringify({ order_id, quantity })
    });
    return res.json();
}