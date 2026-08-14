const Menu = require("../models/Menu");

const getAdminMenuItems = async ({
  search,
  category,
  featured,
  available
} = {}) => {
  const filter = {};

  if (search) {
    filter.$or = [
      {
        name: {
          $regex: search,
          $options: "i"
        }
      },
      {
        description: {
          $regex: search,
          $options: "i"
        }
      }
    ];
  }

  if (category && category !== "all") {
    filter.category = category;
  }

  if (featured !== undefined) {
    filter.featured = featured;
  }

  if (available !== undefined) {
    filter.available = available;
  }

  return await Menu.find(filter).sort({
    createdAt: -1
  });
};

const getAdminMenuItemById = async (id) => {
  return await Menu.findById(id);
};

const createMenuItem = async (menuData) => {
  return await Menu.create(menuData);
};

const updateMenuItem = async (
  id,
  menuData
) => {
  return await Menu.findByIdAndUpdate(
    id,
    menuData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteMenuItem = async (id) => {
  return await Menu.findByIdAndDelete(id);
};

const toggleMenuAvailability = async (
  id
) => {
  const item = await Menu.findById(id);

  if (!item) {
    return null;
  }

  item.available = !item.available;

  return await item.save();
};

const toggleMenuFeatured = async (
  id
) => {
  const item = await Menu.findById(id);

  if (!item) {
    return null;
  }

  item.featured = !item.featured;

  return await item.save();
};

module.exports = {
  getAdminMenuItems,
  getAdminMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  toggleMenuAvailability,
  toggleMenuFeatured
};