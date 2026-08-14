const mongoose = require("mongoose");
const dotenv = require("dotenv");
const BusinessSettings = require("../models/BusinessSettings");

dotenv.config();

const businessSettings = {
  businessName: "MrBean",

  address:
    "Your Café Address, Noida, Uttar Pradesh",

  phone: "+91 00000 00000",

  whatsapp: "910000000000",

  email: "hello@mrbean.com",

  mapsUrl: "https://maps.google.com/",

  instagramUrl: "#",

  facebookUrl: "",

  coordinates: {
    latitude: 28.6139,
    longitude: 77.2090
  },

  openingHours: [
    {
      day: "Monday",
      hours: "8:00 AM – 10:00 PM"
    },
    {
      day: "Tuesday",
      hours: "8:00 AM – 10:00 PM"
    },
    {
      day: "Wednesday",
      hours: "8:00 AM – 10:00 PM"
    },
    {
      day: "Thursday",
      hours: "8:00 AM – 10:00 PM"
    },
    {
      day: "Friday",
      hours: "8:00 AM – 11:00 PM"
    },
    {
      day: "Saturday",
      hours: "8:00 AM – 11:00 PM"
    },
    {
      day: "Sunday",
      hours: "8:00 AM – 10:00 PM"
    }
  ]
};

const seedBusinessSettings = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await BusinessSettings.deleteMany({});

    await BusinessSettings.create(
      businessSettings
    );

    console.log(
      "Business settings seeded successfully"
    );

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error(
      `Business settings seeding failed: ${error.message}`
    );

    process.exit(1);
  }
};

seedBusinessSettings();