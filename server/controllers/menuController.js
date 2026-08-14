const Menu = require("../models/Menu");
const MenuCategory = require("../models/MenuCategory");

const getMenuItems = async (req, res) => {
  try {
    const { category, featured } = req.query;

    const filter = {};

    if (category && category !== "all") {
      filter.category = category.toLowerCase();
    }

    if (featured !== undefined) {
      filter.featured = featured === "true";
    }

    const menuItems = await Menu.find(filter).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems
    });
  } catch (error) {
    console.error("Get menu error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items"
    });
  }
};

const getFeaturedItems = async (req, res) => {
  try {
    const menuItems = await Menu.find({
      featured: true
    }).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems
    });
  } catch (error) {
    console.error("Get featured menu error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured menu items"
    });
  }
};

const getMenuCategories = async (req, res) => {
  try {
    const categories = await MenuCategory.find().sort({
      createdAt: 1
    });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.error("Get menu categories error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu categories"
    });
  }
};

const getMenuByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const menuItems = await Menu.find({
      category: category.toLowerCase()
    }).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems
    });
  } catch (error) {
    console.error("Get category menu error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch category menu"
    });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const menuItem = await Menu.findOne({
      id: id.toLowerCase()
    });

    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      data: menuItem
    });
  } catch (error) {
    console.error("Get menu item error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu item"
    });
  }
};

module.exports = {
  getMenuItems,
  getFeaturedItems,
  getMenuCategories,
  getMenuByCategory,
  getMenuItemById
};