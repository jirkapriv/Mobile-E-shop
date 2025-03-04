const API_BASE_URL = "http://10.0.2.2:3000/";

// Fetch all categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}categories`);
    const data = await response.json();
    return {
      status: response.status,
      payload: data.payload, // Ensure this is returning the correct payload
      msg: data.msg,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Fetch a specific category by ID
export const getCategoryById = async (categoryId) => {
  try {
    const req = await fetch(`${API_BASE_URL}categories/${categoryId}`, {
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
    console.error("Error fetching category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Create a new category
export const createCategory = async (formData) => {
  try {
    const req = await fetch(`${API_BASE_URL}categories`, {
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
    console.error("Error creating category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Update an existing category
export const updateCategory = async (categoryId, formData) => {
  try {
    const req = await fetch(`${API_BASE_URL}categories/${categoryId}`, {
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
    console.error("Error updating category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Delete a category
export const deleteCategory = async (categoryId) => {
  try {
    const req = await fetch(`${API_BASE_URL}categories/${categoryId}`, {
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
    console.error("Error deleting category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Fetch all products in a category
export const getProductsInCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}categories/${categoryId}/products`);
    const data = await response.json();
    return {
      status: response.status,
      payload: data.payload,
      msg: data.msg,
    };
  } catch (error) {
    console.error("Error fetching products in category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Add a product to a category
export const addProductToCategory = async (categoryId, formData) => {
  try {
    const req = await fetch(`${API_BASE_URL}categories/${categoryId}/products`, {
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
    console.error("Error adding product to category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};

// Remove a product from a category
export const removeProductFromCategory = async (categoryId, productId) => {
  try {
    const req = await fetch(`${API_BASE_URL}categories/${categoryId}/products/${productId}`, {
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
    console.error("Error removing product from category:", error);
    return {
      status: 500,
      msg: "Error connecting to the server",
    };
  }
};
