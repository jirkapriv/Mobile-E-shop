const API_BASE_URL = "http://10.0.2.2:3000/";

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
  
  // Fetch a specific product by ID
  exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        return res.status(200).json({ payload: product, msg: "Product fetched successfully" });
      } else {
        return res.status(404).json({ msg: "Product not found" });
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ msg: "Error fetching product", error });
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
  