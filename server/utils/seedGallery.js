const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Gallery = require("../models/Gallery");
const GalleryCategory = require("../models/GalleryCategory");

dotenv.config();

const categories = [
  { id: "coffee", label: "Coffee" },
  { id: "interior", label: "Interior" },
  { id: "desserts", label: "Desserts" },
  { id: "workspace", label: "Workspace" },
  { id: "atmosphere", label: "Atmosphere" },
  { id: "library", label: "Library" }
];

const galleryItems = [
  {
    id: "coffee-01",
    title: "Signature Coffee",
    category: "coffee",
    image: "/images/gallery/coffee-1.png",
    size: "large"
  },
  {
    id: "dessert-01",
    title: "Freshly Made",
    category: "desserts",
    image: "/images/gallery/dessert-1.png",
    size: "small"
  },
  {
    id: "workspace-01",
    title: "A Place to Work",
    category: "workspace",
    image: "/images/gallery/workspace-1.png",
    size: "small"
  },
  {
    id: "interior-01",
    title: "Inside MrBean",
    category: "interior",
    image: "/images/gallery/interior-1.png",
    size: "medium"
  },
  {
    id: "atmosphere-01",
    title: "Coffee & Conversation",
    category: "atmosphere",
    image: "/images/gallery/atmosphere-1.png",
    size: "medium"
  },
  {
    id: "library-01",
    title: "Our Reading Corner",
    category: "library",
    image: "/images/gallery/library-1.png",
    size: "small"
  },
  {
    id: "coffee-02",
    title: "Freshly Prepared",
    category: "coffee",
    image: "/images/gallery/coffee-2.png",
    size: "normal"
  },
  {
    id: "interior-02",
    title: "Cozy Interior",
    category: "interior",
    image: "/images/gallery/interior-2.png",
    size: "tall"
  },
  {
    id: "dessert-02",
    title: "Chocolate Dessert",
    category: "desserts",
    image: "/images/gallery/dessert-2.png",
    size: "normal"
  },
  {
    id: "workspace-02",
    title: "Study Space",
    category: "workspace",
    image: "/images/gallery/workspace-2.png",
    size: "tall"
  }
];

const seedGallery = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await GalleryCategory.deleteMany({});
    await Gallery.deleteMany({});

    await GalleryCategory.insertMany(categories);
    await Gallery.insertMany(galleryItems);

    console.log("Gallery categories seeded");
    console.log("Gallery items seeded");

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error(
      `Gallery seeding failed: ${error.message}`
    );

    process.exit(1);
  }
};

seedGallery();