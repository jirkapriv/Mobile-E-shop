const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String, // Use String for userId (not ObjectId)
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
