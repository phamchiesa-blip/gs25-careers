const API_URL = "http://localhost:5000/api/products";

export const getProducts = async (category, search = "") => {
    const params = new URLSearchParams({
        category,
        search,
    });

    const response = await fetch(
        `${API_URL}?${params.toString()}`
    );

    const data = await response.json();

    return data;
};
