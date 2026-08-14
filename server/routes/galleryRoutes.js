const express = require("express");

const {
  getGalleryController,
  getGalleryCategoriesController,
  getGalleryByCategoryController,
  getGalleryItemByIdController
} = require("../controllers/galleryController");

const router = express.Router();

router.get("/categories", getGalleryCategoriesController);
router.get(
  "/category/:category",
  getGalleryByCategoryController
);
router.get("/:id", getGalleryItemByIdController);
router.get("/", getGalleryController);

module.exports = router;