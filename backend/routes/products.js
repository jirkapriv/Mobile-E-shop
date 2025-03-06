const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const CartController = require("../controllers/CartController");
const CategoryController = require("../controllers/CategoryController");

// Routes for Products
router.get("/products", ProductController.getAllProducts); // List all products
router.get("/products/:id", ProductController.getProductById); // Get product by ID
router.post("/products", ProductController.createProduct); // Create a new product
router.get("/categories/:id/products", ProductController.getProductsByCategory);


// Routes for Categories
router.get("/categories", CategoryController.getAllCategories); // List all categories
router.get("/categories/:id", CategoryController.getCategoryById); // Get category by ID
router.post("/categories", CategoryController.createCategory); // Create a new category

// Routes for Cart
router.get("/:userId/cart", CartController.getCart); // Get cart for a specific user
router.post("/:userId/cart", CartController.addToCart); // Add product to the cart
router.post("/:userId/cart/checkout", CartController.checkout); // Checkout the cart

module.exports = router;
