const Product = require('../models/Product');  // Assuming you have a Product model

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

exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ categoryId: req.params.categoryId }); // Assuming `categoryId` is part of the Product schema
    if (products) {
      return res.status(200).json({ payload: products, msg: 'Products fetched successfully' });
    } else {
      return res.status(404).json({ msg: 'No products found for this category' });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ msg: 'Error fetching products', error });
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
