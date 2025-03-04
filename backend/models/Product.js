const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: null },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, // Reference to Category model
});

module.exports = mongoose.model("Product", productSchema);
