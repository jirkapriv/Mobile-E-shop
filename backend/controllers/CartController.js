const Cart = require("../models/Cart"); // Assuming you have a Cart model
const Product = require("../models/Product"); // Assuming you're using the Product model

// Mock user ID for testing
const mockUserId = "mockUserId123"; // Hardcoded user ID for testing

// Get the cart for a specific user
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: mockUserId }).populate("items.product");
    if (cart) {
      return res.status(200).send({
        msg: "Cart found",
        payload: cart,
      });
    }
    return res.status(404).send({ msg: "Cart not found" });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).send({ msg: "Error fetching cart", error });
  }
};

// Add a product to the cart
exports.addToCart = async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    let cart = await Cart.findOne({ userId: mockUserId });
    if (!cart) {
      // If the cart doesn't exist, create a new one
      cart = new Cart({
        userId: mockUserId,
        items: [{ product: req.body.productId, quantity: req.body.quantity }],
      });
    } else {
      // If the cart exists, check if the product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.product.toString() === req.body.productId
      );

      if (existingItem) {
        // If product exists, just update the quantity
        existingItem.quantity += req.body.quantity;
      } else {
        // If product doesn't exist, add it
        cart.items.push({ product: req.body.productId, quantity: req.body.quantity });
      }
    }

    const result = await cart.save();
    return res.status(200).send({
      msg: "Product added to cart",
      payload: result,
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).send({ msg: "Error adding product to cart", error });
  }
};

// Checkout the cart
exports.checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: mockUserId }).populate("items.product");
    if (!cart || cart.items.length === 0) {
      return res.status(400).send({ msg: "Cart is empty" });
    }

    // You can integrate payment processing here or just simulate the checkout
    // For now, we'll assume the checkout is successful
    cart.items = []; // Empty the cart after checkout
    await cart.save();

    return res.status(200).send({
      msg: "Checkout successful",
      payload: cart,
    });
  } catch (error) {
    console.error("Error checking out:", error);
    res.status(500).send({ msg: "Error checking out", error });
  }
};
