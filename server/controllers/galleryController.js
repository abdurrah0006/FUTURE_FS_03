const {
  getGalleryItems,
  getGalleryCategories,
  getGalleryByCategory,
  getGalleryItemById
} = require("../services/galleryService");

const getGalleryController = async (req, res) => {
  try {
    const { category } = req.query;

    const items = await getGalleryItems(category);

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    console.error("Get gallery error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery"
    });
  }
};

const getGalleryCategoriesController = async (
  req,
  res
) => {
  try {
    const categories =
      await getGalleryCategories();

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.error(
      "Get gallery categories error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery categories"
    });
  }
};

const getGalleryByCategoryController = async (
  req,
  res
) => {
  try {
    const { category } = req.params;

    const items =
      await getGalleryByCategory(category);

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    console.error(
      "Get gallery category error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery category"
    });
  }
};

const getGalleryItemByIdController = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const item =
      await getGalleryItemById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found"
      });
    }

    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error(
      "Get gallery item error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery item"
    });
  }
};

module.exports = {
  getGalleryController,
  getGalleryCategoriesController,
  getGalleryByCategoryController,
  getGalleryItemByIdController
};