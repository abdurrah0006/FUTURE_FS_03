const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Menu = require("../models/Menu");
const MenuCategory = require("../models/MenuCategory");

dotenv.config();

const categories = [
  { id: "coffee", label: "Coffee" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "desserts", label: "Desserts" },
  { id: "food", label: "Food" },
  { id: "breakfast", label: "Breakfast" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "cold-drinks", label: "Cold Drinks" }
];

const menuItems = [
  {
    id: "espresso",
    name: "Espresso",
    category: "coffee",
    description: "Rich and balanced espresso with a smooth finish.",
    price: 120,
    image: "/images/menu/espresso.png",
    featured: true
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    description: "Espresso topped with silky steamed milk and foam.",
    price: 160,
    image: "/images/menu/cappuccino.png",
    featured: true
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    category: "coffee",
    description: "Smooth espresso blended with creamy steamed milk.",
    price: 170,
    image: "/images/menu/latte.png",
    featured: true
  },
  {
    id: "mocha",
    name: "Mocha",
    category: "coffee",
    description: "Espresso, chocolate and steamed milk in one comforting cup.",
    price: 190,
    image: "/images/menu/mocha.png",
    featured: true
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    category: "coffee",
    description: "Chilled espresso with smooth milk over ice.",
    price: 180,
    image: "/images/menu/iced-latte.png",
    featured: false
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    category: "non-coffee",
    description: "Rich chocolate drink finished with creamy milk.",
    price: 160,
    image: "/images/menu/hot-chocolate.png",
    featured: false
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "non-coffee",
    description: "Smooth matcha balanced with creamy steamed milk.",
    price: 190,
    image: "/images/menu/matcha.png",
    featured: true
  },
  {
    id: "cheesecake",
    name: "Classic Cheesecake",
    category: "desserts",
    description: "Creamy cheesecake with a delicate biscuit base.",
    price: 220,
    image: "/images/menu/cheesecake.png",
    featured: true
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "desserts",
    description: "Soft chocolate cake layered with rich chocolate cream.",
    price: 210,
    image: "/images/menu/chocolate-cake.png",
    featured: false
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    category: "food",
    description: "Light, flaky and buttery freshly baked croissant.",
    price: 140,
    image: "/images/menu/croissant.png",
    featured: false
  }
];

const seedMenu = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await MenuCategory.deleteMany({});
    await Menu.deleteMany({});

    await MenuCategory.insertMany(categories);
    await Menu.insertMany(menuItems);

    console.log("Menu categories seeded");
    console.log("Menu items seeded");

    await mongoose.connection.close();

    console.log("Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedMenu();