const Category = require('../models/category');  // Assuming you have a Category model

// Fetch all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ payload: categories, msg: "Categories fetched successfully" });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({ msg: "Error fetching categories", error });
  }
};

// Fetch a specific category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      return res.status(200).json({ payload: category, msg: "Category fetched successfully" });
    }
    return res.status(404).json({ msg: "Category not found" });
  } catch (error) {
    console.error("Error fetching category:", error);
    return res.status(500).json({ msg: "Error fetching category", error });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    return res.status(201).json({ payload: savedCategory, msg: "Category created successfully" });
  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({ msg: "Error creating category", error });
  }
};
