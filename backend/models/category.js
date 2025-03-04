const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Name of the category (e.g., "Fruits", "Vegetables")
  description: { type: String, default: null }, // Optional description of the category
  imageUrl: { type: String, default: null }, // Optional field for an image URL related to the category
});

// Create a model for the category
module.exports = mongoose.model("Category", categorySchema);
