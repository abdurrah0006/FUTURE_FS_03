const {
  getAdminMenuItems,
  getAdminMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  toggleMenuAvailability,
  toggleMenuFeatured
} = require("../services/adminMenuService");

const getMenuItemsController = async (
  req,
  res
) => {
  try {
    const {
      search,
      category,
      featured,
      available
    } = req.query;

    const items = await getAdminMenuItems({
      search,
      category,
      featured:
        featured !== undefined
          ? featured === "true"
          : undefined,
      available:
        available !== undefined
          ? available === "true"
          : undefined
    });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    console.error(
      "Get admin menu error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items"
    });
  }
};

const getMenuItemController = async (
  req,
  res
) => {
  try {
    const item =
      await getAdminMenuItemById(
        req.params.id
      );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error(
      "Get admin menu item error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu item"
    });
  }
};

const createMenuItemController = async (
  req,
  res
) => {
  try {
    const item =
      await createMenuItem(req.body);

    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      data: item
    });
  } catch (error) {
    console.error(
      "Create menu item error:",
      error
    );

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A menu item with this slug already exists"
      });
    }

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const updateMenuItemController = async (
  req,
  res
) => {
  try {
    const item =
      await updateMenuItem(
        req.params.id,
        req.body
      );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: item
    });
  } catch (error) {
    console.error(
      "Update menu item error:",
      error
    );

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A menu item with this slug already exists"
      });
    }

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const deleteMenuItemController = async (
  req,
  res
) => {
  try {
    const item =
      await deleteMenuItem(
        req.params.id
      );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully"
    });
  } catch (error) {
    console.error(
      "Delete menu item error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete menu item"
    });
  }
};

const toggleAvailabilityController = async (
  req,
  res
) => {
  try {
    const item =
      await toggleMenuAvailability(
        req.params.id
      );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Availability updated successfully",
      data: item
    });
  } catch (error) {
    console.error(
      "Toggle availability error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to update availability"
    });
  }
};

const toggleFeaturedController = async (
  req,
  res
) => {
  try {
    const item =
      await toggleMenuFeatured(
        req.params.id
      );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Featured status updated successfully",
      data: item
    });
  } catch (error) {
    console.error(
      "Toggle featured error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to update featured status"
    });
  }
};

module.exports = {
  getMenuItemsController,
  getMenuItemController,
  createMenuItemController,
  updateMenuItemController,
  deleteMenuItemController,
  toggleAvailabilityController,
  toggleFeaturedController
};