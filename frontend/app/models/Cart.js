const API_BASE_URL = "http://10.0.2.2:3000/";

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
  export const updateCartItem = async (userId, itemId, quantity) => {
    try {
      const req = await fetch(`${API_BASE_URL}${userId}/cart/${itemId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ quantity }),
      });
      const data = await req.json();
      return {
        status: req.status,
        payload: data.payload,
        msg: data.msg,
      };
    } catch (error) {
      console.error("Error updating cart item:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };
  export const removeFromCart = async (userId, itemId) => {
    try {
      const req = await fetch(`${API_BASE_URL}${userId}/cart/${itemId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      const data = await req.json();
      return {
        status: req.status,
        payload: data.payload,
        msg: data.msg,
      };
    } catch (error) {
      console.error("Error removing item from cart:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };
  export const checkoutCart = async (userId) => {
    try {
      const req = await fetch(`${API_BASE_URL}${userId}/cart/checkout`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = await req.json();
      return {
        status: req.status,
        payload: data.payload,
        msg: data.msg,
      };
    } catch (error) {
      console.error("Error checking out cart:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };