const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String, // Change this from ObjectId to String
    required: true
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
