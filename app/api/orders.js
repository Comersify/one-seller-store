const API_BASE_URL = process.env.NEXT_PUBLIC_API;

export const fetchOrders = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/my-orders/`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Client-Domain': window?.location?.host
            },
            credentials: 'include',
        });

        if (!res.ok) {
            const error = await res.json();
            throw error;
        }

        return await res.json();
    } catch (error) {
        throw error.message ? error : { message: 'Failed to get orders' };
    }
};