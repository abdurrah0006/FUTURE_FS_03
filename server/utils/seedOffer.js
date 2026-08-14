const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Offer = require("../models/Offer");

dotenv.config();

const offers = [
  {
    title: "Student Special",
    subtitle: "Good coffee. Better study sessions.",
    description:
      "Students can enjoy a special discount at MrBean. Bring your valid student ID to claim the offer.",
    type: "percentage",
    discountValue: 15,
    code: "STUDENT15",
    image: "/images/offers/student-offer.png",
    targetAudience: "students",
    startDate: null,
    endDate: null,
    featured: true,
    active: true
  },
  {
    title: "Coffee & Dessert Combo",
    subtitle: "Make your coffee break sweeter.",
    description:
      "Enjoy a special combination of selected coffee and dessert items.",
    type: "special",
    discountValue: 0,
    code: "",
    image: "/images/offers/coffee-dessert.png",
    targetAudience: "everyone",
    startDate: null,
    endDate: null,
    featured: false,
    active: true
  }
];

const seedOffers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Offer.deleteMany({});

    await Offer.insertMany(offers);

    console.log("Offers seeded successfully");

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error(
      `Offer seeding failed: ${error.message}`
    );

    process.exit(1);
  }
};

seedOffers();