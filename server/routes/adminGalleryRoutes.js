const {
  getAdminGalleryItems,
  getAdminGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  toggleGalleryActive,
  toggleGalleryFeatured,
  getAdminCategories,
  createGalleryCategory,
  updateGalleryCategory,
  deleteGalleryCategory
} = require(
  "../services/adminGalleryService"
);

const getGalleryItemsController =
  async (req, res) => {
    try {
      const {
        search,
        category,
        active,
        featured
      } = req.query;

      const items =
        await getAdminGalleryItems({
          search,
          category,
          active:
            active !== undefined
              ? active === "true"
              : undefined,
          featured:
            featured !== undefined
              ? featured === "true"
              : undefined
        });

      res.status(200).json({
        success: true,
        count: items.length,
        data: items
      });
    } catch (error) {
      console.error(
        "Get admin gallery error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch gallery items"
      });
    }
  };

const getGalleryItemController =
  async (req, res) => {
    try {
      const item =
        await getAdminGalleryItemById(
          req.params.id
        );

      if (!item) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery item not found"
        });
      }

      res.status(200).json({
        success: true,
        data: item
      });
    } catch (error) {
      console.error(
        "Get admin gallery item error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch gallery item"
      });
    }
  };

const createGalleryItemController =
  async (req, res) => {
    try {
      const item =
        await createGalleryItem(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Gallery item created successfully",
        data: item
      });
    } catch (error) {
      console.error(
        "Create gallery item error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const updateGalleryItemController =
  async (req, res) => {
    try {
      const item =
        await updateGalleryItem(
          req.params.id,
          req.body
        );

      if (!item) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery item not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Gallery item updated successfully",
        data: item
      });
    } catch (error) {
      console.error(
        "Update gallery item error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const deleteGalleryItemController =
  async (req, res) => {
    try {
      const item =
        await deleteGalleryItem(
          req.params.id
        );

      if (!item) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery item not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Gallery item deleted successfully"
      });
    } catch (error) {
      console.error(
        "Delete gallery item error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete gallery item"
      });
    }
  };

const toggleActiveController =
  async (req, res) => {
    try {
      const item =
        await toggleGalleryActive(
          req.params.id
        );

      if (!item) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery item not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Gallery visibility updated successfully",
        data: item
      });
    } catch (error) {
      console.error(
        "Toggle gallery active error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update gallery visibility"
      });
    }
  };

const toggleFeaturedController =
  async (req, res) => {
    try {
      const item =
        await toggleGalleryFeatured(
          req.params.id
        );

      if (!item) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery item not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Gallery featured status updated",
        data: item
      });
    } catch (error) {
      console.error(
        "Toggle gallery featured error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update featured status"
      });
    }
  };

const getCategoriesController =
  async (req, res) => {
    try {
      const categories =
        await getAdminCategories();

      res.status(200).json({
        success: true,
        count: categories.length,
        data: categories
      });
    } catch (error) {
      console.error(
        "Get admin gallery categories error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch gallery categories"
      });
    }
  };

const createCategoryController =
  async (req, res) => {
    try {
      const category =
        await createGalleryCategory(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Gallery category created successfully",
        data: category
      });
    } catch (error) {
      console.error(
        "Create gallery category error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const updateCategoryController =
  async (req, res) => {
    try {
      const category =
        await updateGalleryCategory(
          req.params.id,
          req.body
        );

      if (!category) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery category not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Gallery category updated successfully",
        data: category
      });
    } catch (error) {
      console.error(
        "Update gallery category error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const deleteCategoryController =
  async (req, res) => {
    try {
      const category =
        await deleteGalleryCategory(
          req.params.id
        );

      if (!category) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery category not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Gallery category deleted successfully"
      });
    } catch (error) {
      console.error(
        "Delete gallery category error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete gallery category"
      });
    }
  };

module.exports = {
  getGalleryItemsController,
  getGalleryItemController,
  createGalleryItemController,
  updateGalleryItemController,
  deleteGalleryItemController,
  toggleActiveController,
  toggleFeaturedController,
  getCategoriesController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController
};