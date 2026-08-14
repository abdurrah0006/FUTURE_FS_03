const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Review = require("../models/Review");

dotenv.config();

const reviews = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Student",
    rating: 5,
    reviewText:
      "A really comfortable place to study. The coffee is great, the Wi-Fi is fast, and I can easily spend a few hours here.",
    avatar: "/images/reviews/avatar-01.png",
    verified: true,
    featured: true,
    status: "approved"
  },
  {
    id: 2,
    name: "Aarav Mehta",
    role: "Remote Worker",
    rating: 5,
    reviewText:
      "The atmosphere is exactly what I look for in a café. Comfortable seating, good coffee and a peaceful environment.",
    avatar: "/images/reviews/avatar-02.png",
    verified: true,
    featured: true,
    status: "approved"
  },
  {
    id: 3,
    name: "Maya Sharma",
    role: "Coffee Lover",
    rating: 5,
    reviewText:
      "Loved the coffee and desserts. The interior is beautiful and the whole place has such a welcoming atmosphere.",
    avatar: "/images/reviews/avatar-03.png",
    verified: true,
    featured: true,
    status: "approved"
  },
  {
    id: 4,
    name: "Rohan Mehta",
    role: "Student",
    rating: 4,
    reviewText:
      "Good coffee, comfortable seating and fast Wi-Fi. Definitely a good place for students.",
    avatar: "/images/reviews/avatar-04.png",
    verified: true,
    featured: false,
    status: "approved"
  },
  {
    id: 5,
    name: "Sara Khan",
    role: "Coffee Lover",
    rating: 5,
    reviewText:
      "The café has a really warm atmosphere. Perfect for catching up with friends over coffee.",
    avatar: "/images/reviews/avatar-05.png",
    verified: true,
    featured: false,
    status: "approved"
  },
  {
    id: 6,
    name: "Kabir Singh",
    role: "Remote Worker",
    rating: 5,
    reviewText:
      "One of my favourite places to work from. Comfortable seating and the coffee is consistently good.",
    avatar: "/images/reviews/avatar-06.png",
    verified: true,
    featured: false,
    status: "approved"
  },
  {
    id: 7,
    name: "Meera Kapoor",
    role: "Student",
    rating: 4,
    reviewText:
      "Nice ambience and good desserts. Would definitely come back.",
    avatar: "/images/reviews/avatar-07.png",
    verified: true,
    featured: false,
    status: "approved"
  },
  {
    id: 8,
    name: "Rishi Kapoor",
    role: "Student",
    rating: 3,
    reviewText:
      "Nice ambience and good desserts. Would definitely come back.",
    avatar: "/images/reviews/avatar-08.png",
    verified: true,
    featured: false,
    status: "approved"
  }
];

const seedReviews = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Review.deleteMany({});

    await Review.insertMany(reviews);

    console.log("Reviews seeded successfully");

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error(
      `Review seeding failed: ${error.message}`
    );

    process.exit(1);
  }
};

seedReviews();