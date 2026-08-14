const Gallery = require("../models/Gallery");
const GalleryCategory = require("../models/GalleryCategory");

const getAdminGalleryItems = async ({
  search,
  category,
  active,
  featured
} = {}) => {
  const filter = {};

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i"
    };
  }

  if (
    category &&
    category !== "all"
  ) {
    filter.category = category;
  }

  if (active !== undefined) {
    filter.active = active;
  }

  if (featured !== undefined) {
    filter.featured = featured;
  }

  return await Gallery.find(filter).sort({
    order: 1,
    createdAt: -1
  });
};

const getAdminGalleryItemById = async (
  id
) => {
  return await Gallery.findById(id);
};

const createGalleryItem = async (
  galleryData
) => {
  return await Gallery.create(
    galleryData
  );
};

const updateGalleryItem = async (
  id,
  galleryData
) => {
  return await Gallery.findByIdAndUpdate(
    id,
    galleryData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteGalleryItem = async (id) => {
  return await Gallery.findByIdAndDelete(id);
};

const toggleGalleryActive = async (
  id
) => {
  const item = await Gallery.findById(id);

  if (!item) {
    return null;
  }

  item.active = !item.active;

  return await item.save();
};

const toggleGalleryFeatured = async (
  id
) => {
  const item = await Gallery.findById(id);

  if (!item) {
    return null;
  }

  item.featured = !item.featured;

  return await item.save();
};

const getAdminCategories = async () => {
  return await GalleryCategory.find().sort({
    order: 1
  });
};

const createGalleryCategory = async (
  categoryData
) => {
  return await GalleryCategory.create(
    categoryData
  );
};

const updateGalleryCategory = async (
  id,
  categoryData
) => {
  return await GalleryCategory.findByIdAndUpdate(
    id,
    categoryData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteGalleryCategory = async (
  id
) => {
  return await GalleryCategory.findByIdAndDelete(
    id
  );
};

module.exports = {
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
};