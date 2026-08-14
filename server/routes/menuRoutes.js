const express = require("express");

const {
  getMenuItems,
  getFeaturedItems,
  getMenuCategories,
  getMenuByCategory,
  getMenuItemById
} = require("../controllers/menuController");

const router = express.Router();

router.get("/categories", getMenuCategories);
router.get("/featured", getFeaturedItems);
router.get("/category/:category", getMenuByCategory);
router.get("/:id", getMenuItemById);
router.get("/", getMenuItems);

module.exports = router;