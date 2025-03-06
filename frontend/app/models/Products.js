const API_BASE_URL = "http://10.0.2.2:3000/";

import mongoose from "mongoose";

// Fetch all products
export const getAllProducts = async () => {
    try {
      const req = await fetch(`${API_BASE_URL}products`, {
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
      console.error("Error fetching products:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };
  
// Fetch a specific product by ID (Frontend)
export const getProductById = async (productId) => {
  try {
    const req = await fetch(`${API_BASE_URL}products/${productId}`, {
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
    console.error("Error fetching product:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

  
  
  // Create a new product
  export const createProduct = async (formData) => {
    try {
      const req = await fetch(`${API_BASE_URL}products`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await req.json();
      return {
        status: req.status,
        payload: data.payload,
        msg: data.msg,
      };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };
  
  // Update an existing product
  export const updateProduct = async (productId, formData) => {
    try {
      const req = await fetch(`${API_BASE_URL}products/${productId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(formData),
      });
      const data = await req.json();
      return {
        status: req.status,
        payload: data.payload,
        msg: data.msg,
      };
    } catch (error) {
      console.error("Error updating product:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };
  
  // Delete a product
  export const deleteProduct = async (productId) => {
    try {
      const req = await fetch(`${API_BASE_URL}products/${productId}`, {
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
      console.error("Error deleting product:", error);
      return {
        status: 500,
        msg: "Error connecting to the server",
      };
    }
  };

  export const getProductsByCategory = async (categoryId) => {
    try {
        // Convert categoryId to ObjectId if needed
        if (mongoose.Types.ObjectId.isValid(categoryId)) {
            categoryId = new mongoose.Types.ObjectId(categoryId).toString();
        }

        const req = await fetch(`${API_BASE_URL}categories/${categoryId}/products`, {
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
        console.error("Error fetching products by category:", error);
        return {
            status: 500,
            msg: "Error connecting to the server",
        };
    }
};
  