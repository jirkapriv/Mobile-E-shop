const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Reference to Category Model
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
