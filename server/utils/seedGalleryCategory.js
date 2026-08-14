const GalleryCategory = require(
  "../models/GalleryCategory"
);

const galleryCategories = [
  {
    name: "Coffee",
    slug: "coffee",
    order: 1
  },
  {
    name: "Interior",
    slug: "interior",
    order: 2
  },
  {
    name: "Desserts",
    slug: "desserts",
    order: 3
  },
  {
    name: "Workspace",
    slug: "workspace",
    order: 4
  },
  {
    name: "Atmosphere",
    slug: "atmosphere",
    order: 5
  },
  {
    name: "Library",
    slug: "library",
    order: 6
  }
];

const seedGalleryCategories = async () => {
  await GalleryCategory.deleteMany({});

  await GalleryCategory.insertMany(
    galleryCategories
  );

  console.log(
    "Gallery categories seeded successfully"
  );
};

module.exports =
  seedGalleryCategories;