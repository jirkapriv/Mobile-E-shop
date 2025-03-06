const Product = require('../models/Product');  // Assuming you have a Product model
const mongoose = require("mongoose");

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ payload: products, msg: "Products fetched successfully" });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ msg: "Error fetching products", error });
  }
};

// Fetch a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.status(200).json({ payload: product, msg: "Product fetched successfully" });
    }
    return res.status(404).json({ msg: "Product not found" });
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ msg: "Error fetching product", error });
  }
};



// Fetch products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.id; // Ensure you are using 'id' as the parameter
    console.log("Received categoryId:", categoryId);

    if (!categoryId) {
      return res.status(400).json({ msg: "Category ID is required" });
    }

    // Use mongoose.Types.ObjectId to convert the categoryId to an ObjectId
    const categoryObjectId = new mongoose.Types.ObjectId(categoryId);
    
    const products = await Product.find({ categoryId: categoryObjectId });
    console.log("Found products:", products);

    if (products.length > 0) {
      return res.status(200).json({ payload: products, msg: "Products fetched successfully" });
    } else {
      return res.status(404).json({ msg: "No products found for this category" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ msg: "Error fetching products", error: error.message });
  }
};


// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    return res.status(201).json({ payload: savedProduct, msg: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ msg: "Error creating product", error });
  }
};
