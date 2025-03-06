const API_BASE_URL = "http://10.0.2.2:3000/";

// Get the cart for a specific user
export const getCart = async (userId) => {
  try {
    const req = await fetch(`${API_BASE_URL}${userId}/cart`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  } catch (error) {
    console.error("Error fetching cart:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Add product to the cart
// Add product to the cart
export const addToCart = async (userId, productId, quantity) => {
  try {
    const req = await fetch(`${API_BASE_URL}${userId}/cart`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

